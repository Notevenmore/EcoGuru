import { View, StyleSheet, Image, Text, ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useEffect, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Info from "../../../assets/images/info.png";
import Protect from "../../../assets/images/protect.png";
import File from "../../../assets/images/file.png";
import Arrow from "../../../assets/images/arrow.png";
import LogoutLogo from "../../../assets/images/logout.png";
import { AuthContext } from "../../../context/auth";

interface UserData {
  username: string;
  role_name: string;
  role: number;
  phone: string;
}

export default function Profile({navigation}: any) {
  const [data, setData] = useState<UserData>();
  const [isLoading, setIsLoading] = useState(true);
  const {isLogin, setIsLogin} = useContext(AuthContext);

  useEffect(() => {
    if (!data) {
      const getData = async () => {
        const userAsyncData = await AsyncStorage.getItem("user");
        if (userAsyncData) {
          setData(JSON.parse(userAsyncData));
          setIsLoading(false);
        } else setIsLogin(false);
      };
      getData();
    }
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("user");
    setIsLogin(false);
    navigation.navigate("auth", {screen: "Login"});
  };

  if (isLoading)
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flexGrow: 1 }}>
        <ActivityIndicator size={90} color="#236152" />
      </View>
    );
  else
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Image source={require("../../../assets/images/foto-orang.png")} style={{ width: 184, height: 184, borderRadius: 184, borderColor: "black", borderWidth: 1 }} />
          {data && (
            <View style={styles.profileData}>
              <Text style={{ fontFamily: "PlusJakartaSans", fontSize: 20, fontWeight: "700", marginBottom: 8, color: "#EDF5C4" }}>{data.username}</Text>
              <Text style={{ fontFamily: "PlusJakartaSans", fontSize: 20, fontWeight: "700", color: "#EDF5C4", marginBottom: 16 }}>{data.phone.match(/.{1,4}/g)?.join("-")}</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Ubah Profil")}>
                <Text style={{ fontFamily: "PlusJakartaSans", fontSize: 14, fontWeight: "700", color: "#236152", backgroundColor: "#C5E642", borderRadius: 44, width: 107, height: 34, paddingHorizontal: 16, paddingVertical: 8 }}>
                  Ubah Profil
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={{paddingHorizontal: 30, gap: 10}}>
          <View style={styles.submenu}>
            <View style={styles.titleLogo}>
              <Image source={Info} style={{width: 28, height: 28}}/>
              <Text style={{ fontSize: 16, fontWeight: "700", fontFamily: "PlusJakartaSans", color: "black" }}>Panduan</Text>
            </View>
            <Image source={Arrow} />
          </View>
          <View style={styles.submenu}>
            <View style={styles.titleLogo}>
              <Image source={Protect} style={{width: 28, height: 28}} />
              <Text style={{ fontSize: 16, fontWeight: "700", fontFamily: "PlusJakartaSans", color: "black" }}>Kebijakan Privasi</Text>
            </View>
            <Image source={Arrow} />
          </View>
          <View style={styles.submenu}>
            <View style={styles.titleLogo}>
              <Image source={File} style={{width: 28, height: 28}} />
              <Text style={{ fontSize: 16, fontWeight: "700", fontFamily: "PlusJakartaSans", color: "black"  }}>Syarat dan Ketentuan</Text>
            </View>
            <Image source={Arrow} />
          </View>
          <TouchableOpacity onPress={handleLogout} style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 20 }}>
            <View style={styles.titleLogo}>
              <Image source={LogoutLogo} style={{width: 28, height: 28}} />
              <Text style={{ fontSize: 16, width: 100, height: 28, fontWeight: "700", fontFamily: "PlusJakartaSans", color: "#DA4453" }}>Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    gap: 42,
    backgroundColor: "white",
    flex: 1,
  },
  heading: {
    paddingHorizontal: 88,
    height: 416,
    gap: 16,
    backgroundColor: "#236152",
    alignItems: "center",
    justifyContent: "center",
    borderEndEndRadius: 40,
    borderStartEndRadius: 40,
  },
  profileData: {
    justifyContent: "center",
    alignItems: "center",
  },
  submenu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    paddingHorizontal: 12,
    height: 48,
  },
  titleLogo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    height: 108,
  },
  loading: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 100,
  },
});

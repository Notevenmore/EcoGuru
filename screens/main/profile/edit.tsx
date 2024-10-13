import { View, StyleSheet, Image, Text, ActivityIndicator, TouchableOpacity, TextInput } from "react-native";
import { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../../context/auth";

interface UserData {
  username: string;
  role_name: string;
  role: number;
  phone: string;
}

export default function EditProfile({navigation}: any) {
  const [data, setData] = useState<UserData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
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
        </View>
        {data && (
          <View style={{ gap: 64, paddingHorizontal: 20 }}>
            <View style={{ gap: 8 }}>
              <Text style={{ fontWeight: "700", fontFamily: "PlusJakartaSans", fontSize: 16 }}>Nama Anda</Text>
              <TextInput
                placeholder="Masukkan Nama"
                style={styles.inputField}
                defaultValue={data.username}
                onChangeText={(newName) => {
                  setData({ ...data, username: newName });
                }}
                placeholderTextColor={"black"}
              />
            </View>
            <View style={{ gap: 8 }}>
              <Text style={{ fontWeight: "700", fontFamily: "PlusJakartaSans", fontSize: 16 }}>Nomor Handphone</Text>
              <TextInput
                placeholder="Masukkan Nomor Handphone"
                style={styles.inputField}
                defaultValue={data.phone}
                onChangeText={(newPhoneNumber) => {
                  setData({ ...data, phone: newPhoneNumber });
                }}
                placeholderTextColor={"black"}
              />
            </View>
            <TouchableOpacity onPress={(e) => {
              e.preventDefault();
              navigation.navigate("ChangeUserPassword");
            }}>
              <View style={{ gap: 8 }}>
                <Text style={{ fontWeight: "700", fontFamily: "PlusJakartaSans", fontSize: 16 }}>Password</Text>
                <TextInput placeholder="Masukkan Password" style={styles.inputField} defaultValue={"xxxxxxxxxxx"} secureTextEntry={true} placeholderTextColor={"black"} />
              </View>
            </TouchableOpacity>
          </View>
        )}
        <View style={{ gap: 14, paddingHorizontal: 20, height: 250, justifyContent: "flex-end" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <View style={{ backgroundColor: "#236152", height: 49, paddingHorizontal: 14, alignItems: "center", justifyContent: "center", borderRadius: 8 }}>
              <Text style={{ fontWeight: "700", fontSize: 14, fontFamily: "PlusJakartaSans", color: "white" }}>Simpan</Text>
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
    alignItems: "center",
    justifyContent: "center",
    height: 256,
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#9B9B9B",
    height: 49,
    paddingHorizontal: 18,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    fontFamily: "PlusJakartaSans",
    fontWeight: "600",
    fontSize: 14,
    color: "black",
  },
  loading: {},
});

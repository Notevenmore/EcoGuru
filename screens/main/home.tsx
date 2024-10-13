import { View, StyleSheet, Image, Text, ActivityIndicator } from "react-native";
import { useContext, useEffect, useState } from "react";
import logo from "../../assets/images/favicon.png";
import arrow from "../../assets/images/arrow_home.png";
import arrow2 from "../../assets/images/arrow.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../context/auth";

interface UserData {
  username: string;
  role_name: string;
  role: number;
  phone: string;
}

export default function Home({navigation}: any) {
  const [data, setData] = useState<UserData>();
  const [isLoading, setIsLoading] = useState(true);
  const {isLogin, setIsLogin} = useContext(AuthContext);

  useEffect(() => {
    if (!data) {
      const getData = async () => {
        const userAsyncData = await AsyncStorage.getItem("user");
        if (userAsyncData) setData(JSON.parse(userAsyncData));
        else setIsLogin(false);
        setIsLoading(false);
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
        <View style={{ position: "absolute", top: 0, right: 0, left: 0, minHeight: 312 }}>
          <View style={{ backgroundColor: "#236152", minHeight: 292, borderBottomRightRadius: 90, borderBottomLeftRadius: 90, position: "relative" }}></View>
          <View style={{ backgroundColor: "#236152", minHeight: 253, position: "relative", top: -300 }}></View>
        </View>
        <View>
          <Image source={logo} width={76} height={26} />
          <View
            style={{
              marginTop: 12,
              backgroundColor: "white",
              width: 335,
              height: 70,
              borderRadius: 12,
              flexDirection: "row",
              gap: 8,
              paddingVertical: 8,
              paddingHorizontal: 12,
              alignItems: "center",
              shadowColor: "black",
              shadowOpacity: 0.25,
              shadowOffset: { width: 2, height: 2 },
              shadowRadius: 2,
            }}
          >
            <Image source={require("../../assets/images/foto-orang.png")} style={{ borderRadius: 46, width: 46, height: 46 }} />
            {data && (
              <View style={{ flexDirection: "column", gap: 4 }}>
                <Text style={{ fontWeight: "700", fontSize: 14, fontFamily: "PlusJakartaSans", color: "black" }}>Hi, {data.username}</Text>
                <Text style={{ fontWeight: "500", fontSize: 12, fontFamily: "PlusJakartaSans", color: "black" }}>Daur ulang sampah mu sekarang!</Text>
              </View>
            )}
          </View>
          <View
            style={{
              marginTop: 20,
              backgroundColor: "white",
              width: 335,
              height: 120,
              borderRadius: 12,
              flexDirection: "column",
              gap: 8,
              padding: 16,
              shadowColor: "black",
              shadowOpacity: 0.25,
              shadowOffset: { width: 2, height: 2 },
              shadowRadius: 2,
            }}
          >
            <Text style={{ fontWeight: "600", fontSize: 16, color: "black" }}>Saldo</Text>
            <Text style={{ fontWeight: "700", fontSize: 24, color: "black" }}>Rp 1.000.000</Text>
            <View style={{ flexDirection: "row", alignSelf: "flex-end", gap: 8 }}>
              <Text style={{ fontWeight: "600", fontSize: 14, fontFamily: "PlusJakartaSans", color: "black" }}>Cairkan Saldo</Text>
              <Image source={arrow} />
            </View>
          </View>
          <View style={{ width: 330, height: 128, flexDirection: "column", gap: 16, justifyContent: "center", marginTop: 52 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ fontWeight: "700", fontSize: 16, color: "black" }}>Edukasi</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontWeight: "500", fontSize: 10, fontFamily: "Inter", color: "black" }}>Lihat lainnya</Text>
                <Image source={arrow2} style={{ width: 8.3, height: 4.8 }} />
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                width: 330,
                height: 128,
                borderRadius: 12,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 20,
                shadowColor: "black",
                shadowOpacity: 0.25,
                shadowOffset: { width: 3, height: 2 },
                shadowRadius: 2,
                elevation: 100,
              }}
            >
              <Text style={{ fontWeight: "700", fontSize: 14, marginLeft: 16, fontFamily: "PlusJakartaSans", color: "black" }}>Cara Pemilahan Sampah</Text>
              <Image source={require("../../assets/images/tutor.png")} style={{ width: 142, height: 128, borderTopRightRadius: 12, borderBottomRightRadius: 12 }} />
            </View>
            <View style={{ alignItems: "center", alignSelf: "center", flexDirection: "row", gap: 3 }}>
              <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: "#236152" }}></View>
              <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: "#d9d9d9" }}></View>
              <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: "#d9d9d9" }}></View>
              <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: "#d9d9d9" }}></View>
              <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: "#d9d9d9" }}></View>
            </View>
          </View>
          <View style={{ width: 330, height: 128, flexDirection: "column", gap: 16, justifyContent: "center", marginTop: 64 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ fontWeight: "700", fontSize: 16, color: "black" }}>Tutorial</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontWeight: "500", fontSize: 10, fontFamily: "Inter", color: "black" }}>Lihat lainnya</Text>
                <Image source={arrow2} style={{ width: 8.3, height: 4.8 }} />
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                width: 335,
                height: 128,
                borderRadius: 12,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 20,
                shadowColor: "black",
                shadowOpacity: 0.25,
                shadowOffset: { width: 3, height: 2 },
                shadowRadius: 2,
                elevation: 100,
              }}
            >
              <Text style={{ fontWeight: "700", fontSize: 14, marginLeft: 16, fontFamily: "PlusJakartaSans", color: "black" }}>Cara Pemilahan Sampah</Text>
              <Image source={require("../../assets/images/tutor.png")} style={{ width: 142, height: 128, borderTopRightRadius: 12, borderBottomRightRadius: 12 }} />
            </View>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    position: "relative",
    paddingVertical: 64,
    paddingHorizontal: 20,
    alignItems: "center",
  },
});

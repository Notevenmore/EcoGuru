import { useState, useEffect, useContext } from "react";
import { Image, StyleSheet, ScrollView, View, Text, TextInput, SafeAreaView, Dimensions, ActivityIndicator, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { AuthContext } from "../../context/auth";
import Success from "../../assets/images/success.png";
import Failed from "../../assets/images/failed.png";
import LoginImage from "../../assets/images/login.png";
import Hide from "../../assets/images/hide.png";
import See from "../../assets/images/see.png";
import env_data from "../../env_data";

interface Account {
  username: string;
  password: string;
}

export default function Login({navigation}: any) {
  const [data, setData] = useState<Account>({
    username: "",
    password: "",
  });
  const [error, setError] = useState({
    username: { message: "", isError: false },
    password: { message: "", isError: false },
  });
  const [hide, setHide] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [notification, setNotification] = useState<string>("");
  const { setIsLogin } = useContext(AuthContext);

  const handleSubmit = () => {
    let listError = { ...error };

    if (data.username.length < 5 || data.username.length > 10) listError.username = { message: "username harus terdiri dari 5-10 karakter alfanumerik", isError: true };
    else listError.username = { message: "", isError: false };

    if (!/\d/.test(data.password) || !/[a-zA-Z]/.test(data.password)) listError.password = { message: "kata sandi harus mengandung kombinasi angka dan huruf", isError: true };
    else listError.password = { message: "", isError: false };

    setError(listError);
    if (listError.username.isError || listError.password.isError) return;

    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    axios
      .post(env_data.login, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(async (response) => {
        await AsyncStorage.setItem("user", JSON.stringify(response.data.user));
        setIsSuccess(true);
        setNotification(response.data.message);
        setData({
          username: "",
          password: "",
        });
      })
      .catch((error) => {
        if (error.response) {
          setNotification(error.response.data.message);
        } else {
          setNotification("Terjadi kesalahan login, Coba lagi");
        }
      });

    return;
  };

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setIsSuccess(false);
        setNotification("");
        setIsLogin(true);
        navigation.navigate("main", {screens: "Home"});
      }, 2000);
    } else if (notification !== "") {
      setTimeout(() => {
        setNotification("");
      }, 2000);
    }
  }, [isSuccess, notification]);

  if (isLoading)
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flexGrow: 1 }}>
        <ActivityIndicator size={90} color="#236152" />
      </View>
    );
  else if (isSuccess)
    return (
      <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, gap: 43 }}>
        <View style={{ backgroundColor: "#6FD73E", borderRadius: 178, width: 178, height: 178, alignItems: "center", justifyContent: "center" }}>
          <Image source={Success} style={{ width: 100, height: 100 }} />
        </View>
        <Text style={{ color: "black", fontWeight: "700", fontSize: 24, fontFamily: "PlusJakartaSans", textAlign: "center" }}>{notification}</Text>
      </View>
    );
  else if (notification !== "")
    return (
      <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, gap: 43 }}>
        <View style={{ backgroundColor: "white", borderRadius: 178, width: 178, height: 178, alignItems: "center", justifyContent: "center" }}>
          <Image source={Failed} />
        </View>
        <Text style={{ color: "black", fontWeight: "700", fontSize: 24, fontFamily: "PlusJakartaSans", textAlign: "center", alignItems: "center", justifyContent: "center" }}>{notification}</Text>
      </View>
    );
  else
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white", paddingTop: 88 }}>
        <ScrollView contentContainerStyle={styles.scrollViewContent} keyboardShouldPersistTaps="handled">
          <View style={styles.container}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image source={LoginImage} style={{ justifyContent: "center", alignItems: "center" }} />
            </View>
            <View style={styles.header}>
              <Text style={styles.title}>Mulai aksi kamu sekarang</Text>
              <Text style={styles.content}>Masukkan nama dan pasword kamu yang telah terdaftar</Text>
            </View>
            <View style={{ gap: 8 }}>
              <View style={{ gap: 16 }}>
                <View>
                  <TextInput
                    style={styles.form}
                    placeholder="Masukkan Nama"
                    onChangeText={(newText) => {
                      setData({ ...data, username: newText });
                    }}
                    defaultValue={data.username}
                    placeholderTextColor={"black"}
                  />
                  {error.username.isError && <Text style={{ fontFamily: "PlusJakartaSans", fontWeight: "700", fontSize: 12, color: "#E33629", padding: 4 }}>* {error.username.message}</Text>}
                </View>
                <View>
                  <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", position: "relative" }}>
                    <TextInput
                      style={styles.form}
                      placeholder="Masukkan Password"
                      onChangeText={(newText) => {
                        setData({ ...data, password: newText });
                      }}
                      defaultValue={data.password}
                      secureTextEntry={hide}
                      placeholderTextColor={"black"}
                    />
                    <View style={{ position: "absolute", right: 10, width: 40, height: 40, alignItems: "center", justifyContent: "center", zIndex: 10 }}>
                      <TouchableOpacity onPress={() => setHide(!hide)}>{hide ? <Image source={Hide} /> : <Image source={See} />}</TouchableOpacity>
                    </View>
                  </View>
                  {error.password.isError && <Text style={{ fontFamily: "PlusJakartaSans", fontWeight: "700", fontSize: 12, color: "#E33629", padding: 4 }}>* {error.password.message}</Text>}
                </View>
              </View>
            </View>
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Masuk Sekarang</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", gap: 1, alignItems: "center", justifyContent: "center" }}>
              <Text style={{ textAlign: "center", color: "black" }}>Belum punya akun? Daftar di</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={{ textAlign: "center", color: "#0185FF" }}> sini </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    justifyContent: "center",
    flexGrow: 1,
    padding: 20,
  },
  loading: {
    borderColor: "grey",
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  container: {
    gap: 25,
    minHeight: Dimensions.get("window").height - 50,
  },
  header: {
    gap: 12,
  },
  title: {
    color: "black",
    fontWeight: "700",
    fontSize: 16,
    fontFamily: "PlusJakartaSans",
  },
  content: {
    color: "#6d6d6d",
    fontWeight: "600",
    fontSize: 14,
    fontFamily: "PlusJakartaSans",
  },
  form: {
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 16,
    position: "relative",
    flex: 1,
    paddingVertical: 20,
    fontSize: 14,
    fontWeight: "700",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    fontFamily: "PlusJakartaSans",
    maxHeight: 60,
    color: "black",
  },
  button: {
    backgroundColor: "#236152",
    paddingHorizontal: 105,
    paddingVertical: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 14,
    fontFamily: "PlusJakartaSans",
  },
});

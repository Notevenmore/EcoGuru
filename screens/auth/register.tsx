import { useEffect, useState } from "react";
import { Image, StyleSheet, ScrollView, View, Text, TextInput, SafeAreaView, Dimensions, ActivityIndicator, TouchableOpacity } from "react-native";
import axios from "axios";
import validate from "../../helper/validation";
import SuccessNotification from "../../components/notification/success_notification";
import FailedNotification from "../../components/notification/failed_notification";
import RegisterImage from "../../assets/images/register.png";
import Hide from "../../assets/images/hide.png";
import See from "../../assets/images/see.png";
import env_data from "../../env_data";
import Loading from "../../components/loading";

interface Account {
  username: string;
  phone: string;
  password: string;
}

export default function Register({navigation}: any) {
  const [data, setData] = useState<Account>({
    username: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState({
    username: { message: "", isError: false },
    phone: { message: "", isError: false },
    password: { message: "", isError: false },
  });
  const [hide, setHide] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [notification, setNotification] = useState<string>("");

  const handleSubmit = () => {
    let listError = validate(data, "register");

    if(listError) {
      setError(listError);
      return;
    }
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    formData.append("phone", data.phone);
    axios
      .post(env_data.register, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: () => {
          setIsLoading(true);
        }
      })
      .then((response) => {
        setIsLoading(false);
        setIsSuccess(true);
        setNotification(response.data.message);
        setData({
          username: "",
          phone: "",
          password: "",
        });
      })
      .catch((error) => {
        setIsLoading(false);
        if (error.response) {
          setNotification(error.response.data.message);
        } else {
          setNotification("Terjadi kesalahan pada server, selama registrasi. Coba lagi");
        }
      });
  };

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        navigation.navigate("Login");
        setIsSuccess(false);
      }, 2000);
    } else if (notification !== "") {
      setTimeout(() => {
        setNotification("");
      }, 2000);
    }
  }, [isSuccess, notification]);

  if (isLoading) return <Loading />
  else if (isSuccess) return <SuccessNotification notification={notification} />;
  else if (notification !== "") return <FailedNotification notification={notification} />;
  else
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignContent: "center", justifyContent: "center" }}>
        <ScrollView contentContainerStyle={styles.scrollViewContent} keyboardShouldPersistTaps="handled">
          <View style={styles.container}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image source={RegisterImage} style={{ justifyContent: "center", alignItems: "center" }} />
            </View>
            <View style={styles.header}>
              <Text style={styles.title}>Ayo ubah sampah menjadi uang</Text>
              <Text style={styles.content}>Silahkan isi data diri kamu terlebih dahulu sebelum memulai</Text>
            </View>
            <View style={{ gap: 21 }}>
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
                <TextInput
                  style={styles.form}
                  placeholder="Masukkan Nomor HP"
                  onChangeText={(newText) => {
                    setData({ ...data, phone: newText });
                  }}
                  defaultValue={data.phone}
                  placeholderTextColor={"black"}
                />
                {error.phone.isError && <Text style={{ fontFamily: "PlusJakartaSans", fontWeight: "700", fontSize: 12, color: "#E33629", padding: 4 }}>* {error.phone.message}</Text>}
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
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Daftar Sekarang</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", gap: 1, alignItems: "center", justifyContent: "center" }}>
              <Text style={{ textAlign: "center", color: "black" }}>Sudah punya akun? Masuk di</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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
    paddingTop: 44,
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

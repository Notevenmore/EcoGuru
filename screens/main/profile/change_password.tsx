import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Hide from "../../../assets/images/hide.png";
import See from "../../../assets/images/see.png";

interface UserData {
  username: string;
  role_name: string;
  role: number;
  phone: string;
}

export default function ChangeUserPassword({navigation}: any) {
  const [data, setData] = useState<UserData>();
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState({ password: "", confirmPassword: "" });
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState<boolean>(true);

  useEffect(() => {
    if (!data) {
      const getData = async () => {
        const userAsyncData = await AsyncStorage.getItem("user");
        if (userAsyncData) setData(JSON.parse(userAsyncData));
      };
      getData();
    }
  }, []);

  const handleSubmit = () => {
    const errorMessage = { password: "", confirmPassword: "" };
    if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) errorMessage.password = "Kata sandi harus mengandung kombinasi angka dan huruf";
    else errorMessage.password = "";

    if (password !== confirmPassword) errorMessage.confirmPassword = "Konfirmasi kata sandi harus sama";
    else errorMessage.confirmPassword = "";

    setError(errorMessage);
    if (errorMessage.password !== "" || errorMessage.confirmPassword !== "") return;

    navigation.navigate("Profile");
  };
  return (
    <View style={styles.container}>
      <View>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <TextInput
            style={styles.form}
            placeholder="Masukkan Password Baru"
            onChangeText={(newText) => {
              setPassword(newText);
            }}
            defaultValue={password}
            secureTextEntry={hidePassword}
          />
          <View style={{ position: "absolute", right: 10, width: 40, height: 40, alignItems: "center", justifyContent: "center", zIndex: 10 }}>
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>{hidePassword ? <Image source={Hide} /> : <Image source={See} />}</TouchableOpacity>
          </View>
        </View>
        {error.password !== "" && <Text style={{ fontFamily: "PlusJakartaSans", fontWeight: 700, fontSize: 12, color: "#E33629", padding: 4 }}>* {error.password}</Text>}
      </View>
      <View style={{ marginBottom: 409 }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <TextInput
            style={styles.form}
            placeholder="Masukkan Password Baru"
            onChangeText={(newText) => {
              setConfirmPassword(newText);
            }}
            defaultValue={confirmPassword}
            secureTextEntry={hideConfirmPassword}
          />
          <View style={{ position: "absolute", right: 10, width: 40, height: 40, alignItems: "center", justifyContent: "center", zIndex: 10 }}>
            <TouchableOpacity onPress={() => setHideConfirmPassword(!hideConfirmPassword)}>
              {hideConfirmPassword ? <Image source={Hide} /> : <Image source={See} />}
            </TouchableOpacity>
          </View>
        </View>
        {error.confirmPassword !== "" && <Text style={{ fontFamily: "PlusJakartaSans", fontWeight: 700, fontSize: 12, color: "#E33629", padding: 4 }}>* {error.confirmPassword}</Text>}
      </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Simpan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    backgroundColor: "white",
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 36,
  },
  heading: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
    paddingHorizontal: 88,
  },
  textInput: {
    backgroundColor: "#236152",
    height: 49,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  form: {
    backgroundColor: "inherit",
    paddingHorizontal: 16,
    position: "relative",
    flex: 1,
    paddingVertical: 20,
    fontSize: 14,
    fontWeight: "700",
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 1,
    fontFamily: "PlusJakartaSans",
    maxHeight: 60,
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
    fontWeight: 700,
    fontSize: 14,
    fontFamily: "PlusJakartaSans",
  },
});

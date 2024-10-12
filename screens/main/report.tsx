import { View, StyleSheet, Image, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";

export default function Report() {
  return <View style={styles.container}><Text>Halo</Text></View>;
}

const styles = StyleSheet.create({
  container: {
    gap: 42, 
    backgroundColor: "white",
    flex: 1,
  },
  heading: {
    paddingHorizontal: 88,
    paddingTop: 76,
    paddingBottom: 32,
    gap: 16,
    backgroundColor: "#236152",
    alignItems: "center",
    justifyContent: "center",
    borderEndEndRadius: 40,
    borderEndStartRadius: 40,
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
    padding: 12,
  },
  titleLogo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
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

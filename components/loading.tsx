import {View, ActivityIndicator} from "react-native";

export default function Loading () {
    return (
        <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
            <ActivityIndicator size={90} color="#236152" />
        </View>
    );
}
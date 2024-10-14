import {View, Image, Text} from "react-native";
import Notification from "../layouts/notification_layout";
import Success from "../../assets/images/success.png";

export default function SuccessNotification ({notification}: any) {
    return (
        <Notification>
            <View style={{ backgroundColor: "#6FD73E", borderRadius: 178, width: 178, height: 178, alignItems: "center", justifyContent: "center" }}>
                <Image source={Success} style={{ width: 100, height: 100 }} />
            </View>
            <Text style={{ color: "black", fontWeight: "700", fontSize: 24, fontFamily: "PlusJakartaSans", textAlign: "center" }}>{notification}</Text>
        </Notification>
    )
}
import {View} from "react-native";

interface LayoutProps {
    children: React.ReactNode
}

export default function Notification ({children}: LayoutProps) {
    return (
    <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, gap: 43 }}>
        {children}
    </View>
    )
}
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
    return (
        <>
            <StatusBar style="light" />
            <Stack
                initialRouteName="home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#264c59"
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "bold"
                    }
                }}
            />
        </>
    );
}

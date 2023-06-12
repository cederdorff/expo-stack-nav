import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: "Home" }} />
            <Link href={{ pathname: "detail", params: { name: "RACE 🏎️" } }}>Go to Detail Page</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

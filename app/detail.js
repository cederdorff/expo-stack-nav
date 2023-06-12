import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Detail() {
    const router = useRouter();
    const params = useLocalSearchParams();

    function goBack() {
        router.back();
    }

    function updateTitle() {
        router.setParams({ name: "Updated Title 🎉" });
    }

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: params.name
                }}
            />
            <Text onPress={updateTitle}>Update the title</Text>
            <Text onPress={goBack}>Go Back</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center" }
});

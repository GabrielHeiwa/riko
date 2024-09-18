import Button from "@/components/button";
import Container from "@/components/container";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Welcome() {
    const router = useRouter();
    return <SafeAreaView>

        <Container>
            <Text>Welcome</Text>

            <View style={{ paddingVertical: 16 }}></View>

            <Button
                onPress={() => router.back()}
                style={{ backgroundColor: "green" }}
            >
                Voltar
            </Button>
        </Container>
    </SafeAreaView>
}
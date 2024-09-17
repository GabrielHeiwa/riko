import Button from "@/components/button";
import Container from "@/components/container";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";


export default function Welcome() {
    const router = useRouter();
    return <Container>
        <Text>Welcome</Text>

        <View style={{ paddingVertical: 16 }}></View>

        <Button
            onPress={() => router.back()}
            style={{ backgroundColor: "green" }}
        >
            Voltar
        </Button>
    </Container>
}
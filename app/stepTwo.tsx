import Button from "@/components/button";
import Container from "@/components/container";
import Content from "@/components/content";
import Input from "@/components/input";
import InputForm from "@/components/input-form";
import Label from "@/components/label";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";


export default function StepTwo() {
    const router = useRouter();

    return <Container>
        <Content>
            <View
                style={styles.body}
            >
                <View style={styles.progressContainer}>
                    <View style={styles.progress}></View>
                </View>

                <View
                    style={styles.textContainer}
                >
                    <Text
                        style={styles.title}
                    >
                        Personalize sua experiencia
                    </Text>

                    <Text
                        style={styles.subTitle}
                    >
                        Informe abaixo as suas taxas de credito e debito.
                    </Text>
                </View>

                <View
                    style={styles.inputsContainer}
                >
                    <InputForm>
                        <Label>Qual a sua taxa no credito?</Label>
                        <Input
                            placeholder="1.2%"
                            keyboardType="numbers-and-punctuation"
                        />
                    </InputForm>

                    <InputForm>
                        <Label>Qual a sua taxa no debito?</Label>
                        <Input
                            placeholder="2%"
                            keyboardType="numbers-and-punctuation"
                        />
                    </InputForm>
                </View>
            </View>

            <Button
                variant="primary"
                style={styles.footerButton}
                onPress={() => router.push("/welcome")}
            >
                Proximo
            </Button>
        </Content>
    </Container>
};

const styles = StyleSheet.create({
    body: {
        display: "flex",
        rowGap: 41,
        paddingBottom: 16
    },
    inputsContainer: {
        display: "flex",
        rowGap: 16
    },
    title: {
        color: "#1F2024",
        fontFamily: "Inter",
        fontSize: 24,
        fontStyle: "normal",
        fontWeight: "800",
        letterSpacing: .24,
    },
    subTitle: {
        color: "#71727A",
        fontFamily: "Inter",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: 20
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        rowGap: 16,
        justifyContent: "space-between"
    },
    progressContainer: {
        display: "flex",
        minHeight: 8,
        backgroundColor: "#E8E9F1",
        borderRadius: 4,
        width: "100%"
    },
    progress: {
        display: "flex",
        minHeight: 8,
        alignItems: "center",
        alignSelf: "stretch",
        backgroundColor: Colors.light.primary,
        borderRadius: 4,
        width: "50%"
    },
    footerButton: {
        display: "flex",
        minHeight: 48,
        paddingVertical: 12,
        paddingHorizontal: 16,
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        alignSelf: "stretch",
        borderRadius: 12,
        backgroundColor: Colors.light.primary
    }
})
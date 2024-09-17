import Button from "@/components/button";
import Container from "@/components/container";
import Content from "@/components/content";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StepOne() {
    const router = useRouter();

    return <Container>
        <Content>

            <View
                style={styles.container}
            >
                <View
                    style={styles.body}
                >
                    <Text>Image</Text>
                </View>

                <View>
                    <View
                        style={styles.footer}
                    >

                        <View style={styles.dotList}>

                            <View style={{...styles.dot, ...styles.dotEnable}}></View>
                            <View style={{...styles.dot, ...styles.dotDisable}}></View>
                            <View style={{...styles.dot, ...styles.dotDisable}}></View>

                        </View>

                        <View>
                            <Text style={styles.footerText}>
                                Create a prototype in just a few minutes
                            </Text>
                        </View>
                        
                        <View>
                            <Text
                                style={styles.footerSubText}
                            >
                                Enjoy these pre-made components and worry only about creating the best product ever.
                            </Text>
                        </View>

                    </View>

                    <Button
                        variant="primary"
                        style={styles.footerButton}
                        onPress={() => router.replace("/stepTwo")}
                    >
                        Proximo
                    </Button>
                </View>
            </View>


        </Content>
    </Container>
};

const styles = StyleSheet.create({
    container: {
        // backgroundColor: Colors.light.primary,
        // flex: 1,
        width: "100%",
        height: "100%"
    },
    body: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightblue",
        height: "60%"
    },
    footer: {
        display: "flex",
        flexDirection: "column",
        rowGap: 24,
        padding: 24
    },
    dotList: {
        display: "flex",
        flexDirection: "row",
        columnGap: 8
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 24
    },
    dotEnable: {
        backgroundColor: Colors.light.primary,
    },
    dotDisable: {
        backgroundColor: "#1F2024",
        opacity: .1
    },
    footerText: {
        color: "#000",
        fontFamily: "Inter",
        fontSize: 24,
        fontStyle: "normal",
        fontWeight: "800",
        letterSpacing: .24
    },
    footerSubText: { 
        color: "#71727A",
        fontFamily: "Inter",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: 16,
        letterSpacing: .12,
        textAlign: "left",
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
});
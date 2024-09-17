import Button from "@/components/button";
import Container from "@/components/container";
import Content from "@/components/content";
import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

export default function StepOne() {
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

                            <View style={{...styles.dot, ...styles.dotActive}}></View>
                            <View style={{...styles.dot, ...styles.dotDisable}}></View>
                            <View style={{...styles.dot, ...styles.dotDisable}}></View>

                        </View>

                        <View>
                            <Text style={styles.footerText}>
                                Create a prototype in just a few minutes
                            </Text>
                        </View>
                        
                        <View>

                        </View>

                    </View>

                    <Button
                        variant="primary"
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
        borderRadius: 4
    },
    dotActive: {
        backgroundColor: Colors.light.primary,
    },
    dotDisable: {
        backgroundColor: "#1F2024"
    },
    footerText: {
        color: "#000",
        fontFamily: "Inter",
        fontSize: 24,
        fontStyle: "normal",
        fontWeight: "800",
        letterSpacing: .24
    }
});
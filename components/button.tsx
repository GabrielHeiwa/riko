import { PressableProps, Text } from "react-native";
import { Pressable, StyleSheet, View } from "react-native";


type Props = PressableProps & React.RefAttributes<View>;

type ButtonProps = React.PropsWithChildren<Props>;

export default function Button({ children, ...buttonProps }: ButtonProps) {

    return <Pressable
        style={style.container}
        {...buttonProps}
    >
        <Text
            style={style.text}
        >
            {children}
        </Text>
    </Pressable>
}

const style = StyleSheet.create({
    container: {
        display: "flex",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        backgroundColor: "#333"
    },
    text: {
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
        color: "#fff"
    }
})
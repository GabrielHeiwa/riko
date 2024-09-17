import { Colors } from "@/constants/Colors";
import { PressableProps, Text } from "react-native";
import { Pressable, StyleSheet, View } from "react-native";


type Props = { variant?: "primary" | "secondary" | "ghost" } & PressableProps & React.RefAttributes<View>;

type ButtonProps = React.PropsWithChildren<Props>;

export default function Button({ children, variant = "primary", ...buttonProps }: ButtonProps) {

    const style = variants[variant];

    return <Pressable
        {...buttonProps}
        style={{ ...style.container, ...buttonProps.style }}
    >
        <Text
            style={style.text}
        >
            {children}
        </Text>
    </Pressable>
}

const primary = StyleSheet.create({
    container: {
        display: "flex",
        minHeight: 40,
        paddingVertical: 12,
        paddingHorizontal: 16,
        alignItems: "center",
        gap: 8,
        flexShrink: 0,
        borderRadius: 12,
        backgroundColor: Colors.light.primary
    },
    text: {
        fontFamily: "Inter",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "600",
        color: Colors.light.textLight
    }
});

const secondary = StyleSheet.create({
    container: {
        display: "flex",
        minHeight: 40,
        paddingVertical: 12,
        paddingHorizontal: 16,
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        flexShrink: 0,
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: Colors.light.primary
    },
    text: {
        fontFamily: "Inter",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "600",
        color: Colors.light.primary
    }
});

const ghost = StyleSheet.create({
    container: {
        display: "flex",
        minHeight: 40,
        paddingVertical: 12,
        paddingHorizontal: 16,
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        flexShrink: 0,
    },
    text: {
        fontFamily: "Inter",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "600",
        color: Colors.light.primary
    }
});

const variants = {
    primary,
    secondary,
    ghost
};


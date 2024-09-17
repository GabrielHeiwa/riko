import { Colors } from "@/constants/Colors";
import { StyleSheet, TextInput, TextInputBase, TextInputProps } from "react-native";

type Props = TextInputProps;

type InputProps = React.PropsWithChildren<Props>;

export default function Input({ children, ...inputProps }: InputProps) {

    return <TextInput
        {...inputProps}
        style={styles.input}
    >
        {children}
    </TextInput>
}

const styles = StyleSheet.create({
    input: {
        display: "flex",
        minHeight: 48,
        paddingVertical: 12,
        paddingHorizontal: 16,
        gap: 8,
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: Colors.light.primary,

        color: Colors.light.text,
        fontSize: 14,
        lineHeight: 20,
    }
});

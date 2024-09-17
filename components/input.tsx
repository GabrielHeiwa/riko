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
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "#333"
    }
});

import { View, ViewProps } from "react-native"
import { StyleSheet } from "react-native"

type Props = ViewProps;

type InputFormProps = React.PropsWithChildren<Props>;

export default function InputForm({ children, ...inputFormProps }: InputFormProps) {

    return <View
        {...inputFormProps}
        style={styles.inputForm}
    >
        {children}
    </View>
}

const styles = StyleSheet.create({
    inputForm: {
        display: "flex",
        flexDirection: "column",
        rowGap: 8
    }
})
import { StyleSheet, Text, TextProps } from "react-native";

type Props = TextProps;

type LabelProps = React.PropsWithChildren<Props>;

export default function Label({ children, ...labelProps }: LabelProps) {

    return <Text
        {...labelProps}
        style={styles.label}
    >
        {children}
    </Text>
}

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontWeight: "500"
    }
})
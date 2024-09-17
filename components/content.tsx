import { StyleSheet, View, ViewProps } from "react-native";

type Props = ViewProps;

type ContentProps = React.PropsWithChildren<Props>;

export default function Content({ children, ...contentProps }: ContentProps) {
    return <View
        {...contentProps}
        style={styles.content}
    >
        {children}
    </View>
}

const styles = StyleSheet.create({
    content: {
        paddingVertical: 32
    }
})
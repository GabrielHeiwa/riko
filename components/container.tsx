import { StyleSheet } from "react-native";
import { NativeSafeAreaViewProps, SafeAreaView } from "react-native-safe-area-context";

type Props = NativeSafeAreaViewProps;

type ContainerProps = React.PropsWithChildren<Props>;

export default function Container({ children, ...containerProps }: ContainerProps) {

    return <SafeAreaView
        {...containerProps}
        style={styles.container}
    >
        {children}
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 32
    }
})
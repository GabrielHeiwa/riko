import { StyleSheet, View, ViewProps } from "react-native";

type Props = ViewProps;

type FormProps = React.PropsWithChildren<Props>;

export default function Form({ children, ...formProps }: FormProps) {

    return <View
        {...formProps}
        style={style.form}
    >
        {children}
    </View>
}

const style = StyleSheet.create({
    form: {
        display: "flex",
        flexDirection: "column",
        rowGap: 10
    }
})

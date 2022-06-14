import { Pressable, StyleSheet } from "react-native"
import Text from "./Text"
import theme from "../theme"

const styles = StyleSheet.create({
    button: {
        padding: 16,
        backgroundColor: theme.colors.primary,
        borderRadius: 8
    }
})

const Button = ({text, style, ...props}) => (<>
    <Pressable {...props} style={[styles.button, style]}>
        <Text bold white center>{text}</Text>
    </Pressable>
</>)

export default Button
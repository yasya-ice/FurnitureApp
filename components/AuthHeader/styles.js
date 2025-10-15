import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 54
    },

    image: {
        width: 18,
        height: 18
    },

    title: {
        color: colors.blue,
        fontSize: 26,
        fontWeight:'500',
        paddingHorizontal: 16
    }
 }
)

export default styles
import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkGrey,
        borderRadius: 14,
        width: '45%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginBottom: 50
    },
    image: {
        width: 30,
        height: 30
    }
 }
)

export default styles
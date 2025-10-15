import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {

        backgroundColor: colors.blue,
        paddingVertical: 20,
        paddingHorizontal: 8,
        borderRadius: 8,
        width: '75%',
        alignSelf: 'center',
        marginTop: 20,
    },

    title:{

        color: colors.white,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    }

 }
)

export default styles
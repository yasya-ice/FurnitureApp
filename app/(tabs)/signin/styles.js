import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        padding: 0,
    },

    agreeRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    agreeText : {
        color: colors.blue,
        marginHorizontal: 14
    },
    
    agreeTextBold : {
        fontWeight: 'bold'
    },

    button: {
        marginVertical: 20
    },

    footerText:{
        color: colors.blue,
        marginBottom: 56,
        textAlign: 'center'
    },

    footerLink:{
        fontWeight: 'bold'
    }

 }
)

export default styles
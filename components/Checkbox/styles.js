import { colors } from '@/constants/colors';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        marginLeft: 20,
        borderColor: colors.grey,
        borderWidth: 1,
        borderRadius: 4,
        width: 22,
        height: 22,
    },

    innerContainer: {
        backgroundColor: colors.gray,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    checkIcon: {
        width: 12,
        height: 9
    }
 }
)

export default styles;
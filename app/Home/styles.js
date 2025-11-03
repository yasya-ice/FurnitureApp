import { colors } from '@/constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        padding: 24,
        flexDirection: "column",
        borderWidth: 0,
        backgroundColor: colors.white
    },

    list: {
        paddingVertical: 24
    },
    
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.black
    },

    icon : {
        width: 24,
        height: 24,
        tintColor: colors.black
    },

    space: {
        width: 24
    }

});

export default styles;
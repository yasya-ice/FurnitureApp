import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: 20
    },
    item: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginVertical: 8,
        height: 64,
        borderRadius: 4,
        opacity: 1,
    },
    sectionTitle: {
        fontWeight: '500',
        fontSize: 16,
        color: colors.grey,
        marginBottom: 16
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
        width: 26,
        height: 26
    },
    button: {
        paddingVertical: 12,
        marginTop: 16
    }
})

export default styles;
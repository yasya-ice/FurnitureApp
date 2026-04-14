import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        paddingHorizontal: 8,
        paddingTop: 24,
    },
    sectionTitle: {
        fontWeight: '500',
        fontSize: 14,
        color: colors.blue,
        marginBottom: 16
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 8
    },
    uploadContainer: {
        width: 100,
        height: 100,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.grey,
        borderStyle: 'dotted',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },
    uploadCircle: {
        width: 32,
        height: 32,
        borderRadius: 20,
        backgroundColor: colors.lightGrey,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    uploadPlus: {
        color: colors.white,
        fontSize: 28,
        marginTop: -4
    },
    imageRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 8
    },
    imageContainer: {
        flexDirection: 'row',
    },
    delete: {
        width: 24,
        height: 24,
        marginTop: -10,
        marginLeft: -16
    },
    textarea: {
        minHeight: 120,
        paddingTop: 16
    },

     headerContainer: {
        backgroundColor: colors.white
    }
})

export default styles;
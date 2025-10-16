import PropTypes from 'prop-types';
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from './styles';

const AuthHeader = ({title, onBackPress}) => {

    return (
        <View style={styles.container}>
            <Pressable hitSlop={20} onPress={onBackPress}>
                <Image style={styles.image} source={require('../../assets/auth_back.png')}/>
            </Pressable>

            <Text style={styles.title}>{title}</Text>

        </View>

    )
}

AuthHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onBackPress: PropTypes.func.isRequired,
};

export default AuthHeader;
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from "react";
import { Image, Keyboard, KeyboardAvoidingView, Pressable, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { categories } from "../../data/categories";
import { styles } from './styles';

const CreateListing = ({ navigation }) => {
    const [images, setImages] = useState([])
    const [values, setValues] = useState({})

    console.log('values => ', values)

    const goBack = () => {
        navigation.goBack()
    }

    const uploadNewImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
        alert("Permission to access camera roll is required!");
        return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        quality: 1,
    });

    if (!result.canceled) {
        setImages(list => [...list, ...result.assets]);
    }
};


    const onDeleteImage = (image) => {
    setImages(list =>
        list.filter(img => img.uri !== image.uri)
    );
};

    const onChange = (value, key) => {
        setValues((val) => ({...val, [key]: value}))
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{flex: 1}} >
            <View style={styles.container} >
            <KeyboardAvoidingView behavior="position">
            <ScrollView>
            <Header showBack={true} onBackPress={goBack} title="Create a new listing" />
            <View style={styles.container}>
                <Text style={styles.sectionTitle}>Upload photos</Text>
                    <View style={styles.imageRow}>
                    <TouchableOpacity style={styles.uploadContainer} onPress={uploadNewImage}>
                        <View style={styles.uploadCircle}>
                            <Text style={styles.uploadPlus}>+</Text>
                        </View>
                    </TouchableOpacity>
                    {images.map((image) => (
                    <View key={image.fileName} style={styles.imageContainer}>
                        <Image source={{ uri: image.uri }} style={styles.image} />
                        <Pressable hitSlop={20} onPress={() => onDeleteImage(image)}>
                            <Image style={styles.delete} source={require('../../assets/close.png')} />
                        </Pressable>
                    </View>
                ))}
                </View>
                <Input label="Title" placeholder="Listing Title" value={values.title} onChangeText={(v) => onChange(v, 'title')}/>
                <Input label="Category" placeholder="Select the category" value={values.category} onChangeText={(v) => onChange(v, 'category')} type="picker" options={categories}/>
                <Input label="Price" placeholder="Enter price in USD" value={values.price} onChangeText={(v) => onChange(v, 'price')} keyboardType="numeric"/>
                <Input style={styles.textarea} label="Description" placeholder="Tell us more..." value={values.description} onChangeText={(v) => onChange(v, 'description')} multiline/>
                <Button title="Submit"/>
            </View>
            </ScrollView>
            </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default CreateListing;
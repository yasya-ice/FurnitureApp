import React from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FavoriteItem from "../../components/FavoriteItem";
import Header from "../../components/Header/index";
import { products } from "../../data/products";
import { styles } from "./styles";

const Favorites = () => {

    const renderItem = ({item}) => {
        return (
            <FavoriteItem {...item} />
        )
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header title="Favorites"/>
            <FlatList data={products} renderItem={renderItem} keyExtractor={(item) => String(item.id)}/>
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Favorites)
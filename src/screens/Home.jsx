import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import CategoryItem from "../components/CategoryItem";
import { colors } from "../global/colors";
import { useGetCategoriesQuery } from "../services/shopServices";



const Home = ({ navigation, route }) => {
  const { data: categories } = useGetCategoriesQuery()

  return (
    <View style={styles.flatListContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(category, index) => index.toString()}
        data={categories}
        renderItem={({ item, index }) => (
          <CategoryItem category={item} navigation={navigation} index={index} />
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  flatListContainer: {
    width: "100%",
    backgroundColor: colors.green300,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

import React, { useEffect, useState, } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  useWindowDimensions,
} from "react-native";

import { useGetProductByIdQuery } from "../services/shopServices";
import { useDispatch } from "react-redux";
import { addCartItem } from "../features/Cart/CartSlice";
import { colors } from "../global/colors";
import {CustomButton} from "../components/CustomButton"

const ItemDetail = ({ route, navigation }) => {
  const { width, height } = useWindowDimensions();
  const [orientation, setOrientation] = useState("portrait");
  const { productoId: idSelected } = route.params;
  const dispatch = useDispatch();

  const { data: product, error, isLoading } = useGetProductByIdQuery(idSelected);

  useEffect(() => {
    if (width > height) setOrientation("landscape");
    else setOrientation("portrait");
  }, [width, height]);

  const handleAddCart = () => {
    dispatch(addCartItem({ ...product, quantity: 1 }));
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      style={styles.scrollView}
    >
      <CustomButton 
        onPress={() => navigation.goBack()} 
        title="Atrás" 
        source={"https://firebasestorage.googleapis.com/v0/b/sutureactnative.appspot.com/o/logosProductos%2Ficons8-atr%C3%A1s-100.png?alt=media&token=65cb6009-9273-40c8-adad-65bb4e5f8e15"} 
      />
      {product ? (
        <View
          style={
            orientation === "portrait"
              ? styles.mainContainer
              : styles.mainContainerLandscape
          }
        >
          <Image
            source={{ uri: product.thumbnail }}
            style={
              orientation === "portrait" ? styles.image : styles.imageLandscape
            }
            resizeMode="cover"
          />
          <View
            style={
              orientation === "portrait"
                ? styles.textContainer
                : styles.textContainerLandscape
            }
          >
            <Text style={styles.Titulos}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>${product.price}</Text>
            
            <View style={styles.botonCarrito}>
            <CustomButton 
              onPress={handleAddCart}
              title="Agregar al Carrito" 
              source={"https://firebasestorage.googleapis.com/v0/b/sutureactnative.appspot.com/o/logosProductos%2Ficons8-carrito-de-compras-96%20(1).png?alt=media&token=87a52c25-ad33-4106-8473-436b635d2cd1"} 
            />
            </View>
            <View style={styles.separation}></View>
          </View>
          <Image
            source={{ uri: product.images[0] }}
            style={
              orientation === "portrait" ? styles.image : styles.imageLandscape
            }
            resizeMode="cover"
          />
          <View style={styles.separation}></View>
          <Image
            source={{ uri: product.images[1] }}
            style={
              orientation === "portrait" ? styles.image : styles.imageLandscape
            }
            resizeMode="cover"
          />
        </View>
      ) : null}
    </ScrollView>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  botonCarrito: {
    width: "100%",  
    paddingVertical: 10,  
    alignItems: "center",  
  },
  Titulos: {
    color: colors.lilaBlack,
    fontWeight: 'bold',
    textShadowColor: colors.green300,
    fontSize: 50,
  },
  description: {
    color: colors.Black,
    fontWeight: '300',
    textShadowColor: colors.green300,
    fontSize: 30,
  },
  separation: {
    width: "100%",
    height: 50,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
  },
  mainContainerLandscape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    gap: 10,
  },
  image: {
    width: "100%",
    height: 250,
  },
  imageLandscape: {
    width: "45%",
    height: 200,
  },
  textContainer: {
    flexDirection: "column",
  },
  textContainerLandscape: {
    width: "50%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    gap: 10,
  },
  price: {
    textAlign: "right",
    color: colors.green900,
    fontWeight: '300',
    textShadowColor: colors.green300,
    fontSize: 30,
  },
});
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../global/colors";

const OrderItem = ({ order }) => {
  if (!order || !order.items) {
    console.log("Orden o items no disponibles");
    return null;
  }

  const total = order.items.reduce(
    (acc, item) => acc + (item.price * item.quantity),
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.date}>Fecha: {new Date(order.createdAt).toLocaleDateString()}</Text>
      <Text style={styles.total}>Total: ${total}</Text>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  card: {
    height: 100,
    backgroundColor: colors.gray100,
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    width: "70%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  text: {
    fontFamily: "Josefin",
    fontSize: 17,
    color: "black",
  },
  text2: {
    fontFamily: "Josefin",
    fontSize: 19,
    color: "gray",
  },
});
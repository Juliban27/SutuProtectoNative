import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { usePostOrderMutation } from '../services/shopServices';
import CartItem from '../components/CartItem';
import { addOrder } from '../features/Shop/OrderSlice'; 

const Cart = () => {
  const { items: CartData, total } = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const [triggerPostOrder] = usePostOrderMutation();

  const onConfirmOrder = async () => {
    const order = {
      items: CartData,
      user: "mail@mail.com", 
      total,
      createdAt: new Date().toISOString(), 
    };
  
    try {
      const result = await triggerPostOrder(order);
 
      if (result.data) {
        const orderWithId = { ...order, id: result.data.name };
        dispatch(addOrder(orderWithId));
        alert("Orden confirmada!");
      } else {
        alert("Hubo un problema al confirmar la orden");
      }
    } catch (error) {
      console.log("Error al confirmar la orden:", error);
      alert("Ocurrió un error inesperado");
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={CartData}
        renderItem={({ item }) => {
          return <CartItem cartItem={item} />;
        }}
        keyExtractor={(producto) => producto.id}
      />

      <View style={styles.totalContainer}>
        <Pressable onPress={onConfirmOrder}>
          <Text>Confirm Order</Text>
        </Pressable>
        <Text>Total: $ {total}</Text>
      </View>
    </View>
  );
}

export default Cart;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 100,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
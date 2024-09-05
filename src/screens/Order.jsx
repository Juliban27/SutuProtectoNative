import { StyleSheet, Text, View, FlatList } from "react-native";
import OrderItem from "../components/OrderItem";
import { useGetOrdersByUserQuery } from "../services/shopServices";

const Order = () => {
  const { data: OrderData, isLoading } = useGetOrdersByUserQuery("mail@mail.com");

  if (isLoading) {
    return <Text>Loading orders...</Text>;
  }

  if (!OrderData || OrderData.length === 0) {
    return <Text>No orders found.</Text>;
  }


  console.log(OrderData);

  return (
    <View>
      <FlatList
        data={OrderData}
        keyExtractor={(orderItem) => orderItem.id}
        renderItem={({ item }) => <OrderItem order={item} />}
      />
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({});
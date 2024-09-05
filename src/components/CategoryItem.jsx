import { StyleSheet, Text, Pressable, Image } from 'react-native';
import Card from './Card';
import { colors } from '../global/colors';
import { useDispatch } from 'react-redux';
import { setCategorySelected } from '../features/Shop/ShopSlice';

const CategoryItem = ({ category, navigation, index }) => {
  const dispatch = useDispatch();

  const logos = [
    { uri: 'https://firebasestorage.googleapis.com/v0/b/sutureactnative.appspot.com/o/logosProductos%2Ficons8-teclado-100.png?alt=media&token=9f1993b8-9141-4ecf-a56d-b088c94202c1' }, // Teclados
    { uri: 'https://firebasestorage.googleapis.com/v0/b/sutureactnative.appspot.com/o/logosProductos%2Ficons8-rat%C3%B3n-100.png?alt=media&token=da1e29f2-fa44-4407-8781-a30ae225dd83' },   // Ratones
    { uri: 'https://firebasestorage.googleapis.com/v0/b/sutureactnative.appspot.com/o/logosProductos%2Ficons8-monitor-100.png?alt=media&token=1a032bc9-55b5-4bef-9b0b-e473866508ca' }, // Monitores
    { uri: 'https://firebasestorage.googleapis.com/v0/b/sutureactnative.appspot.com/o/logosProductos%2Ficons8-gamepad-100.png?alt=media&token=398f0e0b-2a4a-49cd-81c8-91af676bc30d' }, // Controles
    { uri: 'https://firebasestorage.googleapis.com/v0/b/sutureactnative.appspot.com/o/logosProductos%2Ficons8-gpu-64.png?alt=media&token=ab8c7408-fee5-48a2-bcb6-6f04a5b29de5' },  // Graficas
    { uri: 'https://firebasestorage.googleapis.com/v0/b/sutureactnative.appspot.com/o/logosProductos%2Ficons8-placa-base-100.png?alt=media&token=a9e02125-c951-470f-8af6-73a272221a91' }, // Mother Boards
    { uri: 'https://firebasestorage.googleapis.com/v0/b/sutureactnative.appspot.com/o/logosProductos%2Ficons8-electr%C3%B3nicos-100.png?alt=media&token=fe5ccd40-094a-4c50-b9fe-fb8ad67e4774' }, // Procesadores
    { uri: 'https://firebasestorage.googleapis.com/v0/b/sutureactnative.appspot.com/o/logosProductos%2Ficons8-ram-49.png?alt=media&token=c7fdaab2-992d-4584-939f-b1a80cce6470' },      // Rams
    { uri: 'https://firebasestorage.googleapis.com/v0/b/sutureactnative.appspot.com/o/logosProductos%2Ficons8-psu-32.png?alt=media&token=df79db0b-49c7-4023-a81d-935613fe85c6' },       // PSU
    { uri: 'https://firebasestorage.googleapis.com/v0/b/sutureactnative.appspot.com/o/logosProductos%2Ficons8-recuperaci%C3%B3n-de-datos-100.png?alt=media&token=a993d5c7-ab21-4547-8dff-9d8d16d7e66e' },   // Storage
    { uri: 'https://firebasestorage.googleapis.com/v0/b/sutureactnative.appspot.com/o/logosProductos%2Ficons8-auriculares-60.png?alt=media&token=bfa19fd1-3719-48b5-be84-3161cac61f54' }  // Audífonos
  ];

  const handleNavigate = () => {
    dispatch(setCategorySelected(category));
    navigation.navigate("ItemListCategory", { category });
  };

  return (
    <Card style={styles.cardContainer}>
      <Pressable onPress={handleNavigate} style={styles.pressable}>
        <Image 
          source={logos[index]}  
          style={styles.logo} 
          resizeMode="contain" 
        />
        <Text style={styles.text}>{category}</Text>
      </Pressable>
    </Card>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: colors.white,
    width: 120,  
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,  
    marginBottom: 10,  
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.green900,
  },
});
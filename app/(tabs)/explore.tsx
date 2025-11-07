import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';

const products = [
  {
    id: '1',
    name: 'Nike LeBron 20',
    price: '฿7,800',
    image: require('../../assets/images/lebron-20.png'),
  },
  {
    id: '2',
    name: 'Jordan Luka 2',
    price: '฿4,700',
    image: require('../../assets/images/luka-2.png'),
  },
  {
    id: '3',
    name: 'Puma MB.03',
    price: '฿5,000',
    image: require('../../assets/images/mb-03.png'),
  },
  {
    id: '4',
    name: 'Under Armour Curry 11',
    price: '฿6,190',
    image: require('../../assets/images/curry-11.png'),
  },
];

export default function ExploreScreen() {
  const renderProduct = ({ item }: { item: (typeof products)[0] }) => (
    <View style={styles.productCard}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.productImage} contentFit="contain" />
      </View>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>

      <LinearGradient
        colors={['#007BFF', '#00C6FF']}
        style={styles.addButton}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Ionicons name="add-circle-outline" size={20} color="#FFFFFF" />
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </LinearGradient>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <LinearGradient
        colors={['#0F2027', '#203A43', '#2C5364']}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.title}>Basketball Shoes</Text>
        <TouchableOpacity style={styles.cartButton}>
          <Ionicons name="cart-outline" size={28} color="#FFFFFF" />
        </TouchableOpacity>
      </LinearGradient> */}

      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  cartButton: {
    backgroundColor: '#1E1E1E',
    borderRadius: 50,
    padding: 8,
  },
  productList: {
    padding: 16,
  },
  productCard: {
    flex: 1,
    margin: 8,
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  imageContainer: {
    backgroundColor: '#2C2C2C',
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
  },
  productImage: {
    width: 120,
    height: 120,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: '#B0B0B0',
    marginBottom: 10,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 14,
    width: '100%',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

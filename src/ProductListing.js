import { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import imagePath from "./assets/imagePath";
import Header from "./Components/Header";


const ProductListing = ({ }) => {

    const [productsArr, setproductsArr] = useState([
        {
            id: 1, image: imagePath?.product1,
            title: 'Black Sweatshirt with ....',
            subTitle: 'Jhanvi’s  Brand',
            price: '$120',
        },
        {
            id: 2, image: imagePath?.product2,
            title: 'Line Pattern Black H...',
            subTitle: 'AS’s  Brand',
            price: '$90',
        },

        {
            id: 3, image: imagePath?.product3,
            title: 'Black Sweatshirt with ....',
            subTitle: 'Jhanvi’s  Brand',
            price: '$120',
        },
        {
            id: 4, image: imagePath?.product1,
            title: 'Line Pattern Black H...',
            subTitle: 'AS’s  Brand',
            price: '$90',
        },
    ]);

    const renderItem = ({ item }) => (
        <View>
            <View style={{ margin: 10 }}>

                <Image source={item?.image} />


            </View>

            <View style={{ top: 5, paddingHorizontal: 10, padding: 5, flexDirection: 'row' }}>
                <View>
                    <Text style={{
                        color: '#000',
                        fontSize: 10
                    }}>{item?.title}</Text>
                    <Text style={{
                        color: '#000',
                        fontWeight: 'bold',
                        fontSize: 12,
                        maxHeight: 20,
                    }}>{item?.subTitle}</Text>
                </View>

                <Text
                    style={{
                        color: '#000',
                        fontSize: 10,
                    }}
                >{item?.price}</Text>
            </View>
        </View>



    )

    return (
        <View style={{ flex: 1, }}>

            <FlatList
                data={productsArr}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

        </View>
    );
};

export default ProductListing;
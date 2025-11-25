import { FlatList, Text, View, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import imagePath from "./assets/imagePath";
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import actions from "./redux/actions";


const HomeScreen = ({ navigation }) => {

    const [isLoading, setisLoading] = useState(false)

    const [data, setData] = useState([
        {
            id: 1, image: imagePath?.image1,
            title: 'Low price',
            subTitle: 'High Coziness',
            dis: 'UPTO 50% OFF',
        },
        {
            id: 2, image: imagePath?.image2,
            title: 'Beyoung Presents',
            subTitle: 'Breezy Summer Style',
            dis: 'UPTO 50% OFF',
        },
    ]);

    const [menClothing, setmenClothing] = useState([]);


    useEffect(() => {
        getAllProductsdata();
    }, [])


    const getAllProductsdata = () => {
        setisLoading(true)
        actions
            .getAllProducts()
            .then(res => {
                console.log(res, 'res from api>');
                setisLoading(false);

                setmenClothing(res)
            })
            .catch((err) => {
                setisLoading(false);
            });
    };



    const renderItem = ({ item }) => (

        <View style={{ margin: 10 }}>

            <Image source={item?.image} />

            <View style={{ position: 'absolute', top: 10, gap: 10, padding: 5 }}>
                <Text style={{
                    color: '#fff',
                    fontSize: 10
                }}>{item?.title}</Text>
                <Text style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 12,
                    maxHeight: 20,
                    maxWidth: 60
                }}>{item?.subTitle}</Text>
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 10,
                    }}
                >{item?.dis}</Text>
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 10,
                        maxHeight: 40,
                        textDecorationLine: 'underline'
                    }}
                >{'Explore items'}</Text>
            </View>
        </View>


    )

    const renderMenClothing = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('ProductListing', { item })
            }}
            activeOpacity={0.8}
        >
            <View style={{ margin: 10 }}>

                <Image source={{ uri: item?.image }}
                    style={{ height: 180, width: 180, resizeMode: 'contains' }}
                />

            </View>

            <Text style={{
                fontSize: 14,
                color: '#000',
                fontWeight: 'bold',
                paddingHorizontal: 10,
                maxWidth: 200,
            }}
                numberOfLines={1}
            >
                {item?.title}
            </Text>
        </TouchableOpacity>
    )


    return (
        <View style={{ flex: 1, }}>

            <Header />

            <FlatList
                data={data}
                horizontal
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={{
                    maxHeight: 150
                }}

            />

            <FlatList
                data={menClothing}
                numColumns={2}
                renderItem={renderMenClothing}
                keyExtractor={item => item.id}
                ListHeaderComponent={() => (
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Categories For Men</Text>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <View style={{
                        justifyContent: 'center',
                        alignContent: 'center'
                    }}>
                        {
                            isLoading ?
                                <ActivityIndicator />
                                : <Text>
                                    No product found!
                                </Text>
                        }

                    </View>


                )}
            />
        </View>
    );
};

export default HomeScreen;
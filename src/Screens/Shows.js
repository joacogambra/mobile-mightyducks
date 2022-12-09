import React from 'react'
import { Image, View, StyleSheet, ImageBackground, TouchableOpacity, Text, Pressable, FlatList, TextInput } from 'react-native'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import showActions from '../redux/actions/showActions'
import commentActions from '../redux/actions/commentActions'



export default function Shows({ navigation, route }) {
    const [shouldShow, setShouldShow] = useState(false);
    const hotelId = route.params.id
    let { allShows } = showActions
    let { all } = useSelector(state => state.showReducer)
    let { getComments } = commentActions
    let comments = useSelector(state => state.commentReducer)
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(allShows(hotelId))

    }, [hotelId])
    dispatch(getComments(id))

    console.log(comments)

    return (
        <FlatList
            data={all}
            ItemSeparatorComponent={<View style={{ margin: 10 }} />}
            contentContainerStyle={styles.container}


            renderItem={({ item }) =>

                <View
                    style={styles.cards}

                    // resizeMode='cover'
                    key={item._id}>

                    <View >
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                    <Image
                        source={{ uri: item.photo[0] }}
                        style={styles.hotelsContainer}
                        resizeMode='cover'
                        key={item._id}>

                    </Image>
                    <View>
                        <Text style={styles.text}> {item.description}</Text>
                        <TouchableOpacity

                            onPress={() => dispatch(getComments(item._id))}
                        >
                            <Text style={styles.show} onPress={() => setShouldShow(!shouldShow)}>Comments</Text>
                        </TouchableOpacity>
                        <View>{shouldShow ? (
                            comments[item._id]?.map((post) => {

                                return <View style={styles.comment}>
                                    <View style={styles.user}>
                                        <Image source={{ uri: post.photo[0] }} style={{ width: 25, height: 25 }} />
                                        <Text style={styles.secundaryText}>{post.name}</Text>
                                    </View>
                                    <Text>{post.comment}</Text>

                                </View>
                            })



                        ) : (null)}</View>


                    </View>



                </ View>

            }
            ListEmptyComponent={() => (
                all?.length === 0 ? (<View>
                    <ImageBackground source={require('../../assets/lost.png')}
                        style={styles.hotelsContainer}>
                        <View style={styles.content}>
                            <Text style={styles.text}> No shows for this Hotel yet!</Text>
                        </View>
                    </ImageBackground>
                </View>) : (all)
            )}

        // extraData={Render_Item()}
        // ListFooterComponent={() => (

        //     comments?.map((item) => {

        //         <View style={{
        //             flex: 1,
        //             justifyContent: "flex-end"
        //         }}>
        //             <Image source={{ uri: item.photo }} />
        //             <Text>{item.name}</Text>
        //             <Text style={styles.text}>{item.coment}</Text>

        //         </View>
        //     }))
        // }

        />

    )
}
const styles = StyleSheet.create({

    container: {
        backgroundColor: '#dda0dd',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    hotelsContainer: {
        width: '100%',
        height: 200,
        marginTop: 15,
        marginBottom: 15,
        borderColor: 'white',
        borderWidth: 7,
        borderRadius: 10,

    },
    text: {
        paddingTop: 1,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    content: {

        justifyContent: 'center'
    },
    show: {
        backgroundColor: "indigo",
        width: "50%",
        alignSelf: "center",
        marginTop: 10,
        borderRadius: 30,
        marginBottom: 15,
        color: 'white',
        paddingTop: 1,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    comment: {
        // flexDirection: 'row',
        // justifyContent: 'space-around',
        height: 70,
        width: '100%',
        borderWidth: 1,
        padding: 10,
        color: 'black',
        padding: 10,
        backgroundColor: 'white',
        margin: 7,
        borderRadius: 20,
    },
    user: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    secundaryText: {
        color: '#c71585',
        fontWeight: 'bolder',
        fontSize: 20,
        textAlign: 'center'
    },
})
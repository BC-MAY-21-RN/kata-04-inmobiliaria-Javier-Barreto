import React from 'react'
import { Image, Text, View } from 'react-native';
import styles from './styles.js'

const apartmentCard = (apartmentObj) => {
    const { apartment } = apartmentObj
    const { name, address, roomsN, bathroomsN, surface, rent, stars, fav, img} = apartment

    return (
        <View style={styles.container}>
            <Image source={{uri: img }} style={styles.apartmentImage}/>
            <View style={styles.viewInfo}>
                <Text style={styles.ApartNameText}>{ name }</Text>
            </View>
        </View>
    )
}

export default apartmentCard;
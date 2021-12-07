import React from 'react'
import { Image, Text, View } from 'react-native';
import styles from './styles.js'
import IonIcons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const apartmentCard = (apartmentObj) => {
    const { apartment } = apartmentObj
    const { name, address, roomsN, bathroomsN, surface, rent, stars, fav, img} = apartment

    return (
        <View style={styles.container}>
            <Image source={{uri: img }} style={styles.apartmentImage}/>
            <View style={styles.viewInfo}>
                <Text style={styles.ApartNameText}>{ name }</Text>

                <View style={styles.AddressView}>
                    <IonIcons name="location-outline" size={25} color={"black"} />
                    <Text style={styles.addressText}>{address}</Text>
                </View>

                <View style={styles.RoomInfoView}>
                    <View style={styles.RoomInfo}>
                        <IonIcons name="bed-outline" size={30} color={"gray"}/>
                        <Text>{roomsN}</Text>
                    </View>

                    <View style={styles.RoomInfo}>
                        <MaterialCommunityIcons name="shower" size={30} color={"gray"}/>
                        <Text>{bathroomsN}</Text>
                    </View>

                    <View style={styles.RoomInfo}>
                        <MaterialCommunityIcons name="floor-plan" size={30} color={"gray"}/>
                        <Text>{surface}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default apartmentCard;
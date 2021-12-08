import React from 'react'
import { Image, Text, View } from 'react-native';
import styles from './styles.js'
import IonIcons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import RoomInfo from './ACComponents/RoomInfo.js';

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
                    <RoomInfo icon={"bed-outline"} info={roomsN}/>

                    <RoomInfo icon={"shower"} info={bathroomsN}/>

                    <RoomInfo icon={"floor-plan"} info={surface+"²"} />
                </View>

                <View style={styles.LastInfo}>
                    <Text style={styles.TextRent}>${rent}/m</Text>
                    <IonIcons name={"heart-circle"} size={40} color={"green"} />
                </View>
            </View>
        </View>
    )
}

export default apartmentCard;
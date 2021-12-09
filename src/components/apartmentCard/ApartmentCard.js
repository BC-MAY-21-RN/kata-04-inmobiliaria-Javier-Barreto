import React, {useState} from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles.js'
import IonIcons from 'react-native-vector-icons/Ionicons'
import RoomInfo from './ACComponents/RoomInfo.js';

const apartmentCard = (apartmentObj) => {
    const { apartment } = apartmentObj
    const { name, address, roomsN, bathroomsN, surface, rent, stars, img} = apartment
    const [heart, setHeart] = useState("heart-circle")

    const changeHeart = () =>{
        const temp = (heart=="heart-circle") ? "heart" : "heart-circle"
        console.log(temp)
        setHeart(temp)
    }

    return (
        <View style={styles.container}>
            <View style={styles.viewOther}>
                <Image source={{uri: img }} style={styles.apartmentImage}/>
                <View style={styles.starsView}>
                    <IonIcons name="star" size={15} color={"#F7BC34"}/>
                    <Text>{stars}</Text>
                </View>
            </View>
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
                    <TouchableOpacity onPress={changeHeart}>
                        <IonIcons name={heart} size={38} color={"green"} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default apartmentCard;
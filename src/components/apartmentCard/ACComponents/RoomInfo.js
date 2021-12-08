import React from 'react'
import { Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from '../styles';

const RoomInfo = ({icon, info}) => {
    return (
        <View style={styles.RoomInfo}>
            <MaterialCommunityIcons name={icon} size={30} color={"gray"}/>
            <Text style={styles.RoomInfoText}>{info}</Text>
        </View>
    )
}

export default RoomInfo;
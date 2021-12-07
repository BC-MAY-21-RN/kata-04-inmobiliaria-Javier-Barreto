import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import inmobiliaria from '../models/inmobiliaria.json'
import ApartmentCard from '../components/apartmentCard/ApartmentCard.js'

const MainScreen = () => {

    const renderApartments = inmobiliaria?.map((apartment, index)=>{
        return <ApartmentCard
            key={`Apartment-${index}}`}
            apartment={apartment}
        />
    });

    return (
        <View style={styles.container}>
            <ScrollView>{renderApartments}</ScrollView> 
        </View>
    )
}

export default MainScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        height: 90
    }
})
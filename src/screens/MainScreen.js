import React from 'react'
import { ScrollView, View } from 'react-native'
import inmobiliaria from '../models/inmobiliaria.json'
import ApartmentCard from '../components/apartmentCard/ApartmentCard.js'

const MainScreen = () => {

    const renderApartments = inmobiliaria?.map((apartment, index)=>{
        console.log(apartment)
        return <ApartmentCard
            key={`Apartment-${index}}`}
            apartment={apartment}
        />
    });

    return (
        <View>
            <ScrollView>{renderApartments}</ScrollView>
        </View>
    )
}

export default MainScreen;
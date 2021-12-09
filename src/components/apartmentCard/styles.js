import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#ACC2CB",
        margin: "2%",
        marginLeft: "3%",
        marginRight: "3%",
        borderRadius: 10,
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
    },
    viewOther:{
        alignItems: 'center',
    },
    apartmentImage:{
        width: 120,
        height: 120,
        padding: 5,
        borderRadius: 20,
    },
    starsView:{
        width: "50%",
        backgroundColor: "#FEDC8E",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 20,
        position: 'absolute',
        bottom: "10%",
    },
    viewInfo:{
        marginLeft: "8%",
        width: "60%"
    },
    ApartNameText:{
        fontSize: 18,
        fontWeight: '500',
        color: "#000",
        marginBottom: 5,
    },
    AddressView:{
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center'
    },
    addressText:{
        fontSize: 18,
        fontWeight: '400',
        color: "#6A6A6A",
    },
    RoomInfoView:{
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    RoomInfo:{
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center'
    },
    RoomInfoText:{
        fontSize: 18,
        fontWeight: '500',
        color: "#000",
        marginLeft: 5
    },
    LastInfo:{
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    TextRent:{
        fontSize: 22,
        fontWeight: '500',
        color: "#000",
    }
})

export default styles;
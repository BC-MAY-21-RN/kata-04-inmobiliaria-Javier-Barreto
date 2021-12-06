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
    apartmentImage:{
        width: 110,
        height: 110,
        padding: 5,
        borderRadius: 20,
    },
    viewInfo:{
        marginLeft: "8%",
    },
    ApartNameText:{
        fontSize: 18,
        fontWeight: '500',
        color: "#000"
    }
})

export default styles;
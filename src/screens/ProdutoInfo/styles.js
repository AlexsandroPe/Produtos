import { StyleSheet } from "react-native";
import { Title } from "react-native-paper";

export const Styles = StyleSheet.create({
    productInfoContainer:{ 
        flex: 1,
        // borderWidth: 1,
        padding: 8,
        gap: 20,
    },

    info: {
        flex: 1,
        alignItems: "flex-start",
        gap: 20,
        //  borderWidth: 1,
        //  borderColor: "red",

    }, 

    productImage: {
        height: 410,
        width: 372,
        alignSelf: "center", 
        borderRadius: 8,
    },

    nameAndDescription: { 
        gap: 10,
        // borderWidth: 1,
        width: "100%",
        alignItems: "center"
    }, 
    priceAndIcon: {
        width: "100%",
        flexDirection: "row",
        gap: 20,
        alignItems: "center", 
        justifyContent: "center",
        paddingHorizontal: 20,
    }, 

    product: {
        flex: 1,
        // borderWidth: 1, 
        // borderColor: "purple", 
        gap: 15
    }, 

    description: { 
        fontSize: 18, 
        fontWeight: "400", 
        
    }, 
    title: {
        fontSize: 26, 
        fontWeight: 600,
    }
}) 
import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    cardContainer: {
        width: 180,
        padding: 8,
        borderRadius: 14,
        backgroundColor: "rgb(207, 223, 240)",
        alignItems: "center",
        gap: 13,
        justifyContent: "center",
        elevation: 5
    },
    productInfo: {
        alignItems: "center",
        gap: 20,
    },  

    productTitle: {
        fontSize: 22,
        margin: 0.8
    }, 
    productImage: {
        borderRadius: 14,
        height: 160,
        width: 160
    },
    productPrice: {
        fontSize: 20,
        fontWeight: 600,
        color: "rgb(59, 61, 60)"
    },

    cardButton:{ 
        backgroundColor: "rgb(62, 92, 118)",
        width: 100, 
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },

    cardButtonTitle: {
        color: "rgb(255, 255, 255)",
        fontSize: 16,
        alignSelf: "center"
    }
});
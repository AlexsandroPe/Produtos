import { Button, Image, Text, TouchableOpacity, View } from "react-native";

import { Styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

import { useNavigation } from "@react-navigation/native";

export function ProductCard({
  image,
  activeIcon,
  activeCarrinho,
  price,
  name,
}) {
  const navigation = useNavigation();
  const [liked, setLike] = useState("rgb(0, 0, 0)");
  return (
    <View style={Styles.cardContainer}>
      <View style={Styles.productInfo}>
        <Text style={Styles.productTitle}>{name}</Text>
        <Image style={Styles.productImage} source={image} />
        <Text style={Styles.productPrice}>{price}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          gap: 20,
          alignItems: "center",
        }}>
        <TouchableOpacity
          style={Styles.cardButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("ProductInfo", {productImage: image})}>
          <Text style={Styles.cardButtonTitle}>Ver Mais</Text>
        </TouchableOpacity>

        {activeIcon ? (
          <TouchableOpacity
            onPress={() => {
              liked === "red" ? setLike("rgb(0, 0, 0") : setLike("red");
            }}
            activeOpacity={0.8}>
            <Ionicons name="cart-outline" color={liked} size={33} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

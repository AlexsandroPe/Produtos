import { Ionicons } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react"
import { Styles } from "./styles";
export default function ProductInfoScreen({route}) {

      const [liked, setLike ] = useState("rgb(0, 0, 0)")
  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: 0 }}
      edges={["bottom", "right", "left"]}>
      <View style={Styles.productInfoContainer}>
        <Text style={{ fontSize: 32, fontWeight: "7 00", alignSelf: "center" }}>
          SitUCool
        </Text>
        <View style={Styles.product}>
          <Image
            source={route.params.productImage}
            style={Styles.productImage}
          />

          <View style={Styles.info}>
            <View style={Styles.nameAndDescription}>
              <Text style={Styles.title}>{route.params.productName}</Text>
              <Text style={Styles.description}>
                {route.params.productDescription}
              </Text>
            </View>
            <View style={Styles.priceAndIcon}>
              <Text
                style={{
                  flex: 1,
                  color: "#004B27",
                  fontSize: 26,
                  fontWeight: 600,
                }}>
                  {route.params.productPrice}
              </Text>
              <TouchableOpacity onPress={() => { liked === "red" ? setLike("rgb(0, 0, 0") : setLike("red")}} activeOpacity={0.8}> 
                    <Ionicons name="heart-outline" color={liked} size={33} />
                </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            alignSelf: "center",
            backgroundColor: "#3E5C76",
            width: 350,
            height: 50,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Text style={{ color: "#fff", fontSize: 20 }}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

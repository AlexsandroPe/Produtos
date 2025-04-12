
import { View, Text } from "react-native";
import { ProductCard } from "../../components/ProductCard";
import { SafeAreaView } from "react-native-safe-area-context";

export default function () {
  return (
  
    <SafeAreaView style={{ flex: 1,   backgroundColor: "rgba(178, 201, 209, 0.77)",}}>
      <Text style={{fontSize: 28, fontWeight: "700", alignSelf: "center"}}>SitUCool</Text>
      <View style={{ flex: 1, gap: 20, padding: 10}}>
        
        <Text style={{fontSize: 28, fontWeight: "500"}}>Carrinho</Text>
        
        <ProductCard  name={"Nordic Step"} image={require("../../assets/produtos/cadeiraMato.png")} activeIcon={true} description={"Feita com madeira tailandesa e importada da Tailândia"}  price="R$759,20" />
      </View>
    </SafeAreaView>
  );
}

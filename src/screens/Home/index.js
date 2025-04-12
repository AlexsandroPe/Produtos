import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductCard } from "../../components/ProductCard";

import {Styles} from './styles'

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1,}}>
      <View style={Styles.container}>
        <Text style={{textAlign: "center", fontSize: 32, fontWeight: "600", elevation: 50}}>SitUCool</Text>

        <View style={{ flex: 1, gap: 10 }}>
          <Text style={{marginLeft: 18,fontSize: 32, fontWeight: "400"}}>Produtos</Text>
          <ScrollView style={{ flex: 1, borderRadius: 20}} bounces showsVerticalScrollIndicator={false}>
            <View
              style={{
                flex: 1,
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "center",
                rowGap: 10,
                columnGap: 10,
              }}>




              <ProductCard name={"Noir Slim"} image={require("../../assets/produtos/banquinhoWhite.png")} activeIcon={true} price="R$865,33"/>
              <ProductCard name={"Nordic Step"} image={require("../../assets/produtos/cadeiraMato.png")}  activeIcon={true} price="R$759,20"/>
              <ProductCard name={"Rustico Verde"
} image={require("../../assets/produtos/cadeiraFofaDois.png")} activeIcon={true} price="R$122,56"/>
              <ProductCard name={
"Sunset Queen"} image={require("../../assets/produtos/cadeiraEscritorio.png")} activeIcon={true} price="R$444,90"/>
              <ProductCard name={"Vintage Lord"} image={require("../../assets/produtos/cadeiraAmarela.png")} activeIcon={true} price="R$824,42"/>

              <ProductCard name={"Soft Spin"} image={require("../../assets/produtos/cadeiraExperiente.png")} activeIcon={true} price="R$2.800,00"/>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

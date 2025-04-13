import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductCard } from "../../components/ProductCard";

import { Styles } from "./styles";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={Styles.container}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 32,
            fontWeight: "600",
            elevation: 50,
          }}>
          SitUCool
        </Text>

        <View style={{ flex: 1, gap: 10 }}>
          <Text style={{ marginLeft: 18, fontSize: 32, fontWeight: "400" }}>
            Produtos
          </Text>
          <ScrollView
            style={{ flex: 1, borderRadius: 20 }}
            bounces
            showsVerticalScrollIndicator={false}>
            <View
              style={{
                flex: 1,
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "center",
                rowGap: 10,
                columnGap: 10,
                padding: 8,
              }}>
              <ProductCard
                name={"Banco Álamo"}
                image={require("../../assets/produtos/banquinhoWhite.png")}
                activeIcon={true}
                price="R$865,33"
                description={"Design minimalista em madeira nobre, perfeito para compor ambientes modernos."}
              />
              <ProductCard
                name={"Pampa"}
                image={require("../../assets/produtos/cadeiraMato.png")}
                activeIcon={true}
                price="R$759,20"
                description={"Feita com madeira tailandesa e importada da Tailândia. Inspirado no campo, une simplicidade e charme rústico."}

              />
              <ProductCard
                name={"Valverde"}
                image={require("../../assets/produtos/cadeiraFofaDois.png")}
                activeIcon={true}
                price="R$122,56"
                description={"Estofada com veludo francês e estrutura em madeira de lei, importada da França."}

              />
              <ProductCard
                name={"Cadeira Eclipse"}
                image={require("../../assets/produtos/cadeiraEscritorio.png")}
                activeIcon={true}
                price="R$444,90"
                description={"Elegância e conforto em uma peça com visual moderno e sofisticado."

}

              />
              <ProductCard
                name={"Poltrona Solaris"}
                image={require("../../assets/produtos/cadeiraAmarela.png")}
                activeIcon={true}
                price="R$824,42"
                description={"Estilo clássico e robusto, perfeita para quem busca imponência e conforto"}

              />

              <ProductCard
                name={"Antares"}
                image={require("../../assets/produtos/cadeiraExperiente.png")}
                activeIcon={true}
                price="R$2.800,00"
                description={"Madeira maciça e design retrô, direto da Inglaterra"}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

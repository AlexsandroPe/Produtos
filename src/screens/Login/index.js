import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { Styles } from "./styles";
export default function Login() {
  const [userName, setuserName] = useState("");
  const [nega, setNega] = useState(Boolean);
  const navigation = useNavigation();

  const handleNav = () => {
    navigation.navigate("HomeScreen");
    setuserName("");
  };

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
      <ImageBackground
        source={require("../../assets/loginBG.png")}
        resizeMode="cover"
        style={{ flex: 1 }}>
          
        <View style={Styles.welcomeContainer}>
          <Text style={Styles.welcomeHello}>Olá, {userName}</Text>
          <TextInput
            submitBehavior="blurAndSubmit"
            value={userName.length <= 0 ? "" : { userName }}
            placeholder="Seu nome: "
            style={!nega || userName ? Styles.mainInputNeg : Styles.mainInput}
            placeholderTextColor="#fff"
            onChangeText={(text) => setuserName(text)}
          />
          <TouchableOpacity
            onPress={
             userName.length <= 0
                ? () => {
                    !setNega;
                  }
                : handleNav
            }

            style={Styles.mainButton}>
            <Text style={Styles.mainButtonTitle}>Entrar</Text>
          </TouchableOpacity>
        </View>
 
      </ImageBackground>
    </SafeAreaView>
  );
}

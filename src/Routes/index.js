
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import BottomTabs from "./BottomTab/index"
import Login from "../screens/Login/index"
import ProductInfoScreen from "../screens/ProdutoInfo/index" 
const {Navigator, Screen} = createNativeStackNavigator();
export default function Routes() {
  return(

    <Navigator>
      <Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Screen name="HomeScreen" component={BottomTabs} options={{headerShown: false}}/>
      <Screen name="ProductInfo" component={ProductInfoScreen}/>
    </Navigator>
  )
}
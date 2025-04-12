import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons'

import Home from "../../screens/Home/index";
import LikedProducts from "../../screens/LikedProducts";
import UserProfile from "../../screens/UserProfile";
import ShoppingCart from "../../screens/ShoppingCart";


const { Navigator, Screen } = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "rgb(178, 190, 203)", 
          borderTopStartRadius: 28,       
          borderTopEndRadius: 28,       
          height: 70,
          position: "absolute",
          paddingBottom: 10,
          paddingTop: 20,
        },
        

        tabBarActiveTintColor: "rgb(255, 255, 255)",
        tabBarInactiveTintColor: " rgb(0, 0, 0)"
      }}
      backBehavior="initialRoute">
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="home-outline" color={color} size={28} />;
          },
        }}
      />

      <Screen
        name="shoppingCart"
        component={ShoppingCart}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="cart-outline" size={28} color={color} />
          },
          tabBarBadge: "1",
        }}
      />

      <Screen
        name="LikedProducts"
        component={LikedProducts}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="heart-outline" color={color} size={28} />;
          },
        }}
      />

      <Screen
        name="userAccount"
        component={UserProfile}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="person-outline" color={color} size={28} />;
          },
        }}
      />
    </Navigator>
  );
}

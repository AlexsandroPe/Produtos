import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/Routes/index";

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar style="dark"  />
    </NavigationContainer>
  );
}

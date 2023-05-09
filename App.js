const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import SignupPassword from "./screens/SignupPassword";
import Signup from "./screens/Signup";
import OnboardingScreen from "./screens/OnboardingScreen";
import VerifyNum from "./screens/VerifyNum";
import Login from "./screens/Login";
import Home from "./screens/Home";
import BookVehicle from "./screens/BookVehicle";
import VehicleConfirm from "./screens/VehicleConfirm"
import ConfirmPayment from "./screens/ConfirmPayment"
import Wallet from "./screens/Wallet"
import AddPayment from "./screens/AddPayment"
import AddCard from "./screens/AddCard"
import Customers from "./screens/Customers"
import AddCustomer from "./screens/AddCustomer"

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Inter_regular: require("./assets/fonts/Inter-Regular.ttf"),
    Inter_medium: require("./assets/fonts/Inter-Medium.ttf"),
    Inter_semibold: require("./assets/fonts/Inter-SemiBold.ttf"),
    Inter_bold: require("./assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
            <Stack.Screen name="SignupPassword" component={SignupPassword} options={{ headerShown: false }} />
            <Stack.Screen name="VerifyNum" component={VerifyNum} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="BookVehicle" component={BookVehicle} options={{ headerShown: false }} />
            <Stack.Screen name="VehicleConfirm" component={VehicleConfirm} options={{ headerShown: false }} />
            <Stack.Screen name="ConfirmPayment" component={ConfirmPayment} options={{ headerShown: false }} />
            <Stack.Screen name="Wallet" component={Wallet} options={{ headerShown: false }} />            
            <Stack.Screen name="AddPayment" component={AddPayment} options={{ headerShown: false }} />     
            <Stack.Screen name="AddCard" component={AddCard} options={{ headerShown: false }} />  
            <Stack.Screen name="Customers" component={Customers} options={{ headerShown: false }} />
            <Stack.Screen name="AddCustomer" component={AddCustomer} options={{ headerShown: false }} />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
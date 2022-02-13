import React from "react";

// Third-party
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Home from "src/containers/Home";
import CreatePayment from "src/containers/CreatePayment";
import Transfers from "src/containers/Transfers";
import TransferDetails from "src/containers/TransferDetails";

// Types
import { Transfer } from "src/types/transfers";

export type RootStackParamList = {
  Home: undefined;
  Transfers: undefined;
  TransferDetails: { details: Transfer };
  CreatePayment: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const navigationRef: React.Ref<
  NavigationContainerRef<ReactNavigation.RootParamList>
> = React.createRef();

export function navigate(name: string, params?: any) {
  const navRef: any = navigationRef;
  navRef.current && navRef?.current?.navigate(name, params);
}

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Transfers" component={Transfers} />
        <Stack.Screen
          name="TransferDetails"
          component={TransferDetails}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="CreatePayment"
          component={CreatePayment}
          options={{ title: "Create New Payment" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

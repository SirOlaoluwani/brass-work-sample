import React, { ComponentType } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const MockedNavigator = ({
  component,
  params = {},
}: {
  component: ComponentType<any>;
  params?: Partial<any> | undefined;
}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MockedScreen"
          component={component}
          initialParams={params}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MockedNavigator;

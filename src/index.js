import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import AddTaskScreen from "./screens/AddTaskScreen";
import EditTaskScreen from "./screens/EditTaskScreen";
import ListAllTasks from "./screens/ListAllTasks";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabsNavigation"
          component={TabsNavigation}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="AddTaskScreen"
          component={AddTaskScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
          }}
        /> */}
        <Stack.Screen
          name="EditTaskScreen"
          component={EditTaskScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
          }}
        />
        {/* <Stack.Screen
          name="ListAllTasks"
          component={ListAllTasks}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="EditTaskScreen"
          component={EditTaskScreen}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const tabs = createMaterialBottomTabNavigator();

function TabsNavigation() {
  return (
    <tabs.Navigator>
      <tabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "HomeScreen",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" size={26} />
          ),
        }}
      />
      <tabs.Screen
        name="AddTaskScreen"
        component={AddTaskScreen}
        options={{
          tabBarLabel: "AddTaskScreen",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gamepad-variant-outline" size={26} />
          ),
        }}
      />

      <tabs.Screen
        name="ListAllTasks"
        component={ListAllTasks}
        options={{
          tabBarLabel: "ListAllTasks",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="EditTaskpad-variant-outline"
              size={26}
            />
          ),
        }}
      />
    </tabs.Navigator>
  );
}

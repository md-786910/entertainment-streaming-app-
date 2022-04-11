import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Image, useWindowDimensions } from 'react-native';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();

import { createStackNavigator } from "@react-navigation/stack"
const Stack = createStackNavigator();


// import icons and linaer gradient 
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { LinearGradient } from 'expo-linear-gradient';


// import screen page 
import Home from "./screen/Home"
import Notifications from "./screen/Notifications"
import Ipl from "./screen/Ipl"
import Live from "./screen/Live"
import Movie from "./screen/Movie"
import Song from "./screen/Song"
import WebSeries from "./screen/WebSeries"



// import Stack Page
import Trending from "./stackPage/Trending"
import SalmanKhan from "./stackPage/SalmanKhan"
import LiveTv from "./stackPage/LiveTv"
import HollyWood from "./stackPage/HollyWood"

const StackPage = () => {

  return (
    <Stack.Navigator >
      <Stack.Screen name="Home1" component={DrawerNav} options={{ headerShown: false }} >

      </Stack.Screen>
      <Stack.Screen name="Trending" component={Trending} >

      </Stack.Screen>
      <Stack.Screen name="Tv Show" component={SalmanKhan} >

      </Stack.Screen>
      <Stack.Screen name="Live Tv" component={LiveTv} >

      </Stack.Screen>
      <Stack.Screen name="HollyWood" component={HollyWood} >

      </Stack.Screen>
    </Stack.Navigator>
  )
}

const UserView = () => {
  return (
    <LinearGradient colors={["#121a25", "#211c34", "#661212",]} style={{ height: 200, backgroundColor: 'black', }}>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "column" }}>

        <Image style={{ width: 230, height: 230 }} source={require("./images/logoBack.png")} />

        <Text style={{ color: "white", fontSize: 40, position: "relative", top: -50, color: "#FF8066" }}>
          M TV
        </Text>

      </View>
    </LinearGradient >
  )
}

function CustomDrawer(props) {
  return (
    <View style={{ flex: 1 }}>

      <UserView />

      <DrawerContentScrollView {...props} >
        <DrawerItemList {...props} />

      </DrawerContentScrollView>

      <DrawerItem label={() => <Text style={{ color: 'red', fontSize: 20 }}>Version 1.0.0</Text>} icon={({ color, size }) => <FontAwesome name="home" color="red" size={26} />} />
    </View>
  )
}

// make a drawer navigator

const DrawerNav = () => {

  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  return (
    <Drawer.Navigator initialRouteName="Home"

      screenOptions={{
        drawerStyle: {
          backgroundColor: "rgb(39, 6, 6)"
        },
        headerStyle: {
          backgroundColor: "rgb(39, 6, 6)",

        },
        headerTitleAlign: "center",
        headerTintColor: "white",

        headerRight: () => {
          return (
            <View style={{ flex: 1, flexDirection: "row", alignItems: "center", marginRight: 20 }}>
              <FontAwesome name="share-alt" color="white" size={26} onPress={() => alert("me")} style={{ marginRight: 30 }} />
              <FontAwesome name="search" color="white" size={26} onPress={() => alert("me")} />
            </View>
          )
        },


        drawerLabelStyle: {
          fontSize: 20,
          fontWeight: "bold",
          color: "white"
        },
        drawerType: isLargeScreen ? 'permanent' : 'back',
        drawerActiveTintColor: "red",
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={Home}

        options={{
          drawerIcon: ({ color, size }) => (<FontAwesome name="home" color="white" size={26} />)
        }}

      />

      <Drawer.Screen name="Ipl" component={Ipl}

        options={{
          drawerIcon: ({ color, size }) => (<FontAwesome name="adn" color="white" size={26} />)
        }}

      />

      <Drawer.Screen name="Movie" component={Movie}
        options={{
          drawerIcon: ({ color, size }) => (<FontAwesome name="film" color="white" size={26} />)
        }}

      />
      <Drawer.Screen name="Web Series" component={WebSeries}
        options={{
          drawerIcon: ({ color, size }) => (<FontAwesome name="server" color="white" size={26} />)
        }}

      />

      <Drawer.Screen name="Live" component={Live}
        options={{
          drawerIcon: ({ color, size }) => (<FontAwesome name="life-ring" color="white" size={26} />)
        }}

      />
      <Drawer.Screen name="Song" component={Song}
        options={{
          drawerIcon: ({ color, size }) => (<FontAwesome name="music" color="white" size={26} />)
        }}

      />

      <Drawer.Screen name="Notifications" component={Notifications}
        options={{
          drawerIcon: ({ color, size }) => (<FontAwesome name="bell" color="white" size={26} />)
        }}

      />
    </Drawer.Navigator>
  )
}


export default function App() {

  return (
    <NavigationContainer>
      <StackPage />
    </NavigationContainer>
  );
}

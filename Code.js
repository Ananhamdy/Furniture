import * as React from 'react';
import {Text,TextInput,View,TouchableOpacity,Image,ImageBackground,Dimensions,StyleSheet,Modal,ScrollView,AsyncStorage,LayoutAnimation,Animated} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as ImagePicker  from 'react-native-image-picker';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator , DrawerItems} from 'react-navigation-drawer';
import { SafeAreaView } from "react-native-safe-area-context"
import Const from "../Furniture/Const"
import Welcome from '../Furniture/Welcome'
import Login from '../Furniture/Login'
import Signup from '../Furniture/Signup'
import Home from '../Furniture/Home'
import Setting from '../Furniture/Setting'
import Top from '../Furniture/Top'
import Living from '../Furniture/Living';
import Chairs from '../Furniture/Chairs';
import Livingdetail from '../Furniture/Livingdetail';


import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Checkout from '../Furniture/Checkout';




const Stack = createStackNavigator({
  Home: {
    screen:Welcome,
  },
  Log: {
    screen: Login,
  },
  Sign:{
    screen:Signup,
  },
},
{headerMode:"none"}
);


const Main = createStackNavigator({
  Page: {
    screen:Home,
  
  },
  check:{
    screen:Checkout
  },
  living:{
    screen:Living
  },
  chairs:{
    screen:Chairs
  },
  dtail:{
    screen:Livingdetail
  }

},
{headerMode:"none"}
);


const CustomDrawerContentComponent =(props) =>(
<ScrollView>


<View style={{
  width:'100%',
  height: 250,
marginBottom:20,
  alignItems:'center',
  borderBottomRightRadius:50,
  backgroundColor:"#91a3b0"
}}>
<Image  source={require('../img/girl.jpg')}  style={{marginTop:40,width:100,height:100,borderRadius:100}}/>
<Text style={{fontSize:20,fontWeight:'bold', marginTop:20,color:"#ddd"}}>Anan Hamdy </Text>
<Text style={{fontSize:17, marginTop:20,color:"#ddd"}}> admin1911@gmail.com</Text>

  </View>
<DrawerItems {...props} />

<View style={{flexDirection:'row',flexWrap:'wrap',height:50,marginTop:100,alignItems:'center',
}}>


</View>

</ScrollView>
)


const Drawer= createDrawerNavigator({
  page1:{
    screen:Home,
    navigationOptions:{
      drawerLabel:"Home",
      drawerIcon:({tintColor}) =>(
        <View>
          <FontAwesome5Icon  name="home" size={20} color={tintColor}   />
    
        </View>

      )
    }
  },

  Page2:{
    screen:Setting,
    navigationOptions:{
      drawerLabel:"Settings",
      drawerIcon:({tintColor}) =>(
        <View>
          <FontAwesome5Icon  name="university" size={20} color={tintColor}   />
        </View>
      )  
  }
  },
  page3:{
    screen:Top,
    navigationOptions:{
      drawerLabel:"About us ",
      drawerIcon:({tintColor}) =>(
        <View>
          <FontAwesome5Icon  name="ribbon" size={20} color={tintColor}   />
    
        </View>

      )
    }
  },
  page4:{
    screen:Welcome,
    navigationOptions:{
      drawerLabel:"Log Out ",
      drawerIcon:({tintColor}) =>(
        <View>
          <FontAwesome5Icon  name="long-arrow-alt-left" size={20} color={tintColor}   />
    
        </View>

      )
    }
  }
},
{
 //contentComponent:(props)=> <CustomDrawerContentComponent navigation={this.props.navigation}/>

 contentComponent:CustomDrawerContentComponent
})



export default createAppContainer(
  createSwitchNavigator(
    {
      Stack:Stack,
      Main:Main,
      Drawer:Drawer
    },
 {
  initialRouteName:"Stack"
 }
  )
);

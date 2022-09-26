import * as React from 'react';
import {Text,TextInput,View,TouchableOpacity,Image,ImageBackground,Dimensions,StyleSheet,Modal,ScrollView,AsyncStorage,LayoutAnimation,Animated} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as ImagePicker  from 'react-native-image-picker';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as Const from '../Furniture/Const'

const {width,height} = Dimensions.get("window")

export default class Setting extends React.Component{





render(){
    return(

        <>
<View style={{
    flex:1,
    backgroundColor:'#ddd',
    alignItems:'center',


}}>
<Image source={require("../img/fur.jpg")}
style={{width:width*0.3,height:height*0.15, borderRadius:50 ,marginTop:50,marginBottom:30}}  />
<Text style={{fontStyle:'italic' , fontSize:24, fontWeight:'bold',color:Const.shadow,marginBottom:30}}> INTERIOR DESIGN </Text>

<View style={{width:width*0.96,alignItems:'center',marginLeft:15}}>
<Text style=
{{flexWrap:'wrap',fontSize:19,color:Const.shadow}}>
   Interior Design was founded by Ingvar Kamprad in 1943 and came to life as a mail order catalogue business in the forested town of Älmhult, Sweden. Today, it’s a global home furnishing brand that brings affordability, design and comfort to people all over the world. We may have come a long way since our humble beginnings, but our vision remains the same: to create a better everyday life for the many people. Explore the Interior Design story here, to learn more about our heritage, what drives us today and the ways we seek to positively impact people and planet.


</Text>
</View>


</View>

        </>
    )
}}
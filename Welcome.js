import * as React from 'react';
import {Text,TextInput,View,TouchableOpacity,Image,ImageBackground,Dimensions,StyleSheet,Modal,ScrollView,AsyncStorage,LayoutAnimation,Animated} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as ImagePicker  from 'react-native-image-picker';
import * as Const from '../Furniture/Const'

import { TabView ,SceneMap,TabBar} from 'react-native-tab-view';


const {width,height} = Dimensions.get("window")
export default class Welcome extends React.Component{




    render(){
        return(
            <>
            <View style={{flex:1}}>
                <View style={{
                    width:width,
                    height:height,
                    alignItems:"center",
                    backgroundColor:Const.backgroundColor
                }}
                >

<Image source={require("../img/fur.jpg")}
style={{width:width*0.3,height:height*0.15, borderRadius:50 ,marginTop:100,marginBottom:30}}  />
<Text style={{fontStyle:'italic' , fontSize:24, fontWeight:'bold',color:Const.shadow,marginBottom:40}}> INTERIOR DESIGN </Text>
<TouchableOpacity style={{
    width:width*0.8,
    height:height*0.07,
    borderColor:Const.shadow,
    borderWidth:1,marginBottom:20,
    borderRadius:30,alignItems:"center",justifyContent:"center",
    backgroundColor:Const.maincolor,
}}
onPress={()=>{
this.props.navigation.navigate("Log")
}}>
<Text style={{
    alignItems:"center",
    fontSize:20,
    color:"#ddd"
}}>
LOG IN
</Text>
</TouchableOpacity>
<TouchableOpacity style={{
    width:width*0.8,
    height:height*0.07,
    borderColor:Const.shadow,
    borderWidth:1,
    borderRadius:30,alignItems:"center",justifyContent:"center",
    backgroundColor:Const.maincolor

}}>
<Text style={{
    alignItems:"center",
    fontSize:20,
    color:"#ddd"
}}
onPress={()=>{
    this.props.navigation.navigate("Sign")
    }}
    >
SIGN UP
</Text>
</TouchableOpacity>
</View>
            </View>

            
            </>
        )
    }

}
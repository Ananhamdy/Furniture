import * as React from 'react';
import {Text,TextInput,View,TouchableOpacity,Image,ImageBackground,Dimensions,StyleSheet,Modal,ScrollView,AsyncStorage,LayoutAnimation,Animated} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as ImagePicker  from 'react-native-image-picker';
import * as Const from '../Furniture/Const'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { TabView ,SceneMap,TabBar} from 'react-native-tab-view';

import { DrawerActions} from 'react-navigation-drawer';

const {width,height} = Dimensions.get("window")


export default class Livingdetail extends React.Component{

    constructor(){
        super()
        this.state={
            numbers:[0,1,2,3,4,5,6,7,8,9],
            index:0,
            valid_index:0
        }
    }




plus(){
    let array=this.state.numbers
    let index=this.state.index
    index=(index+ 1)% array.length
this.setState({valid_index:array[index],index:index})
}

minus(){

    let array=this.state.numbers
    let index=this.state.index
    index=(index-1)
    if(index<0){
      index+=array.length
    }
    
    this.setState({valid_index:array[index],index:index})
    
    }

    check(){
        let array=this.state.numbers
        let valid_index=this.state.valid_index
        console.log("300"+ "*" + valid_index +"=") 
    }


render(){
    return(
        <>
        <View style={{flex:1,backgroundColor:"#ddd",}}>
            <View style={{alignItems:'center'}}>
        <Image  source={{uri:"https://i.pinimg.com/474x/f8/68/f5/f868f55bd19d2cd67951a507086e5135.jpg"}} style={{
            width:width*1,height:height*0.6,borderRadius:10,alignSelf:'center'
        }}  />
            </View>
<Text style={{fontSize:20,fontWeight:'bold',color:"grey",marginLeft:10,marginTop:10}}> warm living </Text>
<Text style={{fontSize:14,color:"grey",marginLeft:20}}> Curious about interior design trends for 2021? Check out these predictions for interior design as we enter another decade!!
 </Text>
 <View style={{flexDirection:"row",justifyContent:'space-around',height:150}}>
    <Text style={{fontSize:20,color:"#000",marginTop:19,}}> price :300$</Text>
    
<View style={{flexDirection:"row" ,justifyContent:'space-around',width:90
,backgroundColor:"grey",alignItems:'center',borderRadius:20,height:40,marginTop:17}}>
<TouchableOpacity
onPress={()=>{
this.plus()
}}>
<Icon name='plus' size={10}   />
</TouchableOpacity>
<Text >{this.state.valid_index}</Text>
<TouchableOpacity
onPress={()=>{
    this.minus()
}}>
<Icon name='minus' size={10}   />
</TouchableOpacity>

</View>
<TouchableOpacity 
onPress={()=>{
    if(this.state.valid_index !=0){
        this.props.navigation.navigate("check")

    }
}}
style={{width:130,height:40,borderRadius:20,alignItems:'center',backgroundColor:Const.maincolor,
justifyContent:'center',marginTop:17,marginRight:10}}>
<Text style={{color:"#ddd"}}> Add to cart </Text>
</TouchableOpacity>
 </View>

<View style={{backgroundColor:"#ddd",marginTop:-70,borderRadius:20,flexDirection:'row'}}>
 <Text style={{marginLeft:10,fontSize:17,marginBottom:10}}> total price : </Text>

 {(this.state.valid_index==0) ? (<></>):
  (
   
    <Text style={{
        fontSize:20,
        //alignSelf:'center',
        marginTop:-1,
        marginLeft:5
    }}> 
     
      {300*this.state.valid_index}
     </Text>

  )}




</View>
        </View>
        </>
    )
}


}
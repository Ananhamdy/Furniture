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


export default class Living extends React.Component{

constructor(){
    super()
    this.state={
        living_products:[
            
            {
                name:"modern living",
                image:{uri:"https://i.pinimg.com/474x/f8/68/f5/f868f55bd19d2cd67951a507086e5135.jpg"},
                price:"300$",
                show:true,
                id:0
            },
            {
                name:"savy",
                image:{uri:"https://i.pinimg.com/474x/72/6e/b1/726eb1dee1855c02baa0f96747ec7f8d.jpg"},
                price:"200$",
                show:true,
                id:1


            },
            {
                name:"double merrors",
                image:{uri:"https://i.pinimg.com/474x/45/ab/65/45ab65296dec7b63201ac7e26be51d1e.jpg"},
                price:"220$",
                show:true,
                id:2
            },
            {
                name:"double coach",
                image:{uri:"https://i.pinimg.com/474x/4e/bf/61/4ebf61c8743198419d0c407ea93dbe80.jpg"},
                price:"190$",
                show:true,
                id:3

            },
            {
                name:"living",
                image:{uri:"https://i.pinimg.com/474x/0f/37/c3/0f37c3ea5a726b8fbd70b209adaa35d4.jpg"},
                price:"290$",
                show:true,
                id:4
            },
            {
                name:"living room",
                image:{uri:"https://i.pinimg.com/474x/47/79/d3/4779d3a2e3ca4b992ab58ffe7e1ebacb.jpg"},
                price:"100$",
                show:true,
                id:5
            },
            {
                name:"modern living",
                image:{uri:"https://i.pinimg.com/474x/9c/9b/1e/9c9b1e4b093fd60945e56eed93e559a5.jpg"},
                price:"250$",
                show:true,
                id:6
            },
            {
                name:"gergous livin",
                image:{uri:"https://i.pinimg.com/474x/b9/a6/55/b9a655a8e9421e157141310edb7d2b0e.jpg"},
                price:"200$",
                show:true,
                id:7
            },
            {
                name:"modern",
                image:{uri:"https://i.pinimg.com/474x/61/3d/ad/613dadc0d4988dc92fef57e1ff135592.jpg"},
                price:"300$",
                show:true,
                id:8
            },
            {
                name:"light living",
                image:{uri:"https://i.pinimg.com/474x/6e/6b/a1/6e6ba15a22b3e95c517510ce78066306.jpg"},
                price:"180$",
                show:true,
                id:9
            },
            {
                name:"modern living",
                image:{uri:"https://i.pinimg.com/474x/54/99/13/5499135ac4b5f052d1cffb0c14f95dbf.jpg"},
                price:"1020$",
                show:true,
                id:10
            },
            {
                name:"modern living",
                image:{uri:"https://i.pinimg.com/474x/9c/9b/1e/9c9b1e4b093fd60945e56eed93e559a5.jpg"},
                price:"250$",
                show:true,
                id:11
            },

        ],
        search:""

    }
}


search(search){

    let list=this.state.living_products
    
    
    //operation
    for(let i=0; i<list.length;i++){
    if(list[i].name.includes(search)){
        list[i].show=true
    }else{
        list[i].show=false
    }
    }
    
    this.setState({living_products:list})
    
    }

render(){
    return(
        <>
        
        <View style={{flex:1,backgroundColor:Const.backgroundColor}}>
        <Text style={{fontStyle:'italic' , fontSize:20, fontWeight:'bold',color:Const.shadow,alignSelf:'center',
    marginTop:20}}> INTERIOR DESIGN </Text>
        <View style={{alignItems:'center'}}>
        <TextInput
style={{width:width*0.9,height:40,borderWidth:1,color:'#000',marginTop:25,
borderRadius:20,borderColor:'grey',borderWidth:1,marginBottom:15
}}
value={this.state.search}
onChangeText={(value)=>{
this.setState({search:value})
this.search(value)
}}
placeholder="      search"
placeholderTextColor="grey"
/>
        </View>

        

        <ScrollView>
    <View style={{flexDirection:'row',flexWrap:'wrap',marginLeft:10}}>
    {this.state.living_products.map((items,index) =>(
    items.show ?(
    <TouchableOpacity onPress={()=>{
        if(items.id==0){
            this.props.navigation.navigate("dtail")
        }
    }}>
    <Image source= {items.image} style={{width:100,height:100,borderRadius:10,borderWidth:2,
     marginRight:5,marginLeft:5}}  />
    <View style={{flexDirection:"column",alignItems:'center'}}>
    <Text style={{fontSize:15,color:'grey',marginTop:5}}>{items.name} </Text>
    <Text style={{fontSize:15,color:'grey',marginBottom:5}}>{items.price} </Text>
    </View>
    

    </TouchableOpacity>
):null
     ))}
            </View>

    </ScrollView>
    </View>

        </>
    )
}


}
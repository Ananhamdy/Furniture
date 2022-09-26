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
                image:{uri:"https://i.pinimg.com/474x/3b/bc/20/3bbc2039e27d01158e21e21735b90c63.jpg"},
                price:"300$",
                show:true
            },
            {
                name:"savy",
                image:{uri:"https://i.pinimg.com/474x/e8/27/1e/e8271e0ab22d83a755a526a742436c83.jpg"},
                price:"200$",
                show:true


            },
            {
                name:"double merrors",
                image:{uri:"https://i.pinimg.com/474x/cd/19/63/cd1963fa43aa764e1aa1786ffd812690.jpg"},
                price:"220$",
                show:true
            },
            {
                name:"double coach",
                image:{uri:"https://i.pinimg.com/474x/40/be/42/40be424021d86f52692e312b9b56cb35.jpg"},
                price:"190$",
                show:true
            },
            {
                name:"living",
                image:{uri:"https://i.pinimg.com/474x/5d/a3/36/5da3366a928ad5c13f7084badb9ab740.jpg"},
                price:"290$",
                show:true
            },
            {
                name:"living room",
                image:{uri:"https://i.pinimg.com/474x/cf/75/23/cf75234bb842ff6beb2d31ffec049806.jpg"},
                price:"100$",
                show:true
            },
            {
                name:"modern living",
                image:{uri:"https://i.pinimg.com/474x/e0/2a/12/e02a127eb81ccf19f7cd44efc61fc2df.jpg"},
                price:"250$",
                show:true
            },
            {
                name:"gergous livin",
                image:{uri:"https://i.pinimg.com/474x/9f/82/0d/9f820d2838de1fa651b9e6bf470d379b.jpg"},
                price:"200$",
                show:true
            },
            {
                name:"modern",
                image:{uri:"https://i.pinimg.com/474x/f5/c9/7e/f5c97ea1a4a4950c784876e5d9c5724f.jpg"},
                price:"300$",
                show:true
            },
            {
                name:"light living",
                image:{uri:"https://i.pinimg.com/474x/ef/47/ac/ef47ac8ede16a1cd2110f4f7c3751f16.jpg"},
                price:"180$",
                show:true
            },
            {
                name:"modern living",
                image:{uri:"https://i.pinimg.com/474x/45/50/16/45501622d08daf7160e7dc9e86edb296.jpg"},
                price:"1020$",
                show:true
            },
            {
                name:"modern living",
                image:{uri:"https://i.pinimg.com/474x/88/05/bc/8805bc7ee87bd2f22973039b11c83ec7.jpg"},
                price:"250$",
                show:true
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
    <TouchableOpacity >
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
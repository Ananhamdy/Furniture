import * as React from 'react';
import {Text,TextInput,View,TouchableOpacity,Image,ImageBackground,Dimensions,StyleSheet,Modal,ScrollView,AsyncStorage,LayoutAnimation,Animated} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as ImagePicker  from 'react-native-image-picker';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as Const from '../Furniture/Const'
import { CreditCardInput } from 'react-native-credit-card-input';


const {width,height} = Dimensions.get("window")


export default class Checkout extends React.Component{


    constructor(){
        super()
        this.state={
            name:"",
            email:"",
            phone:""
        }
    }


    
    login(){
        let check_email=this.state.email
        let check_name=this.state.name
        let phone=this.state.phone
    
  // name
  if(check_name.length<8){
    errors_input++
}

    //email
    var errors_input = 0;
    let at_email= check_email.indexOf("@")
    let dot_email=check_email.lastIndexOf(".")
    if(at_email==dot_email || dot_email<at_email){
        errors_input++
    }
    if(check_email.trim().length<6){
        errors_input++
    }
     //phone
     if(phone.length!==11){
        errors_input++
     } 

    
    if(errors_input==0){
        this.props.navigation.navigate("Page")
        }else{
            alert('log in')
        }


}  
 
_onfocus= field => console.log("focusing" , field)
_onchange= field => console.log(JSON.stringify(FormData,null,''))
    render(){
        return(
            <>
            <View style={{flex:1,marginTop:20}}>
<ScrollView>
<View style={{alignItems:'center'}}>
          <Text style={{color:'grey',fontSize:20,fontWeight:'bold',marginBottom:20}}>Check Out</Text>
          </View>
          <TextInput
style={{width:width*0.9,height:50,borderWidth:1,color:'#000',alignSelf:'center',marginTop:30,
borderRadius:9,borderColor:Const.maincolor,borderWidth:1,
}}
value={this.state.name}
onChangeText={(value)=>{
this.setState({name:value})
}}
placeholder=" full name"
placeholderTextColor="#000"
/>
<TextInput
style={{width:width*0.9,height:50,borderWidth:1,color:'#000',alignSelf:'center',marginTop:30,
borderRadius:9,borderColor:Const.maincolor,borderWidth:1,
}}
value={this.state.email}
onChangeText={(value)=>{
this.setState({email:value})
}}
placeholder=" email"
placeholderTextColor="#000"
/>
<TextInput
style={{width:width*0.9,height:50,borderWidth:1,color:'#000',alignSelf:'center',marginTop:30,
borderRadius:9,borderColor:Const.maincolor,borderWidth:1,marginBottom:10
}}
value={this.state.phone}
onChangeText={(value)=>{
this.setState({phone:value})
}}
placeholder=" phone"
placeholderTextColor="#000"
/>
          <CreditCardInput    
            autofocus
            requireName
            requireCVC
            requirePostalCode
            validColor="balack"
            invalidColor="red"
            placeholderColor="darkgrey"
            labelStyle={{color:"black",fontSize:12}}
            inputStyle={{color:"black",fontSize:16}}
            onfocus={this._onfocus}
            onchange={this._onchange}
            
            />
<TouchableOpacity 
style={{
    width:170,height:40,alignItems:'center',backgroundColor:Const.maincolor,
    borderRadius:20,marginTop:30,justifyContent:"center",alignSelf:'center'
}}
onPress={()=>{
    this.login()
}}
><Text style={{color:"#ddd" , fontSize:15,alignSelf:"center",fontWeight:"bold"}}>
Checkout
</Text></TouchableOpacity>
</ScrollView>
          
        </View>



            </>
        )
    }

}
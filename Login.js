import * as React from 'react';
import {Text,TextInput,View,TouchableOpacity,Image,ImageBackground,Dimensions,StyleSheet,Modal,ScrollView,AsyncStorage,LayoutAnimation,Animated} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as ImagePicker  from 'react-native-image-picker';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as Const from '../Furniture/Const'

const {width,height} = Dimensions.get("window")

export default class Login extends React.Component{



constructor(){
    super()
    this.state={
        email:"",
        pass:"",
        security:true,

    }
}

changeSecurity(){
    let secure=this.state.security
    this.setState({security:!secure})
    
    }

login(){
    let check_email=this.state.email
    let check_pass=this.state.pass

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


//pass
if(check_pass.length <8){
    errors_input++
}

if(errors_input==0){
    this.props.navigation.navigate("Main")
    }else{
        alert('sign in')
    }

}

render(){
    return(

        <>
<View style={{
    flex:1,
    backgroundColor:Const.backgroundColor,
    alignItems:'center'


}}>
<Image source={require("../img/fur.jpg")}
style={{width:width*0.3,height:height*0.15, borderRadius:50 ,marginTop:50,marginBottom:30}}  />
<Text style={{fontStyle:'italic' , fontSize:24, fontWeight:'bold',color:Const.shadow,marginBottom:40}}> INTERIOR DESIGN </Text>

<TextInput
style={{width:width*0.9,height:50,borderWidth:1,color:'#000',alignSelf:'center',marginTop:40,
borderRadius:9,borderColor:Const.maincolor,borderWidth:1,
}}
value={this.state.email}
onChangeText={(value)=>{
this.setState({email:value})
}}
placeholder=" email"
placeholderTextColor="#000"
/>
<View style={{width:width*0.9,flexDirection:'row'}}>
<TextInput
style={{width:width*0.9,height:50,borderWidth:1,color:'#000',alignSelf:'center',marginTop:40,
borderRadius:9,borderColor:Const.maincolor,borderWidth:1,
}}
value={this.state.pass}
onChangeText={(value)=>{
this.setState({pass:value})
}}
placeholder='password'
placeholderTextColor="#000"
secureTextEntry={this.state.security}
/>
<TouchableOpacity
onPress={()=>{
  this.changeSecurity()
}}>
<Icon name = {this.state.security? 'eye-slash' :'eye'} size={2} color="#000" style={{marginLeft:-40,marginTop:50}} />
</TouchableOpacity>
</View>

<TouchableOpacity 
style={{
    width:120,height:40,alignItems:'center',backgroundColor:Const.maincolor,
    borderRadius:20,marginTop:30,justifyContent:"center"
}}
onPress={()=>{
    this.login();
    
}}
>
<Text style={{color:"#ddd" , fontSize:15,alignSelf:"center",fontWeight:"bold"}}>
LOGIN
</Text>
</TouchableOpacity>

</View>

        </>
    )
}}
import * as React from 'react';
import {Text,TextInput,View,TouchableOpacity,Image,ImageBackground,Dimensions,StyleSheet,Modal,ScrollView,AsyncStorage,LayoutAnimation,Animated,Permission,PermissionsAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as ImagePicker  from 'react-native-image-picker';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as Const from '../Furniture/Const'
import { DrawerActions} from 'react-navigation-drawer';

const {width,height} = Dimensions.get("window")

export default class Setting extends React.Component{
constructor(){
    super()
    this.state={
        photo_uri:" ",
        photo_data:" ",
        name:"",
        phone:"",
        email:""
    }
}

    componentDidMount(){
        this.requestCameraPermission()
      }

      requestCameraPermission = async () => {
        try {
                const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                  title: "Cool Photo App Camera Permission",
                  message: "Cool Photo App needs access to your camera " + "so you can take awesome pictures.",
                  buttonNeutral: "Ask Me Later",
                  buttonNegative: "Cancel",
                  buttonPositive: "OK"
                });
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                  console.log("You can use the camera");
              } else {
                  console.log("Camera permission denied");
              }
          } catch (err) {
              console.warn(err);
          }
      };
      
      
      selectFromGallery = () => {
      
        let options = {
          storageOptions: {
              skipBackup: true,
              path: 'images',
            },
        };
        ImagePicker.launchImageLibrary({ options, includeBase64: true }, (res) => {
            //console.log('Response = ', res);
      
            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
              console.log('ImagePicker Error: ', res.error);
             } else if (res.customButton) {
              console.log('User tapped custom button: ', res.customButton);
              alert(res.customButton);
            } else {
      
              this.setState({
                  photo_data: res.assets[0],
                  photo_uri: res.assets[0].uri,
                });
            }
        });
      
      }
      launchCamera = () => {
        let options = {
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
        };
        ImagePicker.launchCamera(options, (res) => {
           console.log('Response = ', res);
      
            if (res.didCancel) {
              console.log('User cancelled image picker');
             } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
              } else if (res.customButton) {
              console.log('User tapped custom button: ', res.customButton);
              alert(res.customButton);
            } else {
              this.setState({
                  photo_data: res.assets[0],
                  photo_uri: res.assets[0].uri
              });
            }
        });
      
      }
      


render(){
    return(

        <>
<View style={{
    flex:1,
    backgroundColor:Const.backgroundColor,


}}>
<View style={{alignItems:'center',width:150,height:150,borderColor:"#000",
borderWidth:1,marginTop:20,borderRadius:150,alignSelf:'center'}}>

<Image   source={{uri:this.state.photo_uri}}
style={{width:150,height:150,borderRadius:150,marginBottom:30,
}}
//resizeMode="stretch"
/>
<TouchableOpacity onPress={()=>{this.selectFromGallery()}}
style={{
    width:200,
    height:50,
    alignItems:'center',
    justifyContent:"center",
    borderRadius:20
}}>
  <Icon  name='camera'  size={25} color='#000' style={{marginTop:-150,marginLeft:-100}} />
</TouchableOpacity>

</View>


<View style={{ flexDirection: "row",marginTop:50,marginLeft:20}}>
    <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000", marginRight: 10 }}>
     Name
        </Text>
     <Icon name={"user-alt"} size={20} color={"#000"} />
      </View>
<TextInput
style={{width:width*0.9,height:50,borderWidth:1,color:'#000',alignSelf:'center',marginTop:10,
borderRadius:9,borderColor:Const.maincolor,borderWidth:1,
}}
value={this.state.name}
onChangeText={(value)=>{
this.setState({name:value})
}}
placeholder=" name"
placeholderTextColor="#000"
/>

<View style={{ flexDirection: "row",marginTop:10,marginLeft:20}}>
    <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000", marginRight: 10 }}>
     Phone
        </Text>
     <Icon name={"user-alt"} size={20} color={"#000"} />
      </View>
<TextInput
style={{width:width*0.9,height:50,borderWidth:1,color:'#000',alignSelf:'center',marginTop:10,
borderRadius:9,borderColor:Const.maincolor,borderWidth:1,
}}
value={this.state.phone}
onChangeText={(value)=>{
this.setState({phone:value})
}}
placeholder=" phone"
placeholderTextColor="#000"
/>

<View style={{ flexDirection: "row",marginTop:10,marginLeft:20}}>
    <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000", marginRight: 10 }}>
     Email
        </Text>
     <Icon name={"user-alt"} size={20} color={"#000"} />
      </View>
<TextInput
style={{width:width*0.9,height:50,borderWidth:1,color:'#000',alignSelf:'center',marginTop:10,
borderRadius:9,borderColor:Const.maincolor,borderWidth:1,
}}
value={this.state.email}
onChangeText={(value)=>{
this.setState({email:value})
}}
placeholder=" email"
placeholderTextColor="#000"
/>
<TouchableOpacity 
style={{
    width:120,height:40,alignItems:'center',backgroundColor:Const.maincolor,
    borderRadius:20,marginTop:30,justifyContent:"center",alignSelf:"center"
}}
onPress={()=>{
    this.props.navigation.openDrawer();  
    //this.props.navigation.dispatch(DrawerActions.openDrawer());
}}
>
<Text style={{color:"#ddd" , fontSize:15,alignSelf:"center",fontWeight:"bold"}}>
Save
</Text>
</TouchableOpacity>                  
                    

</View>

        </>
    )
}}
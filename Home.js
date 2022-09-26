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
import { List } from 'react-native-paper';
import { LongPressGestureHandler } from 'react-native-gesture-handler';

const {width,height} = Dimensions.get("window")


export default class Home extends React.Component{

constructor(props){
super(props)
this.state={
    search:'',
catigoris:[
    {
        item:"Living room furniture",
        photo:{uri:"https://i.pinimg.com/474x/fb/ad/9a/fbad9ac41fd6888c73df24fbd0377155.jpg"},
        show:true,
        id:0
    },
    {
        item:"Garden chairs",
        photo:{uri:"https://i.pinimg.com/474x/f1/eb/a7/f1eba7579fd1ebf114a1ca446c7ddecc.jpg"},
        show:true,
        id:1

    },
    {
        item:"Modern ral",
        photo:{uri:"https://i.pinimg.com/474x/17/f4/d6/17f4d65c859f8822ac7a63b73245dfd7.jpg"},
        show:true,
        id:2

    },
    {
        item:"Tables",
        photo:{uri:"https://i.pinimg.com/474x/95/df/e3/95dfe3d041e79dacf3c7ae632b7d7949.jpg"},
        show:true,
        id:3

    },
    {
        item:"Beds",
        photo:{uri:"https://i.pinimg.com/474x/3d/0e/15/3d0e150a88c1b0417ae4936cd6c6db5b.jpg"},
        show:true,
        id:4

    }


]
,products:[
    {
        item:"Living room furniture",
        photo:{uri:"https://i.pinimg.com/474x/fb/ad/9a/fbad9ac41fd6888c73df24fbd0377155.jpg"},
        name: 'coach',
        price:'300 $',
        desc:'Living room interior have tv cabinet',
        show:true

    

    },
    {
        item:"Garden chairs",
        photo:{uri:"https://i.pinimg.com/474x/f1/eb/a7/f1eba7579fd1ebf114a1ca446c7ddecc.jpg"},
        name:'chair',
        price:'190 $',
        desc:'Living room interior have tv cabinet',
        show:true



    },
    {
        item:"Modern ral",
        photo:{uri:"https://i.pinimg.com/474x/17/f4/d6/17f4d65c859f8822ac7a63b73245dfd7.jpg"},
        name:'ral',
        price:'200 $',
        desc:'Living room interior have tv cabinet',
        show:true



    },
    {
        item:"Tables",
        photo:{uri:"https://i.pinimg.com/474x/95/df/e3/95dfe3d041e79dacf3c7ae632b7d7949.jpg"},
        name:'table',
        price:'150$',
        desc:'Living room interior have tv cabinet',
        show:true



    },
    {
        item:"Beds",
        photo:{uri:"https://i.pinimg.com/474x/3d/0e/15/3d0e150a88c1b0417ae4936cd6c6db5b.jpg"},
        name:'bed ',
        price:'100$',
        desc:'Living room interior have tv cabinet',
        show:true


    },
    {
        item:"Beds",
        photo:{uri:"https://i.pinimg.com/474x/91/fd/35/91fd3509035d0774a633c3ecafcaf2e3.jpg"},
        name:'bed ',
        price:'100$',
        desc:'Living room interior have tv cabinet',        show:true


    },
    {
        item:"Beds",
        photo:{uri:"https://i.pinimg.com/474x/70/10/1a/70101a8dfac6d14c6683df6ec1b04473.jpg"},
        name:'bed ',
        price:'100$',
        desc:'Living room interior have tv cabinet',
        show:true


    },
    {
        item:"Beds",
        photo:{uri:"https://i.pinimg.com/474x/4c/69/c1/4c69c1ca0972ac092ff45661df7fd9b8.jpg"},
        name:'bed ',
        price:'100$',
        desc:'Living room interior have tv cabinet',
        show:true


    },
    {
        item:"Beds",
        photo:{uri:"https://i.pinimg.com/474x/6e/6b/a1/6e6ba15a22b3e95c517510ce78066306.jpg"},
        name:'bed ',
        price:'100$',
        desc:'Living room interior have tv cabinet',
        show:true


    },
    {
        item:"Beds",
        photo:{uri:"https://i.pinimg.com/474x/3e/2b/65/3e2b65e3951015c225a5c316c69cc38f.jpg"},
        name:'bed ',
        price:'100$',
        desc:'Living room interior have tv cabinet',
        show:true


    },{
        item:"Beds",
        photo:{uri:"https://i.pinimg.com/474x/45/d4/6a/45d46aeb46abd6cad7298b2b202596f8.jpg"},
        name:'chair ',
        price:'100$',
        desc:'Living room interior have tv cabinet',
        show:true


    },{
        item:"Beds",
        photo:{uri:"https://i.pinimg.com/474x/6d/7c/55/6d7c55581da7be18166ed94a8e3bdb80.jpg"},
        name:'coach ',
        price:'100$',
        desc:'Living room interior have tv cabinet',
        show:true


    },{
        item:"Beds",
        photo:{uri:"https://i.pinimg.com/474x/3f/7a/5f/3f7a5f5e1c766275f7269106bea41079.jpg"},
        name:'modern bed ',
        price:'100$',
        desc:'Living room interior have tv cabinet',
        show:true


    },{
        item:"Beds",
        photo:{uri:"https://i.pinimg.com/474x/f8/68/f5/f868f55bd19d2cd67951a507086e5135.jpg"},
        name:'modern living',
        price:'100$',
        desc:'Living room interior have tv cabinet',
        show:true


    },

]


}
}


search(catigorissearch){

let cati=this.state.catigoris


//operation
for(let i=0; i<cati.length;i++){
if(cati[i].item.includes(catigorissearch)){
    cati[i].show=true
}else{
    cati[i].show=false
}
}

this.setState({catigoris:cati})

}

prosearch(productsearch){
    let product=this.state.products
for(let i=0;i<product.length;i++){
    if(product[i].name.includes(productsearch)){
        product[i].show=true
    }else{
        product[i].show=false
    }
}
this.setState({products:product})
}





render(){
    return(

<>

<View style={{
    flex:1,
    backgroundColor:"#ddd",
    alignItems:'center'
}}>
    <ScrollView>

<View style={{
    width:'99%',
    height:50,
    marginTop:30,
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:'space-around',
    alignItems:'center'
}}>
<TouchableOpacity 
onPress={()=>{this.props.navigation.dispatch(DrawerActions.openDrawer())}}
>
<Icon name='list' size={20} style={{marginTop:5,marginLeft:-20}}   />
</TouchableOpacity>

<Text style={{fontStyle:'italic' , fontSize:20, fontWeight:'bold',color:Const.shadow,marginLeft:-25,}}> INTERIOR DESIGN </Text>

<TouchableOpacity>
<Icon name='shopping-bag' size={20} style={{marginTop:5,marginLeft:-30}}  
onPress={()=>{
    this.props.navigation.navigate("check")
}} />
</TouchableOpacity>
</View>

    

<TextInput
style={{width:width*0.9,height:40,borderWidth:1,color:'#000',alignSelf:'center',marginTop:10,
borderRadius:20,borderColor:'grey',borderWidth:1,marginBottom:10,marginLeft:-40
}}
value={this.state.search}
onChangeText={(value)=>{
this.setState({search:value})
this.search(value)
this.prosearch(value)
}}
placeholder="      search"
placeholderTextColor="grey"
/>

    



<View style={{width:"100%",height:220}}>
    <Text style={{fontSize:20,marginLeft:10,marginBottom:10,color:"#000"}}>Catigories</Text>
    <ScrollView horizontal>
    {this.state.catigoris.map((items,index) =>(
       items.show?(
<View style={{alignItems:'center',flexDirection:'row',flexWrap:'wrap'
       ,justifyContent:'space-between', marginLeft:10}}>
         <TouchableOpacity onPress={()=>{
            if(items.id==0){
                this.props.navigation.navigate("living")
            }else{
                this.props.navigation.navigate("chairs")
            }
            }}>
       <Image source= {items.photo} style={{width:130,height:150,borderRadius:10,borderWidth:2,marginRight:5}}  />
       <Text style={{fontSize:15,color:'grey',marginLeft:5,alignSelf:'center',marginTop:10}}>{items.item} </Text>
       </TouchableOpacity>
       </View>
       ):null
     ))}
    </ScrollView>

</View>


<View style={{marginTop:10,width:width*0.99}}>
<Text style={{fontSize:20,marginLeft:10,marginBottom:10,color:"#000"}}>Bestsellers</Text>
<TouchableOpacity>
<Image  source={{uri:'https://i.pinimg.com/474x/7c/bc/a7/7cbca71c6b1d07ab083e7d167ceab654.jpg'}} style={{
    width:"90%",height:200,alignSelf:'center',borderRadius:30,
}}  />
</TouchableOpacity>
</View>

    <Text style={{fontSize:20,marginLeft:10,marginBottom:10,color:"#000"}}>products</Text>
    <ScrollView>
    <View style={{flexDirection:'row',flexWrap:'wrap', marginLeft:10,alignItems:'center'}}>
    {this.state.products.map((items,index) =>(
    items.show ?(
    <TouchableOpacity >
    <Image source= {items.photo} style={{width:150,height:150,borderRadius:10,borderWidth:2,
     marginRight:20,marginLeft:10}}  />
    <View style={{alignItems:'center'}}>
    <Text style={{fontSize:15,color:'grey',alignSelf:'center',marginTop:10}}>{items.name} </Text>
    </View>
    

    </TouchableOpacity>
):null
     ))}
            </View>

    </ScrollView>





</ScrollView>
</View>


</>

    )
}}
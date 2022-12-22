import { View, Text, TextInput, ImageBackground, StatusBar, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


import background from "../assets/images/background.jpg"



const Home = () => {

    const navigation = useNavigation()
    
    const [upload, onChangeUpload] = React.useState(null);
    const [specificGravity, onChangeSpecificGravity] = React.useState(null);
    const [departureFuel, onChangeDepartureFuel] = React.useState(null);

    const data = [upload, specificGravity,departureFuel]

  return (         
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#3700dc" />
            <ImageBackground source={background} resizeMode="cover" style={styles.image}>
                <View style={styles.contaner_2}>
                    <Text>A320F</Text> 
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeUpload}
                        value={upload}
                        placeholder="Uploads(ltr)"
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeSpecificGravity}
                        value={specificGravity}
                        placeholder="Specific Gravity"
                        keyboardType="numeric"
                    />  
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeDepartureFuel}
                        value={departureFuel}
                        placeholder="Departure Fuel"
                        keyboardType="numeric"
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress= { () => navigation.navigate("Result", {data})}
                        
                    >
                        <Text style={{ color: "white", marginHorizontal: 55}}>Calculate</Text>
                    </TouchableOpacity>
                    
                </View>                
            </ImageBackground>            
        </View>     
  )
}

const styles =  StyleSheet.create({
    container: {      
        flex: 1,       
    },
    contaner_2:{
        marginTop: "30%",
        marginBottom: "40%",
        flexDirection: "column",
        flex:1,
        alignItems: "center",

    },
    image: {
    flex: 1,
    },
    input: {
        marginTop: 12,
        width: "80%",       
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 2,
        padding: 10,
        borderColor: "#3700dc",
    },
    button: {
        width: "50%",
         alignContent: 'center',
        
        backgroundColor: "#3700dc",
        padding: 10,
  },
    
    
})

export default Home
import { View, Text , StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';




const Result = () => {
    const route = useRoute();
    const date = new Date()
    

    const  [departureLeft, setDepartureLeft] = useState(0)
    const  [departureRight, setDepartureRight] = useState(0)
    const  [departureCenter, setDepartureCenter] = useState(0)

    const  [upliftLeft, setUpliftLeft] = useState(0)
    const  [upliftRight, setUpliftRight] = useState(0)
    const  [upliftCenter, setUpliftCenter] = useState(0)
    const  [upliftTotal, setUpliftTotal] = useState(0)

    const  [arrivalLeft, setArrivalLeft] = useState(0)
    const  [arrivalRight, setArrivalRight] = useState(0)
    const  [arrivalCenter, setArrivalCenter] = useState(0)
    const  [arrivalTotal, setArrivalTotal] = useState(0)
    
    const calculate = () => {
      let fuel = parseInt(route.params.data[0] * route.params.data[1])
      const fuel_roundup = fuel % 10
      let fuel_div = parseInt(fuel/10)
      if(fuel_roundup <=5){
        fuel= fuel_div * 10
      }        
      else{
        fuel= (fuel_div * 10) + 10        
      }

      if(route.params.data[2] <= 12000){
        setDepartureLeft(route.params.data[2]/2)
        setDepartureRight(route.params.data[2]/2)
        setUpliftTotal(fuel)
        setUpliftLeft(fuel/2)
        setUpliftRight(fuel/2)
        setArrivalTotal(route.params.data[2] - fuel)
        setArrivalLeft((route.params.data[2] - fuel)/2)
        setArrivalRight((route.params.data[2] - fuel)/2)
      }
      else{
        setDepartureLeft(6000)
        setDepartureRight(6000)
        setDepartureCenter(route.params.data[2]-12000)
        setUpliftTotal(fuel)
        setUpliftLeft((fuel-(route.params.data[2]-12000))/2)
        setUpliftRight((fuel-(route.params.data[2]-12000))/2)
        setUpliftCenter(route.params.data[2]-12000)
        setArrivalTotal(route.params.data[2] - fuel)
        setArrivalLeft((route.params.data[2] - fuel)/2)
        setArrivalRight((route.params.data[2] - fuel)/2)
      }

      return route.params.data[2]

       

    }

    useEffect( () =>{
      calculate()

    }, [ route.params.data[2]])
    

  return (
    <View style={styles.container}>
      <View style={styles.contaner_2}>
        <View style={styles.contaner_3}>
          <Text style={styles.text}>Uplift(ltrs)</Text>
          <Text style={styles.text}>Specific Gravity</Text>
          <Text style={styles.text}>Uplift(kg)</Text>
        </View>
        <View style={styles.contaner_3}>
          <Text style={styles.text}>{route.params.data[0]}</Text>
          <Text style={styles.text}>{route.params.data[1]}</Text>
          <Text style={styles.text}>{parseInt(route.params.data[0] * route.params.data[1])}</Text>
        </View>
      </View> 
      <View style={styles.contaner_2}>
        <View style={styles.contaner_3}>
          <Text style={styles.text_2}>Tanks</Text>
          <Text style={styles.text_2}>Arrival</Text>
          <Text style={styles.text_2}>Uplift</Text>
          <Text style={styles.text_2}>Departure</Text>
        </View>
        <View style={styles.contaner_3}>
          <Text style={styles.text_2}>Left</Text>
          <Text style={styles.text_2}>{arrivalLeft}</Text>
          <Text style={styles.text_2}>{upliftLeft}</Text>
          <Text style={styles.text_2}>{departureLeft}</Text>
        </View>
        <View style={styles.contaner_3}>
          <Text style={styles.text_2}>Center</Text>
          <Text style={styles.text_2}>{arrivalCenter}</Text>
          <Text style={styles.text_2}>{upliftCenter}</Text>
          <Text style={styles.text_2}>{departureCenter}</Text>
        </View>
        <View style={styles.contaner_3}>
          <Text style={styles.text_2}>Right</Text>
          <Text style={styles.text_2}>{arrivalRight}</Text>
          <Text style={styles.text_2}>{upliftRight}</Text>
          <Text style={styles.text_2}>{departureRight}</Text>
        </View>
        <View style={styles.contaner_3}>
          <Text style={styles.text_2}>Total</Text>
          <Text style={styles.text_2}>{arrivalTotal}</Text>
          <Text style={styles.text_2}>{upliftTotal}</Text>
          <Text style={styles.text_2}>{route.params.data[2]}</Text>
        </View>
        <View style={styles.contaner_3}>
          <Text style={{
            margin: 5,
            borderWidth: 1,
            padding: 5,         
            height: 50,
            width: 85,
            margin: 3,       
            borderRadius: 5,    
            textAlign: "center",
            borderColor: "#3700dc",}}>Current Time</Text>
          <Text style={{
            margin: 5,
            borderWidth: 1,
            padding: 5,         
            height: 50,
            width: "74%",
            margin: 3,       
            borderRadius: 5,    
            textAlign: "center",
            borderColor: "#3700dc",}}>{date.toUTCString()}</Text>
          
        </View>
      </View>     
    </View>
  )
}

const styles =  StyleSheet.create({
    container: {      
        flex: 1,  
           
    },
    contaner_2:{
        margin: 10,
        // marginBottom: "60%",
        marginTop: "10%",
        borderRadius: 5,
        flexDirection: "column",
         
        borderWidth: 1, 
        width: "auto",
        justifyContent: "center",
        alignItems: "flex-start"  
    },
    contaner_3:{
        // marginTop: "12%"
        // marginBottom: "10%",
        flexDirection: "row",
        
        justifyContent: "center",  

    },
    
    text:{
      margin: 5,
      borderWidth: 1,
      padding: 4,         
      height: 40,
      width: 115,
      margin: 3,       
      borderRadius: 5,    
      textAlign: "center",
      borderColor: "#3700dc",
    },
    text_2:{
      margin: 5,
      borderWidth: 1,
      padding: 5,         
      height: 35,
      width: 85,
      margin: 3,       
      borderRadius: 5,    
      textAlign: "center",
      borderColor: "#3700dc",
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

export default Result





      
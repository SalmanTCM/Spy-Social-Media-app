import { StyleSheet, Text, TouchableOpacity, } from 'react-native'
import React from 'react'
import { windowHeight,windowWidth } from '../utils/Dimentions'

const FormButton = ({buttonTitle, ...rest}) => {
  return (
   <TouchableOpacity style={style.buttonContainer} {...rest}>
        <Text style={style.buttonContainer}>{buttonTitle}</Text>
   </TouchableOpacity>
  )
}

export default FormButton

const styles = StyleSheet.create({

    buttonContainer:{
        marginTop:10,
        width:'100%',
        height:windowHeight/15,
        backgroundColor:'#26cef',
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
    },
    buttonText : {
        fontSize:18,
        fontWeight:'bold',
        color:'#fff3',
    }
})
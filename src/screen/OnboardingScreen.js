import react from "react";
import { View, Text, Button, StyleSheet,Image } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';

// const Skip = () =>(
//   <Button
//     title='Skip'
//     color="#00000"

//   />
// );
const OnboadingScreen = ({ navigation }) => {
    return (
        
        <Onboarding
        // SkipButtonComponent = {Skip}
        onSkip={()=>navigation.replace("Login")}
        onDone={()=>navigation.replace("Login")}
            pages={[
                {
                    backgroundColor: '#F8D664',
                    image: <Image style={{
                        resizeMode: 'cover',
                        height: 200,
                        width: 200,
                        
                      }} source={require('../../assets/Images/spy02.png')} />,
                    title: 'Happy',
                    subtitle: '',
            
                    
                }
                ,
                {
                    backgroundColor: '#2a3b90',
                    image: <Image 
                    style={{
                        resizeMode: 'cover',
                        height: 200,
                        width: 200,}}
                    source={require('../../assets/Images/spy03.png')} />,
                    title: 'Sad',
                    subtitle: '',
                },
                {
                    backgroundColor: '#D30026',
                    image: <Image
                    style={{
                        resizeMode: 'cover',
                        height: 200,
                        width: 200,}}
                    source={require('../../assets/Images/spy04.png')} />,
                    title: 'Angry',
                    subtitle: '',
                },

            ]}
        />
    );
};

export default OnboadingScreen;
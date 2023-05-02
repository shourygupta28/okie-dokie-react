import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextComponent, View, Image, Button, Pressable } from 'react-native';
import 'expo-dev-client';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import React, {useState, useEffect} from 'react';
import Header from './Header';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
// import { navigationRef, isReadyRef } from './RootNavigation';

import Home from './Screens/Home';
import SignIn from './Screens/SignIn';
import Details from './Screens/Details';


const Stack = createStackNavigator();


export default function App({navigation}) {

  // React.useEffect(() => {
  //   return () => {
  //     isReadyRef.current = false
  //   };
  // }, []);

  // const navigationRef = useNavigationContainerRef();
  // const navigation = useNavigation();
// const handlePress = () => {
//   navigation.navigate('Home'); 
// };
  
  // const[initializing, setInitializing] = useState(true);
  // const[user, setUser] = useState();

  // GoogleSignin.configure({
  //   webClientId: '448159404425-9blsv7l759a2e6rp1sottaudt8ef5tcu.apps.googleusercontent.com',
  // });

  // function onAuthStateChanged(user){
  //   setUser(user);
  //   if(initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber;
  // }, []);

  // const onGoogleButtonPress = async () => {
  //   const{ idToken } = await GoogleSignin.signIn();

  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //   const user_signIn = auth().signInWithCredential(googleCredential);
  //   user_signIn.then((user) => {
  //     console.log(user);
  //   }) 
  //   .catch((error) => {
  //     console.log(error);
  //   })
  //   return auth().signInWithCredential(googleCredential);
  // }

  // const signOut = async () => {
  //   try{
  //     await GoogleSignin.revokeAccess();
  //     await auth().signOut();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // if(initializing) return null;

  // if(!user){
  //   return(
  //     <View style={styles.container}>
  //       <Header />
  //       <GoogleSigninButton
  //         style={{width: 200, height: 65, marginTop:300}}
  //         onPress={onGoogleButtonPress}
  //       />
  //     </View>
  //   )
  // }

  return (
      <NavigationContainer>
          <Stack.Navigator >
            <Stack.Screen 
               name='SignIn'
               component={SignIn}
             />
             <Stack.Screen 
               name='Home'
               component={Home}
             />
             <Stack.Screen 
               name='Details'
               component={Details}
             />
             </Stack.Navigator>
      </NavigationContainer>
      
    // {/* <Button title="Go to Details" onPress={handlePress} /> */}
    //   {/* //  <NavigationContainer>
    //   //     <Stack.Navigator screenOptions={{headerShown: false}}>
    //   //       <Stack.Screen 
    //   //         name='Home'
    //   //         component={Home}
    //   //       />
    //   //       <Stack.Screen 
    //   //         name='Details'
    //   //         component={Details}
    //   //       />  
    //   //     </Stack.Navigator>
    //   //   </NavigationContainer> 
    // //     <Button title='Proceed to app' onPress={() => navigation.navigate('Home')} /> */}
           
)
  // return (
  //   <View style={styles.container}>
  //     <Text>Okie-Dokie CRUD</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}



import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextComponent, View, Image, Button, Pressable } from 'react-native';
import 'expo-dev-client';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import React, {useState, useEffect} from 'react';
import Header from '../Header';
import Home from './Home';

const SignIn = ({navigation}) => {

  const[initializing, setInitializing] = useState(true);
  const[user, setUser] = useState();

  GoogleSignin.configure({
    webClientId: '448159404425-9blsv7l759a2e6rp1sottaudt8ef5tcu.apps.googleusercontent.com',
  });

  function onAuthStateChanged(user){
    setUser(user);
    if(initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const onGoogleButtonPress = async () => {
    const{ idToken } = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    const user_signIn = auth().signInWithCredential(googleCredential);
    user_signIn.then((user) => {
      console.log(user);
    }) 
    .catch((error) => {
      console.log(error);
    })
    return auth().signInWithCredential(googleCredential);
  }

  const signOut = async () => {
    try{
      await GoogleSignin.revokeAccess();
      await auth().signOut();
    } catch (error) {
      console.error(error);
    }
  }

  if(initializing) return null;

  if(!user){
    return(
      <View style={styles.container}>
        <Header />
        <GoogleSigninButton
          style={{width: 200, height: 65, marginTop:300}}
          onPress={onGoogleButtonPress}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={{marginTop:10, alignItems:'center'}}>
        <Text style={styles.text}>Welcome, {user.displayName}</Text>
        <Image
          source={{uri: user.photoURL}}
          style={{height:100, width:100, borderRadius:150, margin:50}}
        />
        <Button title="Go to Home" onPress={() => navigation.navigate(Home)} >
        </Button>
       <Button title='Sign Out' onPress={signOut} />
       </View>
     </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  buttonp: {
    marginBottom: 5,
  }
});
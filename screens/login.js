import { StyleSheet, Text, View, KeyboardAvoidingView , TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { auth } from '../db_firebase'

const Login = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handlesignup = () => {
		console.log("signing up");
		auth.createUserWithEmailAndPassword(email, password)
		.then (userdata => {
			const user = userdata.user;
			console.log(user);
		})
		.catch((error) => alert(error.message));
	}

	const handlesignin = () => {
		auth.signInWithEmailAndPassword(email, password)
		.then (userdata => {
			const user = userdata.user;
			console.log(user + "signed in");
		})
	}

  return (

	<KeyboardAvoidingView 
	style={styles.container} 
	behavior={Platform.OS === "ios" ? "padding" : "height"}>

	  <View  style={styles.inputContainer}>
		<TextInput style={styles.login_input} 
		placeholder={"Email"} value={email} onChangeText={text => setEmail(text)} />
		<TextInput style={styles.login_input} 
		placeholder={"Password"} value={password} onChangeText={text => setPassword(text)} 
		secureTextEntry />
		<View Style={styles.signin_submit}>
		<TouchableOpacity onPress={handlesignin} 
		style={[styles.submit, styles.buttonoutline]} >
		<Text style={styles.outlinetext}>Sign In</Text>
		</TouchableOpacity>

		<TouchableOpacity onPress={handlesignup} 
		style={[styles.submit, styles.buttonoutline]} >
		<Text style={styles.outlinetext}>Sign Up</Text>
		</TouchableOpacity>
		</View>

	  </View>
	</KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({

	container : {
		justifyContent : 'center',
		flex : 1,
		backgroundColor : '#E8EAED',
		alignItems : 'center',
	},
	inputContainer : {
		width: '80%',



	},
	login_input : {
		padding : 12,
		margin : 6,
		backgroundColor : '#fff',
		alignItems : 'center',
		borderRadius : 8,
		justifyContent : 'center'


	},

	submit : {
		marginLeft : 55,
		marginRight : 55,
		borderRadius : 10,
		height : 40,
		alignItems : 'center',
		justifyContent : 'center',
	},

	signin_submit : {
	
		backgroundColor : 'red',

	},

	buttonoutline : {
		alignItems : 'center',
		marginTop : 15,
		backgroundColor : '#555CFF',
		
	},

	outlinetext : {
		color : '#fff',
		fontSize : 14,
		fontFamily : 'sans-serif',

	},
})
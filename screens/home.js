import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from '../db_firebase';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

	const navigation = useNavigation();

	const handle_sign_out = () => {
		auth.signOut()
		.then(() => {
			navigation.replace("Login");
		})
		.catch(error => alert(error.message));
	}
	

  return (
	<View style={styles.container} >
		<Text>Email : {auth.currentUser?.email} </Text>
		<TouchableOpacity onPress={handle_sign_out} style={styles.button}  >
			<Text style={styles.text_sign_out}>Sign Out</Text>
		</TouchableOpacity>
	</View>
  )
}

const styles = StyleSheet.create({
	  container: {
		flex : 1,
		backgroundColor : '#FFFFFF',
		justifyContent : 'center',
		alignItems : 'center',
	  },

	  button: {
		paddingHorizontal : 50,
		paddingVertical : 10,
		marginTop : 23,
		backgroundColor : '#3386FF',
		justifyContent : 'center',
		alignItems : 'center',
		borderRadius : 8,
	  },

	  text_sign_out : {
		fontFamily : 'sans-serif',
		color : '#FFFFFF',

	  }

});

export default Home
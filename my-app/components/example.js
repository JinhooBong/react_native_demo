import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

const App = () => {
	return (
		<View>
			<Text>Hello World!</Text>
		</View>
	)
}

function MyButton(props) {
	return (
		<TouchableOpacity onPress={props.onPress}>
			<Text>{props.label}</Text>	
		</TouchableOpacity>
	)
}
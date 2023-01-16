import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default function RadioButtonLarge( { text, styleText, styleButton } ) {
	return (
		<TouchableOpacity style={ styleButton }>
			<View>
				<Text style={ styleText }>{ text }</Text>
			</View>
		</TouchableOpacity>
	)
}
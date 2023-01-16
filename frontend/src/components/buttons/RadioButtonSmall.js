import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default function RadioButtonSmall( { text, styleText, styleButton, onPress } ) {
	return (
		<TouchableOpacity style={ styleButton } onPress={onPress}>
			<View>
				<Text style={ styleText }>{ text }</Text>
			</View>
		</TouchableOpacity>
	)
}
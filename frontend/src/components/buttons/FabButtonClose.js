import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

export default function FabButtonClose( props ) {
	return (
		<TouchableOpacity>
			<View style={styles.fabButtonClose}>
			{ props.children }
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	fabButtonClose: {
		backgroundColor: '#FFF',
		shadowOffset: { width: 0, height: 3 },
		shadowColor: '#DADADA',
		shadowOpacity: 0.5,
		width: 35, 
		height: 35,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 50
	}, 
})
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../globals/Colors'

export default function FabButtonWhite( props ) {
	return (
		<TouchableOpacity>
			<View style={styles.fabButtonWhite}>
				{ props.children }
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	fabButtonWhite: {
		backgroundColor: Colors.white,
		shadowOffset: { width: 0, height: 5 },
		shadowColor:  Colors.black,
		shadowOpacity: 0.1,
		shadowRadius: 5,
		width: 45, 
		height: 45,
		borderRadius: 50,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 15,
	},
})
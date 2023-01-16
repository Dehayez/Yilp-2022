import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../globals/Colors'

export default function FabButtonSmall ( props ) {
	return (
		<TouchableOpacity>
			<View style={styles.fabButton}>
				{ props.children }
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	fabButton: {
		backgroundColor: Colors.white,
		shadowOffset: { width: 0, height: 5 },
		shadowColor:  Colors.white,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		width: 40, 
		height: 40,
		borderRadius: 50,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
})
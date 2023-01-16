import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../globals/Colors'

export default function FabButton( props ) {
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
		backgroundColor: Colors.primary,
		shadowOffset: { width: 0, height: 5 },
		shadowColor:  Colors.primary,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		width: 50, 
		height: 50,
		borderRadius: 50,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
})
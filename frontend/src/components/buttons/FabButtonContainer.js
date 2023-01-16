import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function FabButtonContainer( props ) {
	return (
		<View style={styles.fabButtonContainer}>
			{ props.children }
		</View>
	)
}

const styles = StyleSheet.create({
	fabButtonContainer: {
		position: "absolute",
		flex: 1,
		alignSelf: 'flex-end',
		bottom: 34,
		paddingRight: 20,
	},
})
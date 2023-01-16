import React from 'react';
import { StyleSheet , View } from 'react-native';

export default function Test( props ) {
	return (
		<View style={styles.test}>
			{ props.children }
		</View>
	)
}

const styles = StyleSheet.create({
	test: {
		borderRadius: 6,
	},
});
import React from 'react';
import { StyleSheet , View, Modal } from 'react-native';

export default function Card( props ) {
	return (
		<View style={styles.card}>
			<View style={styles.cardContent}>
				{ props.children }
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 6,
		elevation: 3,
		backgroundColor: '#fff',
		shadowOffset: { width: 1, height: 1 },
		shadowColor: '#333',
		shadowOpacity: 0.1,
		marginHorizontal: 6,
		marginVertical: 10,
	},
	cardContent: {
		marginHorizontal: 18,
		marginVertical: 30,
	}
});
import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';


export default function TestScreen({ }) {

	return (
		<SafeAreaView>
			<Text>Test</Text>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	test: {
		height: 200,
	}
})
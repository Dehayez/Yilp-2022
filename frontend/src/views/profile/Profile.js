import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

export default function Profile ({ navigation }) {

	return (
		<SafeAreaView>
			<Text>Profile</Text>
			<Button title="Go to Skatedice" onPress={() => navigation.navigate('Skatedice')}></Button>
		</SafeAreaView>
	)
}
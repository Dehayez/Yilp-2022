import React from 'react';
import { SafeAreaView, Text, Image, StyleSheet } from 'react-native';
import { TextStyles } from '../../styles/TextStyles';
import { Card } from '../../components';

export default function DetailSpot({ navigation }) {

	return (
		<SafeAreaView>
			<Card>
				<Text style={TextStyles.textMedium}>{ navigation.getParam('title')}</Text>
				<Text style={TextStyles.textMedium}>{ navigation.getParam('rating')}</Text>
				<Text style={TextStyles.textMedium}>{ navigation.getParam('body')}</Text>
			</Card>
			<Image style={imageStyle.imageTest} source={require('../../assets/images/testImage.jpeg')}/>
		</SafeAreaView>
	)
}

const imageStyle = StyleSheet.create({
	imageTest: {
		height: 200,
		width: 100,
	}
})
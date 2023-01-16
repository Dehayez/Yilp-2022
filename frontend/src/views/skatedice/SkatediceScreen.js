import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { TextStyles, ButtonStyles, ScreenStyles } from '../../styles';
import { FabButtonClose } from '../../components';
import { MaterialIcons } from '@expo/vector-icons';


export default function SkatediceScreen({ navigation }) {

	return (
		<SafeAreaView style={ScreenStyles.fullScreen}>
			<Text style={TextStyles.titleFat}>Skatedice</Text>
			<Text style={TextStyles.textNormal}>Coming soon</Text>
			<View style={ButtonStyles.bottomCenter}>
				<FabButtonClose>
					<MaterialIcons 
						name='close'
						size={24}
						onPress={() => navigation.goBack()}/>
				</FabButtonClose>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({

})
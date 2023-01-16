import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../globals/Colors';

export const ScreenStyles = StyleSheet.create({
	fullScreen: {
		position: 'relative',
		flex: 1,
		backgroundColor: Colors.bgWhite,
	},
	paddingScreen: {
		position: 'absolute',
		padding: 100,
	}
})
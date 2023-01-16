import { StyleSheet } from 'react-native';
import { Colors } from '../globals/Colors'

export const TextStyles = StyleSheet.create({
	headerFat: {
		fontFamily: 'redHatDisplay-bold',
		fontSize: 24,
	},
	titleFat: {
		fontFamily: 'redHatDisplay-bold',
		textTransform: 'uppercase',
		letterSpacing: 2,
		textAlign: 'center',
		paddingTop: 10,
		paddingBottom: 30,
		fontSize: 16,
	},
	textFat: {
		fontFamily: 'redHatText-bold',
		fontSize: 16,
	},
	textMedium: {
		fontFamily: 'redHatText-medium',
		fontSize: 16,
	},
	textNormal: {
		fontFamily: 'redHatText-regular',
		fontSize: 16,
	},
	undertitleFat: {
		fontFamily: 'redHatDisplay-bold',
		textTransform: 'uppercase',
		fontSize: 14,
	},
	buttonSmall: {
		fontFamily: 'redHatText-medium',
		fontSize: 14,
	},
	labelTiny: {
		fontFamily: 'redHatText-medium',
		textTransform: 'uppercase',
		fontSize: 12,
	},
	buttonTiny: {
		fontFamily: 'redHatText-medium',
		fontSize: 12,
	},
	errorText: {
		fontFamily: 'redHatText-regular',
		color: Colors.primary,
		marginTop: 6, 
		marginBottom: 10,
		textTransform: 'capitalize'
	},
	inputLabel: {
		textTransform: 'uppercase',
		color: Colors.lightGrey,
		paddingBottom: 10,
		paddingLeft: 20,
	}, 
	textInput: {
		fontSize: 20,
		borderBottomWidth: 1,
		borderColor: Colors.lightGrey,
		paddingVertical: 10,
		marginHorizontal: 20,
	},
})
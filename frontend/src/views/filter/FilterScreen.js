import React, { useState, useReducer, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, LogBox, Checkbox, TextInput, Button } from 'react-native';
import { TextStyles, ButtonStyles, ScreenStyles, ContainerStyles } from '../../styles';
import { FabButtonClose, RadioButtonSmall, FabButton } from '../../components';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { Colors } from '../../globals/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FilterScreen({ navigation }) {
	const [storageFilter, setStorageFilter] = useState();
	const [hasLoaded, setLoaded] = useState();

	const getData = async () => {
		const jsonValueString = await AsyncStorage.getItem('@filter_Status');
		const jsonValue = JSON.parse(jsonValueString);
		if (jsonValue != null) {
			setStorageFilter(jsonValue);
			dispatch({ type: 'storage' });
			setLoaded(true);
		} else {
			setStorageFilter(null);
		}
	}

	useEffect(() => {
		getData();
	}, [])

	// Default State of Filters
	const initialFilterState = {
		beginner: false,
		intermediate: false,
		pro: false,
		rail: false,
		gap: false,
		flat: false,
		curb: false,
		ledge: false,
		skatepark: false,
		pumptrack: false,
		indoor: false,
		covered: false,
		outdoor: false,
	};
	
	// Switch function to switch booleans on button clicks
	function reducer(filter, action) {
		switch (action.type) {
		// SKILL
		  	case 'beginner':
				return { ...filter, beginner: action.value}
			case 'intermediate':
				return { ...filter, intermediate: action.value}
			case 'pro':
				return { ...filter, pro: action.value}
		// TYPE
			case 'rail':
				return { ...filter, rail: action.value}
			case 'gap':
				return { ...filter, gap: action.value}
			case 'flat':
				return { ...filter, flat: action.value}
			case 'curb':
				return { ...filter, curb: action.value}
			case 'ledge':
				return { ...filter, ledge: action.value}
		// SPACE
			case 'indoor':
				return { ...filter, indoor: action.value}
			case 'covered':
				return { ...filter, covered: action.value}
			case 'outdoor':
				return { ...filter, outdoor: action.value}
		// OTHER
			case 'clear':
				return filter, initialFilterState
			case 'storage':
				return filter, storageFilter
		}
	}
		

	const [filter, dispatch] = useReducer(reducer, initialFilterState);

	// function when submitting the filter settings
	function submitFilter() {
		const jsonValue = JSON.stringify(filter)
		AsyncStorage.setItem('@filter_Status', jsonValue);
		navigation.goBack();
	}

	function clearFilter() {
		dispatch({ type: 'clear' });
	}

	return (
		<SafeAreaView style={ScreenStyles.fullScreen}>
			<Text style={TextStyles.titleFat}>Filter</Text>
			{ hasLoaded ? 
				<View>
					<Text style={[TextStyles.undertitleFat, TextStyles.inputLabel]}>Difficulty</Text>
					
					<View style={ContainerStyles.radioButtonContainer}>
						<RadioButtonSmall 
							text="Beginner" 
							styleText={[TextStyles.buttonSmall, { color: filter.beginner ? Colors.white : Colors.darkGrey }]}
							styleButton={ filter.beginner ? ButtonStyles.radioButtonSmallSelected : ButtonStyles.radioButtonSmall}
							onPress={() => {
								dispatch({ type: 'beginner', value: (!filter.beginner) })
							}}/>
						<RadioButtonSmall 
							text="Intermediate" 
							styleText={[TextStyles.buttonSmall, { color: filter.intermediate ? Colors.white : Colors.darkGrey }]}
							styleButton={ filter.intermediate ? ButtonStyles.radioButtonSmallSelected : ButtonStyles.radioButtonSmall}
							onPress={() => {
								dispatch({ type: 'intermediate', value: (!filter.intermediate) })
							}}/>
						<RadioButtonSmall 
							text="Pro" 
							styleText={[TextStyles.buttonSmall, { color: filter.pro ? Colors.white : Colors.darkGrey }]}
							styleButton={ filter.pro ? ButtonStyles.radioButtonSmallSelected : ButtonStyles.radioButtonSmall}
							onPress={() => {
								dispatch({ type: 'pro', value: (!filter.pro) })
							}}/>
					</View>
					

					<Text style={[TextStyles.undertitleFat, TextStyles.inputLabel]}>Space</Text>
					<View style={ContainerStyles.radioButtonContainer}>
						<RadioButtonSmall 
							text="Indoor" 
							styleText={[TextStyles.buttonSmall, { color: filter.indoor ? Colors.white : Colors.darkGrey }]}
							styleButton={ filter.indoor ? ButtonStyles.radioButtonSmallSelected : ButtonStyles.radioButtonSmall}
							onPress={() => {
								dispatch({ type: 'indoor', value: (!filter.indoor) })
							}}/>
						<RadioButtonSmall 
							text="Covered" 
							styleText={[TextStyles.buttonSmall, { color: filter.covered ? Colors.white : Colors.darkGrey }]}
							styleButton={ filter.covered ? ButtonStyles.radioButtonSmallSelected : ButtonStyles.radioButtonSmall}
							onPress={() => {
								dispatch({ type: 'covered', value: (!filter.covered) })
							}}/>
						<RadioButtonSmall 
							text="Outdoor" 
							styleText={[TextStyles.buttonSmall, { color: filter.outdoor ? Colors.white : Colors.darkGrey }]}
							styleButton={ filter.outdoor ? ButtonStyles.radioButtonSmallSelected : ButtonStyles.radioButtonSmall}
							onPress={() => {
								dispatch({ type: 'outdoor', value: (!filter.outdoor) })
							}}/>
					</View> 
				</View> : <Text></Text>
			}

			<View style={ButtonStyles.bottomCenter}>
				<FabButtonClose>
					<MaterialIcons 
						name='close'
						size={24}
						onPress={() => navigation.goBack()}/>
				</FabButtonClose>
			</View>
			<View style={ButtonStyles.bottomRight}>
				<FabButton>
					<Feather 
						name="check" 
						size={24} 
						color={Colors.white} 
						onPress={submitFilter}/>
				</FabButton>
			</View>
			<TouchableOpacity style={[ButtonStyles.bottomLeft, {paddingBottom: 8}]} onPress={clearFilter}>
				<Text style={[TextStyles.labelTiny,  {color: Colors.darkGrey}]}>Clear all</Text>
			</TouchableOpacity>

		</SafeAreaView>
	)
}

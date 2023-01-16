import React, { useState, useEffect, useLayoutEffect } from 'react';
import { SafeAreaView, View, Text, Modal, Button, TouchableWithoutFeedback, Keyboard, TouchableOpacity, LogBox } from 'react-native';
import { MaterialIcons, AntDesign, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { ButtonStyles, ScreenStyles, TextStyles } from '../../styles';
import { FabButton, FabButtonClose, Form, Map, FabButtonWhite, FabButtonContainer } from '../../components';
import { Colors } from '../../globals/Colors'

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); // Ignore all log notifications


export default function HomeScreen({ navigation }) {
	const [modalOpen, setModalOpen] = useState(false);
	const [showDetailSpot, setShowDetailSpot] = useState(false);

	// Function to toggle detail spot
	// Using boolean to if detail spot is showing or not in child component
	const toggleDetailSpot = () => {
		setShowDetailSpot(!showDetailSpot)
	}

	const [spots, setSpots] = useState([
		{ title: 'Noordlaan', rating: 5, description: 'Sick spot', key: '1'},
		{ title: 'Keizerpark', rating: 3, description: 'Van die goei', key: '2'},
		{ title: 'Grote markt', rating: 4, description: 'Groot', key: '3'},
	])

	const addSpot = (spot) => {
		// tijdelijk aanmaken van key, niet de beste manier: zorgen voor plugin
		spot.key = Math.random().toString();
		setSpots((currentSpots) => {
			return [spot, ...currentSpots];
		})
		setModalOpen(false)
	}

	return (
		<View style={ScreenStyles.fullScreen}>

			<Map toggleDetailSpot={toggleDetailSpot}/>

			{/*
			<FlatList
				data={spots}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => navigation.navigate('DetailSpot', item)}>
						<Card>
							<Text style={TextStyles.textNormal}>{item.title}</Text>
						</Card>
					</TouchableOpacity>
				)}
			/> */}


 			{showDetailSpot ? 
			 	<View>
					<View style={ButtonStyles.bottomCenter}>
						<FabButton>
							<MaterialIcons 
								name='add'
								size={24}
								style={{color: '#FFF'}}
								onPress={() => setModalOpen(true)}
							/>
						</FabButton>
					</View>

					<FabButtonContainer>
							<FabButtonWhite>
								<AntDesign 
								name="filter" 
								size={26} 
								style={{color: Colors.black}} 
								onPress={() => navigation.navigate('FilterScreen')}/>
							</FabButtonWhite>

						<FabButtonWhite>
							<MaterialCommunityIcons 
							name="dice-3-outline" 
							size={24} 
							style={{color: Colors.black}} 
							onPress={() => navigation.navigate('SkatediceScreen')}/>
						</FabButtonWhite>

						<FabButtonWhite>
							<FontAwesome5 
							name="tasks" 
							size={20} 
							style={{color: Colors.black}}
							onPress={() => navigation.navigate('TasksScreen')}/>
						</FabButtonWhite>
					</FabButtonContainer>
				</View>
			 : null}
			
			<Modal visible={modalOpen} animationType='slide' >
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<SafeAreaView style={ScreenStyles.fullScreen}>
						<Text style={TextStyles.titleFat}>Add spot</Text>

						<Form addSpot={addSpot}/>

						<View style={ButtonStyles.bottomCenter}>
							<FabButtonClose>
								<MaterialIcons 
									name='close'
									size={24}
									onPress={() => setModalOpen(false)}
								/>
							</FabButtonClose>
						</View>
					</SafeAreaView>
				</TouchableWithoutFeedback>
			</Modal>
		</View>
	)
}

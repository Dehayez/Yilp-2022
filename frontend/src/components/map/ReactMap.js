import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Animated, TextInput, Button, FlatList, TouchableOpacity, Platform, Image } from 'react-native';
import MapView, {  Callout, Geojson, Marker } from 'react-native-maps';
import { MapStyle, Markers }from './MapData';
import { MaterialCommunityIcons, Feather, MaterialIcons } from '@expo/vector-icons';
import { ButtonStyles } from '../../styles';
import { FabButtonClose } from '..';
import AsyncStorage from '@react-native-async-storage/async-storage';


const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

export default function ReactMap({toggleDetailSpot}) {
	const [showDetailSpot, setShowDetailSpot] = useState(false);
	const [storageFilter, setStorageFilter] = useState();

	// When detail spot toggles, run function in parent to toggle there too
	useEffect(() => {
		toggleDetailSpot();
	}, [showDetailSpot])

	// Categories
	const initialMapState = {
		Markers,
		categories: [
			{ 
				name: 'Rail', 
				icon: <MaterialCommunityIcons name="skateboard" size={18} style={styles.chipsIcon} />,
			},
			{
				name: 'Bank',
				icon: <MaterialCommunityIcons name="Bank" size={18} style={styles.chipsIcon} />,
			},
			{
				name: 'Plaza',
				icon: <MaterialCommunityIcons name="Plaza" size={18} style={styles.chipsIcon} />,
			},
			{
				name: 'Stairs',
				icon: <MaterialCommunityIcons name="Stairs" size={18} style={styles.chipsIcon} />,
			},
			{
				name: 'Flat',
				icon: <MaterialCommunityIcons name="Flat" size={18} style={styles.chipsIcon} />,
			},
		],
		region: {
			latitude: 51.02869,
			longitude: 4.10106,
			latitudeDelta: 0.0922/4,
			longitudeDelta: 0.0421/5
		},
	};

	const [state, setstate] = useState(initialMapState);

	let mapIndex = 0;
	let mapAnimation = new Animated.Value(0);

	// Function to animate to marker when selecting spot
	useEffect(() => {
		mapAnimation.addListener(({ value }) => {
			let index = Math.floor( value/ CARD_WIDTH + 0.3); // animate 30% away from landing on the next one

			if (index >= state.Markers.length) {
				index = state.Markers.length - 1;
			}
			if (index <= 0) {
				index =0
			}

			clearTimeout(regionTimeout);

			const regionTimeout = setTimeout(() => {
				if( mapIndex !== index ) {
					mapIndex = index;
					const { coordinate } = state.Markers[index];
					_map.current.animateToRegion(
						{
							...coordinate,
							latitudeDelta: state.region.latitudeDelta, 
							longitudeDelta: state.region.latitudeDelta,
						}, 350
					)
				}
			}, 10);
		});
	});

	const _map = useRef(null)
	const _scrollView = useRef(null)

	// Function to scale marker when selecting spot
	const interpolations = state.Markers.map((marker, index) => {
		const inputRange = [
		(index - 1) * CARD_WIDTH,
		index * CARD_WIDTH,
		((index + 1) * CARD_WIDTH),
		];
	
		const scale = mapAnimation.interpolate({
		inputRange,
		outputRange: [1, 1.5, 1],
		extrapolate: "clamp"
		});
	
		return { scale };
	});

	// Goes to marker when clicked
	const onMarkerPress = (mapEventData) => {
			setShowDetailSpot(true)

			const markerID = mapEventData._targetInst.return.key;
			let x = (markerID * CARD_WIDTH) + (markerID * 20); 

			if (Platform.OS === 'ios') {
				x = x - SPACING_FOR_CARD_INSET;
			}

			if (showDetailSpot) {
				_scrollView.current.scrollTo({x: x, y: 0, animated: true});
			}
	}


	// Get filter status from asyncstorage
	const getData = async () => {
		const jsonValueString = await AsyncStorage.getItem('@filter_Status');
		const jsonValue = JSON.parse(jsonValueString);
		if (jsonValue != null) {
			setStorageFilter(jsonValue);
		} else {
			setStorageFilter(null);
		}
	}

	useEffect(() => {
		getData();
	}, [])


	//console.log(filteredMarkers)

	//console.log(storageFilter)
	/* const skillFilter = storageFilter.filter(function(skill) {
		return skill.info.type == "beginner" || "intermediate" || "pro"
	}) */

	/* useEffect(() => {
		console.log(storageFilter);
		storageFilter.pro ? console.log('Pro: true') : console.log('Pro: false')
		storageFilter.beginner ? console.log('beginner: true') : console.log('beginner: false')
	}, [storageFilter]) */

	function lol() {
		const filteredMarkers = Markers.filter(function(marker) {
			return 	storageFilter.beginner ?  marker.info.difficulty ==  'beginner' : marker.info.difficulty ==  null ||
					storageFilter.intermediate ?  marker.info.difficulty ==  'intermediate' : marker.info.difficulty ==  null ||
					storageFilter.pro ?  marker.info.difficulty ==  'pro' : marker.info.difficulty ==  null
		})

		console.log('======================================')
		console.log(filteredMarkers) 
	}

	storageFilter ? lol() : null

	return (
		<View style={styles.container}>
			<MapView 
				ref={_map}
				style={styles.map} 
				initialRegion={state.region}
				provider='google'
				showsUserLocation
				followsUserLocation
				//showsMyLocationButton
				showsCompass
				customMapStyle={MapStyle}>

				{state.Markers.map((marker, index) => {
					// scale marker when selected
					const scaleStyle = {
						transform: [
							{
								scale: interpolations[index].scale
							},
						],
					};

					return (
						<MapView.Marker key={index} coordinate={marker.coordinate} onPress={(e) => { onMarkerPress(e); toggleDetailSpot}}>
							<Animated.View style={ showDetailSpot ? [styles.markerWrap, scaleStyle] : styles.markerWrap }>
								<Animated.Image
									source={require('../../assets/images/pin.png')}
									style={[styles.marker]}
									resizeMode="contain"
								/>
							</Animated.View>
						</MapView.Marker>
					)
				})}

				{/* <Marker
					coordinate={pin}
					draggable={true}
					onDragStart={(e) => {
						console.log("Drag start", e.nativeEvent.coordinates)
					}}
					onDragEnd={(e) => {
						setPin({
							latitude: e.nativeEvent.coordinate.latitude,
							longitude: e.nativeEvent.coordinate.longitude
						})
					}}
					pinColor='#FEFEFE'
				>
					<Callout>
						<Text>Here</Text>
					</Callout>
				</Marker> */}
			</MapView>

			{/* <View style={styles.searchBox}>
				<TextInput
					placeholder="Search here"
					autoCapitalize="none"
					style={{flex:1, padding: 0}}/>
				<Feather name="search" size={24} color="grey" />
			</View> */}

			{/* <ScrollView
				horizontal
				scrollEventThrottle={1}
				showsHorizontalScrollIndicator={false}
				height={50}
				style={styles.chipsScrollView}
				contentInset={{ top: 0, left: 0, bottom: 0, right: 20 }} 
				contentContainerStyle={{ paddingRight: Platform.OS === 'android' ? 20 : 0 }}> 

				{state.categories.map((category, index) => {
					return (
						<TouchableOpacity key={index} style={styles.chipsItem}>
							{category.icon}
							<Text>{category.name}</Text>
						</TouchableOpacity>
					)
				})}
			</ScrollView> */}

			<View style={ButtonStyles.bottomCenter}>
				<FabButtonClose>
					<MaterialIcons 
						name='close'
						size={24}
						onPress={() => 	setShowDetailSpot(false)}
					/>
				</FabButtonClose>
			</View>
			
			{ 
				showDetailSpot ? (
					<Animated.ScrollView
						ref={_scrollView}
						horizontal
						scrollEventThrottle={1}
						showsHorizontalScrollIndicator={false}
						style={styles.scrollView}
						pagingEnabled
						decelerationRate='fast'
						snapToInterval={CARD_WIDTH + 20}
						snapToAlignment='center'
						contentInset={{ top: 0, left: SPACING_FOR_CARD_INSET, bottom: 0, right: SPACING_FOR_CARD_INSET }}  
						contentContainerStyle={{ paddingRight: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0 }}
						onScroll={Animated.event(
							[
								{
									nativeEvent: {
										contentOffset: {
											x: mapAnimation,
										}
									},
								},
							],
							{useNativeDriver: true}
						)}
						
						> 
						
						{state.Markers.map((marker, index) => {
							return (
								<View style={styles.card} key={index}>
									<Image
									source={marker.image}
									style={styles.cardImage}
									resizeMode='cover'/>
									<View style={styles.textContent}>
										<Text numberOfLines={1} style={styles.cardTitle}>{marker.title}</Text>
										<Text numberOfLines={1} style={styles.cardDescription}>{marker.descripition}</Text>
									</View>
								</View>
							)
						})}
					</Animated.ScrollView>
				) : (
					null
				)
			}
	  </View>
	)
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#fff',
	  alignItems: 'center',
	  justifyContent: 'center',
	},
	map: {
	  width: Dimensions.get('window').width,
	  height: Dimensions.get('window').height,
	},
	markerWrap: {
	  alignItems: "center",
	  justifyContent: "center",
	  width: 50,
	  height: 50,
	},
	marker: {
	  width: 30,
	  height: 30,
	},
	searchBox: {
		position:'absolute', 
		marginTop: Platform.OS === 'ios' ? 40 : 20, 
		flexDirection:"row",
		backgroundColor: '#fff',
		width: '90%',
		alignSelf:'center',
		borderRadius: 5,
		padding: 10,
		shadowColor: '#ccc',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.5,
		shadowRadius: 5,
		elevation: 10,
		top: 0
	},

	chipsScrollView: {
		position:'absolute', 
		top: Platform.OS === 'ios' ? 90 : 80, 
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
	chipsIcon: {
		marginRight: 5,
	},
	chipsItem: {
		flexDirection:"row",
		backgroundColor:'#fff', 
		borderRadius:20,
		padding:8,
		paddingHorizontal:20, 
		marginHorizontal:10,
		height:35,
		shadowColor: '#ccc',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.5,
		shadowRadius: 5,
		elevation: 10,
	},
	scrollView: {
	  position: "absolute",
	  bottom: 70,
	  left: 0,
	  right: 0,
	  paddingVertical: 10,
	},
	endPadding: {
		paddingRight: width - CARD_WIDTH,
	},
	card: {
		// padding: 10,
		elevation: 2,
		backgroundColor: "#FFF",
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		marginHorizontal: 10,
		shadowColor: "#000",
		shadowRadius: 5,
		shadowOpacity: 0.3,
		shadowOffset: { x: 2, y: -2 },
		height: CARD_HEIGHT,
		width: CARD_WIDTH,
		overflow: "hidden",
	},
	  cardImage: {
		flex: 3,
		width: "100%",
		height: "100%",
		alignSelf: "center",
	},
	  textContent: {
		flex: 2,
		padding: 10,
	},
	  cardtitle: {
		fontSize: 12,
		// marginTop: 5,
		fontWeight: "bold",
	},
	  cardDescription: {
		fontSize: 12,
		color: "#444",
	},
	  markerWrap: {
		alignItems: "center",
		justifyContent: "center",
		width:50,
		height:50,
	},
	  marker: {
		width: 30,
		height: 30,
	},
	  button: {
		alignItems: 'center',
		marginTop: 5
	},
  });
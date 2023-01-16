import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { HomeScreen, DetailSpot, FilterScreen, SkatediceScreen, TasksScreen } from '../views'

// different screens for stack navigator
const screens = {
	Home: {
		screen: HomeScreen, 
		navigationOptions: {
			headerShown: false
		}
	}, 

	FilterScreen: {
		screen: FilterScreen, 
		navigationOptions: {
			headerShown: false
		}
	},

	SkatediceScreen: {
		screen: SkatediceScreen, 
		navigationOptions: {
			headerShown: false
		}
	},

	TasksScreen: {
		screen: TasksScreen, 
		navigationOptions: {
			headerShown: false
		}
	},
/* 
	DetailSpot: {
		screen: DetailSpot, 
		navigationOptions: {
			title: 'Detail'
		}
	},
 */
}

// instance of stack navigator
const HomeStack = createStackNavigator(screens, {
	defaultNavigationOptions: {
		headerStyle: { 
			backgroundColor: '#FFF',
			shadowOpacity: 0,
			borderBottomColor: '#FFF',
			shadowColor: '#FFF'
		},
	
	}
})

export default createAppContainer(HomeStack)
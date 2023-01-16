import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import { Profile } from "../views";

// different screens for stack navigator
const screens = {
	Profile: {
		screen: Profile, 
		navigationOptions: {
			title: 'Profile'
		}
	}, 
}

// instance of stack navigator
const ProfileStack = createStackNavigator(screens, {
	defaultNavigationOptions: {
		headerStyle: { 
			backgroundColor: '#FFF',
			shadowOpacity: 0,
			borderBottomColor: '#FFF',
			shadowColor: '#FFF'
		},
	}
})

export default createAppContainer(ProfileStack)
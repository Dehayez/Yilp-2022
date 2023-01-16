import React from 'react';
import { useState } from 'react';
import * as Fonts from 'expo-font';
import { HomeStack } from './src/routes/index';
import AppLoading from 'expo-app-loading';


// load in all fonts
const getFonts = () => Fonts.loadAsync({
		/* Red Hat Display */
		'redHatDisplay-bold': require('./src/assets/font/RedHatDisplay-Bold.ttf'),
		//'redHatDisplay-black': require('./src/assets/font/RedHatDisplay-Black.ttf'),
		//'redHatDisplay-blackItalic': require('./src/assets/font/RedHatDisplay-BlackItalic.ttf'),
		//'redHatDisplay-boldItalic': require('./src/assets/font/RedHatDisplay-BoldItalic.ttf'),
		//'redHatDisplay-italic': require('./src/assets/font/RedHatDisplay-Italic.ttf'),
		//'redHatDisplay-medium': require('./src/assets/font/RedHatDisplay-Medium.ttf'),
		//'redHatDisplay-mediumItalic': require('./src/assets/font/RedHatDisplay-MediumItalic.ttf'),
		//'redHatDisplay-regular': require('./src/assets/font/RedHatDisplay-Regular.ttf'),

		/* Red Hat Text */
		'redHatText-bold': require('./src/assets/font/RedHatText-Bold.ttf'),
		'redHatText-medium': require('./src/assets/font/RedHatText-Medium.ttf'),
		'redHatText-regular': require('./src/assets/font/RedHatText-Regular.ttf'),
		//'redHatText-boldItalic': require('./src/assets/font/RedHatText-BoldItalic.ttf'),
		//'redHatText-italic': require('./src/assets/font/RedHatText-Italic.ttf'),
		//'redHatText-mediumItalic': require('./src/assets/font/RedHatText-MediumItalic.ttf'),
	})

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	if (fontsLoaded){
		return (
			<HomeStack/>
		  );
	} else {
		return (
			<AppLoading
				startAsync={getFonts}
				onFinish={() => setFontsLoaded(true)}
				onError={console.warn}
			/>
		)
	}
}
import React, { useState } from 'react';
import { StyleSheet , View, Button, Text, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { ButtonStyles, ScreenStyles, TextStyles } from '../../styles';
import { FabButton } from '../buttons/index';
import { FontAwesome } from '@expo/vector-icons';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { Colors } from '../../globals/Colors';


const spotSchema = yup.object({
	title: yup.string()
		.required()
		.min(4),

	description: yup.string()
		.required()
		.min(8),

	rating: yup.string()
	.required()
	.test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
		return parseInt(val) < 6 && parseInt(val) > 0
	})
})

export default function Form({addSpot}) {
	return (
		<View style={ScreenStyles.fullScreen}>
			<Formik
				initialValues={{ title: '', description: '', rating: ''}}
				validationSchema={spotSchema}
				onSubmit={(values, actions) => {
					// you can do something with the values here
					addSpot(values);
					actions.resetForm();
				}}
			>
				{(formikProps) => (
					<View style={[ScreenStyles.fullScreen, styles.form]}>
						<Text style={[TextStyles.undertitleFat, TextStyles.inputLabel]}>Title</Text>
						<TextInput
							style={[TextStyles.textInput, TextStyles.textNormal]}
							placeholder='Title'
							onChangeText={formikProps.handleChange('title')}
							value={formikProps.values.title}
							onBlur={formikProps.handleBlur('title')}
							//valid={isValid}
							//errorText="Error"
						/>
						<Text style={TextStyles.errorText}>{ formikProps.touched.title && formikProps.errors.title}</Text>

						<Text style={[TextStyles.undertitleFat, TextStyles.inputLabel]}>Description</Text>
						<TextInput
							style={[TextStyles.textInput, TextStyles.textNormal]}
							multiline
							placeholder='Description'
							onChangeText={formikProps.handleChange('description')}
							value={formikProps.values.description}
							onBlur={formikProps.handleBlur('description')}

						/>
						<Text style={TextStyles.errorText}>{ formikProps.touched.title && formikProps.errors.description}</Text>

					
						<Text style={[TextStyles.undertitleFat, TextStyles.inputLabel]}>Space</Text>
						<SegmentedControl
							style={styles.segmentedControl}
							values={['outdoor', 'covered', 'indoor']}
							onValueChange={(itemValue) => {console.log(itemValue)}}
						/>

						<View style={[ButtonStyles.bottomRight, {bottom: 0}]} onPress={formikProps.handleSubmit}>
							<FabButton>
								<FontAwesome 
									name='send'
									size={18}
									color={Colors.white}
								/>
							</FabButton>
						</View>
					</View>
				)}
			</Formik>
		</View>
	)
}

const styles = StyleSheet.create({
	segmentedControl: {
		marginHorizontal: 20,
	}
})
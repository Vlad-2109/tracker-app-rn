import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Input from './Input';

type InputValues = {
	amount: string;
	date: string;
	description: string;
};

const ExpenseForm = () => {
	const [inputValues, setInputValues] = useState<InputValues>({
		amount: '',
		date: '',
		description: '',
	});

	const handleInputChange = (inputIdentfier: string, enteredValue: string) => {
		setInputValues((prevValues) => ({
			...prevValues,
			[inputIdentfier]: enteredValue,
		}));
	};

	const handleDateChange = () => {};

	return (
		<View style={styles.form}>
			<Text style={styles.title}>Your Expense</Text>
			<View style={styles.inputsRow}>
				<Input
					label="Amount"
					style={styles.rowInput}
					textInputConfig={{
						keyboardType: 'decimal-pad',
						onChangeText: (value) => handleInputChange('amount', value),
						value: inputValues.amount,
					}}
				/>
				<Input
					label="Date"
					style={styles.rowInput}
					textInputConfig={{
						placeholder: 'YYYY-MM-DD',
						maxLength: 10,
						onChangeText: (value) => handleInputChange('date', value),
						value: inputValues.date,
					}}
				/>
			</View>
			<Input
				label="Description"
				textInputConfig={{
					multiline: true,
					onChangeText: (value) => handleInputChange('description', value),
					value: inputValues.description,
				}}
			/>
		</View>
	);
};

export default ExpenseForm;

const styles = StyleSheet.create({
	form: {
		marginTop: 40,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white',
		marginVertical: 24,
		textAlign: 'center',
	},
	inputsRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	rowInput: {
		flex: 1,
	},
});

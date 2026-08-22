import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

import Button from '@/components/UI/Button';
import { getFormattedDate } from '@/utils/date';
import Input from './Input';

type InputValues = {
	amount: string;
	date: string;
	description: string;
};

export type ExpenseData = {
	amount: number;
	date: Date;
	description: string;
};

type ExpenseFormProps = {
	submitButtonLabel: string;
	defaultValues: ExpenseData | undefined;
	onCancel: () => void;
	onSubmit: (expenseData: ExpenseData) => void;
};

const ExpenseForm = ({
	submitButtonLabel,
	defaultValues,
	onCancel,
	onSubmit,
}: ExpenseFormProps) => {
	const [inputValues, setInputValues] = useState<InputValues>({
		amount: defaultValues?.amount.toString() ?? '',
		date: defaultValues ? getFormattedDate(defaultValues.date) : '',
		description: defaultValues?.description ?? '',
	});

	const handleInputChange = (inputIdentfier: string, enteredValue: string) => {
		setInputValues((prevValues) => ({
			...prevValues,
			[inputIdentfier]: enteredValue,
		}));
	};

	const handleSubmit = () => {
		const expenseData = {
			amount: +inputValues.amount,
			date: new Date(inputValues.date),
			description: inputValues.description,
		};

		const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
		const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
		const descriptionIsValid = expenseData.description.trim().length > 0;

		if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
			Alert.alert('Invalid input', 'Please check your input values');
			return;
		}

		onSubmit(expenseData);
	};

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
			<View style={styles.buttonsContainer}>
				<Button mode="flat" style={styles.button} onPress={onCancel}>
					Cancel
				</Button>
				<Button style={styles.button} onPress={handleSubmit}>
					{submitButtonLabel}
				</Button>
			</View>
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
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		minWidth: 120,
		marginHorizontal: 8,
	},
});

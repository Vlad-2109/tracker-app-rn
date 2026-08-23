import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from '@/components/UI/Button';
import { GLOBAL_STYLES } from '@/constants/styles';
import { getFormattedDate } from '@/utils/date';
import Input from './Input';

type InputState = {
	value: string;
	isValid: boolean;
};

type InputValues = {
	amount: InputState;
	date: InputState;
	description: InputState;
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
	onSubmit: (expenseData: ExpenseData) => Promise<void>;
};

const ExpenseForm = ({
	submitButtonLabel,
	defaultValues,
	onCancel,
	onSubmit,
}: ExpenseFormProps) => {
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const [inputs, setInputs] = useState<InputValues>({
		amount: {
			value: defaultValues?.amount.toString() ?? '',
			isValid: !!defaultValues,
		},
		date: {
			value: defaultValues ? getFormattedDate(defaultValues.date) : '',
			isValid: !!defaultValues,
		},
		description: {
			value: defaultValues?.description ?? '',
			isValid: !!defaultValues,
		},
	});

	const handleInputChange = (inputIdentfier: string, enteredValue: string) => {
		setInputs((prev) => ({
			...prev,
			[inputIdentfier]: { value: enteredValue, isValid: true },
		}));
	};

	const handleSubmit = async () => {
		setIsSubmitting(true);

		const expenseData = {
			amount: +inputs.amount.value,
			date: new Date(inputs.date.value),
			description: inputs.description.value,
		};

		const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
		const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
		const descriptionIsValid = expenseData.description.trim().length > 0;

		if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
			setInputs((prev) => ({
				amount: { value: prev.amount.value, isValid: amountIsValid },
				date: { value: prev.date.value, isValid: dateIsValid },
				description: {
					value: prev.description.value,
					isValid: descriptionIsValid,
				},
			}));
			return;
		}

		await onSubmit(expenseData);
	};

	const isFormInvalid =
		isSubmitting &&
		(!inputs.amount.isValid ||
			!inputs.date.isValid ||
			!inputs.description.isValid);

	return (
		<View style={styles.form}>
			<Text style={styles.title}>Your Expense</Text>
			<View style={styles.inputsRow}>
				<Input
					label="Amount"
					invalid={isSubmitting && !inputs.amount.isValid}
					style={styles.rowInput}
					textInputConfig={{
						keyboardType: 'decimal-pad',
						onChangeText: (value) => handleInputChange('amount', value),
						value: inputs.amount.value,
					}}
				/>
				<Input
					label="Date"
					invalid={isSubmitting && !inputs.date.isValid}
					style={styles.rowInput}
					textInputConfig={{
						placeholder: 'YYYY-MM-DD',
						maxLength: 10,
						onChangeText: (value) => handleInputChange('date', value),
						value: inputs.date.value,
					}}
				/>
			</View>
			<Input
				label="Description"
				invalid={isSubmitting && !inputs.description.isValid}
				textInputConfig={{
					multiline: true,
					onChangeText: (value) => handleInputChange('description', value),
					value: inputs.description.value,
				}}
			/>
			{isFormInvalid && (
				<Text style={styles.errorsText}>
					Invalid input values - please check your entered data!
				</Text>
			)}
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
	errorsText: {
		textAlign: 'center',
		color: GLOBAL_STYLES.colors.error500,
		margin: 8,
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

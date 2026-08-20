import { StyleSheet, View } from 'react-native';

import Input from './Input';

const ExpenseForm = () => {
	const handleAmountChange = () => {};

	const handleDateChange = () => {};

	return (
		<View>
			<Input
				label="Amount"
				textInputConfig={{
					keyboardType: 'decimal-pad',
					onChangeText: handleAmountChange,
				}}
			/>
			<Input
				label="Date"
				textInputConfig={{
					placeholder: 'YYYY-MM-DD',
					maxLength: 10,
					onChangeText: handleDateChange,
				}}
			/>
			<Input
				label="Description"
				textInputConfig={{
					multiline: true,
				}}
			/>
		</View>
	);
};

export default ExpenseForm;

const styles = StyleSheet.create({});

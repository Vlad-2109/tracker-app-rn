import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ExpensesContext } from '@/store/expenses-context';

import ExpenseForm, { type ExpenseData } from '@/components/ManageExpense/ExpenseForm';
import IconButton from '@/components/UI/IconButton';
import { GLOBAL_STYLES } from '@/constants/styles';

const ManageExpensePage = () => {
	const router = useRouter();
	const { addExpense, updateExpense, deleteExpense } =
		useContext(ExpensesContext);

	const { editedExpenseId } = useLocalSearchParams();
	const isEditing = !!editedExpenseId;

	const handleDeleteExpense = () => {
		deleteExpense(editedExpenseId as string);
		router.back();
	};

	const handleCancel = () => {
		router.back();
	};

	const handleSubmit = (expenseData: ExpenseData) => {
		if (isEditing) {
			updateExpense(editedExpenseId as string, expenseData);
		} else {
			addExpense(expenseData);
		}
		router.back();
	};

	return (
		<SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
			<Stack.Screen
				options={{
					title: isEditing ? 'Edit Expense' : 'Add Expense',
				}}
			/>
			<ExpenseForm
				submitButtonLabel={isEditing ? 'Update' : 'Add'}
				onCancel={handleCancel}
				onSubmit={handleSubmit}
			/>
			{isEditing && (
				<View style={styles.deleteContainer}>
					<IconButton
						icon="trash"
						size={36}
						color={GLOBAL_STYLES.colors.error500}
						onPress={handleDeleteExpense}
					/>
				</View>
			)}
		</SafeAreaView>
	);
};

export default ManageExpensePage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: GLOBAL_STYLES.colors.primary800,
	},
	deleteContainer: {
		marginTop: 16,
		paddingTop: 8,
		borderTopWidth: 2,
		borderTopColor: GLOBAL_STYLES.colors.primary200,
		alignItems: 'center',
	},
});

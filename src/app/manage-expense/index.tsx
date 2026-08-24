import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { GLOBAL_STYLES } from '@/constants/styles';
import { ExpensesContext } from '@/store/expenses-context';
import { deleteExpense, storeExpense, updateExpense } from '@/utils/http';


import ExpenseForm, { type ExpenseData } from '@/components/ManageExpense/ExpenseForm';
import IconButton from '@/components/UI/IconButton';

const ManageExpensePage = () => {
	const router = useRouter();
	const { expenses, addExpense, updateExpense: updateExpenseCtx, deleteExpense: deleteExpenseCtx } =
		useContext(ExpensesContext);

	const { editedExpenseId } = useLocalSearchParams<{ editedExpenseId: string }>();
	const isEditing = !!editedExpenseId;
	const selectedExpense = expenses.find((expense) => expense.id === editedExpenseId);

	const handleDeleteExpense = async () => {
		deleteExpenseCtx(editedExpenseId);
		await deleteExpense(editedExpenseId);
		router.back();
	};

	const handleCancel = () => {
		router.back();
	};

	const handleSubmit = async (expenseData: ExpenseData) => {
		if (isEditing) {
			updateExpenseCtx(editedExpenseId, expenseData);
			await updateExpense(editedExpenseId, expenseData);
		} else {
			const id = await storeExpense(expenseData);
			addExpense({ id, ...expenseData });
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
				defaultValues={selectedExpense}
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

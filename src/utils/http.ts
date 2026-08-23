import axios from 'axios';

import { ExpenseData } from '@/components/ManageExpense/ExpenseForm';

export const storeExpense = async (expenseData: ExpenseData) => {
	await axios.post(
		'https://tracker-app-rn-a829b-default-rtdb.firebaseio.com/expenses.json',
		expenseData,
	);
};

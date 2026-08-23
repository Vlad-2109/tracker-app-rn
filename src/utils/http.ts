import axios from 'axios';

import { ExpenseData } from '@/components/ManageExpense/ExpenseForm';

const BACKEND_URL = 'https://tracker-app-rn-a829b-default-rtdb.firebaseio.com';

export const storeExpense = async (expenseData: ExpenseData) => {
	await axios.post(BACKEND_URL + '/expenses.json', expenseData);
};

export const fetchExpenses = async () => {
	const response = await axios.get(BACKEND_URL + '/expenses.json');

	const expenses = [];

	for (const key in response.data) {
		const expenseObj = {
			id: key,
			amount: response.data[key].amount,
			date: new Date(response.data[key].date),
			description: response.data[key].description,
		};
		expenses.push(expenseObj);
	}

	return expenses;
};

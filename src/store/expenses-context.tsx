import { createContext, useReducer } from 'react';
import * as Crypto from 'expo-crypto';

import { DUMMY_EXPENSES } from '@/data/expenses';
import { Expense } from '@/types';

type ExpensesContextType = {
	expenses: Expense[];
	addExpense: ({ description, amount, date }: Omit<Expense, 'id'>) => void;
	deleteExpense: (id: string) => void;
	updateExpense: (
		id: string,
		{ description, amount, date }: Omit<Expense, 'id'>,
	) => void;
};

type ExpensesContextProviderProps = {
	children: React.ReactNode;
};

enum ExpensesActionKind {
	ADD = 'ADD',
	DELETE = 'DELETE',
	UPDATE = 'UPDATE',
}

type ExpensesAction =
	| { type: ExpensesActionKind.ADD; payload: Omit<Expense, 'id'> }
	| { type: ExpensesActionKind.DELETE; payload: string }
	| {
			type: ExpensesActionKind.UPDATE;
			payload: { id: string; data: Omit<Expense, 'id'> };
	  };

const ExpensesContext = createContext<ExpensesContextType>({
	expenses: [],
	addExpense: () => {},
	deleteExpense: () => {},
	updateExpense: () => {},
});

const expensesReducer = (state: Expense[], action: ExpensesAction) => {
	const { type, payload } = action;
	switch (type) {
		case ExpensesActionKind.ADD:
			return [{ id: Crypto.randomUUID(), ...payload }, ...state];
		case ExpensesActionKind.DELETE:
			return state.filter((expense) => expense.id !== payload);
		case ExpensesActionKind.UPDATE:
                const updatableExpenseIndex = state.findIndex((expense) => expense.id === payload.id);
                const updatableExpense = state[updatableExpenseIndex];
                const updatedItem = { ...updatableExpense, ...payload.data };
                const updatedExpenses = [...state];
                updatedExpenses[updatableExpenseIndex] = updatedItem;
                return updatedExpenses;
		default:
			return state;
	}
};

const ExpensesContextProvider = ({
	children,
}: ExpensesContextProviderProps) => {
	const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

	const addExpense = (expenseData: Omit<Expense, 'id'>) => {
		dispatch({ type: ExpensesActionKind.ADD, payload: expenseData });
	};

	const deleteExpense = (id: string) => {
		dispatch({ type: ExpensesActionKind.DELETE, payload: id });
	};

	const updateExpense = (id: string, expenseData: Omit<Expense, 'id'>) => {
		dispatch({
			type: ExpensesActionKind.UPDATE,
			payload: { id, data: expenseData },
		});
	};

	const value = {
		expenses: expensesState,
		addExpense,
		deleteExpense,
		updateExpense,
	};

	return <ExpensesContext value={value}>{children}</ExpensesContext>;
};

export default ExpensesContextProvider;
export { ExpensesContext };

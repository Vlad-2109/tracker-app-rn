import { FlatList, StyleSheet } from 'react-native';

import ExpenseItem from './ExpenseItem';

import { Expense } from '@/types';

type ExpensesListProps = {
	expenses: Expense[];
};

const ExpensesList = ({ expenses }: ExpensesListProps) => {
	return (
		<FlatList
			keyExtractor={(item) => item.id}
			data={expenses}
			renderItem={({ item }) => <ExpenseItem {...item} />}
		/>
	);
};

export default ExpensesList;

const styles = StyleSheet.create({});

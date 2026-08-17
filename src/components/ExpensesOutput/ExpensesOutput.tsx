import { StyleSheet, View } from 'react-native';

import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

import { GLOBAL_STYLES } from '@/constants/styles';
import { Expense } from '@/types';

type ExpensesOutputProps = {
	expenses: Expense[];
	expensesPeriod: string;
};

const ExpensesOutput = ({ expenses, expensesPeriod }: ExpensesOutputProps) => {
	return (
		<View style={styles.container}>
			<ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
			<ExpensesList expenses={expenses} />
		</View>
	);
};

export default ExpensesOutput;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 24,
		paddingTop: 24,
		paddingBottom: 0,
		backgroundColor: GLOBAL_STYLES.colors.primary700,
	},
});

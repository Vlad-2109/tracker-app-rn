import { StyleSheet, View } from 'react-native';

import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

import { GLOBAL_STYLES } from '@/constants/styles';
import { DUMMY_EXPENSES } from '@/data/expenses';

type ExpensesOutputProps = {
	expensesPeriod: string;
};

const ExpensesOutput = ({ expensesPeriod }: ExpensesOutputProps) => {
	return (
		<View style={styles.container}>
			<ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
			<ExpensesList expenses={DUMMY_EXPENSES} />
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

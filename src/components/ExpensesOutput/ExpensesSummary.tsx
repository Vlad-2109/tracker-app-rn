import { StyleSheet, Text, View } from 'react-native';

import { GLOBAL_STYLES } from '@/constants/styles';
import { Expense } from '@/types';

type ExpensesSummaryProps = {
	expenses: Expense[];
	periodName: string;
};

const ExpensesSummary = ({ expenses, periodName }: ExpensesSummaryProps) => {
	const expensesSum = expenses.reduce(
		(sum, expense) => sum + expense.amount,
		0,
	);

	return (
		<View style={styles.container}>
			<Text style={styles.period}>{periodName}</Text>
			<Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
		</View>
	);
};

export default ExpensesSummary;

const styles = StyleSheet.create({
	container: {
		padding: 8,
		backgroundColor: GLOBAL_STYLES.colors.primary50,
		borderRadius: 6,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	period: {
		fontSize: 12,
		color: GLOBAL_STYLES.colors.primary400,
	},
	sum: {
		fontSize: 16,
		fontWeight: 'bold',
		color: GLOBAL_STYLES.colors.primary500,
	},
});

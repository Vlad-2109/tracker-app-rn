import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ExpensesContext } from '@/store/expenses-context';

import ExpensesOutput from '@/components/ExpensesOutput/ExpensesOutput';
import { getDateMinusDays } from '@/utils/date';

const RecentExpensesPage = () => {
	const { expenses } = useContext(ExpensesContext);

	const recentExpenses = expenses.filter((expense) => {
		const today = new Date();
		const date7DaysAgo = getDateMinusDays(today, 7);

		return expense.date > date7DaysAgo && expense.date <= today;
	});

	return (
		<SafeAreaView edges={['left', 'right']} style={styles.container}>
			<ExpensesOutput
				expenses={recentExpenses}
				expensesPeriod="Last 7 Days"
				fallbackText="No expenses registered for the last 7 days."
			/>
		</SafeAreaView>
	);
};

export default RecentExpensesPage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

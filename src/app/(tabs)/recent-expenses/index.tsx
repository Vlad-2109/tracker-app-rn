import { useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ExpensesContext } from '@/store/expenses-context';
import { getDateMinusDays } from '@/utils/date';
import { fetchExpenses } from '@/utils/http';

import ExpensesOutput from '@/components/ExpensesOutput/ExpensesOutput';

const RecentExpensesPage = () => {
	const { expenses } = useContext(ExpensesContext);

	useEffect(() => {
		const getExpenses = async () => {
			const response = await fetchExpenses();
			console.log(response);
		};

		getExpenses();
	}, []);

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

import { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ExpensesContext } from '@/store/expenses-context';
import { getDateMinusDays } from '@/utils/date';
import { fetchExpenses } from '@/utils/http';

import ExpensesOutput from '@/components/ExpensesOutput/ExpensesOutput';
import ErrorOverlay from '@/components/UI/ErrorOverlay';
import LoadingOverlay from '@/components/UI/LoadingOverlay';

const RecentExpensesPage = () => {
	const [isFetching, setIsFetching] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const { expenses, setExpenses } = useContext(ExpensesContext);

	useEffect(() => {
		const getExpenses = async () => {
			setIsFetching(true);
			try {
				const response = await fetchExpenses();
				setExpenses(response);
			} catch (error) {
				setError('Could not fetch expenses!');
			} finally {
				setIsFetching(false);
			}
		};

		getExpenses();
	}, []);

	const recentExpenses = expenses.filter((expense) => {
		const today = new Date();
		const date7DaysAgo = getDateMinusDays(today, 7);

		return expense.date > date7DaysAgo && expense.date <= today;
	});

	const handleError = () => {
		setError(null);
	};

	if (error && !isFetching) {
		return <ErrorOverlay message={error} onConfirm={handleError} />;
	}

	if (isFetching) {
		return <LoadingOverlay />;
	}

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

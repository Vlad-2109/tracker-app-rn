import { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ExpensesContext } from '@/store/expenses-context';
import { fetchExpenses } from '@/utils/http';

import ExpensesOutput from '@/components/ExpensesOutput/ExpensesOutput';
import LoadingOverlay from '@/components/UI/LoadingOverlay';

const AllExpensesPage = () => {
	const [isFetching, setIsFetching] = useState<boolean>(true);
	const { expenses, setExpenses } = useContext(ExpensesContext);

	useEffect(() => {
		const getExpenses = async () => {
			setIsFetching(true);
			const response = await fetchExpenses();
			setExpenses(response);
			setIsFetching(false);
		};

		getExpenses();
	}, []);

	if (isFetching) {
		return <LoadingOverlay />;
	}

	return (
		<SafeAreaView edges={['left', 'right']} style={styles.container}>
			<ExpensesOutput
				expenses={expenses}
				expensesPeriod="Total"
				fallbackText="No registered expenses found."
			/>
		</SafeAreaView>
	);
};

export default AllExpensesPage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

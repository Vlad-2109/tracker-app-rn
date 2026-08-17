import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ExpensesOutput from '@/components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '@/store/expenses-context';

const AllExpensesPage = () => {
	const { expenses } = useContext(ExpensesContext);

	return (
		<SafeAreaView edges={['left', 'right']} style={styles.container}>
			<ExpensesOutput expenses={expenses} expensesPeriod="Total" />
		</SafeAreaView>
	);
};

export default AllExpensesPage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

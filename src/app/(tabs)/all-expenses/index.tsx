import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ExpensesOutput from '@/components/ExpensesOutput/ExpensesOutput';

const AllExpensesPage = () => {
	return (
		<SafeAreaView edges={['left', 'right']} style={styles.container}>
			<ExpensesOutput expensesPeriod="Total" />
		</SafeAreaView>
	);
};

export default AllExpensesPage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

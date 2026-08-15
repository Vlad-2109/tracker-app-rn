import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ExpensesOutput from '@/components/ExpensesOutput/ExpensesOutput';

const RecentExpensesPage = () => {
	return (
		<SafeAreaView edges={['left', 'right']} style={styles.container}>
			<ExpensesOutput expensesPeriod="Last 7 Days" />
		</SafeAreaView>
	);
};

export default RecentExpensesPage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

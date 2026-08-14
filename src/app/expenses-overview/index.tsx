import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ExpensesOverviewPage = () => {
	return (
		<SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
			<Text>Expenses Overview Page</Text>
		</SafeAreaView>
	);
};

export default ExpensesOverviewPage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

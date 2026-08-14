import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const RecentExpensesPage = () => {
	return (
		<SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
			<Text>Recent Expenses Page</Text>
		</SafeAreaView>
	);
};

export default RecentExpensesPage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

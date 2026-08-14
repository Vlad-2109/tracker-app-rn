import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AllExpensesPage = () => {
	return (
		<SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
			<Text>All Expenses Page</Text>
		</SafeAreaView>
	);
};

export default AllExpensesPage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

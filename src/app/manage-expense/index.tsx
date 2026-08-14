import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ManageExpensePage = () => {
	return (
		<SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
			<Text>Manage Expense Page</Text>
		</SafeAreaView>
	);
};

export default ManageExpensePage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

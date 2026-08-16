import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ManageExpensePage = () => {
	const { editedExpenseId } = useLocalSearchParams();
	const isEditing = !!editedExpenseId;

	return (
		<SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
			<Stack.Screen
				options={{
					title: isEditing ? 'Edit Expense' : 'Add Expense',
				}}
			/>
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

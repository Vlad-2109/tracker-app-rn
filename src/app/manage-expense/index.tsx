import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import IconButton from '@/components/UI/IconButton';
import { GLOBAL_STYLES } from '@/constants/styles';

const ManageExpensePage = () => {
	const { editedExpenseId } = useLocalSearchParams();
	const isEditing = !!editedExpenseId;

	const handleDeleteExpense = () => {
		console.log('Delete expense');
	};

	return (
		<SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
			<Stack.Screen
				options={{
					title: isEditing ? 'Edit Expense' : 'Add Expense',
				}}
			/>
			{isEditing && (
				<View style={styles.deleteContainer}>
					<IconButton
						icon="trash"
						size={36}
						color={GLOBAL_STYLES.colors.error500}
						onPress={handleDeleteExpense}
					/>
				</View>
			)}
		</SafeAreaView>
	);
};

export default ManageExpensePage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: GLOBAL_STYLES.colors.primary800,
	},
	deleteContainer: {
		marginTop: 16,
		paddingTop: 8,
		borderTopWidth: 2,
		borderTopColor: GLOBAL_STYLES.colors.primary200,
		alignItems: 'center',
	},
});

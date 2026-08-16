import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Button from '@/components/UI/Button';
import IconButton from '@/components/UI/IconButton';
import { GLOBAL_STYLES } from '@/constants/styles';

const ManageExpensePage = () => {
	const router = useRouter();

	const { editedExpenseId } = useLocalSearchParams();
	const isEditing = !!editedExpenseId;

	const handleDeleteExpense = () => {
		console.log('Delete expense');
		router.back();
	};

	const handleCancel = () => {
		console.log('Cancel');
		router.back();
	};

	const handleConfirm = () => {
		console.log('Confirm');
		router.back();
	};

	return (
		<SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
			<Stack.Screen
				options={{
					title: isEditing ? 'Edit Expense' : 'Add Expense',
				}}
			/>
			<View style={styles.buttonsContainer}>
				<Button mode="flat" style={styles.button} onPress={handleCancel}>
					Cancel
				</Button>
				<Button style={styles.button} onPress={handleConfirm}>
					{isEditing ? 'Update' : 'Add'}
				</Button>
			</View>
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
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		minWidth: 120,
		marginHorizontal: 8,
	},
	deleteContainer: {
		marginTop: 16,
		paddingTop: 8,
		borderTopWidth: 2,
		borderTopColor: GLOBAL_STYLES.colors.primary200,
		alignItems: 'center',
	},
});

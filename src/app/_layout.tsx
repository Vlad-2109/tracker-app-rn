import { GLOBAL_STYLES } from '@/constants/styles';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {
	SafeAreaProvider,
	initialWindowMetrics,
} from 'react-native-safe-area-context';

export default function RootLayout() {
	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			<StatusBar style="auto" />
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen
					name="expenses-overview"
					options={{ title: 'Expenses Overview' }}
				/>
				<Stack.Screen
					name="manage-expense"
					options={{
						title: 'Manage Expense',
						presentation: 'modal',
						headerStyle: {
							backgroundColor: GLOBAL_STYLES.colors.primary500,
						},
						headerTintColor: '#fff',
					}}
				/>
			</Stack>
		</SafeAreaProvider>
	);
}

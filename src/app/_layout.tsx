import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {
	SafeAreaProvider,
	initialWindowMetrics,
} from 'react-native-safe-area-context';

import ExpensesContextProvider from '@/store/expenses-context';

import { GLOBAL_STYLES } from '@/constants/styles';

export default function RootLayout() {
	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			<StatusBar style="light" />
			<ExpensesContextProvider>
				<Stack>
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
					<Stack.Screen
						name="expenses-overview"
						options={{ title: 'Expenses Overview' }}
					/>
					<Stack.Screen
						name="manage-expense"
						options={{
							presentation: 'modal',
							headerStyle: {
								backgroundColor: GLOBAL_STYLES.colors.primary500,
							},
							headerTintColor: '#fff',
						}}
					/>
				</Stack>
			</ExpensesContextProvider>
		</SafeAreaProvider>
	);
}

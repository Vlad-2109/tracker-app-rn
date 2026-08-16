import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

import { GLOBAL_STYLES } from '@/constants/styles';

import IconButton from '@/components/UI/IconButton';

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerStyle: {
					backgroundColor: GLOBAL_STYLES.colors.primary500,
				},
				headerTintColor: '#fff',
				tabBarStyle: {
					backgroundColor: GLOBAL_STYLES.colors.primary500,
				},
				tabBarActiveTintColor: GLOBAL_STYLES.colors.accent500,
				tabBarInactiveTintColor: GLOBAL_STYLES.colors.primary200,
				headerRight: ({ tintColor }) => (
					<IconButton
						icon="add"
						size={24}
						color={tintColor ?? '#fff'}
						onPress={() => {}}
					/>
				),
			}}
		>
			<Tabs.Screen
				name="recent-expenses"
				options={{
					title: 'Recent Expenses',
					tabBarLabel: 'Recent',
					tabBarIcon: ({ color, size }) => (
						<Ionicons color={color} size={size} name="hourglass" />
					),
				}}
			/>
			<Tabs.Screen
				name="all-expenses"
				options={{
					title: 'All Expenses',
					tabBarLabel: 'All Expenses',
					tabBarIcon: ({ color, size }) => (
						<Ionicons color={color} size={size} name="calendar" />
					),
				}}
			/>
		</Tabs>
	);
}

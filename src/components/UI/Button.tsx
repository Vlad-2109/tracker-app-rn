import {
	Pressable,
	StyleProp,
	StyleSheet,
	Text,
	View,
	ViewStyle,
} from 'react-native';

import { GLOBAL_STYLES } from '@/constants/styles';

type ButtonProps = {
	children: React.ReactNode;
	mode?: 'flat' | 'elevated';
	style?: StyleProp<ViewStyle>;
	onPress: () => void;
};

const Button = ({
	children,
	mode = 'elevated',
	style,
	onPress,
}: ButtonProps) => {
	const isFlatMode = mode === 'flat';

	return (
		<View style={style}>
			<Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
				<View style={[styles.button, isFlatMode && styles.flat]}>
					<Text style={[styles.buttonText, isFlatMode && styles.flatText]}>
						{children}
					</Text>
				</View>
			</Pressable>
		</View>
	);
};

export default Button;

const styles = StyleSheet.create({
	button: {
		borderRadius: 4,
		padding: 8,
		backgroundColor: GLOBAL_STYLES.colors.primary500,
	},
	flat: {
		backgroundColor: 'transparent',
	},
	buttonText: {
		color: 'white',
		textAlign: 'center',
	},
	flatText: {
		color: GLOBAL_STYLES.colors.primary200,
	},
	pressed: {
		opacity: 0.75,
		backgroundColor: GLOBAL_STYLES.colors.primary100,
		borderRadius: 4,
	},
});

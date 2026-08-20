import { GLOBAL_STYLES } from '@/constants/styles';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	type StyleProp,
	type TextInputProps,
	type TextStyle,
} from 'react-native';

type InputProps = {
	label: string;
	textInputConfig: TextInputProps;
};

const Input = ({ label, textInputConfig }: InputProps) => {
	const inputStyles: StyleProp<TextStyle>[] = [styles.input];

	if (textInputConfig && textInputConfig.multiline) {
		inputStyles.push(styles.inputMultiline);
	}

	return (
		<View style={styles.inputContainer}>
			<Text style={styles.label}>{label}</Text>
			<TextInput {...textInputConfig} style={inputStyles} />
		</View>
	);
};

export default Input;

const styles = StyleSheet.create({
	inputContainer: {
		marginHorizontal: 4,
		marginVertical: 8,
	},
	label: {
		fontSize: 12,
		color: GLOBAL_STYLES.colors.primary100,
		marginBottom: 4,
	},
	input: {
		backgroundColor: GLOBAL_STYLES.colors.primary100,
		color: GLOBAL_STYLES.colors.primary700,
		padding: 6,
		borderRadius: 6,
		fontSize: 18,
	},
	inputMultiline: {
		minHeight: 100,
		textAlignVertical: 'top',
	},
});

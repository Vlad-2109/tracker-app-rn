import { GLOBAL_STYLES } from '@/constants/styles';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	ViewStyle,
	type StyleProp,
	type TextInputProps,
	type TextStyle,
} from 'react-native';

type InputProps = {
	label: string;
	invalid: boolean;
	style?: StyleProp<ViewStyle>;
	textInputConfig: TextInputProps;
};

const Input = ({ label, invalid, style, textInputConfig }: InputProps) => {
	const inputStyles: StyleProp<TextStyle>[] = [styles.input];

	if (textInputConfig && textInputConfig.multiline) {
		inputStyles.push(styles.inputMultiline);
	}

	if (invalid) {
		inputStyles.push(styles.invalidInput);
	}

	return (
		<View style={[styles.inputContainer, style]}>
			<Text style={[styles.label, invalid && styles.invalidLabel]}>
				{label}
			</Text>
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
		width: '100%',
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
	invalidLabel: {
		color: GLOBAL_STYLES.colors.error500,
	},
	invalidInput: {
		backgroundColor: GLOBAL_STYLES.colors.error50,
	},
});

import {
	StyleSheet,
	Text,
	TextInput,
	View,
	type TextInputProps,
} from 'react-native';

type InputProps = {
	label: string;
	textInputConfig: TextInputProps;
};

const Input = ({ label, textInputConfig }: InputProps) => {
	return (
		<View>
			<Text>{label}</Text>
			<TextInput {...textInputConfig} />
		</View>
	);
};

export default Input;

const styles = StyleSheet.create({});

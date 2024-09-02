import React from 'react';
import {Switch as SwitchRN} from 'react-native';

interface ISwitch {
	isChecked: boolean;
	onToggle: () => void;
}

const Switch: React.FC<ISwitch> = props => {
	const {isChecked, onToggle} = props;

	return (
		<SwitchRN
			value={isChecked}
			thumbColor="white"
			onValueChange={onToggle}
			ios_backgroundColor="gray"
			trackColor={{false: 'red', true: 'lime'}}
		/>
	);
};

export default Switch;

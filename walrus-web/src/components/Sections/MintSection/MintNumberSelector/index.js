import React from 'react'
import {
	SelectorContainer,
	SelectorItem,
	SelectorTextInput,
	SelectorWrapper
} from './NumberSelectorElements';

const MintNumberSelector = props => {

	const handleOnChange = val => {
		if (props.value + val < 1 || props.value + val > 3) return;
		props.valueChange(props.value + val);
	}

	return (
		<>
			<SelectorContainer>
				<SelectorWrapper>
					<SelectorItem onClick={ () => handleOnChange(-1) }>-</SelectorItem>
					<SelectorTextInput> {props.value} </SelectorTextInput>
					<SelectorItem onClick={ () => handleOnChange(1)}>+</SelectorItem>
				</SelectorWrapper>
			</SelectorContainer>
		</>
	);
}

export default MintNumberSelector
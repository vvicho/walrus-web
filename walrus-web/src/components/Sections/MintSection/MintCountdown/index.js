import React, { useState } from 'react'
import { LAUNCH_DATE } from '../../../../constants';
import {
	CountdownCell,
	CountdownContainer,
	CountdownGrid,
	CountdownNumber,
	CountdownTitle,
	CountdownWrapper
} from './CountdownElements';

const MintCountdownCounter = props => {
	var countDownDate = LAUNCH_DATE;
	const [timeUntilMint, setTimeUntilMint] = useState({
		days: '--',
		hours: '--',
		minutes: '--',
		seconds: '--',
	});

	var x = setInterval(() => {
		var now = new Date().getTime();
		var distance = countDownDate - now;
		if (distance < 0) {
			props.handleSaleStarted(true);
			clearInterval(x);
			return;
		}
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		setTimeUntilMint({
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
		});
	}, 1000);

	const formatNumber = num => {
		return num.toLocaleString('en-US', {
			minimumIntegerDigits: 2,
			useGrouping: false
		});

	}

	return (
		<>
			<CountdownContainer>
				<CountdownWrapper>
					<CountdownTitle>Whacky Walrus NFTs will launch in:</CountdownTitle>
					<CountdownGrid>
						<CountdownCell>
							<CountdownNumber>{formatNumber(timeUntilMint.days)}</CountdownNumber>
							<CountdownTitle>Days</CountdownTitle>
						</CountdownCell>
						<CountdownCell>
							<CountdownNumber>{formatNumber(timeUntilMint.hours)}</CountdownNumber>
							<CountdownTitle>Hours</CountdownTitle>
						</CountdownCell>
						<CountdownCell>
							<CountdownNumber>{formatNumber(timeUntilMint.minutes)}</CountdownNumber>
							<CountdownTitle>Minutes</CountdownTitle>
						</CountdownCell>
						<CountdownCell>
							<CountdownNumber>{formatNumber(timeUntilMint.seconds)}</CountdownNumber>
							<CountdownTitle>Seconds</CountdownTitle>
						</CountdownCell>
					</CountdownGrid>
				</CountdownWrapper>
			</CountdownContainer>	  
		</>
	);
}

export default MintCountdownCounter;
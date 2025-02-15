import type { JSX } from 'react';

interface SvgIconMap {
	[key: string]: JSX.Element;
}

export const icons: SvgIconMap = {
	'clear-day-fill': (
		<>
			<defs>
				<linearGradient
					id='meteoconsClearDayFill0'
					x1={150}
					x2={234}
					y1={119.2}
					y2={264.8}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#fbbf24'></stop>
					<stop offset={0.5} stopColor='#fbbf24'></stop>
					<stop offset={1} stopColor='#f59e0b'></stop>
				</linearGradient>
				<symbol id='meteoconsClearDayFill1' viewBox='0 0 384 384'>
					<circle
						cx={192}
						cy={192}
						r={84}
						fill='url(#meteoconsClearDayFill0)'
						stroke='#f8af18'
						strokeMiterlimit={10}
						strokeWidth={6}
					></circle>
					<path
						fill='none'
						stroke='#fbbf24'
						strokeLinecap='round'
						strokeMiterlimit={10}
						strokeWidth={24}
						d='M192 61.7V12m0 360v-49.7m92.2-222.5l35-35M64.8 319.2l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M61.7 192H12m360 0h-49.7'
					>
						<animateTransform
							additive='sum'
							attributeName='transform'
							dur='6s'
							repeatCount='indefinite'
							type='rotate'
							values='0 192 192; 45 192 192'
						></animateTransform>
					</path>
				</symbol>
			</defs>
			<use
				width={384}
				height={384}
				href='#meteoconsClearDayFill1'
				transform='translate(64 64)'
			></use>
		</>
	),
	'partly-cloudy-day-fill': (
		<>
			<defs>
				<symbol id='meteoconsPartlyCloudyDayFill0' viewBox='0 0 196 196'>
					<circle
						cx={98}
						cy={98}
						r={40}
						fill='url(#meteoconsPartlyCloudyDayFill4)'
						stroke='#f8af18'
						strokeMiterlimit={10}
						strokeWidth={4}
					></circle>
					<path
						fill='none'
						stroke='#fbbf24'
						strokeLinecap='round'
						strokeMiterlimit={10}
						strokeWidth={12}
						d='M98 31.4V6m0 184v-25.4M145.1 51l18-17.9M33 163l18-17.9M51 51L33 33m130.1 130.1l-18-18M6 98h25.4M190 98h-25.4'
					>
						<animateTransform
							additive='sum'
							attributeName='transform'
							dur='6s'
							repeatCount='indefinite'
							type='rotate'
							values='0 98 98; 45 98 98'
						></animateTransform>
					</path>
				</symbol>
				<symbol id='meteoconsPartlyCloudyDayFill1' viewBox='0 0 350 222'>
					<path
						fill='url(#meteoconsPartlyCloudyDayFill3)'
						stroke='#e6effc'
						strokeMiterlimit={10}
						strokeWidth={6}
						d='m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z'
					></path>
				</symbol>
				<symbol id='meteoconsPartlyCloudyDayFill2' viewBox='0 0 363 258'>
					<use
						width={196}
						height={196}
						href='#meteoconsPartlyCloudyDayFill0'
					></use>
					<use
						width={350}
						height={222}
						href='#meteoconsPartlyCloudyDayFill1'
						transform='translate(13 36)'
					></use>
				</symbol>
				<linearGradient
					id='meteoconsPartlyCloudyDayFill3'
					x1={99.5}
					x2={232.6}
					y1={30.7}
					y2={261.4}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#f3f7fe'></stop>
					<stop offset={0.5} stopColor='#f3f7fe'></stop>
					<stop offset={1} stopColor='#deeafb'></stop>
				</linearGradient>
				<linearGradient
					id='meteoconsPartlyCloudyDayFill4'
					x1={78}
					x2={118}
					y1={63.4}
					y2={132.7}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#fbbf24'></stop>
					<stop offset={0.5} stopColor='#fbbf24'></stop>
					<stop offset={1} stopColor='#f59e0b'></stop>
				</linearGradient>
			</defs>
			<use
				width={363}
				height={258}
				href='#meteoconsPartlyCloudyDayFill2'
				transform='translate(68 109)'
			></use>
		</>
	),
	'cloudy-fill': (
		<>
			<defs>
				<linearGradient
					id='meteoconsCloudyFill0'
					x1={99.5}
					x2={232.6}
					y1={30.7}
					y2={261.4}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#f3f7fe'></stop>
					<stop offset={0.5} stopColor='#f3f7fe'></stop>
					<stop offset={1} stopColor='#deeafb'></stop>
				</linearGradient>
				<symbol id='meteoconsCloudyFill1' viewBox='0 0 350 222'>
					<path
						fill='url(#meteoconsCloudyFill0)'
						stroke='#e6effc'
						strokeMiterlimit={10}
						strokeWidth={6}
						d='m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z'
					></path>
				</symbol>
			</defs>
			<use
				width={350}
				height={222}
				href='#meteoconsCloudyFill1'
				transform='translate(81 145)'
			>
				<animateTransform
					additive='sum'
					attributeName='transform'
					dur='6s'
					repeatCount='indefinite'
					type='translate'
					values='-18 0; 18 0; -18 0'
				></animateTransform>
			</use>
		</>
	),
	'extreme-fill': (
		<>
			<defs>
				<symbol id='meteoconsExtremeFill0' viewBox='0 0 200.3 126.1'>
					<path
						fill='url(#meteoconsExtremeFill3)'
						stroke='#848b98'
						strokeMiterlimit={10}
						d='M.5 93.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5A32.4 32.4 0 0 0 .5 93.1Z'
						strokeWidth={1}
					></path>
				</symbol>
				<symbol id='meteoconsExtremeFill1' viewBox='0 0 350 222'>
					<path
						fill='url(#meteoconsExtremeFill4)'
						stroke='#5b6472'
						strokeMiterlimit={10}
						strokeWidth={6}
						d='m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z'
					></path>
				</symbol>
				<symbol id='meteoconsExtremeFill2' viewBox='0 0 398 222'>
					<use
						width={200.3}
						height={126.1}
						href='#meteoconsExtremeFill0'
						transform='translate(198 27)'
					>
						<animateTransform
							additive='sum'
							attributeName='transform'
							dur='6s'
							repeatCount='indefinite'
							type='translate'
							values='-9 0; 9 0; -9 0'
						></animateTransform>
					</use>
					<use width={350} height={222} href='#meteoconsExtremeFill1'>
						<animateTransform
							additive='sum'
							attributeName='transform'
							dur='6s'
							repeatCount='indefinite'
							type='translate'
							values='-18 0; 18 0; -18 0'
						></animateTransform>
					</use>
				</symbol>
				<linearGradient
					id='meteoconsExtremeFill3'
					x1={52.7}
					x2={133.4}
					y1={9.6}
					y2={149.3}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#9ca3af'></stop>
					<stop offset={0.5} stopColor='#9ca3af'></stop>
					<stop offset={1} stopColor='#6b7280'></stop>
				</linearGradient>
				<linearGradient
					id='meteoconsExtremeFill4'
					x1={99.5}
					x2={232.6}
					y1={30.7}
					y2={261.4}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#6b7280'></stop>
					<stop offset={0.5} stopColor='#6b7280'></stop>
					<stop offset={1} stopColor='#4b5563'></stop>
				</linearGradient>
			</defs>
			<use
				width={398}
				height={222}
				href='#meteoconsExtremeFill2'
				transform='translate(68.84 145)'
			></use>
		</>
	),
	'overcast-rain-fill': (
		<>
			<defs>
				<linearGradient
					id='meteoconsOvercastRainFill0'
					x1={99.5}
					x2={232.6}
					y1={30.7}
					y2={261.4}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#f3f7fe'></stop>
					<stop offset={0.5} stopColor='#f3f7fe'></stop>
					<stop offset={1} stopColor='#deeafb'></stop>
				</linearGradient>
				<linearGradient
					id='meteoconsOvercastRainFill1'
					x1={52.7}
					x2={133.4}
					y1={9.6}
					y2={149.3}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#9ca3af'></stop>
					<stop offset={0.5} stopColor='#9ca3af'></stop>
					<stop offset={1} stopColor='#6b7280'></stop>
				</linearGradient>
				<linearGradient
					id='meteoconsOvercastRainFill2'
					x1={1381.3}
					x2={1399.5}
					y1={-1144.7}
					y2={-1097.4}
					gradientTransform='rotate(-9 8002.567 8233.063)'
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#0b65ed'></stop>
					<stop offset={0.5} stopColor='#0a5ad4'></stop>
					<stop offset={1} stopColor='#0950bc'></stop>
				</linearGradient>
				<linearGradient
					id='meteoconsOvercastRainFill3'
					x1={1436.7}
					x2={1454.9}
					y1={-1137}
					y2={-1089.7}
					gradientTransform='rotate(-9 8009.537 8233.037)'
					href='#meteoconsOvercastRainFill2'
				></linearGradient>
				<linearGradient
					id='meteoconsOvercastRainFill4'
					x1={1492.1}
					x2={1510.3}
					y1={-1129.3}
					y2={-1082.1}
					gradientTransform='rotate(-9 8016.566 8233.078)'
					href='#meteoconsOvercastRainFill2'
				></linearGradient>
				<symbol id='meteoconsOvercastRainFill5' viewBox='0 0 200.3 126.1'>
					<path
						fill='url(#meteoconsOvercastRainFill1)'
						stroke='#848b98'
						strokeMiterlimit={10}
						d='M.5 93.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5A32.4 32.4 0 0 0 .5 93.1Z'
						strokeWidth={1}
					></path>
				</symbol>
				<symbol id='meteoconsOvercastRainFill6' viewBox='0 0 350 222'>
					<path
						fill='url(#meteoconsOvercastRainFill0)'
						stroke='#e6effc'
						strokeMiterlimit={10}
						strokeWidth={6}
						d='m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z'
					></path>
				</symbol>
				<symbol id='meteoconsOvercastRainFill7' viewBox='0 0 398 222'>
					<use
						width={200.3}
						height={126.1}
						href='#meteoconsOvercastRainFill5'
						transform='translate(198 27)'
					>
						<animateTransform
							additive='sum'
							attributeName='transform'
							dur='6s'
							repeatCount='indefinite'
							type='translate'
							values='-9 0; 9 0; -9 0'
						></animateTransform>
					</use>
					<use width={350} height={222} href='#meteoconsOvercastRainFill6'>
						<animateTransform
							additive='sum'
							attributeName='transform'
							dur='6s'
							repeatCount='indefinite'
							type='translate'
							values='-18 0; 18 0; -18 0'
						></animateTransform>
					</use>
				</symbol>
				<symbol id='meteoconsOvercastRainFill8' viewBox='0 0 129 57'>
					<path
						fill='url(#meteoconsOvercastRainFill2)'
						stroke='#0a5ad4'
						strokeMiterlimit={10}
						d='M8.5 56.5a8 8 0 0 1-8-8v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z'
						opacity={0}
						strokeWidth={1}
					>
						<animateTransform
							attributeName='transform'
							type='translate'
							values='0 -60; 0 60'
							dur='0.67s'
							begin='0.2s'
							repeatCount='indefinite'
						/>
						<animate
							attributeName='opacity'
							values='0; 1; 0'
							keyTimes='0; 0.25; 1'
							dur='0.67s'
							begin='0.2s'
							repeatCount='indefinite'
						/>
					</path>

					<path
						fill='url(#meteoconsOvercastRainFill3)'
						stroke='#0a5ad4'
						strokeMiterlimit={10}
						d='M64.5 56.5a8 8 0 0 1-8-8v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z'
						opacity={0}
						strokeWidth={1}
					>
						<animateTransform
							attributeName='transform'
							type='translate'
							values='0 -60; 0 60'
							dur='0.67s'
							begin='0.67s'
							repeatCount='indefinite'
						/>
						<animate
							attributeName='opacity'
							values='0; 1; 0'
							keyTimes='0; 0.25; 1'
							dur='0.67s'
							begin='0.67s'
							repeatCount='indefinite'
						/>
					</path>
					<path
						fill='url(#meteoconsOvercastRainFill4)'
						stroke='#0a5ad4'
						strokeMiterlimit={10}
						d='M120.5 56.5a8 8 0 0 1-8-8v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z'
						opacity={0}
						strokeWidth={1}
					>
						<animateTransform
							attributeName='transform'
							type='translate'
							values='0 -60; 0 60'
							dur='0.67s'
							begin='0s'
							repeatCount='indefinite'
						/>
						<animate
							attributeName='opacity'
							values='0; 1; 0'
							keyTimes='0; 0.25; 1'
							dur='0.67s'
							begin='0s'
							repeatCount='indefinite'
						/>
					</path>
				</symbol>
			</defs>
			<use
				width={398}
				height={222}
				href='#meteoconsOvercastRainFill7'
				transform='translate(68.84 145)'
			></use>
			<use
				width={129}
				height={57}
				href='#meteoconsOvercastRainFill8'
				transform='translate(191.5 343.5)'
			></use>
		</>
	),
	'overcast-day-rain-fill': (
		<>
			<defs>
				<linearGradient
					id='meteoconsOvercastDayRainFill0'
					x1={99.5}
					x2={232.6}
					y1={30.7}
					y2={261.4}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#f3f7fe'></stop>
					<stop offset={0.5} stopColor='#f3f7fe'></stop>
					<stop offset={1} stopColor='#deeafb'></stop>
				</linearGradient>
				<linearGradient
					id='meteoconsOvercastDayRainFill1'
					x1={52.7}
					x2={133.4}
					y1={9.6}
					y2={149.3}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#9ca3af'></stop>
					<stop offset={0.5} stopColor='#9ca3af'></stop>
					<stop offset={1} stopColor='#6b7280'></stop>
				</linearGradient>
				<linearGradient
					id='meteoconsOvercastDayRainFill2'
					x1={1381.3}
					x2={1399.5}
					y1={-1144.7}
					y2={-1097.4}
					gradientTransform='rotate(-9 8002.567 8233.063)'
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#0b65ed'></stop>
					<stop offset={0.5} stopColor='#0a5ad4'></stop>
					<stop offset={1} stopColor='#0950bc'></stop>
				</linearGradient>
				<linearGradient
					id='meteoconsOvercastDayRainFill3'
					x1={1436.7}
					x2={1454.9}
					y1={-1137}
					y2={-1089.7}
					gradientTransform='rotate(-9 8009.537 8233.037)'
					href='#meteoconsOvercastDayRainFill2'
				></linearGradient>
				<linearGradient
					id='meteoconsOvercastDayRainFill4'
					x1={1492.1}
					x2={1510.3}
					y1={-1129.3}
					y2={-1082.1}
					gradientTransform='rotate(-9 8016.566 8233.078)'
					href='#meteoconsOvercastDayRainFill2'
				></linearGradient>
				<linearGradient
					id='meteoconsOvercastDayRainFill5'
					x1={78}
					x2={118}
					y1={63.4}
					y2={132.7}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#fbbf24'></stop>
					<stop offset={0.5} stopColor='#fbbf24'></stop>
					<stop offset={1} stopColor='#f59e0b'></stop>
				</linearGradient>
				<symbol id='meteoconsOvercastDayRainFill6' viewBox='0 0 196 196'>
					<circle
						cx={98}
						cy={98}
						r={40}
						fill='url(#meteoconsOvercastDayRainFill5)'
						stroke='#f8af18'
						strokeMiterlimit={10}
						strokeWidth={4}
					></circle>
					<path
						fill='none'
						stroke='#fbbf24'
						strokeLinecap='round'
						strokeMiterlimit={10}
						strokeWidth={12}
						d='M98 31.4V6m0 184v-25.4M145.1 51l18-17.9M33 163l18-17.9M51 51L33 33m130.1 130.1l-18-18M6 98h25.4M190 98h-25.4'
					>
						<animateTransform
							additive='sum'
							attributeName='transform'
							dur='6s'
							repeatCount='indefinite'
							type='rotate'
							values='0 98 98; 45 98 98'
						></animateTransform>
					</path>
				</symbol>
				<symbol id='meteoconsOvercastDayRainFill7' viewBox='0 0 200.3 126.1'>
					<path
						fill='url(#meteoconsOvercastDayRainFill1)'
						stroke='#848b98'
						strokeMiterlimit={10}
						d='M.5 93.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5A32.4 32.4 0 0 0 .5 93.1Z'
						strokeWidth={1}
					></path>
				</symbol>
				<symbol id='meteoconsOvercastDayRainFill8' viewBox='0 0 350 222'>
					<path
						fill='url(#meteoconsOvercastDayRainFill0)'
						stroke='#e6effc'
						strokeMiterlimit={10}
						strokeWidth={6}
						d='m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z'
					></path>
				</symbol>
				<symbol id='meteoconsOvercastDayRainFill9' viewBox='0 0 398 222'>
					<use
						width={200.3}
						height={126.1}
						href='#meteoconsOvercastDayRainFill7'
						transform='translate(198 27)'
					>
						<animateTransform
							additive='sum'
							attributeName='transform'
							dur='6s'
							repeatCount='indefinite'
							type='translate'
							values='-9 0; 9 0; -9 0'
						></animateTransform>
					</use>
					<use width={350} height={222} href='#meteoconsOvercastDayRainFill8'>
						<animateTransform
							additive='sum'
							attributeName='transform'
							dur='6s'
							repeatCount='indefinite'
							type='translate'
							values='-18 0; 18 0; -18 0'
						></animateTransform>
					</use>
				</symbol>
				<symbol id='meteoconsOvercastDayRainFilla' viewBox='0 0 410.8 258'>
					<use
						width={196}
						height={196}
						href='#meteoconsOvercastDayRainFill6'
					></use>
					<use
						width={398}
						height={222}
						href='#meteoconsOvercastDayRainFill9'
						transform='translate(12.84 36)'
					></use>
				</symbol>
				<symbol id='meteoconsOvercastDayRainFillb' viewBox='0 0 129 57'>
					<path
						fill='url(#meteoconsOvercastDayRainFill2)'
						stroke='#0a5ad4'
						strokeMiterlimit={10}
						d='M8.5 56.5a8 8 0 0 1-8-8v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z'
						opacity={0}
						strokeWidth={1}
					>
						<animateTransform
							id='meteoconsOvercastDayRainFillc'
							additive='sum'
							attributeName='transform'
							begin='0s'
							dur='.67s'
							repeatCount='indefinite'
							type='translate'
							values='0 -60; 0 60'
						></animateTransform>
						<animate
							id='meteoconsOvercastDayRainFilld'
							attributeName='opacity'
							begin='0s'
							dur='.67s'
							repeatCount='indefinite'
							keyTimes='0; .25; 1'
							values='0; 1; 0'
						></animate>
					</path>
					<path
						fill='url(#meteoconsOvercastDayRainFill3)'
						stroke='#0a5ad4'
						strokeMiterlimit={10}
						d='M64.5 56.5a8 8 0 0 1-8-8v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z'
						opacity={0}
						strokeWidth={1}
					>
						<animateTransform
							id='meteoconsOvercastDayRainFille'
							additive='sum'
							attributeName='transform'
							begin='.4s'
							dur='.67s'
							repeatCount='indefinite'
							type='translate'
							values='0 -60; 0 60'
						></animateTransform>
						<animate
							id='meteoconsOvercastDayRainFillf'
							attributeName='opacity'
							begin='.4s'
							dur='.67s'
							repeatCount='indefinite'
							keyTimes='0; .25; 1'
							values='0; 1; 0'
						></animate>
					</path>
					<path
						fill='url(#meteoconsOvercastDayRainFill4)'
						stroke='#0a5ad4'
						strokeMiterlimit={10}
						d='M120.5 56.5a8 8 0 0 1-8-8v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z'
						opacity={0}
						strokeWidth={1}
					>
						<animateTransform
							id='meteoconsOvercastDayRainFille'
							additive='sum'
							attributeName='transform'
							begin='.2s'
							dur='.67s'
							repeatCount='indefinite'
							type='translate'
							values='0 -60; 0 60'
						></animateTransform>
						<animate
							id='meteoconsOvercastDayRainFillf'
							attributeName='opacity'
							begin='.2s'
							dur='.67s'
							repeatCount='indefinite'
							keyTimes='0; .25; 1'
							values='0; 1; 0'
						></animate>
					</path>
				</symbol>
			</defs>
			<use
				width={410.8}
				height={258}
				href='#meteoconsOvercastDayRainFilla'
				transform='translate(56 109)'
			></use>
			<use
				width={129}
				height={57}
				href='#meteoconsOvercastDayRainFillb'
				transform='translate(191.5 343.5)'
			></use>
		</>
	),
	'thunderstorms-overcast-fill': (
		<>
			<defs>
				<symbol
					id='meteoconsThunderstormsOvercastFill0'
					viewBox='0 0 200.3 126.1'
				>
					<path
						fill='url(#meteoconsThunderstormsOvercastFill6)'
						stroke='#848b98'
						strokeMiterlimit={10}
						d='M.5 93.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5A32.4 32.4 0 0 0 .5 93.1Z'
						strokeWidth={1}
					></path>
				</symbol>
				<symbol id='meteoconsThunderstormsOvercastFill1' viewBox='0 0 350 222'>
					<path
						fill='url(#meteoconsThunderstormsOvercastFill5)'
						stroke='#e6effc'
						strokeMiterlimit={10}
						strokeWidth={6}
						d='m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z'
					></path>
				</symbol>
				<symbol id='meteoconsThunderstormsOvercastFill2' viewBox='0 0 398 222'>
					<use
						width={200.3}
						height={126.1}
						href='#meteoconsThunderstormsOvercastFill0'
						transform='translate(198 27)'
					>
						<animateTransform
							additive='sum'
							attributeName='transform'
							dur='6s'
							repeatCount='indefinite'
							type='translate'
							values='-9 0; 9 0; -9 0'
						></animateTransform>
					</use>
					<use
						width={350}
						height={222}
						href='#meteoconsThunderstormsOvercastFill1'
					>
						<animateTransform
							additive='sum'
							attributeName='transform'
							dur='6s'
							repeatCount='indefinite'
							type='translate'
							values='-18 0; 18 0; -18 0'
						></animateTransform>
					</use>
				</symbol>
				<symbol
					id='meteoconsThunderstormsOvercastFill3'
					viewBox='0 0 102.7 186.8'
				>
					<path
						fill='url(#meteoconsThunderstormsOvercastFill7)'
						stroke='#f6a823'
						strokeMiterlimit={10}
						strokeWidth={4}
						d='m34.8 2l-32 96h32l-16 80l80-112h-48l32-64h-48z'
					>
						<animate
							id='meteoconsThunderstormsOvercastFill4'
							attributeName='opacity'
							begin='0s'
							dur='2.33s'
							repeatCount='indefinite'
							keyTimes='0; .38; .5; .63; .75; .86; .94; 1'
							values='1; 1; 0; 1; 0; 1; 0; 1'
						></animate>
					</path>
				</symbol>
				<linearGradient
					id='meteoconsThunderstormsOvercastFill5'
					x1={99.5}
					x2={232.6}
					y1={30.7}
					y2={261.4}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#f3f7fe'></stop>
					<stop offset={0.5} stopColor='#f3f7fe'></stop>
					<stop offset={1} stopColor='#deeafb'></stop>
				</linearGradient>
				<linearGradient
					id='meteoconsThunderstormsOvercastFill6'
					x1={52.7}
					x2={133.4}
					y1={9.6}
					y2={149.3}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#9ca3af'></stop>
					<stop offset={0.5} stopColor='#9ca3af'></stop>
					<stop offset={1} stopColor='#6b7280'></stop>
				</linearGradient>
				<linearGradient
					id='meteoconsThunderstormsOvercastFill7'
					x1={8.7}
					x2={80.9}
					y1={17.1}
					y2={142.1}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#f7b23b'></stop>
					<stop offset={0.5} stopColor='#f7b23b'></stop>
					<stop offset={1} stopColor='#f59e0b'></stop>
				</linearGradient>
			</defs>
			<use
				width={398}
				height={222}
				href='#meteoconsThunderstormsOvercastFill2'
				transform='translate(68.84 145)'
			></use>
			<use
				width={102.7}
				height={186.7}
				href='#meteoconsThunderstormsOvercastFill3'
				transform='translate(205.23 291)'
			></use>
		</>
	),
	'extreme-snow-fill': (
		<>
			<defs>
				<linearGradient
					id='meteoconsExtremeSnowFill0'
					x1={52.7}
					x2={133.4}
					y1={9.6}
					y2={149.3}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#9ca3af'></stop>
					<stop offset={0.5} stopColor='#9ca3af'></stop>
					<stop offset={1} stopColor='#6b7280'></stop>
				</linearGradient>
				<linearGradient
					id='meteoconsExtremeSnowFill1'
					x1={99.5}
					x2={232.6}
					y1={30.7}
					y2={261.4}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#6b7280'></stop>
					<stop offset={0.5} stopColor='#6b7280'></stop>
					<stop offset={1} stopColor='#4b5563'></stop>
				</linearGradient>
				<linearGradient
					id='meteoconsExtremeSnowFill2'
					x1={11.4}
					x2={32.8}
					y1={5.9}
					y2={43.1}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#86c3db'></stop>
					<stop offset={0.5} stopColor='#86c3db'></stop>
					<stop offset={1} stopColor='#5eafcf'></stop>
				</linearGradient>
				<linearGradient
					id='meteoconsExtremeSnowFill3'
					x1={67.4}
					x2={88.8}
					y1={5.9}
					y2={43.1}
					href='#meteoconsExtremeSnowFill2'
				></linearGradient>
				<linearGradient
					id='meteoconsExtremeSnowFill4'
					x1={123.4}
					x2={144.8}
					y1={5.9}
					y2={43.1}
					href='#meteoconsExtremeSnowFill2'
				></linearGradient>
				<symbol id='meteoconsExtremeSnowFill5' viewBox='0 0 200.3 126.1'>
					<path
						fill='url(#meteoconsExtremeSnowFill0)'
						stroke='#848b98'
						strokeMiterlimit={10}
						d='M.5 93.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5A32.4 32.4 0 0 0 .5 93.1Z'
						strokeWidth={1}
					></path>
				</symbol>
				<symbol id='meteoconsExtremeSnowFill6' viewBox='0 0 350 222'>
					<path
						fill='url(#meteoconsExtremeSnowFill1)'
						stroke='#5b6472'
						strokeMiterlimit={10}
						strokeWidth={6}
						d='m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z'
					></path>
				</symbol>
				<symbol id='meteoconsExtremeSnowFill7' viewBox='0 0 398 222'>
					<use
						width={200.3}
						height={126.1}
						href='#meteoconsExtremeSnowFill5'
						transform='translate(198 27)'
					>
						<animateTransform
							additive='sum'
							attributeName='transform'
							dur='6s'
							repeatCount='indefinite'
							type='translate'
							values='-9 0; 9 0; -9 0'
						></animateTransform>
					</use>
					<use width={350} height={222} href='#meteoconsExtremeSnowFill6'>
						<animateTransform
							additive='sum'
							attributeName='transform'
							dur='6s'
							repeatCount='indefinite'
							type='translate'
							values='-18 0; 18 0; -18 0'
						></animateTransform>
					</use>
				</symbol>
				<symbol id='meteoconsExtremeSnowFill8' viewBox='0 0 156.2 49'>
					<g>
						<path
							fill='url(#meteoconsExtremeSnowFill2)'
							stroke='#86c3db'
							strokeMiterlimit={10}
							d='m41.7 31l-5.8-3.3a13.7 13.7 0 0 0 0-6.5l5.8-3.2a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.3V4.5a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2L6.6 11A4 4 0 0 0 1 12.5A4 4 0 0 0 2.5 18l5.8 3.3a13.7 13.7 0 0 0 0 6.5L2.5 31A4 4 0 0 0 1 36.5a4 4 0 0 0 3.5 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2v6.6a4 4 0 0 0 8.2 0v-6.6a14.2 14.2 0 0 0 5.6-3.2l6 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.4-2a4 4 0 0 0-1.4-5.5ZM19 29.7a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z'
							opacity={0}
							strokeWidth={1}
						>
							<animateTransform
								additive='sum'
								attributeName='transform'
								dur='6s'
								repeatCount='indefinite'
								type='rotate'
								values='0 24 24; 360 24 24'
							></animateTransform>
							<animate
								id='meteoconsExtremeSnowFill9'
								attributeName='opacity'
								begin='0s'
								dur='2s'
								repeatCount='indefinite'
								keyTimes='0; .17; .83; 1'
								values='0; 1; 1; 0'
							></animate>
						</path>
						<animateTransform
							id='meteoconsExtremeSnowFilla'
							additive='sum'
							attributeName='transform'
							repeatCount='indefinite'
							begin='0s'
							dur='2s'
							type='translate'
							values='0 -36; 0 92;'
						></animateTransform>
					</g>
					<g>
						<path
							fill='url(#meteoconsExtremeSnowFill3)'
							stroke='#86c3db'
							strokeMiterlimit={10}
							d='m97.7 31l-5.8-3.3a13.7 13.7 0 0 0 0-6.5l5.8-3.2a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.3V4.5a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2L62.6 11a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.5L58.5 31a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.5 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.7 2a13.8 13.8 0 0 0 3 1.2v6.6a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.7-3.2l6 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.4-2a4 4 0 0 0-1.4-5.5ZM75 29.7a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z'
							opacity={0}
							strokeWidth={1}
						>
							<animateTransform
								additive='sum'
								attributeName='transform'
								dur='6s'
								repeatCount='indefinite'
								type='rotate'
								values='0 80 24; 360 80 24'
							></animateTransform>
							<animate
								id='meteoconsExtremeSnowFillb'
								attributeName='opacity'
								begin='-.83s'
								dur='2s'
								repeatCount='indefinite'
								keyTimes='0; .17; .83; 1'
								values='0; 1; 1; 0'
							></animate>
						</path>
						<animateTransform
							id='meteoconsExtremeSnowFillc'
							additive='sum'
							attributeName='transform'
							begin='-.83s'
							dur='2s'
							repeatCount='indefinite'
							type='translate'
							values='0 -36; 0 92;'
						></animateTransform>
					</g>
					<g>
						<path
							fill='url(#meteoconsExtremeSnowFill4)'
							stroke='#86c3db'
							strokeMiterlimit={10}
							d='m153.7 31l-5.8-3.3a13.7 13.7 0 0 0 0-6.5l5.8-3.2a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.3V4.5a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.5l-5.8 3.2a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.5 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.7 2a13.8 13.8 0 0 0 3 1.2v6.6a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.7-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.3-5.5ZM131 29.7a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z'
							opacity={0}
							strokeWidth={1}
						>
							<animateTransform
								additive='sum'
								attributeName='transform'
								dur='6s'
								repeatCount='indefinite'
								type='rotate'
								values='0 136 24; 360 136 24'
							></animateTransform>
							<animate
								id='meteoconsExtremeSnowFilld'
								attributeName='opacity'
								begin='.83s'
								dur='2s'
								repeatCount='indefinite'
								keyTimes='0; .17; .83; 1'
								values='0; 1; 1; 0'
							></animate>
						</path>
						<animateTransform
							id='meteoconsExtremeSnowFille'
							additive='sum'
							attributeName='transform'
							begin='.83s'
							dur='2s'
							repeatCount='indefinite'
							type='translate'
							values='0 -36; 0 92;'
						></animateTransform>
					</g>
				</symbol>
			</defs>
			<use
				width={398}
				height={222}
				href='#meteoconsExtremeSnowFill7'
				transform='translate(68.84 145)'
			></use>
			<use
				width={156.2}
				height={49}
				href='#meteoconsExtremeSnowFill8'
				transform='translate(177.9 337.5)'
			></use>
		</>
	),
	'mist-fill': (
		<>
			<defs>
				<linearGradient
					id='meteoconsMistFill0'
					x1={220}
					x2={292}
					y1={137.7}
					y2={262.4}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#d4d7dd'></stop>
					<stop offset={0.5} stopColor='#d4d7dd'></stop>
					<stop offset={1} stopColor='#bec1c6'></stop>
				</linearGradient>
				<linearGradient
					id='meteoconsMistFill1'
					y1={193.7}
					y2={318.4}
					href='#meteoconsMistFill0'
				></linearGradient>
				<linearGradient
					id='meteoconsMistFill2'
					y1={249.7}
					y2={374.4}
					href='#meteoconsMistFill0'
				></linearGradient>
			</defs>
			<path
				fill='none'
				stroke='url(#meteoconsMistFill0)'
				strokeLinecap='round'
				strokeMiterlimit={10}
				strokeWidth={24}
				d='M136 200h240'
			>
				<animateTransform
					additive='sum'
					attributeName='transform'
					dur='6s'
					repeatCount='indefinite'
					type='translate'
					values='-48 0; 48 0; -48 0'
				></animateTransform>
			</path>
			<path
				fill='none'
				stroke='url(#meteoconsMistFill1)'
				strokeLinecap='round'
				strokeMiterlimit={10}
				strokeWidth={24}
				d='M136 256h240'
			>
				<animateTransform
					additive='sum'
					attributeName='transform'
					begin='-1.5s'
					dur='6s'
					repeatCount='indefinite'
					type='translate'
					values='-48 0; 48 0; -48 0'
				></animateTransform>
			</path>
			<path
				fill='none'
				stroke='url(#meteoconsMistFill2)'
				strokeLinecap='round'
				strokeMiterlimit={10}
				strokeWidth={24}
				d='M136 312h240'
			>
				<animateTransform
					additive='sum'
					attributeName='transform'
					dur='6s'
					repeatCount='indefinite'
					type='translate'
					values='48 0; -48 0; 48 0'
				></animateTransform>
			</path>
		</>
	),
	'clear-night-fill': (
		<>
			<defs>
				<linearGradient
					id='meteoconsClearNightFill0'
					x1={54.3}
					x2={187.2}
					y1={29}
					y2={259.1}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#86c3db'></stop>
					<stop offset={0.5} stopColor='#86c3db'></stop>
					<stop offset={1} stopColor='#5eafcf'></stop>
				</linearGradient>
				<symbol id='meteoconsClearNightFill1' viewBox='0 0 270 270'>
					<path
						fill='url(#meteoconsClearNightFill0)'
						stroke='#72b9d5'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={6}
						d='M252.3 168.6A133.4 133.4 0 0 1 118 36.2A130.5 130.5 0 0 1 122.5 3A133 133 0 0 0 3 134.6C3 207.7 63 267 137.2 267c62.5 0 114.8-42.2 129.8-99.2a135.6 135.6 0 0 1-14.8.8Z'
					>
						<animateTransform
							additive='sum'
							attributeName='transform'
							dur='6s'
							repeatCount='indefinite'
							type='rotate'
							values='-15 135 135; 9 135 135; -15 135 135'
						></animateTransform>
					</path>
				</symbol>
			</defs>
			<use
				width={270}
				height={270}
				href='#meteoconsClearNightFill1'
				transform='translate(121 121)'
			></use>
		</>
	),
	'partly-cloudy-night-fill': (
		<>
			<defs>
				<symbol id='meteoconsPartlyCloudyNightFill0' viewBox='0 0 172 172'>
					<path
						fill='url(#meteoconsPartlyCloudyNightFill4)'
						stroke='#72b9d5'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={4}
						d='M160.6 107.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 78 2A84.7 84.7 0 0 0 2 85.7A84.8 84.8 0 0 0 87.4 170a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z'
					>
						<animateTransform
							additive='sum'
							attributeName='transform'
							dur='6s'
							repeatCount='indefinite'
							type='rotate'
							values='-15 86 86; 9 86 86; -15 86 86'
						></animateTransform>
					</path>
				</symbol>
				<symbol id='meteoconsPartlyCloudyNightFill1' viewBox='0 0 350 222'>
					<path
						fill='url(#meteoconsPartlyCloudyNightFill3)'
						stroke='#e6effc'
						strokeMiterlimit={10}
						strokeWidth={6}
						d='m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z'
					></path>
				</symbol>
				<symbol id='meteoconsPartlyCloudyNightFill2' viewBox='0 0 351 246'>
					<use
						width={172}
						height={172}
						href='#meteoconsPartlyCloudyNightFill0'
					></use>
					<use
						width={350}
						height={222}
						href='#meteoconsPartlyCloudyNightFill1'
						transform='translate(1 24)'
					></use>
				</symbol>
				<linearGradient
					id='meteoconsPartlyCloudyNightFill3'
					x1={99.5}
					x2={232.6}
					y1={30.7}
					y2={261.4}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#f3f7fe'></stop>
					<stop offset={0.5} stopColor='#f3f7fe'></stop>
					<stop offset={1} stopColor='#deeafb'></stop>
				</linearGradient>
				<linearGradient
					id='meteoconsPartlyCloudyNightFill4'
					x1={34.7}
					x2={119.2}
					y1={18.6}
					y2={165}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#86c3db'></stop>
					<stop offset={0.5} stopColor='#86c3db'></stop>
					<stop offset={1} stopColor='#5eafcf'></stop>
				</linearGradient>
			</defs>
			<use
				width={351}
				height={246}
				href='#meteoconsPartlyCloudyNightFill2'
				transform='translate(80 121)'
			></use>
		</>
	),
	'overcast-night-rain-fill': (
		<>
			<defs>
				<linearGradient
					id='meteoconsOvercastNightRainFill0'
					x1={99.5}
					x2={232.6}
					y1={30.7}
					y2={261.4}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#f3f7fe'></stop>
					<stop offset={0.5} stopColor='#f3f7fe'></stop>
					<stop offset={1} stopColor='#deeafb'></stop>
				</linearGradient>
				<linearGradient
					id='meteoconsOvercastNightRainFill1'
					x1={52.7}
					x2={133.4}
					y1={9.6}
					y2={149.3}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#9ca3af'></stop>
					<stop offset={0.5} stopColor='#9ca3af'></stop>
					<stop offset={1} stopColor='#6b7280'></stop>
				</linearGradient>
				<linearGradient
					id='meteoconsOvercastNightRainFill2'
					x1={34.7}
					x2={119.2}
					y1={18.6}
					y2={165}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#86c3db'></stop>
					<stop offset={0.5} stopColor='#86c3db'></stop>
					<stop offset={1} stopColor='#5eafcf'></stop>
				</linearGradient>
				<linearGradient
					id='meteoconsOvercastNightRainFill3'
					x1={1381.3}
					x2={1399.5}
					y1={-1144.7}
					y2={-1097.4}
					gradientTransform='rotate(-9 8002.567 8233.063)'
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#0b65ed'></stop>
					<stop offset={0.5} stopColor='#0a5ad4'></stop>
					<stop offset={1} stopColor='#0950bc'></stop>
				</linearGradient>
				<linearGradient
					id='meteoconsOvercastNightRainFill4'
					x1={1436.7}
					x2={1454.9}
					y1={-1137}
					y2={-1089.7}
					gradientTransform='rotate(-9 8009.537 8233.037)'
					href='#meteoconsOvercastNightRainFill3'
				></linearGradient>
				<linearGradient
					id='meteoconsOvercastNightRainFill5'
					x1={1492.1}
					x2={1510.3}
					y1={-1129.3}
					y2={-1082.1}
					gradientTransform='rotate(-9 8016.566 8233.078)'
					href='#meteoconsOvercastNightRainFill3'
				></linearGradient>
				<symbol id='meteoconsOvercastNightRainFill6' viewBox='0 0 172 172'>
					<path
						fill='url(#meteoconsOvercastNightRainFill2)'
						stroke='#72b9d5'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={4}
						d='M160.6 107.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 78 2A84.7 84.7 0 0 0 2 85.7A84.8 84.8 0 0 0 87.4 170a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z'
					>
						<animateTransform
							additive='sum'
							attributeName='transform'
							dur='6s'
							repeatCount='indefinite'
							type='rotate'
							values='-15 86 86; 9 86 86; -15 86 86'
						></animateTransform>
					</path>
				</symbol>
				<symbol id='meteoconsOvercastNightRainFill7' viewBox='0 0 200.3 126.1'>
					<path
						fill='url(#meteoconsOvercastNightRainFill1)'
						stroke='#848b98'
						strokeMiterlimit={10}
						d='M.5 93.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5A32.4 32.4 0 0 0 .5 93.1Z'
						strokeWidth={1}
					></path>
				</symbol>
				<symbol id='meteoconsOvercastNightRainFill8' viewBox='0 0 350 222'>
					<path
						fill='url(#meteoconsOvercastNightRainFill0)'
						stroke='#e6effc'
						strokeMiterlimit={10}
						strokeWidth={6}
						d='m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z'
					></path>
				</symbol>
				<symbol id='meteoconsOvercastNightRainFill9' viewBox='0 0 398 222'>
					<use
						width={200.3}
						height={126.1}
						href='#meteoconsOvercastNightRainFill7'
						transform='translate(198 27)'
					>
						<animateTransform
							additive='sum'
							attributeName='transform'
							dur='6s'
							repeatCount='indefinite'
							type='translate'
							values='-9 0; 9 0; -9 0'
						></animateTransform>
					</use>
					<use width={350} height={222} href='#meteoconsOvercastNightRainFill8'>
						<animateTransform
							additive='sum'
							attributeName='transform'
							dur='6s'
							repeatCount='indefinite'
							type='translate'
							values='-18 0; 18 0; -18 0'
						></animateTransform>
					</use>
				</symbol>
				<symbol id='meteoconsOvercastNightRainFilla' viewBox='0 0 398.8 246'>
					<use
						width={172}
						height={172}
						href='#meteoconsOvercastNightRainFill6'
					></use>
					<use
						width={398}
						height={222}
						href='#meteoconsOvercastNightRainFill9'
						transform='translate(.84 24)'
					></use>
				</symbol>
				<symbol id='meteoconsOvercastNightRainFillb' viewBox='0 0 129 57'>
					<path
						fill='url(#meteoconsOvercastNightRainFill3)'
						stroke='#0a5ad4'
						strokeMiterlimit={10}
						d='M8.5 56.5a8 8 0 0 1-8-8v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z'
						opacity={0}
						strokeWidth={1}
					>
						<animateTransform
							id='meteoconsOvercastNightRainFillc'
							additive='sum'
							attributeName='transform'
							begin='0s'
							dur='.67s'
							repeatCount='indefinite'
							type='translate'
							values='0 -60; 0 60'
						></animateTransform>
						<animate
							id='meteoconsOvercastNightRainFilld'
							attributeName='opacity'
							begin='0s'
							dur='.67s'
							repeatCount='indefinite'
							keyTimes='0; .25; 1'
							values='0; 1; 0'
						></animate>
					</path>
					<path
						fill='url(#meteoconsOvercastNightRainFill4)'
						stroke='#0a5ad4'
						strokeMiterlimit={10}
						d='M64.5 56.5a8 8 0 0 1-8-8v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z'
						opacity={0}
						strokeWidth={1}
					>
						<animateTransform
							id='meteoconsOvercastNightRainFille'
							additive='sum'
							attributeName='transform'
							begin='.4s'
							dur='.67s'
							repeatCount='indefinite'
							type='translate'
							values='0 -60; 0 60'
						></animateTransform>
						<animate
							id='meteoconsOvercastNightRainFillf'
							attributeName='opacity'
							begin='.4s'
							dur='.67s'
							repeatCount='indefinite'
							keyTimes='0; .25; 1'
							values='0; 1; 0'
						></animate>
					</path>
					<path
						fill='url(#meteoconsOvercastNightRainFill5)'
						stroke='#0a5ad4'
						strokeMiterlimit={10}
						d='M120.5 56.5a8 8 0 0 1-8-8v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z'
						opacity={0}
						strokeWidth={1}
					>
						<animateTransform
							id='meteoconsOvercastNightRainFillg'
							additive='sum'
							attributeName='transform'
							begin='.2s'
							dur='.67s'
							repeatCount='indefinite'
							type='translate'
							values='0 -60; 0 60'
						></animateTransform>
						<animate
							id='meteoconsOvercastNightRainFillh'
							attributeName='opacity'
							begin='.2s'
							dur='.67s'
							repeatCount='indefinite'
							keyTimes='0; .25; 1'
							values='0; 1; 0'
						></animate>
					</path>
				</symbol>
			</defs>
			<use
				width={398.8}
				height={246}
				href='#meteoconsOvercastNightRainFilla'
				transform='translate(68 121)'
			></use>
			<use
				width={129}
				height={57}
				href='#meteoconsOvercastNightRainFillb'
				transform='translate(191.5 343.5)'
			></use>
		</>
	),
	'thermometer-celsius-fill': (
		<>
			<defs>
				<symbol id='meteoconsThermometerCelsiusFill0' viewBox='0 0 109.1 73.2'>
					<path
						fill='#374151'
						d='M19.4 0A18.7 18.7 0 0 0 0 19.3a18.9 18.9 0 0 0 19.4 19.5a18.7 18.7 0 0 0 14-5.6a18.8 18.8 0 0 0 5.4-14A18.7 18.7 0 0 0 19.4 0Zm6.3 25.7a8.6 8.6 0 0 1-6.3 2.5a8.5 8.5 0 0 1-6.2-2.5a8.7 8.7 0 0 1-2.4-6.4A8.6 8.6 0 0 1 13 13a8.4 8.4 0 0 1 6.3-2.5a8.4 8.4 0 0 1 8.7 8.8a8.7 8.7 0 0 1-2.4 6.4Zm53.1 32.8a13.4 13.4 0 0 1-11.5-5.6q-4-5.7-4-16q0-10 4-15.6a13.4 13.4 0 0 1 11.5-5.6a12.6 12.6 0 0 1 8.6 3a13.3 13.3 0 0 1 4.2 8.2H109q-1.4-12-9.5-19T78.3 1q-14.5 0-23.7 9.8T45.3 37q0 16.4 9.2 26.3t23.7 9.9q13.2 0 21.6-7.1q8.3-7 9.3-19.6H91.6q-1.6 12-12.8 12Z'
					></path>
				</symbol>
				<symbol id='meteoconsThermometerCelsiusFill1' viewBox='0 0 72 168'>
					<circle cx={36} cy={132} r={36} fill='#ef4444'></circle>
					<path
						fill='none'
						stroke='#ef4444'
						strokeLinecap='round'
						strokeMiterlimit={10}
						strokeWidth={24}
						d='M36 12v120'
					>
						<animateTransform
							attributeName='transform'
							calcMode='spline'
							dur='1s'
							keySplines='.42, 0, .58, 1; .42, 0, .58, 1'
							repeatCount='indefinite'
							type='translate'
							values='0 0; 0 18; 0 0'
						></animateTransform>
					</path>
				</symbol>
				<symbol id='meteoconsThermometerCelsiusFill2' viewBox='0 0 118 278'>
					<path
						fill='url(#meteoconsThermometerCelsiusFill4)'
						stroke='url(#meteoconsThermometerCelsiusFill5)'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={6}
						d='M115 218.2c0 31.4-25 56.8-56 56.8S3 249.6 3 218.2a57 57 0 0 1 24-46.6V35.5a32 32 0 1 1 64 0v136a57 57 0 0 1 24 46.7ZM63 83h28M63 51h28m-28 64h28'
					></path>
				</symbol>
				<symbol id='meteoconsThermometerCelsiusFill3' viewBox='0 0 118 278'>
					<use
						width={72}
						height={168}
						href='#meteoconsThermometerCelsiusFill1'
						transform='translate(23 87)'
					></use>
					<use
						width={118}
						height={278}
						href='#meteoconsThermometerCelsiusFill2'
					></use>
				</symbol>
				<linearGradient
					id='meteoconsThermometerCelsiusFill4'
					x1={-7.2}
					x2={116.4}
					y1={36.3}
					y2={250.4}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#515a69' stopOpacity={0.1}></stop>
					<stop offset={0.5} stopColor='#6b7280' stopOpacity={0.1}></stop>
					<stop offset={1} stopColor='#384354' stopOpacity={0.1}></stop>
				</linearGradient>
				<linearGradient
					id='meteoconsThermometerCelsiusFill5'
					x1={-8.7}
					x2={117.9}
					y1={33.7}
					y2={253}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#d4d7dd'></stop>
					<stop offset={0.5} stopColor='#d4d7dd'></stop>
					<stop offset={1} stopColor='#bec1c6'></stop>
				</linearGradient>
			</defs>
			<use
				width={109.1}
				height={73.2}
				href='#meteoconsThermometerCelsiusFill0'
				transform='translate(314 250)'
			></use>
			<use
				width={118}
				height={278}
				href='#meteoconsThermometerCelsiusFill3'
				transform='translate(197 117)'
			></use>
		</>
	),
	'humidity-fill': (
		<>
			<defs>
				<linearGradient
					id='meteoconsHumidityFill0'
					x1={14.8}
					x2={124.2}
					y1={42.3}
					y2={231.7}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#3392d6'></stop>
					<stop offset={0.5} stopColor='#3392d6'></stop>
					<stop offset={1} stopColor='#2477b2'></stop>
				</linearGradient>
				<symbol id='meteoconsHumidityFill1' viewBox='0 0 164 245.6'>
					<path
						fill='url(#meteoconsHumidityFill0)'
						stroke='#2885c7'
						strokeMiterlimit={10}
						strokeWidth={4}
						d='M82 3.6c-48.7 72-80 117-80 160.7s35.8 79.3 80 79.3s80-35.5 80-79.3S130.7 75.5 82 3.6Z'
					>
						<animateTransform
							additive='sum'
							attributeName='transform'
							calcMode='spline'
							dur='6s'
							keySplines='.42, 0, .58, 1; .42, 0, .58, 1'
							repeatCount='indefinite'
							type='scale'
							values='1 1; 1 .9; 1 1'
						></animateTransform>
					</path>
				</symbol>
			</defs>
			<use
				width={164}
				height={245.6}
				href='#meteoconsHumidityFill1'
				transform='translate(173.9 133.01)'
			></use>
			<path
				fill='#fff'
				d='M218.8 250.5q4.8-4.5 13.7-4.5t13.6 4.5q4.8 4.4 4.8 12.4v8q0 7.8-4.8 12.2t-13.6 4.4q-9 0-13.7-4.4t-4.8-12.2v-8q0-8 4.8-12.4Zm71.2-1.6a2.8 2.8 0 0 1-.6 2.6l-53 73.3a9.4 9.4 0 0 1-2.8 2.8a12.3 12.3 0 0 1-4.6.6h-4.4c-1.3 0-2.1-.4-2.5-1.1a2.8 2.8 0 0 1 .7-2.8l53-73.3a7 7 0 0 1 2.6-2.7a12.7 12.7 0 0 1 4.4-.5h4.9c1.2 0 2 .4 2.3 1.1Zm-57.5 7.6q-7.7 0-7.7 7v6.7q0 7 7.7 7t7.7-7v-6.8q0-6.9-7.7-6.9Zm33.4 36.4q4.7-4.5 13.7-4.5t13.6 4.5q4.8 4.5 4.8 12.4v8q0 7.8-4.8 12.2t-13.7 4.5q-8.9 0-13.6-4.4t-4.8-12.3v-8q0-8 4.8-12.4Zm13.6 6.1q-7.6 0-7.6 7v6.6q0 7 7.6 7t7.7-7v-6.7q0-6.9-7.7-6.9Z'
			></path>
		</>
	),
	'dust-wind-fill': (
		<>
			<defs>
				<linearGradient
					id='meteoconsDustWindFill0'
					x1={138.5}
					x2={224.2}
					y1={5.1}
					y2={153.5}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#d4d7dd'></stop>
					<stop offset={0.5} stopColor='#d4d7dd'></stop>
					<stop offset={1} stopColor='#bec1c6'></stop>
				</linearGradient>
				<linearGradient
					id='meteoconsDustWindFill1'
					x1={77.7}
					x2={169}
					y1={96.2}
					y2={254.4}
					href='#meteoconsDustWindFill0'
				></linearGradient>
				<linearGradient
					id='meteoconsDustWindFill2'
					x1={90}
					x2={102}
					y1={185.6}
					y2={206.4}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#fde68a'></stop>
					<stop offset={0.5} stopColor='#fde68a'></stop>
					<stop offset={1} stopColor='#fde171'></stop>
				</linearGradient>
				<linearGradient
					id='meteoconsDustWindFill3'
					x1={174}
					x2={186}
					y1={185.6}
					y2={206.4}
					href='#meteoconsDustWindFill2'
				></linearGradient>
				<linearGradient
					id='meteoconsDustWindFill4'
					x1={258}
					x2={270}
					y1={185.6}
					y2={206.4}
					href='#meteoconsDustWindFill2'
				></linearGradient>
				<linearGradient
					id='meteoconsDustWindFill5'
					x1={216}
					x2={228}
					y1={245.6}
					y2={266.4}
					href='#meteoconsDustWindFill2'
				></linearGradient>
				<linearGradient
					id='meteoconsDustWindFill6'
					x1={300}
					x2={312}
					y1={245.6}
					y2={266.4}
					href='#meteoconsDustWindFill2'
				></linearGradient>
				<linearGradient
					id='meteoconsDustWindFill7'
					x1={384}
					x2={396}
					y1={245.6}
					y2={266.4}
					href='#meteoconsDustWindFill2'
				></linearGradient>
				<linearGradient
					id='meteoconsDustWindFill8'
					x1={166}
					x2={178}
					y1={305.6}
					y2={326.4}
					href='#meteoconsDustWindFill2'
				></linearGradient>
				<linearGradient
					id='meteoconsDustWindFill9'
					x1={250}
					x2={262}
					y1={305.6}
					y2={326.4}
					href='#meteoconsDustWindFill2'
				></linearGradient>
				<linearGradient
					id='meteoconsDustWindFilla'
					x1={334}
					x2={346}
					y1={305.6}
					y2={326.4}
					href='#meteoconsDustWindFill2'
				></linearGradient>
				<symbol id='meteoconsDustWindFillb' viewBox='0 0 348 240'>
					<path
						fill='none'
						stroke='url(#meteoconsDustWindFill0)'
						strokeDasharray={148}
						strokeLinecap='round'
						strokeMiterlimit={10}
						strokeWidth={24}
						d='M267.2 24.3A40 40 0 1 1 296 92H12'
					>
						<animate
							attributeName='stroke-dashoffset'
							dur='6s'
							repeatCount='indefinite'
							values='0; 2960'
						></animate>
					</path>
					<path
						fill='none'
						stroke='url(#meteoconsDustWindFill1)'
						strokeDasharray={110}
						strokeLinecap='round'
						strokeMiterlimit={10}
						strokeWidth={24}
						d='M151.2 215.7A40 40 0 1 0 180 148H12'
					>
						<animate
							attributeName='stroke-dashoffset'
							dur='6s'
							repeatCount='indefinite'
							values='0; 1540'
						></animate>
					</path>
				</symbol>
			</defs>
			<g opacity={0}>
				<circle
					cx={96}
					cy={196}
					r={12}
					fill='url(#meteoconsDustWindFill2)'
				></circle>
				<circle
					cx={222}
					cy={256}
					r={12}
					fill='url(#meteoconsDustWindFill5)'
				></circle>
				<circle
					cx={172}
					cy={316}
					r={12}
					fill='url(#meteoconsDustWindFill8)'
				></circle>
				<animateTransform
					id='meteoconsDustWindFillc'
					additive='sum'
					attributeName='transform'
					begin='1s; x1.end+1.17s'
					dur='.83s'
					type='translate'
					values='-24 0; 24 0'
				></animateTransform>
				<animate
					id='meteoconsDustWindFilld'
					attributeName='opacity'
					begin='1s; y1.end+1.17s'
					dur='.83s'
					keyTimes='0; .17; .83; 1'
					values='0; 1; 1; 0'
				></animate>
			</g>
			<g opacity={0}>
				<circle
					cx={180}
					cy={196}
					r={12}
					fill='url(#meteoconsDustWindFill3)'
				></circle>
				<circle
					cx={306}
					cy={256}
					r={12}
					fill='url(#meteoconsDustWindFill6)'
				></circle>
				<circle
					cx={256}
					cy={316}
					r={12}
					fill='url(#meteoconsDustWindFill9)'
				></circle>
				<animateTransform
					id='meteoconsDustWindFille'
					additive='sum'
					attributeName='transform'
					begin='.5s; x2.end+1.17s'
					dur='.83s'
					type='translate'
					values='-24 0; 24 0'
				></animateTransform>
				<animate
					id='meteoconsDustWindFillf'
					attributeName='opacity'
					begin='.5s; y2.end+1.17s'
					dur='.83s'
					keyTimes='0; .17; .83; 1'
					values='0; 1; 1; 0'
				></animate>
			</g>
			<g opacity={0}>
				<circle
					cx={264}
					cy={196}
					r={12}
					fill='url(#meteoconsDustWindFill4)'
				></circle>
				<circle
					cx={390}
					cy={256}
					r={12}
					fill='url(#meteoconsDustWindFill7)'
				></circle>
				<circle
					cx={340}
					cy={316}
					r={12}
					fill='url(#meteoconsDustWindFilla)'
				></circle>
				<animateTransform
					id='meteoconsDustWindFillg'
					additive='sum'
					attributeName='transform'
					begin='0s; x3.end+1.17s'
					dur='.83s'
					type='translate'
					values='-24 0; 24 0'
				></animateTransform>
				<animate
					id='meteoconsDustWindFillh'
					attributeName='opacity'
					begin='0s; y3.end+1.17s'
					dur='.83s'
					keyTimes='0; .17; .83; 1'
					values='0; 1; 1; 0'
				></animate>
			</g>
			<use
				width={348}
				height={240}
				href='#meteoconsDustWindFillb'
				transform='translate(83 136)'
			></use>
		</>
	),
	'uv-index-fill': (
		<>
			<defs>
				<linearGradient
					id='meteoconsUvIndexFill0'
					x1={150}
					x2={234}
					y1={119.2}
					y2={264.8}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#fbbf24'></stop>
					<stop offset={0.5} stopColor='#fbbf24'></stop>
					<stop offset={1} stopColor='#f59e0b'></stop>
				</linearGradient>
				<clipPath id='meteoconsUvIndexFill1'>
					<path
						fill='none'
						d='M64 64h384v192H328a72 72 0 0 0-72 72v120H64Z'
					></path>
				</clipPath>
				<symbol id='meteoconsUvIndexFill2' viewBox='0 0 384 384'>
					<circle
						cx={192}
						cy={192}
						r={84}
						fill='url(#meteoconsUvIndexFill0)'
						stroke='#f8af18'
						strokeMiterlimit={10}
						strokeWidth={6}
					></circle>
					<path
						fill='none'
						stroke='#fbbf24'
						strokeLinecap='round'
						strokeMiterlimit={10}
						strokeWidth={24}
						d='M192 61.7V12m0 360v-49.7m92.2-222.5l35-35M64.8 319.2l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M61.7 192H12m360 0h-49.7'
					>
						<animateTransform
							additive='sum'
							attributeName='transform'
							dur='6s'
							repeatCount='indefinite'
							type='rotate'
							values='0 192 192; 45 192 192'
						></animateTransform>
					</path>
				</symbol>
			</defs>
			<g clipPath='url(#meteoconsUvIndexFill1)'>
				<use
					width={384}
					height={384}
					href='#meteoconsUvIndexFill2'
					transform='translate(64 64)'
				></use>
				<path
					fill='none'
					stroke='#f8af18'
					strokeMiterlimit={10}
					strokeWidth={6}
					d='M254 338v-10a74 74 0 0 1 74-74h10'
				></path>
			</g>
			<path
				fill='#374251'
				d='M337.7 388q-14.4 0-22.1-6.8t-7.8-19.3V316h18.3v46q0 11 11.7 11t11.6-11v-46h18.3v45.9q0 12.7-7.8 19.4t-22.2 6.7Zm75.7-43.5l8.2-28.5h18.6l-22.6 69.8h-19.4L375.8 316h18.8l8.2 28.4l5.4 22Z'
			></path>
		</>
	),
	'thermometer-colder': (
		<>
			<defs>
				<symbol id='meteoconsThermometerColder0' viewBox='0 0 72 168'>
					<circle cx={36} cy={132} r={36} fill='#2885c7'></circle>
					<path
						fill='none'
						stroke='#2885c7'
						strokeLinecap='round'
						strokeMiterlimit={10}
						strokeWidth={24}
						d='M36 12v120'
					>
						<animateTransform
							attributeName='transform'
							calcMode='spline'
							dur='1s'
							keySplines='.42, 0, .58, 1; .42, 0, .58, 1'
							repeatCount='indefinite'
							type='translate'
							values='0 0; 0 18; 0 0'
						></animateTransform>
					</path>
				</symbol>
				<symbol id='meteoconsThermometerColder1' viewBox='0 0 118 278'>
					<path
						fill='none'
						stroke='#cbd5e1'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={6}
						d='M115 218.2c0 31.4-25 56.8-56 56.8S3 249.6 3 218.2a57 57 0 0 1 24-46.6V35.5a32 32 0 1 1 64 0v136a57 57 0 0 1 24 46.7ZM63 83h28M63 51h28m-28 64h28'
					></path>
				</symbol>
				<symbol id='meteoconsThermometerColder2' viewBox='0 0 118 278'>
					<use
						width={72}
						height={168}
						href='#meteoconsThermometerColder0'
						transform='translate(23 87)'
					></use>
					<use
						width={118}
						height={278}
						href='#meteoconsThermometerColder1'
					></use>
				</symbol>
			</defs>
			<use
				width={118}
				height={278}
				href='#meteoconsThermometerColder2'
				transform='translate(197 117)'
			></use>
			<path
				fill='#2a81bf'
				d='M372.5 271a4.6 4.6 0 0 0-3.2 1.3L350 290.7l-19.3-18.4a4.6 4.6 0 0 0-6.4 0a4.1 4.1 0 0 0 0 6l22.5 21.4a4.6 4.6 0 0 0 6.4 0l22.5-21.4a4.1 4.1 0 0 0 0-6a4.6 4.6 0 0 0-3.2-1.3Z'
				opacity={0}
			>
				<animateTransform
					attributeName='transform'
					begin='-1.2s'
					calcMode='spline'
					dur='3s'
					keySplines='.55, 0, .1, 1; .55, 0, .1, 1'
					repeatCount='indefinite'
					type='translate'
					values='0 -30; 0 0; 0 30'
				></animateTransform>
				<animate
					attributeName='opacity'
					begin='-1.2s'
					calcMode='spline'
					dur='3s'
					keySplines='.55, 0, .1, 1; .55, 0, .1, 1'
					repeatCount='indefinite'
					values='0; 1; 0'
				></animate>
			</path>
			<path
				fill='#2a81bf'
				d='M372.5 244a4.6 4.6 0 0 0-3.2 1.3L350 263.7l-19.3-18.4a4.6 4.6 0 0 0-6.4 0a4.1 4.1 0 0 0 0 6l22.5 21.4a4.6 4.6 0 0 0 6.4 0l22.5-21.4a4.1 4.1 0 0 0 0-6a4.6 4.6 0 0 0-3.2-1.3Z'
				opacity={0}
			>
				<animateTransform
					attributeName='transform'
					begin='-1.1s'
					calcMode='spline'
					dur='3s'
					keySplines='.55, 0, .1, 1; .55, 0, .1, 1'
					repeatCount='indefinite'
					type='translate'
					values='0 -30; 0 0; 0 30'
				></animateTransform>
				<animate
					attributeName='opacity'
					begin='-1.1s'
					calcMode='spline'
					dur='3s'
					keySplines='.55, 0, .1, 1; .55, 0, .1, 1'
					repeatCount='indefinite'
					values='0; 1; 0'
				></animate>
			</path>
			<path
				fill='#2a81bf'
				d='M372.5 217a4.6 4.6 0 0 0-3.2 1.3L350 236.7l-19.3-18.4a4.6 4.6 0 0 0-6.4 0a4.1 4.1 0 0 0 0 6l22.5 21.4a4.6 4.6 0 0 0 6.4 0l22.5-21.4a4.1 4.1 0 0 0 0-6a4.6 4.6 0 0 0-3.2-1.3Z'
				opacity={0}
			>
				<animateTransform
					attributeName='transform'
					begin='-1s'
					calcMode='spline'
					dur='3s'
					keySplines='.55, 0, .1, 1; .55, 0, .1, 1'
					repeatCount='indefinite'
					type='translate'
					values='0 -30; 0 0; 0 30'
				></animateTransform>
				<animate
					attributeName='opacity'
					begin='-1s'
					calcMode='spline'
					dur='3s'
					keySplines='.55, 0, .1, 1; .55, 0, .1, 1'
					repeatCount='indefinite'
					values='0; 1; 0'
				></animate>
			</path>
		</>
	),
	'thermometer-warmer': (
		<>
			<defs>
				<symbol id='meteoconsThermometerWarmer0' viewBox='0 0 72 168'>
					<circle cx={36} cy={132} r={36} fill='#ef4444'></circle>
					<path
						fill='none'
						stroke='#ef4444'
						strokeLinecap='round'
						strokeMiterlimit={10}
						strokeWidth={24}
						d='M36 12v120'
					>
						<animateTransform
							attributeName='transform'
							calcMode='spline'
							dur='1s'
							keySplines='.42, 0, .58, 1; .42, 0, .58, 1'
							repeatCount='indefinite'
							type='translate'
							values='0 0; 0 18; 0 0'
						></animateTransform>
					</path>
				</symbol>
				<symbol id='meteoconsThermometerWarmer1' viewBox='0 0 118 278'>
					<path
						fill='none'
						stroke='#cbd5e1'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={6}
						d='M115 218.2c0 31.4-25 56.8-56 56.8S3 249.6 3 218.2a57 57 0 0 1 24-46.6V35.5a32 32 0 1 1 64 0v136a57 57 0 0 1 24 46.7ZM63 83h28M63 51h28m-28 64h28'
					></path>
				</symbol>
				<symbol id='meteoconsThermometerWarmer2' viewBox='0 0 118 278'>
					<use
						width={72}
						height={168}
						href='#meteoconsThermometerWarmer0'
						transform='translate(23 87)'
					></use>
					<use
						width={118}
						height={278}
						href='#meteoconsThermometerWarmer1'
					></use>
				</symbol>
			</defs>
			<use
				width={118}
				height={278}
				href='#meteoconsThermometerWarmer2'
				transform='translate(197 117)'
			></use>
			<path
				fill='#e34647'
				d='M372.5 247a4.6 4.6 0 0 1-3.2-1.3L350 227.3l-19.3 18.4a4.6 4.6 0 0 1-6.4 0a4.1 4.1 0 0 1 0-6l22.5-21.4a4.6 4.6 0 0 1 6.4 0l22.5 21.4a4.1 4.1 0 0 1 0 6a4.6 4.6 0 0 1-3.2 1.3Z'
				opacity={0}
			>
				<animateTransform
					attributeName='transform'
					begin='-1.2s'
					calcMode='spline'
					dur='3s'
					keySplines='.55, 0, .1, 1; .55, 0, .1, 1'
					repeatCount='indefinite'
					type='translate'
					values='0 30; 0 0; 0 -30'
				></animateTransform>
				<animate
					attributeName='opacity'
					begin='-1.2s'
					calcMode='spline'
					dur='3s'
					keySplines='.55, 0, .1, 1; .55, 0, .1, 1'
					repeatCount='indefinite'
					values='0; 1; 0'
				></animate>
			</path>
			<path
				fill='#e34647'
				d='M372.5 274a4.6 4.6 0 0 1-3.2-1.3L350 254.3l-19.3 18.4a4.6 4.6 0 0 1-6.4 0a4.1 4.1 0 0 1 0-6l22.5-21.4a4.6 4.6 0 0 1 6.4 0l22.5 21.4a4.1 4.1 0 0 1 0 6a4.6 4.6 0 0 1-3.2 1.3Z'
				opacity={0}
			>
				<animateTransform
					attributeName='transform'
					begin='-1.1s'
					calcMode='spline'
					dur='3s'
					keySplines='.55, 0, .1, 1; .55, 0, .1, 1'
					repeatCount='indefinite'
					type='translate'
					values='0 30; 0 0; 0 -30'
				></animateTransform>
				<animate
					attributeName='opacity'
					begin='-1.1s'
					calcMode='spline'
					dur='3s'
					keySplines='.55, 0, .1, 1; .55, 0, .1, 1'
					repeatCount='indefinite'
					values='0; 1; 0'
				></animate>
			</path>
			<path
				fill='#e34647'
				d='M372.5 301a4.6 4.6 0 0 1-3.2-1.3L350 281.3l-19.3 18.4a4.6 4.6 0 0 1-6.4 0a4.1 4.1 0 0 1 0-6l22.5-21.4a4.6 4.6 0 0 1 6.4 0l22.5 21.4a4.1 4.1 0 0 1 0 6a4.6 4.6 0 0 1-3.2 1.3Z'
				opacity={0}
			>
				<animateTransform
					attributeName='transform'
					begin='-1s'
					calcMode='spline'
					dur='3s'
					keySplines='.55, 0, .1, 1; .55, 0, .1, 1'
					repeatCount='indefinite'
					type='translate'
					values='0 30; 0 0; 0 -30'
				></animateTransform>
				<animate
					attributeName='opacity'
					begin='-1s'
					calcMode='spline'
					dur='3s'
					keySplines='.55, 0, .1, 1; .55, 0, .1, 1'
					repeatCount='indefinite'
					values='0; 1; 0'
				></animate>
			</path>
		</>
	)
};

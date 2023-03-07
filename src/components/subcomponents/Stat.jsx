import AnimatedNumbers from './AnimatedNumbers'
import fixedDecimals from '../../utils/fixedDecimals'

export default function Stat({ label, value, faded }) {
	return (
		<div className='flex flex-col items-center sm:items-end'>
			<p
				className={`uppercase text-xs font-semibold leading-none ${
					faded ? 'text-slate-300 dark:text-slate-500' : 'text-slate-500'
				}`}
			>
				{label}
			</p>
			<p
				className={`text-2xl sm:text-lg font-mono font-extrabold ${
					faded
						? 'text-slate-500 dark:text-slate-400'
						: 'text-slate-700 dark:text-slate-300'
				} sm:w-20 text-end leading-snug`}
			>
				<AnimatedNumbers number={fixedDecimals(value, faded ? 2 : 3)} />
			</p>
		</div>
	)
}

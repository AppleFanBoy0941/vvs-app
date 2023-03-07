export default function Setting({
	label,
	variable,
	setVariable,
	fullWidth,
	...props
}) {
	return (
		<label
			className={`flex flex-col flex-shrink px-6 py-4 ${
				fullWidth
					? 'bg-slate-100/75 dark:bg-slate-600/75'
					: 'bg-slate-100/25 dark:bg-slate-600/25'
			} backdrop-blur-md shadow-brand-base-light dark:shadow-brand-base-dark rounded-4xl`}
		>
			<span className='uppercase text-xs font-semibold leading-none text-slate-500'>
				{label}
			</span>
			<input
				{...props}
				type='number'
				value={variable.value}
				onChange={e => {
					setVariable(e.target.value)
				}}
				className='text-lg font-mono font-extrabold text-slate-700 dark:text-slate-300 leading-snug'
			/>
		</label>
	)
}

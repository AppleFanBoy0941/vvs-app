import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { navLinkBackgroundGlow, tooltip } from '../../utils/motion'

export default function NavLink({ thisPage, currentPage, setPage }) {
	const { name, icon } = thisPage
	const isActive = currentPage === name

	let toolTipTimeout

	const [showTooltip, setShowTooltip] = useState(false)

	return (
		<motion.li
			key={name}
			layout
			className={`${
				isActive ? 'text-blue-400' : 'text-slate-600 dark:text-slate-200'
			} relative h-12 w-12 flex items-center justify-center p-1 rounded-full cursor-pointer transition`}
			onClick={() => setPage(name)}
			onHoverStart={() => {
				toolTipTimeout = setTimeout(() => {
					setShowTooltip(true)
				}, 200)
			}}
			onHoverEnd={() => {
				clearTimeout(toolTipTimeout)
				setShowTooltip(false)
			}}
		>
			{/* // ? Why doesn't this component work? */}
			{/* {isActive && (
				<motion.div
					layout
					layoutId='active-nav-link'
					className='absolute h-12 w-12 rounded-3xl bg-slate-400/5 dark:bg-slate-400/5'
					transition={{ type: 'spring', stiffness: 300, damping: 30 }}
				/>
			)} */}
			<div className='absolute pointer-events-none flex justify-center items-center h-full aspect-square overflow-hidden rounded-2xl'>
				<AnimatePresence>
					{isActive && (
						<motion.div
							variants={navLinkBackgroundGlow}
							initial='initial'
							animate='animate'
							exit='exit'
							className='absolute w-6 h-6 rounded-full bg-blue-400/50 dark:bg-blue-500 blur-lg'
						></motion.div>
					)}
				</AnimatePresence>
				<div className='absolute'>{icon}</div>
			</div>
			<AnimatePresence>
				{showTooltip && (
					<motion.div
						className='absolute -top-8 left-1/2 -translate-x-1/2 text-slate-500 dark:text-slate-300 bg-slate-100/25 dark:bg-slate-600/25 rounded-2xl p-2 px-4 shadow-brand-base-light dark:shadow-brand-base-dark text-sm backdrop-blur-sm'
						variants={tooltip('bottom', true)}
						initial='initial'
						animate='animate'
						exit='exit'
					>
						{name}
					</motion.div>
				)}
			</AnimatePresence>
		</motion.li>
	)
}

import { AnimatePresence, motion } from 'framer-motion'
import { Filter, FilterX, MoreHorizontal } from 'lucide-react'
import { useContext, useState } from 'react'
import Setting from '../components/subcomponents/Setting'
import { VariablesContext } from '../contexts/VariablesProvider'

export default function RoomsSettings({ sortList, setSortList }) {
	const { variables, setVariables } = useContext(VariablesContext)

	const [showSettings, setShowSettings] = useState(false)

	function setHeight(value) {
		setVariables({
			...variables,
			height: {
				...variables.height,
				value,
			},
		})
	}

	function setAirChange(value) {
		setVariables({
			...variables,
			airChange: {
				...variables.airChange,
				value,
			},
		})
	}

	function setRatio(value) {
		setVariables({
			...variables,
			ratio: {
				...variables.ratio,
				value,
			},
		})
	}

	const itemVariants = {
		hidden: { opacity: 0, y: -16 },
		visible: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: 24, transition: { ease: 'easeIn' } },
	}

	return (
		<div className='flex justify-between relative gap-4'>
			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onClick={() => setShowSettings(!showSettings)}
				className='lg:hidden h-14 w-14 rounded-4xl bg-slate-100/25 dark:bg-slate-600/25 shadow-brand-base-light dark:shadow-brand-base-dark flex justify-center items-center text-slate-600 dark:text-slate-400 shrink-0'
			>
				<MoreHorizontal />
			</motion.button>
			<AnimatePresence mode='popLayout'>
				{showSettings && (
					<motion.ul
						variants={{
							hidden: { opacity: 0, y: 0 },
							visible: {
								opacity: 1,
								y: 16,
								transition: { staggerChildren: 0.1 },
							},
							exit: { opacity: 0, y: 24, transition: { ease: 'easeIn' } },
						}}
						initial='hidden'
						animate='visible'
						exit='exit'
						className='lg:hidden top-full absolute w-full flex flex-col gap-4 z-50'
					>
						<motion.li variants={itemVariants}>
							<Setting
								variable={variables.height}
								setVariable={setHeight}
								label='Højde'
								fullWidth
							/>
						</motion.li>
						<motion.li variants={itemVariants}>
							<Setting
								variable={variables.airChange}
								setVariable={setAirChange}
								label='Luftskifte'
								fullWidth
							/>
						</motion.li>
						<motion.li variants={itemVariants}>
							<Setting
								variable={variables.ratio}
								setVariable={setRatio}
								label='Ind/ud'
								fullWidth
							/>
						</motion.li>
					</motion.ul>
				)}
			</AnimatePresence>
			<div className='gap-2 hidden lg:flex w-full flex-shrink min-w-0'>
				<Setting
					variable={variables.height}
					setVariable={setHeight}
					label='Højde'
					step={0.1}
				/>
				<Setting
					variable={variables.airChange}
					setVariable={setAirChange}
					label='Luftskifte'
					step={0.1}
					min={0.1}
				/>
				<Setting
					variable={variables.ratio}
					setVariable={setRatio}
					label='Ind/ud'
					step={0.01}
				/>
			</div>
			<motion.button
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				onClick={() => setSortList(!sortList)}
				className='w-14 h-14 sm:h-full aspect-square sm:w-auto bg-slate-100/25 dark:bg-slate-600/25 shadow-brand-base-light dark:shadow-brand-base-dark flex justify-center items-center text-slate-600 dark:text-slate-400 rounded-4xl shrink-0'
			>
				<AnimatePresence mode='popLayout'>
					{sortList ? (
						<motion.div
							key={1}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<Filter className='text-blue-500 fill-blue-500/25 dark:text-blue-400 dark:fill-blue-400/25' />
						</motion.div>
					) : (
						<motion.div
							key={2}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<FilterX />
						</motion.div>
					)}
				</AnimatePresence>
			</motion.button>
		</div>
	)
}

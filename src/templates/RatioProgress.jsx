import { motion } from 'framer-motion'
import { useContext } from 'react'
import { RoomsContext } from '../contexts/RoomsProvider'

export default function RatioProgress() {
	const { rooms } = useContext(RoomsContext)

	const highest = rooms.reduce((acc, room) => {
		if (room.projected) {
			if (room.ratio > acc) {
				acc = room.ratio
			}
		}
		return acc
	}, 0)

	return (
		<motion.div
			layout
			variants={{
				hidden: { opacity: 0, y: 48, scale: 0.95 },
				visible: {
					opacity: 1,
					y: 0,
					scale: 1,
					transition: { type: 'spring', stiffness: 300, damping: 20 },
				},
				exit: {
					opacity: 0,
					scale: 0.5,
					transition: { ease: 'easeIn' },
				},
			}}
			className='flex flex-col overflow-hidden relative rounded-4xl bg-slate-100/25 dark:bg-slate-800 shadow-brand-base-light dark:shadow-brand-base-dark flex-shrink-0'
		>
			<div className='relative w-full h-16'>
				<div className='absolute top-1/2 -translate-y-1/2 left-6 right-6'>
					<div className='h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 dark:from-red-400/75 dark:via-yellow-400/50 dark:to-green-400/75 rounded-full -mb-2 blur-lg' />
					<div className='h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 dark:from-red-400 dark:via-yellow-400 dark:to-green-400 rounded-full' />
				</div>
				{rooms.map((room, index) => {
					if (!room.projected) return

					return (
						<motion.div
							key={index}
							className='absolute rounded-full top-1/2 -translate-y-1/2 right-4 h-6 w-6 bg-blue-500 dark:bg-blue-400 backdrop-blur-md flex items-center justify-center shadow-brand-primary-light dark:shadow-brand-primary-dark'
							initial={{
								left: '100%',
								x: '-50%',
								y: '-50%',
							}}
							animate={{
								left: `calc(${(room.ratio / highest) * 100}% - 1.75rem)`,
								x: '-50%',
								y: '-50%',
							}}
						/>
					)
				})}
			</div>
			<div className='absolute top-0 h-[5.5rem] sm:h-20 left-0 right-0 p-6 py-4 hidden sm:flex justify-between items-end text-slate-400'>
				<p className='font-mono text-sm bottom-0'>0.00</p>
				<p className='font-mono text-sm bottom-0'>{highest.toFixed(2)}</p>
			</div>
			<div className='hidden sm:block p-6 pt-4 text-slate-400 dark:text-slate-500'>
				<p className='text-xs'>
					Se hvor tæt du er på at nå det samme forhold i alle rum. Jo tættere de
					er sammen, jo tættere er du på at nå et lige forhold.
				</p>
			</div>
		</motion.div>
	)
}

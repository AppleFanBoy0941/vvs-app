import { motion, AnimatePresence } from 'framer-motion'
import { useContext, useState } from 'react'
import { PageContext } from '../contexts/PageProvider'
import RatioProgress from '../templates/RatioProgress'
import RoomsList from '../templates/RoomsList'
import RoomsSettings from '../templates/RoomsSettings'

export default function ListView() {
	const { page } = useContext(PageContext)
	const [sortList, setSortList] = useState(false)

	return (
		<AnimatePresence>
			{page === 'Liste' && (
				<motion.div
					initial={{ opacity: 0, backdropFilter: 'blur(0rem)' }}
					animate={{ opacity: 1, backdropFilter: 'blur(2rem)' }}
					exit={{ opacity: 0, backdropFilter: 'blur(0rem)' }}
					className='h-screen w-screen fixed bg-slate-50/50 dark:bg-slate-900/50 flex justify-center items-start pt-6 sm:pt-12 px-6'
				>
					{/* <div className='absolute top-2 left-2 flex items-center gap-2'>
						<button
							onClick={() => setSortList(!sortList)}
							className='w-10 h-6 p-1 bg-slate-100 dark:bg-slate-800 rounded-full'
						>
							<motion.div
								layout
								className='h-full aspect-square bg-slate-50 dark:bg-slate-900 rounded-full'
								animate={{
									x: sortList ? '100%' : '0%',
								}}
							/>
						</button>
						Sorter liste
					</div> */}
					<motion.div
						variants={{
							hidden: { opacity: 0 },
							visible: {
								opacity: 1,
								transition: { delayChildren: 0.2, staggerChildren: 0.1 },
							},
							exit: { opacity: 0 },
						}}
						initial='hidden'
						animate='visible'
						exit='exit'
						className='max-w-4xl w-full h-[calc(100%-6.5rem)] flex flex-col gap-6'
					>
						<RoomsSettings sortList={sortList} setSortList={setSortList} />
						<RoomsList sortList={sortList} />
						<RatioProgress />
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

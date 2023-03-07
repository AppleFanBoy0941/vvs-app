import { motion, AnimatePresence } from 'framer-motion'
import { Command, GripVertical } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'
import DragNavigation from '../components/navigation/DragNavigation'
import PagesNavigation from '../components/navigation/PagesNavigation'

export default function Navigation() {
	const [position, setPosition] = useState('center')
	const [draggingPosition, setDraggingPosition] = useState(false)

	const navRef = useRef()

	return (
		<motion.div
			layout
			className={`fixed bottom-6 w-[calc(100%-3rem)] left-1/2 -translate-x-1/2 flex ${
				position === 'left'
					? 'justify-start'
					: position === 'right'
					? 'justify-end'
					: 'justify-center'
			} sm:w-fit ${draggingPosition !== false ? 'cursor-grabbing' : ''}`}
			animate={{
				left: draggingPosition
					? draggingPosition
					: position === 'center'
					? '50%'
					: position === 'left'
					? 'calc(0% + 1.5rem)'
					: 'calc(100% - 1.5rem)',
				x:
					draggingPosition !== false
						? '0%'
						: position === 'center'
						? '-50%'
						: position === 'left'
						? '0%'
						: '-100%',
				transition: { type: 'spring', stiffness: 100, damping: 20 },
			}}
		>
			<motion.div
				ref={navRef}
				layout
				className={`p-1 brand-bg-base shadow-brand-base-light dark:shadow-brand-base-dark rounded-4xl w-full sm:w-auto flex items-center gap-2 ${
					draggingPosition !== false ? 'pointer-events-none' : ''
				}`}
			>
				<PagesNavigation />
				<DragNavigation
					containerRef={navRef}
					setPosition={setPosition}
					setDrag={setDraggingPosition}
				/>
				<button className='flex items-center gap-2 text-slate-600 dark:text-slate-300 px-3 rounded-3xl hover:bg-slate-900/5 dark:hover:bg-slate-50/5 h-full pr-6 transition'>
					<Command />
					<div>
						<p className='text-sm leading-none font-semibold'>Command</p>
						<div className='flex items-center text-xs text-slate-400 dark:text-slate-500'>
							<Command size={12} />
							<p className='leading-none'>K</p>
						</div>
					</div>
				</button>
			</motion.div>
		</motion.div>
	)
}

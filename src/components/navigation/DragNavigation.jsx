// Dette komponent tager imod nogle props, som gør at man kan trække i den for at ændre positionen for navbaren.

import { GripVertical } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function DragNavigation({ containerRef, setPosition, setDrag }) {
	const [dragging, setDragging] = useState(false)

	return (
		<motion.button
			drag='x'
			dragConstraints={{ left: 0, right: 0 }}
			dragElastic={0}
			className='text-slate-300 cursor-grab h-8 w-4 hidden sm:grid items-center'
			onDragStart={() => {
				setDragging(true)
			}}
			onDrag={(_, info) => {
				const halfWidth = containerRef.current.getBoundingClientRect().width / 2

				setDrag(info.point.x - halfWidth)
			}}
			onDragEnd={(_, info) => {
				if (info.point.x < window.innerWidth / 3) {
					setPosition('left')
				} else if (info.point.x > (window.innerWidth / 3) * 2) {
					setPosition('right')
				} else {
					setPosition('center')
				}

				setDrag(false)
				setDragging(false)
			}}
			animate={{
				opacity: dragging ? 1 : 0.5,
			}}
		>
			<GripVertical size={20} />
		</motion.button>
	)
}

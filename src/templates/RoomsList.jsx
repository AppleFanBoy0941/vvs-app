import { RoomsContext } from '../contexts/RoomsProvider'
import { motion, AnimatePresence } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import RoomListItem from '../components/list/RoomListItem'

export default function RoomsList({ sortList }) {
	const { rooms } = useContext(RoomsContext)
	const [sortedRooms, setSortedRooms] = useState([])

	useEffect(() => {
		setSortedRooms(
			[...rooms].sort((a, b) => {
				if (a.ratio && !b.ratio) return -1
				if (!a.ratio && b.ratio) return 1
				if (a.ratio && b.ratio) {
					if (a.ratio > b.ratio) return -1
					if (a.ratio < b.ratio) return 1
				}
				return 0
			})
		)
	}, [rooms, sortList])

	return (
		<motion.ul
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
			transition={{ layout: { type: 'spring', stiffness: 800, damping: 20 } }}
			className='flex scrollbar-hide flex-col py-2 overflow-y-auto relative rounded-4xl bg-slate-100/25 dark:bg-slate-600/25 shadow-brand-base-light dark:shadow-brand-base-dark'
			style={{ overscrollBehavior: 'contain' }}
		>
			<AnimatePresence>
				{sortList
					? sortedRooms.map((room, index) => {
							if (!room.projected) return

							return (
								<motion.div
									key={room.id}
									transition={{
										layout: { type: 'spring', stiffness: 500, damping: 20 },
									}}
								>
									{index !== 0 && (
										<hr className='border-slate-100 dark:border-slate-800 border-t-2' />
									)}
									<RoomListItem room={room} />
								</motion.div>
							)
					  })
					: rooms.map((room, index) => {
							if (!room.projected) return

							return (
								<motion.div
									key={room.id}
									transition={{
										layout: { type: 'spring', stiffness: 500, damping: 20 },
									}}
								>
									{index !== 0 && (
										<hr className='border-slate-100 dark:border-slate-800 border-t-2' />
									)}
									<RoomListItem room={room} />
								</motion.div>
							)
					  })}
			</AnimatePresence>
		</motion.ul>
	)
}

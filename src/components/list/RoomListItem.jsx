import { AnimatePresence, motion } from 'framer-motion'
import { Minus, Plus } from 'lucide-react'
import useRooms from '../../hooks/useRooms'
import IconButton from '../buttons/IconButton'
import Stat from '../subcomponents/Stat'
import IconButtonLarge from '../buttons/IconButtonLarge'

export default function RoomListItem({ room }) {
	const { adjustRoom } = useRooms(room.id)

	return (
		<motion.li
			layout
			className='flex flex-col gap-4 sm:flex-row sm:items-center justify-between w-full p-4'
		>
			<div className='flex flex-col sm:flex-grow pl-2'>
				<h2 className='text-slate-700 dark:text-slate-100 text-xl sm:text-lg font-bold sm:leading-snug'>
					{room.name}
				</h2>
				<p className='text-sm sm:leading-snug text-slate-400/90'>
					<span className='font-semibold text-slate-400'>{room.sqm}</span> m
					<sup>2</sup>
				</p>
			</div>
			<div className='grid grid-cols-2 gap-4 sm:flex items-center sm:gap-8'>
				<Stat label='Forhold' value={room.ratio} faded />
				<Stat label='Værdi' value={room.calc} />
				<div className='hidden sm:flex items-center gap-2'>
					<IconButton
						onClick={() => {
							adjustRoom(-1)
						}}
					>
						<Minus />
					</IconButton>
					<IconButton
						onClick={() => {
							adjustRoom(1)
						}}
					>
						<Plus />
					</IconButton>
				</div>
			</div>
			<div className='grid grid-cols-2 gap-4 sm:hidden'>
				<IconButtonLarge onClick={() => adjustRoom(-1)}>
					<Minus />
				</IconButtonLarge>
				<IconButtonLarge onClick={() => adjustRoom(1)}>
					<Plus />
				</IconButtonLarge>
			</div>
		</motion.li>
	)
}

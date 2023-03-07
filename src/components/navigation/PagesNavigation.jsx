import { AnimatePresence, motion } from 'framer-motion'
import { useContext } from 'react'
import { PageContext } from '../../contexts/PageProvider'
import NavLink from './NavLink'

export default function PagesNavigation() {
	const { page, setPage, pages } = useContext(PageContext)

	return (
		<motion.ul layout className='flex relative'>
			<AnimatePresence>
				{pages.map(p => (
					<NavLink
						key={p.name}
						thisPage={p}
						currentPage={page}
						setPage={setPage}
					/>
				))}
			</AnimatePresence>
		</motion.ul>
	)
}

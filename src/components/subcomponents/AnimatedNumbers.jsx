import { motion, AnimatePresence } from 'framer-motion'

export default function AnimatedNumbers({ number }) {
	return (
		<AnimatePresence mode='popLayout'>
			{number.split('').map((num, i) => {
				return (
					<motion.span
						key={i + num}
						initial={{ opacity: 0, y: 12 }}
						animate={{
							opacity: 1,
							y: 0,
							scale: 1,
							filter: 'blur(0rem)',
							transition: {
								delay: i * 0.025 + 0.05,
								type: 'spring',
								stiffness: 300,
								damping: 20,
							},
						}}
						exit={{
							opacity: 0,
							scale: 0.75,
							filter: 'blur(0.5rem)',
							transition: { ease: 'easeIn' },
						}}
						className='inline-block'
					>
						{num}
					</motion.span>
				)
			})}
		</AnimatePresence>
	)
}

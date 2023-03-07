import { motion } from 'framer-motion'

export default function IconButton({
	children,
	onlyMobile,
	onlyDesktop,
	...props
}) {
	return (
		<motion.button
			{...props}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95, opacity: 0.8 }}
			className={`${
				onlyMobile ? 'sm:hidden' : onlyDesktop ? 'hidden sm:flex' : 'flex'
			} items-center justify-center w-10 h-10 rounded-full bg-blue-500 dark:bg-blue-400 text-slate-100 dark:text-slate-200 shadow-brand-primary-light dark:shadow-brand-primary-dark`}
		>
			{children}
		</motion.button>
	)
}

// tooltip utility for motion, accept a parameter for the direction of the tooltip, the default should be top. Provide a demo in a comment under the object to show how it works.

export const tooltip = (direction = 'top', negativeAdjustment) => {
	const variants = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				type: 'spring',
				stiffness: 300,
				damping: 20,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				ease: 'easeIn',
				duration: 0.2,
			},
		},
	}

	switch (direction) {
		case 'top':
			return {
				...variants,
				initial: {
					...variants.initial,
					y: -24,
					x: negativeAdjustment ? '-50%' : 0,
				},
				animate: {
					...variants.animate,
					y: 0,
					x: negativeAdjustment ? '-50%' : 0,
				},
				exit: {
					...variants.exit,
					y: -24,
					x: negativeAdjustment ? '-50%' : 0,
				},
			}
		case 'bottom':
			return {
				...variants,
				initial: {
					...variants.initial,
					y: 24,
					x: negativeAdjustment ? '-50%' : 0,
				},

				animate: {
					...variants.animate,
					y: 0,
					x: negativeAdjustment ? '-50%' : 0,
				},
				exit: {
					...variants.exit,
					y: 24,
					x: negativeAdjustment ? '-50%' : 0,
				},
			}
		case 'left':
			return {
				...variants,
				initial: {
					...variants.initial,
					x: -24,
					y: negativeAdjustment ? '-50%' : 0,
				},
				animate: {
					...variants.animate,
					x: 0,
					y: negativeAdjustment ? '-50%' : 0,
				},
				exit: {
					...variants.exit,
					x: -24,
					y: negativeAdjustment ? '-50%' : 0,
				},
			}
		case 'right':
			return {
				...variants,
				initial: {
					...variants.initial,
					x: 24,
					y: negativeAdjustment ? '-50%' : 0,
				},
				animate: {
					...variants.animate,
					x: 0,
					y: negativeAdjustment ? '-50%' : 0,
				},
				exit: {
					...variants.exit,
					x: 24,
					y: negativeAdjustment ? '-50%' : 0,
				},
			}
		default:
			return variants
	}
}

// showcase how the tooltip utility works in a demo component
// export const TooltipDemo = () => {
// 	const [showTooltip, setShowTooltip] = useState(false)

// 	return (
// 		<div className="relative">
// 			<button
// 				className="bg-gray-200 p-4 rounded-md"
// 				onMouseEnter={() => setShowTooltip(true)}
// 				onMouseLeave={() => setShowTooltip(false)}
// 			>
// 				Show Tooltip
// 			</button>
// 			<motion.div
// 				className="absolute bg-gray-200 p-4 rounded-md"
// 				variants={tooltip('top')}
// 				initial="initial"
// 				animate={showTooltip ? 'animate' : 'exit'}
// 			>
// 				Tooltip

// * Navigation Utilities * //

export const navLinkBackgroundGlow = {
	initial: {
		opacity: 0,
		scale: 0,
	},
	animate: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 1,
			ease: 'easeOut',
			delay: 0.25,
		},
	},
	exit: {
		opacity: 0,
		scale: 0,
		transition: {
			ease: 'easeOut',
			duration: 1,
		},
	},
}

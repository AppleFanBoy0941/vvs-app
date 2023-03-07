export default function roundOff(value, precision, roundDirection) {
	var multiplier = Math.pow(10, precision || 0)

	if (roundDirection === 'up') {
		return Math.ceil(value * multiplier) / multiplier
	}
	if (roundDirection === 'down') {
		return Math.floor(value * multiplier) / multiplier
	}
	return Math.round(value * multiplier) / multiplier
}

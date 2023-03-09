import { createContext, useState, useContext, useEffect } from 'react'
import { RoomsContext } from './RoomsProvider'
import roundOff from '../utils/roundOff'

export const VariablesContext = createContext()

export default function VariablesProvider({ children }) {
	const { rooms, setRooms } = useContext(RoomsContext)

	const [variables, setVariables] = useState({
		height: {
			id: 1,
			name: 'Højde',
			value: 2.5,
		},
		airChange: { id: 2, name: 'Luftskifte', value: 0.3 },
		ratio: { id: 3, name: 'Ind/ud', value: 1.05 },
	})

	useEffect(() => {
		const newRooms = rooms.map(room => {
			const newProjected = room.projected
				? room.sqm * variables.airChange.value
				: null

			return {
				...room,
				projected: roundOff(newProjected, 1),
			}
		})

		setRooms(newRooms)
	}, [JSON.stringify(variables)])

	return (
		<VariablesContext.Provider value={{ variables, setVariables }}>
			{children}
		</VariablesContext.Provider>
	)
}

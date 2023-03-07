import { createContext, useState, useEffect } from 'react'
import roundOff from '../utils/roundOff'

export const RoomsContext = createContext()

export default function RoomsProvider({ children }) {
	const [rooms, setRooms] = useState([
		{
			id: 1,
			name: 'Stue',
			sqm: 22.3,
			measured: 4.2,
			projected: 6.7,
			adjustment: 0,
			calc: 4.2,
			ratio: undefined,
		},
		{
			id: 2,
			name: 'Køkken Alrum',
			sqm: 32.4,
			measured: 15.5,
			projected: 9.7,
			adjustment: 0,
			calc: 15.5,
			ratio: undefined,
		},
		{
			id: 3,
			name: 'Bryggers',
			sqm: 9.8,
			measured: null,
			projected: null,
			adjustment: 0,
			calc: null,
			ratio: undefined,
		},
		{
			id: 4,
			name: 'Bad',
			sqm: 5,
			measured: null,
			projected: null,
			adjustment: 0,
			calc: null,
			ratio: undefined,
		},
		{
			id: 5,
			name: 'Værelse 1',
			sqm: 11.2,
			measured: 2.6,
			projected: 3.4,
			adjustment: 0,
			calc: 2.6,
			ratio: undefined,
		},
		{
			id: 6,
			name: 'Værelse 2',
			sqm: 10.4,
			measured: 1.9,
			projected: 3.1,
			adjustment: 0,
			calc: 1.9,
			ratio: undefined,
		},
		{
			id: 7,
			name: 'Soveværelse',
			sqm: 13.3,
			measured: 5.3,
			projected: 4,
			adjustment: 0,
			calc: 5.3,
			ratio: undefined,
		},
	])

	useEffect(() => {
		// Hver gang rooms ændrer sig, vil denne kode blive kørt. Det sørger for, at den kalkulerede værdi bliver opdateret.
		const measuredTotal = rooms.reduce((acc, room) => {
			return acc + room.measured
		}, 0) // Reducerer rooms så vi står tilbage med et tal, der er summen af alle measured værdierne, dvs. vores statiske målte værdier. Dette kunne være et fast tal. Men for dynamikens skyld er det bedre at lave det sådan her.
		// * I fremtiden, når der kommer API på, vil det give mening at lade API'et beregne dette tal, så vi ikke skal gøre det her.

		const adjustedTotal = rooms.reduce((acc, room) => {
			return acc + (room.measured + room.adjustment)
		}, 0) // Ligesom den forrige beregner vi et total. Denne gang beregner vi bare summen af measured + adjustment. Dette tal bruger vi til at beregne den kalkulerede værdi.
		// Denne værdi kan ikke blive hentet fra API'et, da den er dynamisk og derfor ikke kan gemmes i databasen.

		const updatedRooms = rooms.map(room => {
			return {
				...room, // Vi beholder alle de andre værdier, så vi ikke overskriver dem.
				calc: roundOff(
					((room.measured + room.adjustment) * measuredTotal) / adjustedTotal,
					3
				), // Denne formel beregner den nye kalkulerede værdi for os. JavaScript kan ikke af sig selv runde af til et bestemt tal, så jeg har lavet funktionen roundOff, som gør det for os. Det første vi sætter ind er tallet vi vil runde af, det andet er hvor mange decimaler vi vil have.
				ratio: roundOff(room.projected / room.calc, 2), // Denne formel beregner den nye ratio for os.
			}
		})

		setRooms(updatedRooms)
	}, [JSON.stringify(rooms)])

	return (
		<RoomsContext.Provider value={{ rooms, setRooms }}>
			{children}
		</RoomsContext.Provider>
	)
}

import { useContext, useState, useEffect } from 'react'
import { RoomsContext } from '../contexts/RoomsProvider'
import roundOff from '../utils/roundOff'

export default function useRooms(roomId) {
	const { rooms, setRooms } = useContext(RoomsContext) // hent vores rooms fra context
	const [room, setRoom] = useState(null)

	useEffect(() => {
		if (!roomId) return // Hvis ikke der er et room id, så vil vi ikke sætte room til noget

		const room = rooms.find(room => room.id === roomId)
		setRoom(room)
	}, [roomId, rooms])

	function adjustRoom(direction, value = 0.1) {
		if (!roomId) throw new Error('Der skete en fejl') // Hvis ikke der er et room id, kan vi ikke opdatere rummet, da vi skal have et id for at vide hvilket rum vi skal opdatere. Derimod sætter vi en fejl

		if (typeof direction === 'string') {
			if (direction === 'increase' || direction === 'up') {
				direction = 1
			} else if (direction === 'decrease' || direction === 'down') {
				direction = -1
			}
		}

		const newRooms = rooms.map(room => {
			if (room.id === roomId) {
				return {
					...room,
					adjustment: roundOff(room.adjustment + direction * value, 1),
				}
			}

			return room
		})

		setRooms(newRooms)
	}

	return { room, adjustRoom }
}

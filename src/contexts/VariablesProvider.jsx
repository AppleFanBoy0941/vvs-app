import { createContext, useState } from 'react'

export const VariablesContext = createContext()

export default function VariablesProvider({ children }) {
	const [variables, setVariables] = useState({
		height: {
			id: 1,
			name: 'Højde',
			value: 2.5,
		},
		airChange: { id: 2, name: 'Luftskifte', value: 0.3 },
		ratio: { id: 3, name: 'Ind/ud', value: 1.05 },
	})

	return (
		<VariablesContext.Provider value={{ variables, setVariables }}>
			{children}
		</VariablesContext.Provider>
	)
}

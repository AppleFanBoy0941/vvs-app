// PageProvider skaber en kontekst, så vi kan se hvilken del af appen vi er på.
// Ved hjælp af useContext kan vi få fat i dens nuværende state og vi har en funktion der kan ændre dens state.

import { createContext, useState } from 'react'
import { Home, List, User, Settings } from 'lucide-react'

export const PageContext = createContext() // Denne funktion opretter en kontekst som vi kan bruge i alle vores komponenter under <PageProvider>-tagsene.

export default function PageProvider({ children }) {
	// children-proppet er alt det indhold vi sætter mellem <PageProvider> og </PageProvider>-tagsene
	const [page, setPage] = useState('Home') // En string med hvilken del af appen vi er på. F.eks. 'home', 'list' eller 'konto'.

	const pages = [
		{
			name: 'Hus',
			icon: <Home />,
		},
		{
			name: 'Liste',
			icon: <List />,
		},
		{
			name: 'Profil',
			icon: <User />,
		},
		{
			name: 'Indstillinger',
			icon: <Settings />,
		},
	] // En liste med alle de sider vi har i appen. Vi kan bruge denne variabel så hvis vi ændrer antallet af sider vil det blive afspejlet i hele appen.

	return (
		<PageContext.Provider value={{ page, setPage, pages }}>
			{children}
		</PageContext.Provider>
	)
}

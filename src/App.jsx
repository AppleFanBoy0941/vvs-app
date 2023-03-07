import PageProvider from './contexts/PageProvider'
import RoomsProvider from './contexts/RoomsProvider'
import VariablesProvider from './contexts/VariablesProvider'
import Navigation from './templates/Navigation'
import ListView from './Views/ListView'

function App() {
	return (
		<PageProvider>
			{/* PageProvider sørger for at vide hvor på siden vi er, så vi kan vise det rigtige indhold. Fx hvis man er på sin profil skal man få vist info om det */}
			<RoomsProvider>
				{/* RoomsProvider indeholder informationerne om vores rum. Det er en liste (eller et array) af objekter, hvor vi kan se rummets størrelse og andre detaljer. Når vi skal justere et rum, er det gennem denne kontekst */}
				<VariablesProvider>
					{/* VariablesProvider har vores variabler: loftshøjde, luftskifte og ind/ud-forhold i et objekt. Den gør det muligt for os at udregne de forskellige ting */}
					<div className='h-screen w-screen overflow-hidden cursor-default'>
						<ListView />
						<Navigation />
					</div>
				</VariablesProvider>
			</RoomsProvider>
		</PageProvider>
	)
}

export default App

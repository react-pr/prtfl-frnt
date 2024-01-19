import { About } from '@/components/screens/About/About'
import { Contact } from '@/components/screens/Contact/Contact'
import { Home } from '@/components/screens/Home/Home'
import { Projects } from '@/components/screens/Projects/Projects'
import { Undefind } from '@/components/screens/Undefind/Undefind'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const MainRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='*' element={<Undefind />} />
			</Routes>
		</BrowserRouter>
	)
}

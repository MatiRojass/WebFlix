import { ShowsProvider } from './context/ShowsContext'
import Home from './pages/Home'
import Header from './components/Layout/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShowDetails from './pages/ShowDetails'
import Footer from './components/Layout/Footer'

function App() {
	return (
		<BrowserRouter>
			<Header />
			<ShowsProvider>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<h1>ABOUT</h1>} />
					<Route path='/:type/:id' element={<ShowDetails />} />
					<Route path='*' element={<h1>404 NOT FOUND :[</h1>} />
				</Routes>
			</ShowsProvider>
			<Footer />
		</BrowserRouter>
	)
}

export default App

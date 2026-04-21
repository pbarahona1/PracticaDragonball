import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Nav from './components/Nav';
import DragonBall from './pages/DragonBall';
import RickAndMorty from './pages/RickAndMorty';
function App() {
	return (
		<>
			<Router>
				<Nav />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/dragonball' element={<DragonBall />}/>
          <Route path='/rickandmorty' element={<RickAndMorty />} />
				</Routes>
			</Router>
		</>
	);
}
export default App;
import GamesDetails from './components/GamesDetails/GamesDetails';
import GamesNav from './components/GamesNav/GamesNav';
import Header from './components/Header/Header';

function App() {

  return (
    <>
      <Header />
      <main>
        <GamesDetails />
        <GamesNav />
      </main>
    </>
  )
}

export default App;

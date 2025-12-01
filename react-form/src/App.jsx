import { useState } from 'react'
import articoliVideogiochi from './assets/Articoli'
import './App.css'

function App() {
  const [Article, setArticle] = useState([
  "La Storia dei Videogiochi",
  "I Migliori RPG di Sempre",
  "Come Funziona un Motore Grafico",
  "Giochi Indie da Non Perdere",
  "Console War: Sony vs Microsoft",
  "E-sport: L'Ascesa del Gioco Competitivo",
  "Open World: Libertà o Caos?"
  ]);
  const [nuovoArticolo, setNewArticle] = useState('');
  return (

    <>
      <header>
        <h1>Games</h1>
      </header>
      <main>
        <h2>Articoli</h2>
        <p>Article : {JSON.stringify(Article)}</p>
        
        <form onSubmit={function Submit(event) {
          event.preventDefault();
          setArticle([...Article, nuovoArticolo]);
          setNewArticle('');
        }}>
          <input type="text" value={nuovoArticolo}
            onChange={(event) => {
              setNewArticle(event.target.value)
              
            }} />
            <button type="submit">Aggiungi Articolo</button>
        </form>

      </main>
    </>
  )
}

export default App

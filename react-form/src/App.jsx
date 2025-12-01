import { useState } from 'react'
import articoliVideogiochi from './assets/Articoli'
import './App.css'


function App() {
  const [articles, setArticles] = useState([
  "La Storia dei Videogiochi",
  "I Migliori RPG di Sempre",
  "Come Funziona un Motore Grafico",
  "Giochi Indie da Non Perdere",
  "Console War: Sony vs Microsoft",
  "E-sport: L'Ascesa del Gioco Competitivo",
  "Open World: Libertà o Caos?"
  ]);
  const [newArticle, setNewArticle] = useState('');
  return (

    <>
      <header>
        <h1>Games</h1>
      </header>
      <main>
        <h2 className='article'>Articoli</h2>
        <p>Article : {JSON.stringify(articles)}</p>
        <ul className='article'>
          {articles.map((article, index)=>{
            return (
              <li key={index}>{article}</li>
            )
          })}
        </ul>
        
        <form className='article' onSubmit={function Submit(event) {
          event.preventDefault();
          setArticles([...articles, newArticle]);
          setNewArticle('');
        }}>
          <input type="text" value={newArticle}
            onChange={(event) => {
              setNewArticle(event.target.value)
              
            }} />
            <button  type="submit">Aggiungi Articolo</button>
        </form>

      </main>
    </>
  )
}

export default App

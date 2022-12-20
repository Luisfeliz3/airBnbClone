
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import cardData from "./data"
import Card from "./components/Card/Card";


function App() {
      const cards = cardData.map(item => 
      <Card
      key={item.id}
      item={item}
      
      />)
  return (
    <div className="App">
        <NavBar/>
        <Hero/>
        <section className="cards-list">
                {cards}
            </section>
    </div>
  );
}

export default App;

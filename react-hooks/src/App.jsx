import './App.css'
import Counter from "./composants/Counter/Counter.jsx";
import Formulaire from "./composants/Formulaire/Formulaire.jsx";
import CompteurAvecTitle from "./composants/CompteurAvecTitle/CompteurAvecTitle.jsx";
import Clock from "./composants/Clock/Clock.jsx";
import CompteurAvecLocalStorage from "./composants/CompteurAvecLocalStorage/CompteurAvecLocalStorage.jsx";

function App() {
    return (
        // <>
        //     <Formulaire/>
        //     <Counter/>
        // </>
        // <CompteurAvecTitle></CompteurAvecTitle>
        // <Clock/>
        <CompteurAvecLocalStorage/>
    )
}

export default App

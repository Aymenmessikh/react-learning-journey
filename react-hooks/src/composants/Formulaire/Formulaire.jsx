import './Formulaire.css'
import {useState} from "react";
function Formulaire() {

    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');

    function handelerPrenomChange(event) {
        setPrenom(event.target.value);
    }
    function handelerEmailChange(event) {
        setEmail(event.target.value);
    }
    return (
        <div className={'Formulaire'}>
            <h1>Formulaire</h1>
            <form>
                <div className={'form-group'}>
                    <label htmlFor="Prenom">Prenom :{prenom}</label>
                    <input type="text" id="Prenom" name="Prenom" onChange={handelerEmailChange} />
                </div>
                <div className={'form-group'}>
                    <label htmlFor="email">Email :{email}</label>
                    <input type="text" id="Nom" name="Email" onChange={handelerEmailChange}/>
                </div>
            </form>
        </div>
    );
}



export default Formulaire;
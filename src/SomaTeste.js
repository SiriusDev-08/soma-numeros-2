import React, {useState, useEffect} from 'react';
import './soma.css'; 

function SomaNum (props) {

    //this.props.name = "Minha soma de dois números!"; 
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState (0); 
    const [soma,setSoma] = useState(0); 

    useEffect(() => {
        console.log(11); 
    }, [num1])

    useEffect (() => {
        console.log(22);
    }, [num2])


    return (
        <div>
            <h1> Meu aplicativo de soma de Números ! </h1>

            <hr /> 

            <label htmlFor='TypeNum1'>Digite o primeiro número:  </label>
            

            <input id='TypeNum1' type='number' onChange={(evt) => setNum1(evt.target.value)} value={num1}/>

            <br/>

            <label htmlFor='TypeNum2'>Digite o segundo número:  </label>            

            <input id='TypeNum2' type='number' onChange={(evt) => setNum2(evt.target.value)} value={num2}/>

            <p> Esse é o número 1: {num1} </p>
            <p> Esse é o número 2:  {num2} </p>
            <button onClick = {
                () => setSoma(parseInt(num1) + parseInt(num2))
            } >
                 +
            </button>

            <h2> Essa é a soma dos dois números: {soma} ! </h2>
        </div>
    ); 
} 

export default SomaNum;  












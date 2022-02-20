import React, {useState, useEffect} from 'react';

function Counter (props) {

    //this.props.name = "Minha soma de dois números!";

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(11); 
    }, [count])

    return (
        <div>
            <h1> {props.name} </h1>
            <p> Você clicou {count} vezes </p>
            <button onClick = {() => setCount(count + 1)}>
                Clique aqui!
            </button>
        </div>
    ); 
} 

export default Counter;  












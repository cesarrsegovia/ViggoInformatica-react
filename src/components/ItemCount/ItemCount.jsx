import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);
    
    const incrementar = () => {
        if(contador < stock){
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if(contador > inicial){
            setContador(contador - 1);
        }
        
    }

    return (
        <>
        <div className='botonContador'>
            <button className='botonIncDec' onClick={decrementar}> - </button>
            <p> {contador} </p>
            <button className='botonIncDec' onClick={incrementar}> + </button>
        </div>
        <button onClick={() => funcionAgregar(contador)}> Agregar al carrito</button>
        </>
    )
}



export default ItemCount
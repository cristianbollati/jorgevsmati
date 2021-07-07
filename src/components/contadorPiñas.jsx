import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement, cambiarNombre } from '../actions/actions'

function ContadorPiñas({ nombre, contador, increment, decrement, cambiarNombre }) {
    return (
        <div>
         {nombre}
         <hr/>
         <button onClick={decrement}>-</button>
         {contador}
         <button onClick={increment}>+</button>
        <hr/>
         <button onClick={() => cambiarNombre('porteño')}>Porteñizar a Cristian</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        nombre: state.cristian,
        contador: state.contador
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        cambiarNombre: (nuevoNombre) => dispatch(cambiarNombre(nuevoNombre))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContadorPiñas)

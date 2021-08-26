import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Auxilary';
import Backdrop from '../Backdrop/Backdrop';
const Modal=(props)=>{
    const cls=[];
    cls.push(classes.Modal);
    props.show? cls.push(classes.Yy):cls.push(classes.Yn);
    return(
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
    <div 
        className={cls.join(' ')}>
        {props.children}
    </div>
    </Aux>);
};

export default Modal;
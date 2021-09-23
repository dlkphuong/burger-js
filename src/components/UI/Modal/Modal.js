import React, {Component} from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Auxilary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show;
    }
    componentWillUpdate(){
        console.log('[Modal] WillUpdate');
    }
    render(){
        const cls=[];
        cls.push(classes.Modal);
        this.props.show? cls.push(classes.Yy):cls.push(classes.Yn);
        return(
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div 
            className={cls.join(' ')}>
            {this.props.children}
        </div>
        </Aux>);
    };
    }


export default Modal;
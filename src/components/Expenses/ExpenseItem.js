import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
// import Button from 'react-bootstrap/Button';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title); //first element points to initally managed value
                                                    //second element revisits this component and calls update function
    const clickHandler = () => {
        setTitle('Title Updated!');
        console.log(title);
    };
    return (
        <Card className = "expense-item">
            <ExpenseDate date = {props.date}/>
            <div className = "expense-item__description">
                <h2 style={{textAlign: "left"}}>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler} className = "change-title-btn">Change Title</button>
        </Card>
    );
}

export default ExpenseItem;

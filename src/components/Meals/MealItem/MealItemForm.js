import React,{useRef} from "react";
import classes from './MealItemForm.module.css';
import Input from "../../UI/Input";
const MealItemForm = props => {
    const amountInputRef = useRef();
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    }
    return <form className={classes.form} onSubmit={submitHandler}>
        <Input
            ref={amountInputRef}
            label="Amount"
            input={{
                id: "Amount",
                type: "number",
                max:"5",
                min: "1",
                step: "1",
                defaultValue:"1"
            }}
        />
        <button>+Add</button>
    </form>
};
export default MealItemForm;
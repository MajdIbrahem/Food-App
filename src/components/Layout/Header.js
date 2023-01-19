import react, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import foodImg from"./assorted-indian-recipes-food-various-spices-rice-wooden-table-92742528.jpg"
const Header = props => {
    return (<Fragment>
        <header className={classes.header}>
            <h1>Al-laith Meals</h1>
            <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
        </header>
        <div className={classes["main-image"]}>
            <img src={foodImg} alt="food images"></img>
        </div>
    </Fragment>)
};
export default Header;
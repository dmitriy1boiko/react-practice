import css from "./Button.module.css";

export const Button = ({symbol, color, handleClick}) => {


  
  return (
    <div className={css.button_wrapper} style={{backgroundColor:color}} onClick={() => handleClick(symbol)}>{symbol}</div>
  );
};
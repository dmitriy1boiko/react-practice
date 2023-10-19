import css from "./Input.module.css";

export const Input = ({text, rezult}) => {
  return (
    <div className={css.wrapper} >
      <div className={css.rezult}><h1 style={{color: "black",}}>{rezult}</h1></div>
      <div className={css.text}><h3 style={{color: "black",}}>{text}</h3></div>
    </div>
  );
};

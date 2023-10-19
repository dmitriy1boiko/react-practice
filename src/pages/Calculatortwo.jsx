 import { useState } from "react";
 import *as math from "mathjs";
import css from "./Calculatortwo.module.css";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export const Calulatortwo = () => {
  const buttonCollor = '#f2a33c';
    const [text, setText] = useState("");
    const [rezult, setRezult] = useState("");
const addTooText =(val) =>{
  setText((text) =>[...text, val + " "])
};

const rezetInput = () => {
  setText("");
  setRezult("");
};

const calculateRezult = () => {
  let input = text.join('');
  setRezult(math.evaluate(input));
}

  return (
    <div className={css.main}>
      <div className={css.wrapper}>
      <Input text ={text} rezult ={rezult}/>
        <div className={css.row}>
          <Button symbol='7' handleClick={addTooText} />
          <Button symbol='8' handleClick={addTooText} />
          <Button symbol='9' handleClick={addTooText} />
          <Button symbol='/'color={buttonCollor} handleClick={addTooText}/>
        </div>
        <div className={css.row}>
          <Button symbol='4' handleClick={addTooText} />
          <Button symbol='5' handleClick={addTooText} />
          <Button symbol='6' handleClick={addTooText} />
          <Button symbol='*' color={buttonCollor} handleClick={addTooText} />
        </div>
        <div className={css.row}>
          <Button symbol='1' handleClick={addTooText} />
          <Button symbol='2' handleClick={addTooText} />
          <Button symbol='3' handleClick={addTooText} />
          <Button symbol='+' color={buttonCollor} handleClick={addTooText} />
        </div>
        <div className={css.row}>
          <Button symbol='0'handleClick={addTooText} />
          <Button symbol='.' handleClick={addTooText} />
          <Button symbol='=' handleClick={calculateRezult} />
          <Button symbol='-' color={buttonCollor} handleClick={addTooText} />
        </div>
        <Button symbol='Clear' color='red' handleClick={rezetInput} />
      </div>
    </div>
  );
};

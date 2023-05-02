import { useContext } from "react";
import GreatGrandSonOfApp from "./GreatGrandSonOfApp";
import { MoneyContext } from "./ContextPoc";

const GrandSonOfApp = () => {
  const { subtractMoney }  = useContext(MoneyContext);
  const { addMoney }  = useContext(MoneyContext);

  return (
    <div>
      <h1>Grand Son of App</h1>
      <button onClick={addMoney}>Save Money $ 1</button>
      <button onClick={subtractMoney}>Spend Money $ 1</button>
      <GreatGrandSonOfApp />
    </div>
  );
};

export default GrandSonOfApp;

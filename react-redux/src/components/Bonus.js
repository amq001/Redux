import { useDispatch, useSelector } from "react-redux";
import { incrementBonus } from "../actions";

function Bonus() {
  const points = useSelector((state) => state.bonus.points);
  const amount = useSelector((state) => state.account.amount);

  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Points : {points}</h3>
        <h3>Amount : ${amount}</h3>
        <button onClick={() => dispatch(incrementBonus())}>Increment +</button>
      </div>
    </div>
  );
}

export default Bonus;

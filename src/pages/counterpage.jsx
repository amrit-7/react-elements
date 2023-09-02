import { useReducer } from "react";
import Button from "../components/buttons";

const INITIALVALUE = {
  count: 0,
  valueToAdd: 0,
};

const Action_Types = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  ADD_VALUE: "ADD_VALUE",
  VALUE_INC: "VALUE_INC",
};

const countReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case Action_Types.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case Action_Types.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case Action_Types.ADD_VALUE:
      return {
        ...state,
        valueToAdd: payload,
      };
    case Action_Types.VALUE_INC:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    default:
      return state;
  }
};
const CounterPage = () => {
  const [state, dispatch] = useReducer(countReducer, INITIALVALUE);

  const increment = () => {
    dispatch({ type: Action_Types.INCREMENT });
    // setCount(count + 1);
  };
  const decrement = () => {
    dispatch({ type: Action_Types.DECREMENT });
    // setCount(count - 1);
  };
  const handleChange = (e) => {
    dispatch({
      type: Action_Types.ADD_VALUE,
      payload: parseInt(e.target.value),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: Action_Types.VALUE_INC });
  };
  return (
    <div className="p-3 m-3 border rounded w-50%">
      <span className="text-lg">Count is: {state.count}</span>
      <div className="flex flex-row my-4">
        <Button onClick={decrement}>Decrement</Button>
        <Button onClick={increment}>Increment</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add count</label>
        <input
          className="border ml-3 p-1 rounded bg-gray-100"
          type="number"
          value={state.valueToAdd || ""}
          onChange={handleChange}
        />
        <Button className="mt-3" type="submit">
          Add Value
        </Button>
      </form>
    </div>
  );
};

export default CounterPage;

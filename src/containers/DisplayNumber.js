import DisplayNumber from "../components/DisplayNumber";
import { connect } from "react-redux";
const mapReduxStateToReactProps = (state) => {
  return {
    number: state.number,
  };
};

export default connect(mapReduxStateToReactProps)(DisplayNumber);

/*
import store from "../store/store";
import { useState } from "react";
export default () => {
  const [state, setState] = useState(store.getState().number);

  store.subscribe(() => {
    setState(store.getState().number);
  });
  return (
    <>
      <DisplayNumber state={state}></DisplayNumber>
    </>
  );
};
*/

import DisplayNumber from "../components/DisplayNumber";
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

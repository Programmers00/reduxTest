import AddNumber from "../components/AddNumber";
import store from "../store/store";

export default () => {
  return (
    <>
      <AddNumber
        onClick={(size) => {
          store.dispatch({ type: "INCREMENT", size: size });
        }}
      ></AddNumber>
    </>
  );
};

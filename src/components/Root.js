import AddNumberRoot from "./AddNumberRoot";
import DisplayNumberRoot from "./DisplayNumberRoot";
const Root = () => {
  return (
    <div
      style={{
        border: "2px solid blue",
        padding: "10px",
      }}
    >
      <h1>Root</h1>
      <AddNumberRoot></AddNumberRoot>
      <DisplayNumberRoot></DisplayNumberRoot>
    </div>
  );
};
export default Root;

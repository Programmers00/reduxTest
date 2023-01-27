import AddNumberRoot from "./AddNumberRoot";
import DisplayNumberRoot from "./DisplayNumberRoot";
import UpdateTextRoot from "./UpdateTextRoot";
import DisplayTextRoot from "./DisplayTextRoot";
const Root = () => {
  return (
    <div
      style={{
        border: "2px solid",
        padding: "10px",
      }}
    >
      <h1>Root</h1>
      <AddNumberRoot></AddNumberRoot>
      <DisplayNumberRoot></DisplayNumberRoot>
      <UpdateTextRoot></UpdateTextRoot>
      <DisplayTextRoot></DisplayTextRoot>
    </div>
  );
};
export default Root;

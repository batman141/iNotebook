import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const s1 = {
    name: "Raj",
    class: "5b",
  };

  const [state, setState] = useState(s1);
  const update = () => {
    setTimeout(() => {
      setState({ name: "Trevor", class: "10a" });
    }, 1000);
  };

  return (
    //{state:state, update:update}
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

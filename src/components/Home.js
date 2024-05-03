import React from "react";
import Notes from "./Notes";

const Home = (props) => {
  const { showAlert } = props;
  return (
    <div>
      {/* prop drilling -> avoid by using context api */}
      <Notes showAlert={showAlert} />
    </div>
  );
};

export default Home;

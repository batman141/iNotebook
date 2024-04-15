import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6611a39b46bcf9f07d4057bf",
      user: "661126ebf0dd40af3c3de917",
      title: "Daily Routine",
      description: "Apply special beauty serum on skin",
      tag: "Personal",
      date: "2024-04-06T19:33:47.281Z",
      __v: 0,
    },
    {
      _id: "5411a39s46bcf9f07d4057bf",
      user: "657126ebf0dd40af3c3de917",
      title: "Dance Practice",
      description: "Dance with Hrithik for movie",
      tag: "Work",
      date: "2024-04-07T19:33:47.281Z",
      __v: 0,
    },
    {
      _id: "6411a39s46bcf9f07d4057bf",
      user: "657126ebf0dd40af3c3de917",
      title: "Dance Practice",
      description: "Dance with Hrithik for movie",
      tag: "Work",
      date: "2024-04-07T19:33:47.281Z",
      __v: 0,
    },
    {
      _id: "5411a39d46bcf9f07d4057bf",
      user: "657126ebf0dd40af3c3de917",
      title: "Dance Practice",
      description: "Dance with Hrithik for movie",
      tag: "Work",
      date: "2024-04-07T19:33:47.281Z",
      __v: 0,
    },
    {
      _id: "5411a39s36bcf9f07d4057bf",
      user: "657126ebf0dd40af3c3de917",
      title: "Dance Practice",
      description: "Dance with Hrithik for movie",
      tag: "Work",
      date: "2024-04-07T19:33:47.281Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

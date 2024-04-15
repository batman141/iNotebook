import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Get Notes
  const getNotes = async () => {
    // API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYxMTI2ZWJmMGRkNDBhZjNjM2RlOTE3In0sImlhdCI6MTcxMjQzNjI2OH0.crBhNUSuxIa101djWuN6Nn2wFCB3ZkiaQVSP-I9Y2gY",
      },
    });

    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  // Add Note
  const addNote = async (title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYxMTI2ZWJmMGRkNDBhZjNjM2RlOTE3In0sImlhdCI6MTcxMjQzNjI2OH0.crBhNUSuxIa101djWuN6Nn2wFCB3ZkiaQVSP-I9Y2gY",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    // Logic to add in client
    const note = {
      _id: "5411a40s36bcf9f07d4057bf",
      user: "657126ebf0dd40af3c3de917",
      title: title,
      description: description,
      tag: tag,
      date: "2024-04-07T19:33:47.281Z",
      __v: 0,
    };
    // concat returns an array, push updates the array
    setNotes(notes.concat(note));
  };

  // Edit Note
  const editNote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYxMTI2ZWJmMGRkNDBhZjNjM2RlOTE3In0sImlhdCI6MTcxMjQzNjI2OH0.crBhNUSuxIa101djWuN6Nn2wFCB3ZkiaQVSP-I9Y2gY",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  // Delete Note
  const deleteNote = async (id) => {
    // API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYxMTI2ZWJmMGRkNDBhZjNjM2RlOTE3In0sImlhdCI6MTcxMjQzNjI2OH0.crBhNUSuxIa101djWuN6Nn2wFCB3ZkiaQVSP-I9Y2gY",
      },
    });
    const json = response.json();

    // Logic to delete in client
    const notesAfterDeletion = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(notesAfterDeletion);
  };

  return (
    <NoteContext.Provider
      value={{ notes, getNotes, addNote, editNote, deleteNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

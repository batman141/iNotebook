import { React, useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
      // eslint-disable-next-line
    } else {
      navigate("/login");
    }
  }, []);

  // New State for note to be updated, different from state of note pool from get notes
  const [note, setNote] = useState({
    id: "",
    uptitle: "",
    updescription: "",
    uptag: "default",
  });

  const updateNote = (currentNote) => {
    // current is used with useRef
    ref.current.click();
    setNote({
      id: currentNote._id,
      uptitle: currentNote.title,
      updescription: currentNote.description,
      uptag: currentNote.tag,
    });
  };

  // useRef
  const ref = useRef(null);
  const refClose = useRef(null);

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const onCLickHandler = (e) => {
    editNote(note.id, note.uptitle, note.updescription, note.uptag);
    refClose.current.click();
    props.showAlert("Changes saved", "success");
  };

  return (
    <>
      <Addnote showAlert={props.showAlert} />
      {/* Button trigger modal */}
      <button
        type="button"
        // display : none for modal button as it is clicked on by useRef from edit icon
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Edit Note
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="uptitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="uptitle"
                    name="uptitle"
                    onChange={onChange}
                    value={note.uptitle}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="updescription" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="updescription"
                    name="updescription"
                    onChange={onChange}
                    value={note.updescription}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="uptag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="uptag"
                    name="uptag"
                    onChange={onChange}
                    value={note.uptag}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onCLickHandler}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h1>Your Notes</h1>
        {notes.length !== 0 &&
          notes.map((note) => {
            return (
              notes.length !== 0 && (
                <Noteitem
                  key={note._id}
                  updateNote={updateNote}
                  note={note}
                  showAlert={props.showAlert}
                />
              )
            );
          })}
        {notes.length === 0 && (
          <div className="container">No notes to display</div>
        )}
      </div>
    </>
  );
};

export default Notes;

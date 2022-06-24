import React from "react";
import AddNotes from "./AddNotes";
import Search from "./SearchNotes";
import NotesShowList from "./NotesShowList";
import NotesHiddenList from "./NotesHiddenList";
import { getInitialData } from "../utils";
import Swal from "sweetalert2";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchNotes: getInitialData(),
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onMoveArchiveHandler = this.onMoveArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
  
    Swal.fire({
        title: "Are you sure?",
        text: "Once deleted, you book totally removed!",
        icon: "warning",
        showCancelButton: true,
        buttons: true,
        dangerMode: true,
        confirmButtonColor: '#3085d6',  
      cancelButtonColor: '#d33', 
    })
    .then((result) => {
        if (result.value) {
            Swal.fire("Poof! You notes success deleted", {
                icon: "success",
            });
            const notes = this.state.notes.filter((note) => note.id !== id);
            const searchNotes = this.state.searchNotes.filter((note) => note.id !== id);
            this.setState({
                notes: notes,
                searchNotes: searchNotes,
              });
        } else {
            Swal.fire("Your notes file is cancel deleted!");
        }
    });

  }
  onMoveArchiveHandler(id) {
    Swal.fire({
      title: "Success",
      type: "success",
      text: "Your notes has been move.",
    });
    this.setState((prevState) => {
      return {
        notes: prevState.notes.map((note) => {
          if (note.id === id) {
            return {
              ...note,
              archived: !note.archived,
            };
          } else {
            return note;
          }
        }),
        searchNotes: prevState.searchNotes.map((note) => {
          if (note.id === id) {
            return {
              ...note,
              archived: !note.archived,
            };
          } else {
            return note;
          }
        }),
      };
    });
  }

  onSearchHandler(e) {
    this.setState((prevState) => {
      return {
        searchNotes: prevState.notes.filter((note) => note.title.toLowerCase().includes(e.target.value.toLowerCase())),
      };
    });
  }

  onAddNoteHandler({ title, body }) {
    Swal.fire({
        title: "Success",
        type: "success",
        text: "Your notes success created.",
      });
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
        searchNotes: [
          ...prevState.searchNotes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }
  render() {
    return (
      <>
        <Search onSearch={this.onSearchHandler} />
        <div className="container">
          <AddNotes addNote={this.onAddNoteHandler} />

          <NotesShowList notes={this.state.searchNotes} onDelete={this.onDeleteHandler} onMoveArchive={this.onMoveArchiveHandler} />
          <NotesHiddenList notes={this.state.searchNotes} onDelete={this.onDeleteHandler} onMoveArchive={this.onMoveArchiveHandler} />
        </div>
      </>
    );
  }
}

export default NotesApp;

import React from 'react';

class AddNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {
        title: '',
        body: '',
      },
      charLimit: {
        inputTitle: '',
        limit: 50,
        char: 50,
      },
    };
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(e) {
    if (e.target.value.length <= 50) {
      this.setState((prevState) => ({
        charLimit: {
          ...prevState.charLimit,
          inputTitle: e.target.value,
          char: prevState.charLimit.limit - e.target.value.length,
        },
        note: {
          ...prevState.note,
          title: e.target.value,
        },
      }));
    }
  }

  onBodyChangeEventHandler(e) {
    this.setState((prevState) => ({
      ...prevState,
      note: {
        ...prevState.note,
        body: e.target.value,
      },
    }));
  }

  onSubmitEventHandler(e) {
    e.preventDefault();
    this.props.addNote(this.state.note);
    this.setState((prevState) => ({
      note: {
        title: '',
        body: '',
      },
      charLimit: {
        ...prevState.charLimit,
        inputTitle: '',
        char: 50,
      },
    }));
  }

  render() {
    return (
      <div className="input-notes">
        <h2>Add Notes</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className={`add-note__title-limit ${this.state.charLimit.char === 0 ? 'zero' : ''}`}>
            Character Left :
            {' '}
            {this.state.charLimit.char}
          </p>
          <input className="add-note__title" type="text" value={this.state.note.title} onChange={this.onTitleChangeEventHandler} placeholder="Add Title For Notes" required />
          <textarea className="add-body" type="text" value={this.state.note.body} onChange={this.onBodyChangeEventHandler} placeholder="Add your body notes" required />
          <button type="submit">
            <i className="fa-solid fa-plus" />
            {' '}
            Create
          </button>
        </form>
      </div>
    );
  }
}

export default AddNotes;

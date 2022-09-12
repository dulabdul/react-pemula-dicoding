import React, { useState } from 'react';

export default function NotesAdd(props) {
  const [charLimit, setCharLimit] = useState({
    inputTitle: '',
    limit: 50,
    char: 50,
  });
  const [note, setAddNotes] = useState({
    title: '',
    body: '',
  });
  const onTitleChangeEventHandler = (e) => {
    if (e.target.value.length <= 50) {
      setCharLimit((prevState) => ({
        ...prevState,
        inputTitle: e.target.value,
        char: prevState.limit - e.target.value.length,
      }));
      setAddNotes((prevState) => ({
        ...prevState,
        title: e.target.value,
      }));
    }
  };
  const onBodyChangeEventHandler = (e) => {
    setAddNotes((prevState) => ({
      ...prevState,
      body: e.target.innerHTML,
    }));
  };
  const onSubmitEventHandler = (e) => {
    e.preventDefault();
    props.addNotes(note);
    setAddNotes(() => ({
      title: '',
      body: '',
    }));
    setCharLimit((prevState) => ({
      ...prevState,
      inputTitle: '',
      char: 50,
    }));
  };
  return (
    <>
      <div className='input-notes'>
        <h2>Add Notes</h2>
        <form onSubmit={onSubmitEventHandler}>
          <p
            className={`add-note__title-limit ${
              charLimit.char === 0 ? 'zero' : ''
            }`}
          >
            Character Left : {charLimit.char}
          </p>
          <input
            className='add-note__title'
            type='text'
            value={note.title}
            onChange={onTitleChangeEventHandler}
            placeholder='Add Title For Notes'
            required
          />
          <div
            className='add-body'
            contentEditable
            onInput={onBodyChangeEventHandler}
            placeholder='Add your body notes'
          />
          <button type='submit'>
            <i className='fa-solid fa-plus' /> Create
          </button>
        </form>
      </div>
    </>
  );
}

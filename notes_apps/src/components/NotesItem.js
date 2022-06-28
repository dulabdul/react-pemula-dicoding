import React from 'react';
import { showFormattedDate } from '../utils';

function NotesItem({ note, onDelete, onMoveArchive }) {
  return (
    <div className="notes-item">
      <div className="notes-item__body">
        <h3 className="notes-item__head">{note.title}</h3>
        <p className="notes-item__date">{showFormattedDate(note.createdAt)}</p>
        <p className="notes-item__content">{note.body}</p>
      </div>
      <div className="notes-item__button">
        <button className="notes-item__btndelete" onClick={() => onDelete(note.id)}>
          <i className="fa-solid fa-trash" />
          Delete
        </button>
        <button className="notes-item__btnarchive" onClick={() => onMoveArchive(note.id)}>
          <i className="fa-solid fa-box-archive" />
          {!note.archived ? ' Archived' : ' Moved'}
        </button>
      </div>

    </div>
  );
}

export default NotesItem;

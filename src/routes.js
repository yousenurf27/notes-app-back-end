/* eslint-disable quotes */
/* eslint-disable object-curly-newline */
const { addNoteHandler, editNotesByIdHandler, getAllNotesHandler, getNoteByIdHandler, deleteNotesByIdHandler } = require("./handler");

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNotesByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNotesByIdHandler,
  },
];

module.exports = routes;

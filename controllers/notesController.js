const expressAsyncHandler = require("express-async-handler");
const Note = require("../models/noteModel");

module.exports.getNotes = expressAsyncHandler(async (req, res) => {
  const notes = await Note.find({ user: req.user._id });
  res.json(notes);
});

module.exports.createNote = expressAsyncHandler(async (req, res) => {
  const { title, content, category } = req.body;
  if (!title || !content || !category) {
    res.status(400).json({
      status: false,
      message: "Pleas Fill all the fields ",
    });
  } else {
    const note = new Note({ user: req.user._id, title, content, category });
    const createdNote = await note.save();
    res.status(201).json(createdNote);
  }
});
module.exports.getNoteById = expressAsyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ status: false, message: "Note Not found" });
  }
});
module.exports.updateNote = expressAsyncHandler(async (req, res) => {
  const { title, content, category } = req.body;
  const note = await Note.findById(req.params.id);
  if (note.user.toString() !== req.user._id.toString()) {
    throw new Error("You can't perform this action");
  }
  if (note) {
    (note.title = title), (note.content = content), (note.category = category);
    const updatedNote = await note.save();
    res.json(updatedNote);
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});
module.exports.deleteNote = expressAsyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (note.user.toString() !== req.user._id.toString()) {
    throw new Error("You can't perform this action");
  }
  if (note) {
    await note.remove();
    res.json({ status: 200, message: "Note Removed" });
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});

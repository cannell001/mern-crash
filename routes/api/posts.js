const express = require("express");
const router = express.Router();

// Item Model
const Post = require("../../models/Post");

// @route   GET api/posts
// @desc    Get All Posts
// @access  Public
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post("/", (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    body: req.body.body
  });

  newPost.save().then(post => res.json(post));
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;

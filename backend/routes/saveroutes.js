const express = require("express");
const router = express.Router();
const bookmarksController = require("../controller/bookmarks.js");
const { verifyToken } = require("../middleware/verifyToken");

// Rute untuk menyimpan data ke tabel bookmarks
// router.post("/", verifyToken, bookmarksController.createBookmark);
router.post("/", bookmarksController.createBookmark);

// Rute untuk mengambil seluruh data dari tabel bookmarks
// router.get("/", verifyToken, bookmarksController.getAllBookmarks);
router.get("/", bookmarksController.getAllBookmarks);

module.exports = router;

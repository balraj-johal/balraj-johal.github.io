
require("dotenv").config();

const express = require("express");
const router = express.Router();
const DOCUMENT = require("../../models/document.model");
const multer = require("multer");
let AWS = require("aws-sdk");

let storage = multer.memoryStorage();
let upload = multer({ storage: storage });

// get all?
router.route("/").get((req, res, next) => {
    DOCUMENT.find({}, null, { sort: { createdAt: 1 } }, (err, docs) => { // find all of type
            if (err) {
                return next(err);
            }
            res.status(200).send(docs); // return all found documents
        }
    );
});

module.exports = router;
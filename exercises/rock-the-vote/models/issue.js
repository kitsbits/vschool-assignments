const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IssueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    author: {
        type: String,
        default: "A Rocker"
    },
    upVotes: {
        type: Number,
        default: 0
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
    dateUpdated: Date,
    comments: [{
        text: String,
        author: {
            type: String,
            default: "A Commenter"
        },
        dateCommented: {
            type: Date,
            default: Date.now
        }
    }]
});

module.exports = mongoose.model("Issue", IssueSchema);

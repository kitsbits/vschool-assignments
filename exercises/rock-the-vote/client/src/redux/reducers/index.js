// REDUCERS \\
const state = {
    issues: []
};

export default function reducer(prevState = state, action) {
    switch(action.type) {
        case "LOAD_ISSUES":
            return {
                issues: action.issues
            };

        case "ADD_ISSUE":
            let newIssues = [...prevState.issues];
            newIssues.push(action.newIssue);
            return {
                issues: newIssues
            };

        case "EDIT_ISSUE":
            let editedIssues = [...prevState.issues].map(issue => {
                if (issue._id === action.updatedIssue._id) {
                    return action.updatedIssue;
                } else {
                    return issue;
                }
            });
            return {
                issues: editedIssues
            };

        case "UP_VOTE":
            let upVoted = [...prevState.issues].map(issue => {
                if (issue._id === action.issue._id) {
                    return action.issue
                } else {
                    return issue
                }
            });
            return {
                issues: upVoted
            };

        case "ADD_COMMENT":
        let commentedIssue = [...prevState.issues].map(issue => {
            if (issue._id === action.commentedIssue._id) {
                return action.commentedIssue;
            } else {
                return issue;
            }
        });
        return {
            issues: commentedIssue
        };

        case "DELETE_ISSUE":
            let issuesWithOneDeleted = [...prevState.issues].filter(issue => {
                return issue._id !== action.id;
            });
            return {
                issues: issuesWithOneDeleted
            };

        default:
            return prevState;
    }
}

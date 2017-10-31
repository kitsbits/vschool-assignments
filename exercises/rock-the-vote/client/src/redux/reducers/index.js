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

        case "ADD_COMMENT":
            return console.log(action.response);

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

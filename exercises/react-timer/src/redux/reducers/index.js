// REDUCERS \\
const state = {
    timer: {
        count: 0,
        mins: 0,
        secs: 0,
        millisecs: 0
    }
}

function reducer(prevState = state, action) {

    switch (action.type) {
        case "ADD_TIME":
            let count = prevState.timer.count + 10;
            let time = new Date(count);
            let secs = time.getSeconds();
            let mins = time.getMinutes();
            let millisecs = time.getMilliseconds();
            return {
                timer: {
                    count,
                    mins,
                    secs,
                    millisecs
                }
            }

        case "RESET_TIME":
            return {
                timer: {
                    count: 0,
                    mins: 0,
                    secs: 0,
                    millisecs: 0
                }
            }

        default:
            return prevState
    }
}

export default reducer;

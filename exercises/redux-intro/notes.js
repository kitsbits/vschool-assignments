// Redux - STATE MANAGEMENT TOOL
// using STORE - data (state) + reducers (methods/functions that change state: manage changes) --> same file
// ACTION CREATORS: if store MANAGES CHANGES --> need something to TRIGGER CHANGES
    // ACTIONS ARE OBJECTS --> action creators are functions that RETURN OBJECTS
                        // --> action creators are PURE FUNCTIONS
// DISPATCH --> takes the action/call and executes it/communicates it
    // function dispatch(obj) {
    //  reducer(state, obj)
    // }
// REDUCERS sit and wait to be communicated/executed by the dispatch --> reducers decide what state changes should happen based on what action was triggered

////// FLOW \\\\\\
// ACTION --> DISPATCH --> REDUCER --> STATE --> VIEW CHANGE

// REDUCERS \\
const state = {
    memes: []
}

export default function reducer(prevState = state, action) {
    const newMemes = [...prevState.memes]
    switch(action.type) {
        case "ADD_MEME":
            newMemes.push(action.meme);
            return {
                memes: newMemes
            }

        default:
            return prevState;
    }
}

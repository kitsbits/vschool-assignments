// ACTIONS \\
export function addMeme(meme) {
    return {
        type: "ADD_MEME",
        meme
    }
}

export function deleteMeme(index) {
    return {
        type: "DELETE_MEME",
        index
    }
}

export const deleteSong = (id) => {
    return {
        type: 'DELETE_SONG',
        id
    }
}

export const updateSong = (id) => {
    return {
        type: 'UPDATE_SONG',
        id
    }
}
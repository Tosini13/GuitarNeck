const initState = {
    songs: [
        {
            id: 1,
            title: 'Bella Ciao',
            neck: {
                1: { e: null, h: 0, g: null, D: null, A: null, E: null },
                2: { e: 0, h: null, g: null, D: null, A: null, E: null },
                3: { e: 1, h: null, g: null, D: null, A: null, E: null },
                4: { e: 2, h: null, g: null, D: null, A: null, E: null },
                5: { e: 0, h: null, g: null, D: null, A: null, E: null },
                6: { e: null, h: null, g: null, D: null, A: null, E: null },
                7: { e: null, h: 0, g: null, D: null, A: null, E: null },
                8: { e: 0, h: null, g: null, D: null, A: null, E: null },
                9: { e: 1, h: null, g: null, D: null, A: null, E: null },
                10: { e: 2, h: null, g: null, D: null, A: null, E: null },
                11: { e: 0, h: null, g: null, D: null, A: null, E: null },
                12: { e: null, h: null, g: null, D: null, A: null, E: null },
                13: { e: null, h: 0, g: null, D: null, A: null, E: null },
                14: { e: 0, h: null, g: null, D: null, A: null, E: null },
                15: { e: 1, h: null, g: null, D: null, A: null, E: null },
                16: { e: 2, h: null, g: null, D: null, A: null, E: null },
                17: { e: 2, h: null, g: null, D: null, A: null, E: null },
                18: { e: null, h: null, g: null, D: null, A: null, E: null },
            }
        },
        {
            id: 2,
            title: 'Guantanamera',
            neck: {
                1: { e: null, h: 5, g: null, D: null, A: null, E: null },
                2: { e: 0, h: null, g: null, D: null, A: null, E: null },
                3: { e: 1, h: null, g: null, D: null, A: null, E: null },
                4: { e: 2, h: null, g: null, D: null, A: null, E: null },
                5: { e: 0, h: null, g: null, D: null, A: null, E: null },
                6: { e: null, h: null, g: null, D: null, A: null, E: null },
            }
        }
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;
export const sayHello = () => {
    return {
        type: "SAY_HELLO",
        payload: "Hi and Welcome to my App" // ova ni e 'action' {}

    }
}

export const sayGoodbye = () => { // action creator :)

    return {
        type: "SAY_GOODBYE",
        payload: "Hi and Get out of my App"
    }
}
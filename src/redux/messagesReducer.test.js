import messagesReducer, { addMassageItem } from './messagesReducer'

let state = {
    massages: [
        { id: 1, myMassage: "Hi" },
        { id: 2, myMassage: "How are you" },
        { id: 3, myMassage: "Cool" },
    ]
}

test('new post shold by added', () => {
    let action = addMassageItem('Hello')
    let newState = messagesReducer(state, action)
    expect(newState.massages.length).toBe(4)
});

test('message of new post should be correct', () => {
    let action = addMassageItem('Hello')
    let newState = messagesReducer(state, action)
    expect(newState.massages[3].myMassage).toBe('Hello')
});
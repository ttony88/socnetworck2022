import profileReducer, { addPostsItem } from './profileReducer'

let state = {
    posts: [
        { id: 1, massage: "hi, my frend", like: 99 },
        { id: 2, massage: "hello", like: 17 },
    ]
}

test('new post shold by added', () => {
    let action = addPostsItem('Hello')
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
});

test('message of new post should be correct', () => {
    let action = addPostsItem('Hello')
    let newState = profileReducer(state, action)
    expect(newState.posts[2].massage).toBe('Hello')
});
interface User {
    firstName: string,
    lastName: string,
    email: string
}

const ADD_USER = "ADD_USER";
export const actionCreator = () => ({ type: ADD_USER, payload:{firstName:"Ohad", lastName:"benShimol", email:"aaa"} as User })

export function users(state: User[] = [], { type, payload }: { type: string, payload: User }) {
    switch (type) {
        case ADD_USER:
            return state.concat(payload);
        default:
            return state
    }
}
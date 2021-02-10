import { Action, AnyAction } from "redux"

interface Post {
    title: string,
    author: string,
    description: string
}

const ADD_POST = "ADD_POST";
export const actionCreator = () => ({ type: ADD_POST, payload: { title: "Ohad", author: "benShimol", description: "aaa" } as Post })

export function posts(state: Post[] = [], { type, payload }: { type: string, payload: Post }) {
    switch (type) {
        case ADD_POST:
            return state.concat(payload);
        default:
            return state
    }
}
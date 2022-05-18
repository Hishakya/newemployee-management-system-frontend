import { signinActionType } from "./signin.type"

export const showUsers = (userList) => ({
    type: signinActionType.SHOW_USER,
    payload: userList
})

import { USERS } from "../constants/types";

const intialState = {
    allUsers: []
};

export default function (state = intialState, action){
    switch (action.type) {
        case USERS:
            return{
                ...state,
                allUsers: action.payload
            };
        default:
            return state;
    }
}
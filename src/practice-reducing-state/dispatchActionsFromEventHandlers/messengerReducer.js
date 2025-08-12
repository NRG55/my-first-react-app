export const initialState = {
    selectedId: 0,
    message: 'Hello',
};

export function messengerReducer(state, action) {
    switch (action.type) {
        // wrapping each case block into the { and } curly braces so that variables declared inside of different cases don’t clash with each other
        case 'changed_selection': {
            return {
                ...state,
                selectedId: action.contactId,
                message: '',
            };
        };
        case 'edited_message': {
            return {
                ...state,
                message: action.message,
            };
        };
        default: {
            throw Error('Unknown action: ' + action.type);
        };
    };
};
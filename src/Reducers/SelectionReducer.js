export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payLoad;
        default:
            return state;
    }
};
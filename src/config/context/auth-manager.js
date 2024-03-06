export const authManager = (state = { signed: false }, action) => {
    switch (action.type) {
        case "SIGNIN":
            return {
                ...action.payload,
                signed: true,
            };
            break;

        case "SIGNOUT":
            return {
                signed: false,
            };
            break;

        default:
            return state;
            break;
    }
}
export default (state, action) => {
     switch (action.type) {
          case "TOGGLE_THEME": {
               return {
                    ...state,
                    theme: state.theme === "light" ? "dark" : "light",
               };
          }
          default:
               throw new Error("Bad Action Type");
     }
};

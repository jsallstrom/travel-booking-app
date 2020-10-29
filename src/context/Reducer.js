export default (state, action) => {
     switch (action.type) {
          case "TOGGLE_THEME": {
               return {
                    ...state,
                    theme: state.theme === "light" ? "dark" : "light",
               };
          }
          case "FETCH_DATA": {
               return {
                    ...state,
                    featuredBookings: action.payload.featured,
                    carouselBookings: action.payload.carousel.items,
               };
          }

          default:
               throw new Error("Bad Action Type");
     }
};

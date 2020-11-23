export default (state, action) => {
     switch (action.type) {
          case "BOOK_EXPERIENCE": {
               return {
                    ...state,
                    customerBookings: [...state.customerBookings, action.payload],
               };
          }

          case "CLEAR_EXPERIENCES": {
               return {
                    ...state,
                    customerBookings: [],
               };
          }

          default:
               throw new Error("Bad Action Type");
     }
};

export default (state, action) => {
     switch (action.type) {
          case "BOOK_EXPERIENCE": {
               return {
                    ...state,
                    customerBookings: [...state.customerBookings, action.payload],
               };
          }

          default:
               throw new Error("Bad Action Type");
     }
};

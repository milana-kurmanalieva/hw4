import { createSlice } from "@reduxjs/toolkit";

const URL = "https://jsonplaceholder.typicode.com";

const postSlice = createSlice({
  name: "postSlice",
  initialState: {},
  reducers: {
    addUser: async (user) => {
      const options = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      };
      await fetch(`${URL}/users`, options);
    },
  },
});

export const { addUser } = postSlice.actions;
export default postSlice.reducer;

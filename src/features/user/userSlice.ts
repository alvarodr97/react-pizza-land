import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosition } from "../../utils/helpers";
import { getAddress } from "../../lib/api-geocoding";
import { UserState } from "../../types/user";

export const fetchAddress = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    // 1) Get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Reverse geocoding API to get a description of the user's address
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    return { position, address };
  }
);

const initialState: UserState = {
  username: "",
  status: "idle",
  position: null,
  address: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle";
      })
      .addCase(fetchAddress.rejected, (state) => {
        state.status = "error";
        state.error = "Problem getting your address. Fill this field.";
      }),
});

export const { updateName } = userSlice.actions;

export const getUsername = (state: { user: UserState }) => state.user.username;

export default userSlice.reducer;

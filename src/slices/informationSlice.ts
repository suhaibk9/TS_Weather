import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Temp = "C" | "F";
type DayOrWeek = "Day" | "Week";

interface InitialState {
  typeTemp: Temp;
  dayWeek: DayOrWeek;
  cityName: string | null;
}

const initialState: InitialState = {
  typeTemp: "C",
  dayWeek: "Day",
  cityName: "Liverpool",
};

const informationSlice = createSlice({
  name: "information",
  initialState,
  reducers: {
    updateTemp(state, action: PayloadAction<Temp>) {
      state.typeTemp = action.payload;
    },

    updateTodayWeek(state, action: PayloadAction<DayOrWeek>) {
      state.dayWeek = action.payload;
    },

    updateCityName(state, action: PayloadAction<string | null>) {
      state.cityName = action.payload;
    },
  },
});

export const { updateTemp, updateTodayWeek, updateCityName } =
  informationSlice.actions;

export default informationSlice.reducer;

// Config/api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api.weatherapi.com/v1/",
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  tagTypes: ["Weather", "Forecast"],
  endpoints: () => ({}),
});

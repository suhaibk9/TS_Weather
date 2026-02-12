import { api } from "../Config/api";
import { store } from "../store/store";
export interface WeatherCondition {
  text: string;
  icon: string;
  code: number;
}

export interface AirQuality {
  co: number;
  no2: number;
  o3: number;
  so2: number;
  pm2_5: number;
  pm10: number;
  "us-epa-index": number;
  "gb-defra-index": number;
}

export interface CurrentWeather {
  temp_c: number;
  temp_f: number;
  feelslike_c: number;
  feelslike_f: number;
  humidity: number;
  wind_kph: number;
  condition: WeatherCondition;
  uv: number;
  vis_km: number;
  air_quality: AirQuality;
  pressure_mb: number;
  precip_mm: number;
  precip_in: number;
  gust_kph: number;
  wind_dir: string;
}

export interface LocationInfo {
  name: string;
  country: string;
  localtime: string;
}

export interface Astro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: string;
}

export interface Day {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  daily_will_it_snow: number;
  daily_chance_of_snow: number;
  condition: WeatherCondition;
  uv: number;
}

export interface ForecastDay {
  date: string;
  date_epoch: number;
  day: Day;
  astro: Astro;
}

export interface Forecast {
  forecastday: ForecastDay[];
}

export interface WeatherResponse {
  location: LocationInfo;
  current: CurrentWeather;
  forecast: Forecast;
}
interface PropTypes {
  city?: string | null;
  abortController?: AbortController;
}
export const weatherApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentWeather: builder.query<WeatherResponse, PropTypes>({
      query: ({ city, abortController = new AbortController() }: PropTypes) => {
        const stateCity = store.getState().information.cityName;
        const queryCity = city || stateCity;

        if (!queryCity) {
          throw new Error("City is required");
        }

        return {
          url: `/forecast.json?key=${
            import.meta.env.VITE_APP_API_KEY
          }&q=${queryCity}&days=1&aqi=yes&alerts=no`,
          method: "GET",

          signal: abortController.signal,
        };
      },
      keepUnusedDataFor: 300, // keep cache 5 mins
      providesTags: (_result, _error, { city }) => [
        { type: "Weather", id: city || "DEFAULT" },
      ],
    }),
  }),
});

export const { useLazyGetCurrentWeatherQuery, useGetCurrentWeatherQuery } =
  weatherApi;

// http://api.weatherapi.com/v1/current.json?key=27019c1379174f6aa62230311261002&q=madrid&aqi=no

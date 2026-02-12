import { api } from "../Config/api";
import { store } from "../store/store";
// http://api.weatherapi.com/v1/forecast.json?key=27019c1379174f6aa62230311261002&q=madrid&days=7&aqi=no&alerts=no
interface WeatherResponse {
  location: Location;
  current: CurrentWeather;
  forecast: Forecast;
}

interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

interface CurrentWeather {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
  short_rad: number;
  diff_rad: number;
  dni: number;
  gti: number;
}

interface Condition {
  text: string;
  icon: string;
  code: number;
}

interface Forecast {
  forecastday: ForecastDay[];
}

interface ForecastDay {
  date: string;
  date_epoch: number;
  day: DayWeather;
  astro: Astro;
  hour: HourWeather[];
}

interface DayWeather {
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
  totalsnow_cm: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  daily_will_it_snow: number;
  daily_chance_of_snow: number;
  condition: Condition;
  uv: number;
}

interface Astro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: number;
  is_moon_up: number;
  is_sun_up: number;
}

interface HourWeather {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  snow_cm: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
  short_rad: number;
  diff_rad: number;
  dni: number;
  gti: number;
}
interface PropTypes {
  city?: string | null;
  abortController?: AbortController;
}
const forecastApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getForecastData: builder.query<WeatherResponse, PropTypes>({
      query: ({ city, abortController = new AbortController() }) => {
        const stateCity = store.getState().information.cityName;
        const queryCity = city || stateCity;

        if (!queryCity) {
          throw new Error("City is required");
        }

        return {
          url: `/forecast.json?key=${
            import.meta.env.VITE_APP_API_KEY
          }&q=${queryCity}&days=7&aqi=no&alerts=no`,
          method: "GET",
          signal: abortController.signal,
        };
      },
      keepUnusedDataFor: 300,
      providesTags: (result, error, { city }) => [
        {
          type: "Weather",
          id: city || "DEFAULT",
        },
      ],
    }),
  }),
});
export const { useGetForecastDataQuery } = forecastApi;
//http://api.weatherapi.com/v1/forecast.json?key=27019c1379174f6aa62230311261002&q=madrid&days=7&aqi=no&alerts=no

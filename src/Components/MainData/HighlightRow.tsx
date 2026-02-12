import { HighlightCard } from "../HIghlightCard";
import { useAppSelector } from "../../hooks/typedHooks";
import { useGetCurrentWeatherQuery } from "../../Api/getCityData";

const getAqiDescription = (index: number): string => {
  switch (index) {
    case 1:
      return "Good";
    case 2:
      return "Moderate";
    case 3:
      return "Unhealthy for sensitive groups";
    case 4:
      return "Unhealthy";
    case 5:
      return "Very Unhealthy";
    case 6:
      return "Hazardous";
    default:
      return "N/A";
  }
};

export const HighlightRow = () => {
  const { cityName } = useAppSelector((state) => state.information);
  const { data } = useGetCurrentWeatherQuery(
    { city: cityName },
    { skip: !cityName },
  );

  if (!data) return null;

  const { current, forecast } = data;
  const astro = forecast?.forecastday[0]?.astro;
  const aqiIndex = current.air_quality?.["us-epa-index"];

  return (
    <div className="flex flex-row flex-wrap px-7 gap-4">
      <HighlightCard
        property="UV Index"
        value={`${current.uv}`}
        footer={current.uv > 5 ? "High" : "Low"}
      />

      <HighlightCard
        property="Wind Status"
        value={`${current.wind_kph} km/h`}
        footer={`Direction: ${current.wind_dir}`}
      />

      <HighlightCard
        property="Sunrise & Sunset"
        value={astro ? `${astro.sunrise}` : "N/A"}
        footer={astro ? `Sunset: ${astro.sunset}` : "N/A"}
      />

      <HighlightCard
        property="Humidity"
        value={`${current.humidity}%`}
        footer={current.humidity > 50 ? "High" : "Normal"}
      />

      <HighlightCard
        property="Visibility"
        value={`${current.vis_km} km`}
        footer={current.vis_km > 5 ? "Good" : "Poor"}
      />

      <HighlightCard
        property="Air Quality"
        value={`${aqiIndex ?? "N/A"}`}
        footer={getAqiDescription(aqiIndex ?? 0)}
      />
    </div>
  );
};

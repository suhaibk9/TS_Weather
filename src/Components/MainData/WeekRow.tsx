import { TempCard } from "../TempratureCard";
import { useAppSelector } from "../../hooks/typedHooks";
import { useGetForecastDataQuery } from "../../Api/getForecastData";

const WeekRow = () => {
  const { cityName, dayWeek, typeTemp } = useAppSelector(
    (state) => state.information,
  );

  const { data, isLoading, error } = useGetForecastDataQuery(
    { city: cityName },
    { skip: !cityName },
  );

  if (isLoading) {
    return (
      <div className="flex flex-row justify-start px-12 py-2 gap-2 flex-wrap">
        {[...Array(dayWeek === "Day" ? 12 : 7)].map((_, i) => (
          <TempCard
            key={i}
            dayOfWeek="--"
            temprature="--"
            icon="https://cdn.weatherapi.com/weather/64x64/day/113.png"
          />
        ))}
      </div>
    );
  }

  if (!data) return null;

  // 🎯 DAY VIEW - TODAY'S 24 HOURS ONLY! (00:00 to 23:00)
  if (dayWeek === "Day") {
    const today = data.forecast.forecastday[0]; // 👈 ONLY TODAY!
    return (
      <div className="flex flex-row justify-start px-12 py-2 gap-2 flex-wrap overflow-x-auto">
        {today.hour.map((hour) => {
          let timeStr = hour.time.split(" ")[1]; // "00:00", "01:00", etc.
          if (Number(timeStr.split(":")[0]) < 12) {
            timeStr += " AM";
          } else {
            const hour12 = Number(timeStr.split(":")[0]) - 12;
            timeStr =
              (hour12 === 0 ? "12" : hour12.toString()) + ":00" + " PM";
          }
          return (
            <TempCard
              key={hour.time}
              dayOfWeek={timeStr}
              temprature={
                typeTemp === "C"
                  ? hour.temp_c.toString() + "°C"
                  : hour.temp_f.toString() + "°F"
              }
              icon={`https:${hour.condition.icon}`}
            />
          );
        })}
      </div>
    );
  }

  // 🎯 WEEK VIEW - 7 DAYS ONLY! (NO HOURS!)
  return (
    <div className="flex flex-row justify-start px-12 py-2 gap-2 flex-wrap">
      {data.forecast.forecastday.map((day) => {
        const date = new Date(day.date);
        const dayName = date.toLocaleDateString("en-US", {
          weekday: "long", // Monday, Tuesday, etc.
        });

        // 👇 USE day.avgtemp_c (AVERAGE TEMP) NOT hour temps!
        const temp =
          typeTemp === "C"
            ? day.day.avgtemp_c.toString() + "°C"
            : day.day.avgtemp_f.toString() + "°F";

        const iconUrl = `https:${day.day.condition.icon}`;

        return (
          <TempCard
            key={day.date}
            dayOfWeek={dayName} // "Monday", "Tuesday"...
            temprature={temp} // Average temp for the whole day
            icon={iconUrl} // Day icon
          />
        );
      })}
    </div>
  );
};

export { WeekRow };

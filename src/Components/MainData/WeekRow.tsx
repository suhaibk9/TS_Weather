import { TempCard } from "../TempratureCard";

const WeekRow = () => {
  return (
    <div className="flex flex-row justify-start px-12 py-2 gap-2 flex-wrap">
      <TempCard dayOfWeek="Mon" temprature="25.3" icon="https://i.ibb.co/Kzkk59k/15.png" />
      <TempCard dayOfWeek="Tue" temprature="24.1" icon="https://i.ibb.co/Kzkk59k/15.png" />
      <TempCard dayOfWeek="Wed" temprature="22.8" icon="https://i.ibb.co/Kzkk59k/15.png" />
      <TempCard dayOfWeek="Thu" temprature="23.5" icon="https://i.ibb.co/Kzkk59k/15.png" />
      <TempCard dayOfWeek="Fri" temprature="25.3" icon="https://i.ibb.co/Kzkk59k/15.png" />
      <TempCard dayOfWeek="Sat" temprature="26.0" icon="https://i.ibb.co/Kzkk59k/15.png" />
      <TempCard dayOfWeek="Sun" temprature="24.9" icon="https://i.ibb.co/Kzkk59k/15.png" />
      <TempCard dayOfWeek="Mon" temprature="23.2" icon="https://i.ibb.co/Kzkk59k/15.png" />
      <TempCard dayOfWeek="Tue" temprature="21.7" icon="https://i.ibb.co/Kzkk59k/15.png" />
      <TempCard dayOfWeek="Wed" temprature="22.4" icon="https://i.ibb.co/Kzkk59k/15.png" />
      <TempCard dayOfWeek="Thu" temprature="23.0" icon="https://i.ibb.co/Kzkk59k/15.png" />
      <TempCard dayOfWeek="Fri" temprature="24.6" icon="https://i.ibb.co/Kzkk59k/15.png" />
    </div>
  );
};

export { WeekRow };

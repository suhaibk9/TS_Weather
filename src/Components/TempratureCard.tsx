interface CardProps {
  dayOfWeek: string;
  icon: string;
  temprature: string;
}
const TempCard = ({
  dayOfWeek,
  icon,
  temprature,
}: CardProps): React.JSX.Element => {
  return (
    <div className="h-[8rem] w-[8rem] bg-white text-black p-2 flex flex-col justify-evenly items-center gap-1 rounded-2xl">
      <div>{dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)}</div>
      <div className="w-[50%] h-[50%]">
        <img className="h-full w-full" src={icon} />
      </div>
      <div>{temprature}</div>
    </div>
  );
};
export { TempCard };

const TopRow = () => {
  return (
    <div className="flex flex-row justify-between items-center px-7 py-5">
      <div className="flex justify-start gap-3 items-center font-semibold">
        <div>Today</div>
        <div>Week</div>
      </div>
      <div className="flex flex-row gap-1 items-center">
        <div className="bg-black text-white rounded-full h-10 w-10 text-center p-2">
          °C
        </div>
        <div className="bg-black text-white rounded-full h-10 w-10 text-center p-2 ">
          °F
        </div>
      </div>
    </div>
  );
};
export { TopRow };

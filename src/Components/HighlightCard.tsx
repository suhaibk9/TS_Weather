interface CardProps {
  property: string;
  value: string;
  footer: string;
}
const HighlightCard = ({
  property,
  value,
  footer,
}: CardProps): React.JSX.Element => {
  return (
    <div className="bg-white rounded-4xl w-[280px] h-[180px] flex flex-col p-4 justify-between items-start">
      <div className="text-gray-500 font-bold text-lg">{property}</div>
      <div className="w-full text-center text-black text-semibold text-xl">
        {value}
      </div>
      <div className="text-black text-sm">{footer}</div>
    </div>
  );
};
export { HighlightCard };

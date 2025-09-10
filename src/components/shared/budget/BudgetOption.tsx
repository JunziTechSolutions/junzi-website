import { InvestmentRange } from "@/types/form";

interface BudgetOptionProps {
  id: InvestmentRange;
  label: string;
  icon: (selected: boolean) => JSX.Element;
  borderColor: string;
  iconBg: string;
  isSelected: boolean;
  onSelect: (budget: InvestmentRange) => void;
}

export const BudgetOption: React.FC<BudgetOptionProps> = ({
  id,
  label,
  icon,
  borderColor,
  iconBg,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      onClick={() => onSelect(id)}
      className={`
        bg-white rounded-[16px] py-2.5 px-3 sm:p-4 flex items-center gap-2 sm:gap-3 cursor-pointer transition-all
        border-2 hover:shadow-md
        ${isSelected ? `${borderColor} bg-blue-50` : "border-gray-100"}
      `}
    >
      <div
        className={`w-6 h-6 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-colors scale-75 sm:scale-100 ${
          isSelected ? iconBg : "bg-gray-100"
        }`}
      >
        {icon(isSelected)}
      </div>
      <span className="text-gray-800 text-xs sm:text-base">{label}</span>
    </div>
  );
}; 
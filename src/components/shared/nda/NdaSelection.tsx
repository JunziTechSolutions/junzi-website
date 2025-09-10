import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { NdaOption } from "@/types/form";

interface NdaSelectionProps {
  selectedOption?: NdaOption;
  onSelect: (option: NdaOption) => void;
}

export const NdaSelection: React.FC<NdaSelectionProps> = ({
  selectedOption,
  onSelect,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-4 sm:mt-5 bg-[#EEF2FF] rounded-[20px] p-3 sm:p-6"
    >
      <div className="flex items-center gap-2 mb-2 sm:mb-4">
        <FileText size={16} className="text-gray-600 scale-75 sm:scale-100" />
        <span className="text-gray-800 font-medium text-xs sm:text-base">
          Want an NDA emailed to you first?
        </span>
      </div>

      <div className="flex gap-2 sm:gap-3">
        <button
          onClick={() => onSelect("yes")}
          className={`
    py-2 sm:py-2.5 px-4 sm:px-6 min-w-[88px] sm:min-w-[auto] rounded-[10px] text-sm sm:text-sm font-medium transition-all
    ${
      selectedOption === "yes"
        ? "bg-[#2757b3] text-white"
        : "bg-white text-gray-700 hover:bg-gray-50"
    }
  `}
        >
          Sure
        </button>

        <button
          onClick={() => onSelect("no")}
          className={`
    py-2 sm:py-2.5 px-4 sm:px-6 min-w-[88px] sm:min-w-[auto] rounded-[10px] text-sm sm:text-sm font-medium transition-all
    ${
      selectedOption === "no"
        ? "bg-[#2757b3] text-white"
        : "bg-white text-gray-700 hover:bg-gray-50"
    }
  `}
        >
          Not needed
        </button>
      </div>
    </motion.div>
  );
};

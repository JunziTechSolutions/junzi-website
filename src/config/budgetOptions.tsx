import { Rocket, Palette, Layers } from "lucide-react";
import { InvestmentRange } from "@/types/form";

interface BudgetOptionConfig {
  id: InvestmentRange;
  label: string;
  icon: (selected: boolean) => JSX.Element;
  borderColor: string;
  iconBg: string;
}

export const budgetOptions: BudgetOptionConfig[] = [
  {
    id: "Option 1",
    label: "Primirily paid - I have a budget for development",
    icon: (selected: boolean) => (
      <Rocket
        size={24}
        className={selected ? "text-white" : "text-[#5C6BC0]"}
      />
    ),
    borderColor: "border-[#5C6BC0]",
    iconBg: "bg-[#5C6BC0]",
  },
  {
    id: "Option 2",
    label: "Equity only - No budget",
    icon: (selected: boolean) => (
      <Palette
        size={24}
        className={selected ? "text-white" : "text-[#0099CC]"}
      />
    ),
    borderColor: "border-[#0099CC]",
    iconBg: "bg-[#0099CC]",
  },
  {
    id: "Option 3",
    label: "Mix - Open to combining budget and equity if it fits",
    icon: (selected: boolean) => (
      <Layers
        size={24}
        className={selected ? "text-white" : "text-[#2BB673]"}
      />
    ),
    borderColor: "border-[#2BB673]",
    iconBg: "bg-[#2BB673]",
  },
]; 
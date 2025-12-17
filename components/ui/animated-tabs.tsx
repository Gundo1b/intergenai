import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTabsProps {
  tabs: string[];
  activeTab?: string;
  onChange?: (tab: string) => void;
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
}

export const AnimatedTabs = ({
  tabs,
  activeTab: controlledActiveTab,
  onChange,
  containerClassName,
  activeTabClassName,
  tabClassName,
}: AnimatedTabsProps) => {
  const [localActiveTab, setLocalActiveTab] = useState(tabs[0]);
  const activeTab = controlledActiveTab ?? localActiveTab;

  const handleTabClick = (tab: string) => {
    setLocalActiveTab(tab);
    onChange?.(tab);
  };

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-2",
        containerClassName
      )}
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={cn(
            "relative px-4 py-2 rounded-full text-sm font-medium transition-colors outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70",
            activeTab === tab 
              ? "text-white" 
              : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200",
            tabClassName
          )}
        >
          {activeTab === tab && (
            <motion.div
              layoutId="bubble"
              className={cn("absolute inset-0 z-0 bg-slate-900 dark:bg-white mix-blend-difference rounded-full", activeTabClassName)}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10 mix-blend-exclusion">{tab}</span>
        </button>
      ))}
    </div>
  );
};

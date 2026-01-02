import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

const Badge = ({ children, className }: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-slate-200/80 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-800/80 dark:bg-slate-800/70 dark:text-slate-200 ${
        className ?? ""
      }`}
    >
      {children}
    </span>
  );
};

export default Badge;

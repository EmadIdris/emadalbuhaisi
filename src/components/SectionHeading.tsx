import { ReactNode } from "react";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

const SectionHeading = ({ title, subtitle, children }: SectionHeadingProps) => {
  return (
    <div className="mb-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="section-title">{title}</h2>
          {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </div>
  );
};

export default SectionHeading;

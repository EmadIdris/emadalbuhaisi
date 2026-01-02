import { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

const Section = ({ id, children, className }: SectionProps) => {
  return (
    <motion.section
      id={id}
      className={`section-anchor py-16 sm:py-20 ${className ?? ""}`}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

export default Section;

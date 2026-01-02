import { useEffect, useState } from "react";
import Icon from "./Icon";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-azure text-white shadow-glow transition hover:bg-azure-dark"
      aria-label="Scroll to top"
    >
      <Icon name="arrow-up" className="text-white" />
    </button>
  );
};

export default ScrollToTopButton;

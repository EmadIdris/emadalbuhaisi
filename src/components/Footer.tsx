import Container from "./Container";
import { site } from "../data/site";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/70 py-10 text-sm text-slate-500 dark:border-slate-800/70 dark:text-slate-400">
      <Container className="flex flex-wrap items-center justify-between gap-4">
        <span>{site.footer.legal.replace("{year}", String(year))}</span>
       
      </Container>
    </footer>
  );
};

export default Footer;

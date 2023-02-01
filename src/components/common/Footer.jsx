import {Separator} from "../ui/Separator";
import {BackToTop} from "./footer/BackToTop";
import {Copyright} from "./footer/Copyright";
import {FooterNav} from "./footer/FooterNav";

export const Footer = () => {
  return (
    <>
      <section className="container mx-auto px-4">
        <FooterNav></FooterNav>
      </section>

      {/* <div className="relative border-t border-t-neutral-400">
        <BackToTop></BackToTop>
      </div> */}
      <Separator>
        <BackToTop></BackToTop>
      </Separator>

      <section className="container mx-auto px-4">
        <Copyright></Copyright>
      </section>
    </>
  );
};

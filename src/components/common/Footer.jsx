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
      <Separator>
        <BackToTop></BackToTop>
      </Separator>

      <section className="container mx-auto px-4">
        <Copyright></Copyright>
      </section>
    </>
  );
};

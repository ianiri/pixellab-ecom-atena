import Link from 'next/link';
import { useState } from 'react';
import { GiHollowCat } from 'react-icons/gi';
import { FaFacebookF, FaTwitter} from 'react-icons/fa';
import { TfiGoogle} from 'react-icons/tfi';
import { Squash as Hamburger } from 'hamburger-react'

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const hooverLink = 'transition-colors hover:text-zinc-400';

  return (
    <>
      <section className="bg-neutral-900 flex lg:flex-col justify-between items-center h-full lg:py-4 z-10 relative">
        <Link href="/" className={hooverLink}>
          <GiHollowCat size="62"></GiHollowCat>
        </Link>

        <button
          title="Menu"
          type="button"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          className={hooverLink}
        >
          <Hamburger size="30"></Hamburger>
        </button>

        <ul className="hidden lg:flex flex-col gap-5">
          <li className={hooverLink}>
            <Link href="https://www.facebook.com" target="blank">
              <FaFacebookF size="20"></FaFacebookF>
            </Link>
          </li>
          <li className={hooverLink}>
            <Link href="https://www.twitter.com" target="blank">
              <FaTwitter size="20"></FaTwitter>
            </Link>
          </li>
          <li className={hooverLink}>
            <Link href="https://www.google.com" target="blank">
              <TfiGoogle size="18"></TfiGoogle>
            </Link>
          </li>
        </ul>
      </section>

      <nav
        className={`z-0 absolute left-0 -top-full ${
          menuOpen ? 'translate-y-full' : ''
        } transition-transform transform-gpu w-screen h-screen bg-neutral-900 lg:w-screen-1/3 flex justify-center items-center text-2xl uppercase`}
      >
        <ul>
          <li className={`mb-2 ${hooverLink}`}>
            <Link href="/" title="Home">
              Home
            </Link>
          </li>

          <li className={hooverLink}>
            <Link href="/" title="Contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

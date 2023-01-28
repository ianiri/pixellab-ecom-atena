import Link from "next/link";

export const FooterNav = () => {
  const hooverLink = 'transition-colors hover:text-zinc-800';

  return (
    <section className="grid grid-cols-2 justify-items-center gap-y-10 gap-x-4 my-10 lg:grid-cols-4">
      <ul>
        <li className="font-bold mb-4">LOS ANGELES</li>
        <li>145 Oliveshka Street,</li>
        <li className="mb-2">Los Angeles, LA 90003</li>
        <li className={`mb-2 ${hooverLink}`}>
          <Link href="tel:+44 987 065 901">
            +44 987 065 901
          </Link>
        </li>
        <li className={hooverLink}>
          <Link href="mailto:info@Example.com">
            info@Example.com
          </Link>
        </li>
      </ul>
      <ul>
        <li className="font-bold mb-4">SAN FRANCISCO</li>
        <li>210 Pier Street,</li>
        <li className="mb-2">San Francisco, CA 94111</li>
        <li className={`mb-2 ${hooverLink}`}>
          <Link href="tel:+44 987 065 902">
            +44 987 065 902
          </Link>
        </li>
        <li className={hooverLink}>
          <Link href="mailto:info@Example.com">
            info@Example.com
          </Link>
        </li>
      </ul>
      <ul>
        <li className="font-bold mb-4">NEW YORK</li>
        <li>711 Snow Street,</li>
        <li className="mb-2">New York, NY 10014</li>
        <li className={`mb-2 ${hooverLink}`}>
          <Link href="tel:+44 987 065 903">
            +44 987 065 903
          </Link>
        </li>
        <li className={hooverLink}>
          <Link href="mailto:info@Example.com">
            info@Example.com
          </Link>
        </li>
      </ul>
      <div>
        <p className="font-bold mb-4 text-center">FOLLOW US</p>
        <ul className="grid grid-cols-2 gap-x-4">
          <li className={hooverLink}>
            <Link href="https://www.facebook.com" target="blank">
              Facebook
            </Link>
          </li>
          <li className={hooverLink}>
            <Link href="https://www.dribbble.com" target="blank">
              Dribbble
            </Link>
          </li>
          <li className={hooverLink}>
            <Link href="https://www.twitter.com" target="blank">
              Twitter
            </Link>
          </li>
          <li className={hooverLink}>
            <Link href="https://www.behance.com" target="blank">
              Behance
            </Link>
          </li>
          <li className={hooverLink}>
            <Link href="https://www.instagram.com" target="blank">
              Instagram
            </Link>
          </li>
          <li className={hooverLink}>
            <Link href="https://www.pinterest.com" target="blank">
              Pinterest
            </Link>
          </li>
          <li className={hooverLink}>
            <Link href="https://www.linkedin.com" target="blank">
              Linkedin
            </Link>
          </li>
        </ul>
      </div>

    </section>
  )
}

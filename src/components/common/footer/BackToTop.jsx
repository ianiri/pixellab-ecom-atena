import Link from "next/link";
import { IoIosArrowDropup} from 'react-icons/io';


export const BackToTop = () => {
  return (
    <span className="absolute bg-zinc-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Link href="#top">
        <IoIosArrowDropup size="32"></IoIosArrowDropup>
      </Link>
    </span>
  )
}

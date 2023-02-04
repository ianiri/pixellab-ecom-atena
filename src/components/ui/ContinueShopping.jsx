import Link from "next/link";
import {GoArrowLeft} from 'react-icons/go';

export const ContinueShopping = () => {
  return (
    <Link
      href="/"
      title="Back to Shop"
      className="h-20 font-bold flex items-center px-4 border-2 border-zinc-200 transition-colors hover:bg-neutral-900 hover:text-white"
    >
      <GoArrowLeft size="20"></GoArrowLeft>
      Back to shop
    </Link>
  )
}

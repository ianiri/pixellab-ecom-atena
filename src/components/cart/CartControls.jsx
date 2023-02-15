import Link from 'next/link';
import { TbShoppingCart } from 'react-icons/tb';
import {CartQuantity} from './CartQuantity';

export const CartControls = () => {
  return (
    <ul className="border-2 border-zinc-200 transition-colors hover:bg-neutral-900 hover:text-white">
      <li>
        <Link
          href="/cart"
          title="Cart"
          className="w-20 h-20 flex justify-center items-center"
        >
          <span className="relative">
            <TbShoppingCart size="40"></TbShoppingCart>
            <CartQuantity className="absolute -top-4 -right-4"></CartQuantity>
          </span>
        </Link>
      </li>
    </ul>
  );
};

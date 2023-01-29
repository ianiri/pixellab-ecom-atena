import { IoIosArrowDropup} from 'react-icons/io';

export const BackToTop = () => {
  return (
    <button
      type="button"
      className="absolute bg-zinc-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }}>
      <IoIosArrowDropup size="32"></IoIosArrowDropup>
    </button>
  )
}

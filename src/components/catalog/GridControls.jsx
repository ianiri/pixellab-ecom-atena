import { TiThLargeOutline } from 'react-icons/ti';
import { BiRectangle } from 'react-icons/bi';
import {UiContext} from '@/src/pages/_app';
import {useContext} from 'react';

const buttonClasses =
  'flex justify-center items-center border-l-2 border-zinc-200 w-20 h-20 transition-colors hover:bg-neutral-900';

export const GridControls = () => {
  const{itemsPerRow, setItemsPerRow} = useContext(UiContext);

  return (
    <ul className="border-2 border-l-0 border-zinc-200 hidden lg:flex">
      <li>
        <button
          type="button"
          title="One per row"
          className={`${buttonClasses} ${
            itemsPerRow === '1/row' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('1/row');
          }}
        >
          <BiRectangle size="25"></BiRectangle>
        </button>
      </li>

      <li>
        <button
          type="button"
          title="Two per row"
          className={`${buttonClasses} ${
            itemsPerRow === '2/row' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('2/row');
          }}
        >
          <BiRectangle size="25"></BiRectangle>
          <BiRectangle size="25"></BiRectangle>
        </button>
      </li>

      <li>
        <button
          type="button"
          title="Four per row"
          className={`${buttonClasses} ${
            itemsPerRow === '4/row' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('4/row');
          }}
        >
          <TiThLargeOutline size="40"></TiThLargeOutline>
        </button>
      </li>
    </ul>
  );
};

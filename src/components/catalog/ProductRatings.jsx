import { AiFillStar } from 'react-icons/ai';

export const ProductRatings = ({rate, count}) => {
  const totalRatings = 5;
  const currentRating = Math.floor(rate);
  const pluralize = (count, { one, many }) => {
    return `${count} ${count > 1 ? many : one}`;
  };

  return (
    <section className="flex items-center">
      {Array(totalRatings)
        .fill('')
        .map((_, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={
                index <= currentRating
                  ? 'transition-colors text-black'
                  : 'transition-colors text-zinc-400'
              }
            >
              <AiFillStar size="30"></AiFillStar>
            </button>
          );
        })}

      <span className="ml-4">
        {pluralize(currentRating, {
          one: 'Star',
          many: 'Stars',
        })}
      </span>
      <span className="ml-4">
        ({pluralize(count, {
          one: 'Review',
          many: 'Reviews',
        })})
      </span>
    </section>
  )
}

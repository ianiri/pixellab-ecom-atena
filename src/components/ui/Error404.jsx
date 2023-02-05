import {css, keyframes} from "@emotion/css";

export const Error404 = () => {
  const container = css`
    display: inline-block;
    position: relative;
  `;

  const firstNumberContainer = css`
    perspective: 1000px;
    perspective-origin: 500% 50%;
  `;

  const easyoutelastic = keyframes`
    0% {
      transform: rotateX(0);
    }
    9% {
      transform: rotateX(210deg);
    }
    13% {
      transform: rotateX(150deg);
    }
    16% {
      transform: rotateX(200deg);
    }
    18% {
      transform: rotateX(170deg);
    }
    20% {
      transform: rotateX(180deg);
    }
    60% {
      transform: rotateX(180deg);
    }
    80% {
      transform: rotateX(0);
    }
    100% {
      transform: rotateX(0);
    }
  `;

  const firstNumber = css`
    transform-origin: 50% 100% 0px;
    transform: rotateX(0);
    animation: ${easyoutelastic} 8s infinite;
  `;

  const lastNumberContainer = css`
    perspective: none;
    perspective-origin: 50% 50%;
  `;

  const rotatedrop = keyframes`
    0% {
      transform: rotate(0);
    }
    10% {
      transform: rotate(30deg);
    }
    15% {
      transform: rotate(90deg);
    }
    70% {
      transform: rotate(90deg);
    }
    80% {
      transform: rotate(0);
    }
    100% {
      transform: rotateX(0);
    }
  `;

  const lastNumber = css`
    transform-origin: 100% 100% 0px;
    transform: rotate(0deg);
    animation: ${rotatedrop} 8s infinite;
  `;

  return (
    <section className="text-center font-bold text-8xl mb-20 lg:text-9xl lg:mb-28 my-4">
      <span className={`${container} ${firstNumberContainer}`}>
        <span className={`${container} ${firstNumber}`}>4</span>
      </span>
      <span className={container}>0</span>
      <span className={`${container} ${lastNumberContainer}`}>
        <span className={`${container} ${lastNumber}`}>4</span>
      </span>
    </section>
  )
}

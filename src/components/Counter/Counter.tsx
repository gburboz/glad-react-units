import CounterPropType from "./types/CounterPropType";

export default function Counter({ count, handleCountClick }: CounterPropType) {
  return (
    <>
      <button onClick={handleCountClick}>Click now.</button>
      <p>Clicked {count} times</p>
    </>
  );
}

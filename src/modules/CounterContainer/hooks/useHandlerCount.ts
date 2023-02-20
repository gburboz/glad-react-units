export function useHandlerCount(
  count: number,
  setCount: React.Dispatch<React.SetStateAction<number>>
) {
  // Actual event handler below as curry function for closure
  return (e: MouseEvent): void => {
    e.preventDefault();
    setCount(count + 1);
  };
}

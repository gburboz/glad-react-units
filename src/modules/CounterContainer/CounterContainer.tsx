import { useState } from "react";
import Counter from "../../components/Counter/Counter";
import useCounter from "./hooks/useCounter";

export default function CounterContainer() {
  const [count, setStateCount] = useState(5);
  const props = useCounter(count, setStateCount);
  if (count % 3 === 0) {
    setStateCount(count + 1);
  }
  return <Counter {...props} />;
}

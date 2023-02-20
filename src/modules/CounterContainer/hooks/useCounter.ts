import CounterPropType from "../../../components/Counter/types/CounterPropType";
import { useHandlerCount } from "./useHandlerCount";

export default function useCounter(
  count: number,
  setStateCount: React.Dispatch<React.SetStateAction<number>>
) {
  const handleCountClick = useHandlerCount(count, setStateCount);
  const props = {
    count,
    handleCountClick
  } as CounterPropType;
  return props;
}

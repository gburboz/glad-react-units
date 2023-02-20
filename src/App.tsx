import CounterContainer from "./modules/CounterContainer/CounterContainer";

export default function App() {
  return (
    <>
      <h1>My Application at {new Date().toISOString()}</h1>
      <CounterContainer />
    </>
  );
}

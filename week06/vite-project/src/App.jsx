import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";

/**
 * Functional component that renders a button displaying a count value.
 * The count value can be incremented by clicking the button.
 * Uses the useState hook to manage the count state.
 *
 * @returns {JSX.Element} React element representing the button with the count value
 */
function App1() {
  const [count, setCounter] = useState(0);

  return (
    <>
      <button onClick={() => setCounter(count + 1)}>{count}</button>
    </>
  );
}

/**
 * Functional component representing the App.
 * Manages and displays the total income based on eData and bData returns.
 * Uses useState to store eData and bData objects.
 * Utilizes useEffect to update eData and bData after specific timeouts.
 */
function App2() {
  const [eData, setEData] = useState({});
  const [bData, setBData] = useState({});

  useEffect(function () {
    setTimeout(() => {
      setBData({
        returns: 100,
      });
    }, 1000);
  }, []);

  useEffect(function () {
    setTimeout(() => {
      setEData({
        returns: 1000,
      });
    }, 5000);
  }, []);

  const income = eData.returns + bData.returns;

  return (
    <>
      <h3>Totoal income: {income}</h3>
    </>
  );
}

/**
 * React component representing an App.
 * Manages state for exchange1Data, exchange2Data, and bankData using useState.
 * Utilizes useEffect to fetch data for exchange1Data, exchange2Data, and bankData.
 * Calculates cryptoReturns by summing exchange1Data.returns and exchange2Data.returns using useMemo.
 * Calculates incomeTax based on cryptoReturns and bankData.income.
 * Renders a div displaying the calculated incomeTax.
 */
function App3() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    // Some operation to get the data
    setExchange1Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    // Some operation to get the data
    setExchange2Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    // Some operation to get the data
    setTimeout(() => {
      setBankData({
        income: 100,
      });
    }, 5000);
  }, []);

  const cryptoReturns = useMemo(() => {
    return exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data, exchange2Data]);

  const incomeTax = (cryptoReturns + bankData.income) * 0.3;

  return <div>hi there, your income tax returns are {incomeTax}</div>;
}

/**
 * Function component representing Ap4.
 * Manages state for exchange1Data, exchange2Data, and bankData.
 * Utilizes useEffect to simulate data fetching for exchange1, exchange2, and bank.
 * Defines cryptoReturns function using useCallback to calculate returns from exchange1 and exchange2.
 * Renders CalculateIncome component with cryptoReturns as a prop.
 */
function App4() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    // Simulating data fetching for exchange1
    setExchange1Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    // Simulating data fetching for exchange2
    setExchange2Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    // Simulating data fetching for bank
    setTimeout(() => {
      setBankData({
        income: 100,
      });
    }, 5000);
  }, []);

  const cryptoReturns = useCallback(() => {
    return exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data, exchange2Data]);

  return (
    <div>
      <CalculateIncome cryptoReturns={cryptoReturns} />
    </div>
  );
}

const CalculateIncome = memo(({ cryptoReturns }) => {
  return <div>Total val = {cryptoReturns()}</div>;
});

CalculateIncome.displayName = "CalculateIncome";

function App() {
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML = "10";
    }, 5000);
  }, []);
  const idx = 10000;

  return (
    <div>
      hi hello <div ref={divRef}> {idx}</div>
    </div>
  );
}

export default App;

import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { notification, totalNotificationSelector } from "./store/atoms";

function App() {
  return (
    <>
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    </>
  );
}

function Home() {
  const [network, setNetwork] = useRecoilState(notification);
  const totalNotification = useRecoilValue(totalNotificationSelector);
  return (
    <>
      <button>home</button>
      <button>My network ({network.notifications})</button>
      <button>jobs () </button>
      <button>network ()</button>
      <button>notification () </button>
      <button>me {totalNotification}</button>
    </>
  );
}

export default App;

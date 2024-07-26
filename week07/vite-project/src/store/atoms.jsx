import { atom, selector } from "recoil";
import axios from "axios";

export const notification = atom({
  key: "networkAtom",
  default: selector({
    key: "networkAtomSelector",
    get: async () => {
      const response = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      const data = response.data;
      return data;
    },
  }),
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    let notifiation = get(notification);
    return (
      notifiation.network +
      notifiation.jobs +
      notifiation.notifications +
      notifiation.messaging
    );
  },
});

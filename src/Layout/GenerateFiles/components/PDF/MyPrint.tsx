import { getDeviceList } from "usb";

const searchDe;
const devices = getDeviceList();

for (const device of devices) {
  console.log(device); // Legacy device
}

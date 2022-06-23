# Zappar for React Three Fiber ~ Demo with AR Facemask
​
This repository is built from an AR example using the Zappar SDK for React-Three-Fiber. This specific example uses `react-scripts` to compile and bundle the assets and code, and TypeScript to get full auto-complete and compile-time error checking.
​
## Running the Project
​
Install the dependencies by running:
​
```bash
npm install
```
​
Next, run the project using the following command:
​
```bash
npm start
```
​
The `webpack server` tool will host the content locally and give you an address you can open in your browser of your local machine.
​
We recommend launching **instant world tracking** and **image tracked** projects on a mobile device to get the best user experience. If you'd like to try on a mobile device, follow these steps:
​
1. Ensure the device is on the same local network (e.g. Wifi)
2. Find out the IP address of your computer
3. On your mobile device, visit: `https://YOUR-IP-ADDRESS:PORT` replacing both `YOUR-IP-ADDRESS` and `PORT` (the port is the number after the `:` in the address given by `webpack-dev-server`). Note it's important to type `https` at the start of the address to ensure your device connects over HTTP**S**.

import App from "./js/app";
import settings from "./js/components/components.settings";

const root = document.getElementById("root");
const app = new App(root, settings);
app.run();

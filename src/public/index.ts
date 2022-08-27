import App from "../ts/app";
import settings from "../ts/components/components.settings";

const root = document.getElementById("root");
const app = new App(root, settings);
app.run();

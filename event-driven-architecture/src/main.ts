import { initButtons } from "./ts/buttons/init-buttons";
import { initForm } from "./ts/form/init-form";
import { initLogs } from "./ts/logs/init-logs";

document.addEventListener("DOMContentLoaded", () => {
  initButtons();
  initForm();
  initLogs();
});

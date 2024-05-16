import React from "react";
import ReactDOM from "react-dom/client";
import JobStore, { JobStoreContext } from "./JobStore.ts";
import App from "./App.tsx";
import "./index.scss";

const jobStore = new JobStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <JobStoreContext.Provider value={jobStore}>
      <App />
    </JobStoreContext.Provider>
  </React.StrictMode>
);

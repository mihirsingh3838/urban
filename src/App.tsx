import { Fragment } from "react";
import "./App.css";
import Routes from '../src/Routes/Routes'
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

function App() {
  return (
    <Fragment>
      <MantineProvider withGlobalClasses>
        <Routes />
      </MantineProvider>
    </Fragment>
  );
}

export default App;

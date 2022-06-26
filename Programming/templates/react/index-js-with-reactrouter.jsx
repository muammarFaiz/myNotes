// jshint esversion: 9
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route
            index
            element={
              <p>Select an invoice</p>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
      </Route>
      <Route
        path="*"
        element={
          <p>There is nothing here</p>
        }
      />
    </Routes>
  </BrowserRouter>,
  rootElement
);

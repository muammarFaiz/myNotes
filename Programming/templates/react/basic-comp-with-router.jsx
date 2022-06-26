// jshint esversion: 9
import react from 'react';
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
  let [a, seta] = react.useState('');
  let b = react.useRef('');

  let invoices = getInvoices();
  let params = useParams();

  react.useEffect(() => {
    if(something) {} else {}
  }, []);

  return (
    <div>

      <div>
        {invoices.map((invoice) => (
          <>
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>

          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
          </>
        ))}
      </div>

      <p>this is your id: {params.yourid}</p>
      <Outlet />
    </div>
  );
}

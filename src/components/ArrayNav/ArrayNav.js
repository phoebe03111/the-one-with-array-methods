import React from "react";
import { useNavigate } from "react-router-dom";

const methods = [
  "push",
  "unshift",
  "pop",
  "shift",
  "concat",
  "splice",
  "slice",
  "map",
  "forEach",
  "filter",
  "find",
  "findIndex",
  "includes",
  "indexOf",
  "reverse",
  "sort",
  "split",
  "join",
  "toString",
  "reduce",
];

function ArrayNav() {
  const navigate = useNavigate();
  const handleSelectMethod = (method) => {
    navigate(`/method/${method}`);
  };

  return (
    <nav>
      <ul>
        {methods.map((method) => (
          <li key={method} onClick={() => handleSelectMethod(method)}>
            {method}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default ArrayNav;

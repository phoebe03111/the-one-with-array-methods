import React, { useState } from "react";
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
  const [showCategory1, setShowCategory1] = useState(false);
  const [showCategory2, setShowCategory2] = useState(false);
  const [showCategory3, setShowCategory3] = useState(false);
  const [showCategory4, setShowCategory4] = useState(false);
  const [showCategory5, setShowCategory5] = useState(false);
  const [showCategory6, setShowCategory6] = useState(false);
  const [showCategory7, setShowCategory7] = useState(false);

  const navigate = useNavigate();
  const handleSelectMethod = (method) => {
    navigate(`/method/${method}`);
  };

  const handleSelectCategory1 = () => {
    setShowCategory1((prev) => !prev);
  };

  const handleSelectCategory2 = () => {
    setShowCategory2((prev) => !prev);
  };

  const handleSelectCategory3 = () => {
    setShowCategory3((prev) => !prev);
  };

  const handleSelectCategory4 = () => {
    setShowCategory4((prev) => !prev);
  };

  const handleSelectCategory5 = () => {
    setShowCategory5((prev) => !prev);
  };

  const handleSelectCategory6 = () => {
    setShowCategory6((prev) => !prev);
  };

  const handleSelectCategory7 = () => {
    setShowCategory7((prev) => !prev);
  };

  return (
    <nav>
      <ul>
        {/* 1. Add / Remove elements */}
        <li onClick={handleSelectCategory1}>Add/Remove elements</li>
        {showCategory1 &&
          methods.slice(0, 5).map((method) => (
            <li key={method} onClick={() => handleSelectMethod(method)}>
              {method}
            </li>
          ))}

        {/* 2. Manipulating elements */}
        <li onClick={handleSelectCategory2}>Manipulate elements</li>
        {showCategory2 &&
          methods.slice(5, 7).map((method) => (
            <li key={method} onClick={() => handleSelectMethod(method)}>
              {method}
            </li>
          ))}

        {/* 3. Iterate over elements */}
        <li onClick={handleSelectCategory3}>Iterate over elements</li>
        {showCategory3 &&
          methods.slice(7, 10).map((method) => (
            <li key={method} onClick={() => handleSelectMethod(method)}>
              {method}
            </li>
          ))}

        {/* 4. Search for elements */}
        <li onClick={handleSelectCategory4}>Search for elements</li>
        {showCategory4 &&
          methods.slice(10, 14).map((method) => (
            <li key={method} onClick={() => handleSelectMethod(method)}>
              {method}
            </li>
          ))}

        {/* 5. Re-order elements */}
        <li onClick={handleSelectCategory5}>Re-order elements</li>
        {showCategory5 &&
          methods.slice(14, 16).map((method) => (
            <li key={method} onClick={() => handleSelectMethod(method)}>
              {method}
            </li>
          ))}

        {/* 6. Convert elements */}
        <li onClick={handleSelectCategory6}>Convert elements</li>
        {showCategory6 &&
          methods.slice(16, 19).map((method) => (
            <li key={method} onClick={() => handleSelectMethod(method)}>
              {method}
            </li>
          ))}

        {/* 7. Reduce elements to one single value*/}
        <li onClick={handleSelectCategory7}>
          Reduce elements to one single value
        </li>
        {showCategory7 &&
          methods.slice(19, 20).map((method) => (
            <li key={method} onClick={() => handleSelectMethod(method)}>
              {method}
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default ArrayNav;

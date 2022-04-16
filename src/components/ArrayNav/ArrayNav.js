import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import "./ArrayNav.scss";

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

  const handleCollapse = () => {
    setShowCategory1(false);
    setShowCategory2(false);
    setShowCategory3(false);
    setShowCategory4(false);
    setShowCategory5(false);
    setShowCategory6(false);
    setShowCategory7(false);
  };

  return (
    <nav>
      <ul className="category__list">
        {/* 1. Add / Remove elements */}
        <li className="category__title" onClick={handleSelectCategory1}>
          <AiOutlinePlusCircle /> Add/Remove elements
        </li>
        {showCategory1 &&
          methods.slice(0, 5).map((method) => (
            <li
              className="category__item"
              key={method}
              onClick={() => handleSelectMethod(method)}
            >
              {method}
            </li>
          ))}

        {/* 2. Manipulating elements */}
        <li className="category__title" onClick={handleSelectCategory2}>
          <AiOutlinePlusCircle /> Manipulate elements
        </li>
        {showCategory2 &&
          methods.slice(5, 7).map((method) => (
            <li
              className="category__item"
              key={method}
              onClick={() => handleSelectMethod(method)}
            >
              {method}
            </li>
          ))}

        {/* 3. Iterate over elements */}
        <li className="category__title" onClick={handleSelectCategory3}>
          <AiOutlinePlusCircle /> Iterate over elements
        </li>
        {showCategory3 &&
          methods.slice(7, 10).map((method) => (
            <li
              className="category__item"
              key={method}
              onClick={() => handleSelectMethod(method)}
            >
              {method}
            </li>
          ))}

        {/* 4. Search for elements */}
        <li className="category__title" onClick={handleSelectCategory4}>
          <AiOutlinePlusCircle /> Search for elements
        </li>
        {showCategory4 &&
          methods.slice(10, 14).map((method) => (
            <li
              className="category__item"
              key={method}
              onClick={() => handleSelectMethod(method)}
            >
              {method}
            </li>
          ))}

        {/* 5. Re-order elements */}
        <li className="category__title" onClick={handleSelectCategory5}>
          <AiOutlinePlusCircle /> Re-order elements
        </li>
        {showCategory5 &&
          methods.slice(14, 16).map((method) => (
            <li
              className="category__item"
              key={method}
              onClick={() => handleSelectMethod(method)}
            >
              {method}
            </li>
          ))}

        {/* 6. Convert elements */}
        <li className="category__title" onClick={handleSelectCategory6}>
          <AiOutlinePlusCircle /> Convert elements
        </li>
        {showCategory6 &&
          methods.slice(16, 19).map((method) => (
            <li
              className="category__item"
              key={method}
              onClick={() => handleSelectMethod(method)}
            >
              {method}
            </li>
          ))}

        {/* 7. Reduce elements to one single value*/}
        <li className="category__title" onClick={handleSelectCategory7}>
          <AiOutlinePlusCircle /> Reduce elements to one single value
        </li>
        {showCategory7 &&
          methods.slice(19, 20).map((method) => (
            <li
              className="category__item"
              key={method}
              onClick={() => handleSelectMethod(method)}
            >
              {method}
            </li>
          ))}

        <div className="collapse-btn" onClick={handleCollapse}>
          <AiOutlineMinusCircle />
        </div>
      </ul>
    </nav>
  );
}

export default ArrayNav;

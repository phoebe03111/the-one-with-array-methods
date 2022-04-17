import React from "react";
import { useParams } from "react-router-dom";
import ArrayNav from "../../components/ArrayNav/ArrayNav";
import Header from "../../components/Header/Header";
import Push from "../../components/Methods/Push/Push";
import Unshift from "../../components/Methods/Unshift/Unshift";
import Pop from "../../components/Methods/Pop/Pop";
import Shift from "../../components/Methods/Shift/Shift";
import "./HomePage.scss";
import Concat from "../../components/Methods/Concat/Concat";

function HomePage() {
  const { method } = useParams();

  return (
    <div>
      <Header />
      <main>
        <section className="method">
          {method === "push" && <Push />}
          {method === "unshift" && <Unshift />}
          {method === "pop" && <Pop />}
          {method === "shift" && <Shift />}
          {method === "concat" && <Concat />}
        </section>
        <ArrayNav />
      </main>
    </div>
  );
}

export default HomePage;

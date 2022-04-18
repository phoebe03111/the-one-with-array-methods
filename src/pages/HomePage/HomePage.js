import React from "react";
import { useParams } from "react-router-dom";
import ArrayNav from "../../components/ArrayNav/ArrayNav";
import Header from "../../components/Header/Header";
import Push from "../../components/Methods/Push/Push";
import Unshift from "../../components/Methods/Unshift/Unshift";
import Pop from "../../components/Methods/Pop/Pop";
import Shift from "../../components/Methods/Shift/Shift";
import Concat from "../../components/Methods/Concat/Concat";
import Splice from "../../components/Methods/Splice/Splice";
import Slice from "../../components/Methods/Slice/Slice";
import Map from "../../components/Methods/Map/Map";
import ForEach from "../../components/Methods/ForEach/ForEach";
import Filter from "../../components/Methods/Filter/Filter";
import Find from "../../components/Methods/Find/Find";
import FindIndex from "../../components/Methods/FindIndex/FindIndex";
import Includes from "../../components/Methods/Includes/Includes";
import IndexOf from "../../components/Methods/IndexOf/IndexOf";
import Reverse from "../../components/Methods/Reverse/Reverse";
import Sort from "../../components/Methods/Sort/Sort";
import Split from "../../components/Methods/Split/Split";
import Join from "../../components/Methods/Join/Join";
import Reduce from "../../components/Methods/Reduce/Reduce";
import "./HomePage.scss";
import Instruction from "../../components/Instructions/Instructions";

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
          {method === "splice" && <Splice />}
          {method === "slice" && <Slice />}
          {method === "map" && <Map />}
          {method === "forEach" && <ForEach />}
          {method === "filter" && <Filter />}
          {method === "find" && <Find />}
          {method === "findIndex" && <FindIndex />}
          {method === "includes" && <Includes />}
          {method === "indexOf" && <IndexOf />}
          {method === "reverse" && <Reverse />}
          {method === "sort" && <Sort />}
          {method === "split" && <Split />}
          {method === "join" && <Join />}
          {method === "reduce" && <Reduce />}
          {!method && <Instruction />}
        </section>

        <ArrayNav />
      </main>
    </div>
  );
}

export default HomePage;

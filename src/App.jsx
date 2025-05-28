import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Header from "./components/Common/Header/Header";
import Films from "./pages/films";
import Planets from "./pages/planets";
import Starships from "./pages/starships";
import Vehicles from "./pages/vehicles";
import Species from "./pages/species";
import SingleResources from "./pages/dynamicRoutes/singleResource";

function App() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-12 gap-0">
        <div className="col-start-2 col-end-12">
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/people/:id" element={<SingleResources />} />

            <Route path="/films" element={<Films />} />
            <Route path="/films/:id" element={<SingleResources />} />

            <Route path="/planets" element={<Planets />} />
            <Route path="/planets/:id" element={<SingleResources />} />

            <Route path="/starships" element={<Starships />} />
            <Route path="/starships/:id" element={<SingleResources />} />

            <Route path="/planets" element={<Planets />} />
            <Route path="/planets/:id" element={<SingleResources />} />

            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/vehicles/:id" element={<SingleResources />} />

            <Route path="/species" element={<Species />} />
            <Route path="/species/:id" element={<SingleResources />} />

            <Route path="*" element={<NotFound />} />


          </Routes>

        </div>
      </div>
    </>
  );
}

export default App;

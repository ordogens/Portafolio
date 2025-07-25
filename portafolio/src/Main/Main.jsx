import "./Main.css";
import { Presentacion } from "../components/presentacion/Presentacion";
import { Presentacion2 } from "../components/presentacion2/Presentacion2";
import { Presentacion3 } from "../components/presentacion3/Presentacion3";
import { Projecst } from "../components/projects/Projecst";

export const Main = () => {
  return (
    <div className="Main">
      <Presentacion/>
      <Presentacion2/>
      <Presentacion3/>
      <Projecst/>
    </div>
  );
};

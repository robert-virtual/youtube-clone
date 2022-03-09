import { FaBars } from "react-icons/fa";
import {
  MdHomeFilled,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import { AiOutlineCompass } from "react-icons/ai";
import Logo from "./Logo";
import { useState } from "react";

export default function Nav() {
  const [expanded, setExpanded] = useState(false);
  const [items, setItems] = useState(() =>
    Array.from(Array(100), (e, i) => `Hola ${i}`)
  );
  return (
    <nav
      className={
        "flex flex-col items-center h-screen p-2 fixed z-20 top-0 bg-white " +
        (expanded ? "w-60" : "w-24")
      }
    >
      {/* barras */}
      <div className="flex items-center bg-white h-[5vh]">
        <FaBars size={30} onClick={() => setExpanded(!expanded)} />
        {expanded && <Logo className="ml-[18px]" />}
      </div>
      {/* barras */}
      {/* items */}
      <div className={" flex flex-col my-scroll overflow-y-scroll h-[95vh] "}>
        {/* item */}
        <div
          className={
            "flex " + (expanded ? "flex-row " : "flex-col items-center")
          }
        >
          <MdHomeFilled size={30} />
          <span className={expanded ? "ml-2 text-lg" : "text-[9px]"}>
            Inicio
          </span>
        </div>
        {/* item */}
        <div
          className={
            "flex " + (expanded ? "flex-row" : "flex-col items-center")
          }
        >
          <AiOutlineCompass size={30} />
          <span className={expanded ? "ml-2 text-lg" : "text-[9px]"}>
            Explorar
          </span>
        </div>
        <div
          className={
            "flex " + (expanded ? "flex-row" : "flex-col items-center")
          }
        >
          <MdOutlineSubscriptions size={30} />
          <span className={expanded ? "ml-2 text-lg" : "text-[9px]"}>
            Subscripciones
          </span>
        </div>
        <div
          className={
            "flex " + (expanded ? "flex-row" : "flex-col items-center")
          }
        >
          <MdOutlineVideoLibrary size={30} />
          <span className={expanded ? "ml-2 text-lg" : "text-[9px]"}>
            Biblioteca
          </span>
        </div>
        {expanded && items.map((e, i) => <h2 key={i.toString()}>{e}</h2>)}
      </div>
    </nav>
  );
}

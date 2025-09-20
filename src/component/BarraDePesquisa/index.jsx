import "./styles.css";
import { useState } from "react";

export default function BarraDePesquisa() {
  const [termoPesquisa, setTermoPesquisa] = useState("");

  return (
    <input
      type="search"
      placeholder="Digite o que você procura"
      className="barra-pesquisa"
      value={termoPesquisa}
      onChange={(e) => setTermoPesquisa(e.target.value)}
    />
  );
}

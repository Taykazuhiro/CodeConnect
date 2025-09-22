import { useState, useEffect } from "react";
import "./App.css";
import BarraDePesquisa from "./component/BarraDePesquisa";
import Card from "./component/Card";
import Filtro from "./component/Filtro";
import Ordenacao from "./component/Ordenacao";
import Sidebar from "./component/Sidebar";

function App() {
  const [dados, setDados] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchBar, setSearchBar] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes"
    )
      .then((resposta) => resposta.json())
      .then((dados) => setDados(dados));
  }, []);

  useEffect(() => {
    let sortData = [...dados];
    if (searchBar) {
      sortData = dados.filter((post) =>
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchBar.toLowerCase())
        )
      );
    }
    sortData.sort((a, b) => {
      if (sort === "compartilhamentos") {
        return b.compartilhamentos - a.compartilhamentos;
      } else if (sort === "linhas_de_codigo") {
        return b.linhas_de_codigo - a.linhas_de_codigo;
      } else {
        return 0;
      }
    });
    setFilterData(sortData);
  }, [dados, searchBar, sort]);

  const clearFilters = () => {
    setSearchBar("");
    setSort("");
  };

  return (
    <div className="container">
      <Sidebar />
      <div>
        <BarraDePesquisa setSearchBar={setSearchBar} searchBar={searchBar} />
        {searchBar ? (
          <Filtro categoria={searchBar} reset={clearFilters} />
        ) : null}
        <Ordenacao activeSort={sort} setSort={setSort} />
        <ul className="lista-cards">
          {filterData.length > 0 ? (
            filterData.map((item, index) => (
              <li key={index}>
                <Card
                  id={item.id}
                  imagemUrl={item.imagem_capa}
                  titulo={item.titulo}
                  resumo={item.resumo}
                  tags={item.tags}
                  codigo={item.linhas_de_codigo}
                  compartilhamentos={item.compartilhamentos}
                  comentarios={item.comentarios}
                  usuario={item.usuario}
                />
              </li>
            ))
          ) : (
            <p>Nenhum post encontrado </p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;

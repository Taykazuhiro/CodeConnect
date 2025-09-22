import "./styles.css";

export default function BarraDePesquisa({ setSearchBar, searchBar }) {
  const clicking = (e) => {
    setSearchBar(e.target.value);
  };

  return (
    <input
      type="search"
      placeholder="Digite o que você procura"
      className="barra-pesquisa"
      onChange={clicking}
      value={searchBar}
    />
  );
}

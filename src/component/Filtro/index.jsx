import "./styles.css";

export default function Filtro({ categoria, reset }) {
  return (
    <section className="container-filtro">
      <ul>{categoria && <li>{categoria}</li>}</ul>
      {categoria && <button onClick={reset}>Limpar filtros</button>}
    </section>
  );
}

import "./styles.css";

export default function Filtro({ categoria }) {
  return (
    <section className="container-filtro">
      <ul>
        <li>{categoria}</li>
      </ul>
      <button>Limpar tudo</button>
    </section>
  );
}

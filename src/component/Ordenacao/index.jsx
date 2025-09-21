import "./styles.css";

export default function Ordenacao({ activeSort, setSort }) {
  return (
    <section className="container-ordenacao">
      <ul>
        <li>
          <a
            href="#"
            className={
              activeSort === "compartilhamentos"
                ? "item__list--ativo"
                : "item__list"
            }
            onClick={() => setSort("compartilhamentos")}
          >
            {" "}
            Mais compartilhados{" "}
          </a>
        </li>
        <li>
          <a
            href="#"
            className={
              activeSort === "linhas_de_codigo"
                ? "item__list--ativo"
                : "item__list"
            }
            onClick={() => setSort("linhas_de_codigo")}
          >
            {" "}
            Mais código{" "}
          </a>
        </li>
      </ul>
    </section>
  );
}

import "./styles.css";
import chat from "./assets/chat.svg";
import code from "./assets/code.svg";
import share from "./assets/share.svg";

export default function Card({
  imagemUrl,
  titulo,
  resumo,
  codigo,
  compartilhamentos,
  comentarios,
  usuario,
}) {
  return (
    <article className="card">
      <div className="card-imagem">
        <img src={imagemUrl} alt="imagem do post" />
      </div>
      <div className="card__conteudo">
        <div className="conteudo__texto">
          <h3>{titulo}</h3>
          <p> {resumo} </p>
        </div>
        <div className="conteudo__footer">
          <ul>
            <li>
              <img src={code} alt="alterações de codigos" />
              {codigo}
            </li>
            <li>
              <img src={share} alt="número de compartilhamentos" />
              {compartilhamentos}
            </li>
            <li>
              <img src={chat} alt="número de comentários" />
              {comentarios}
            </li>
          </ul>
          <div className="footer__avatar">
            <img src={usuario.imagem} alt="avatar do usuário" />
            {usuario.nome}
          </div>
        </div>
      </div>
    </article>
  );
}

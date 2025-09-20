import Logo from "./assets/Logo.svg";
import FeedImg from "./assets/feed.svg";
import LogoutImg from "./assets/logout.svg";
import InfoImg from "./assets/info.svg";
import AccountImg from "./assets/account_circle.svg";
import "./styles.css";

export default function Sidebar() {
  return (
    <aside>
      <img src={Logo} alt="Logo do CodeConnect" />
      <nav>
        <ul className="lista-sidebar">
          <li>
            <a href="#" className="item__link--publicar">
              Publicar
            </a>
          </li>
          <li>
            <a href="#" className="item__link--ativo">
              <img src={FeedImg} />
              <span>Feed</span>
            </a>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={AccountImg} />
              <span>Perfil</span>
            </a>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={InfoImg} />
              <span>Sobre nós</span>
            </a>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={LogoutImg} />
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

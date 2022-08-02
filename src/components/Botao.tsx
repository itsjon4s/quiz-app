import Link from "next/link";
import styles from "../styles/Botao.module.css";
import { MouseEvent } from "react";

interface BotaoProps {
  texto: string;
  href?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

export default (props: BotaoProps) => {
  const renderizarBotao = () => {
    return (
      <button className={styles.botao} onClick={props.onClick}>
        {props.texto}
      </button>
    );
  };

  return props.href ? (
    <Link href={props.href}>{renderizarBotao()}</Link>
  ) : (
    renderizarBotao()
  );
};

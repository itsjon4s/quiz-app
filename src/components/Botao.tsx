import Link from 'next/link';
import styles from '../styles/Botao.module.css'

interface BotaoProps {
  texto: string;
  href?: string;
  onClick?: (e: any) => void;
}

export default (props: BotaoProps) => {
  
  const renderizarBotao = () => {
    return (
      <button className={styles.botao}
      onClick={props.onClick}>
        {props.texto}
      </button>
    )
  }

  return props.href ? ( <Link href={props.href}>{renderizarBotao()}</Link> ) : renderizarBotao()
}
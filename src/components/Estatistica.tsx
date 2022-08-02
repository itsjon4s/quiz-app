import styles from "../styles/Estatistica.module.css";

interface EstatisticaProps {
  valor: string;
  texto: string;
  corFundo?: string;
  corFonte?: string;
}

export default function Estatistica(props: EstatisticaProps) {
  return (
    <div className={styles.estatistica}>
      <div
        className={styles.valor}
        style={{
          backgroundColor: props.corFundo ?? "#536c8d",
          color: props.corFonte ?? "#fff",
        }}
      >
        {props.valor}
      </div>
      <div className={styles.texto}>{props.texto}</div>
    </div>
  );
};

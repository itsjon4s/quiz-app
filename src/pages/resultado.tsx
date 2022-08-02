import { useRouter } from "next/router";
import Estatistica from "../components/Estatistica";
import styles from "../styles/Resultado.module.css";
import Botao from "../components/Botao";

export default function Resultado() {
  const router = useRouter();

  const total = +router.query.t;
  const certas = +router.query.c;
  const percentual = Math.round((certas / total) * 100);

  return (
    <div className={styles.resultado}>
      <h1>Resultado Final</h1>
      <div style={{ display: "flex" }}>
        <Estatistica texto={"Perguntas"} valor={String(total)} />
        <Estatistica
          texto={"Certas"}
          valor={String(certas)}
          corFundo="#de6262"
        />
        <Estatistica
          texto={"Percentual"}
          valor={`${percentual}%`}
          corFundo="#8c2318"
        />
      </div>
      <Botao href="/" texto="Tentar Novamente" />
    </div>
  );
};

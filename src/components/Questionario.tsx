import QuestaoModel from "../models/questao";
import Questao from "./Questao";
import styles from "../styles/Questionario.module.css";
import Botao from "./Botao";

interface QuestionarioProps {
  questao: QuestaoModel;
  ultimaPergunta: boolean;
  questaoRespondida: (questao: QuestaoModel) => void;
  irPraProximoPasso: () => void;
}

export default function Questionario(props: QuestionarioProps) {
  const respostaFornecida = (indice: number) => {
    if (!props.questao.respondida) {
      props.questaoRespondida(props.questao.responderCom(indice));
    }
  };

  return (
    <div className={styles.questionario}>
      {props.questao ? (
        <Questao
          valor={props.questao}
          tempoParaResposta={6}
          respostaFornecida={respostaFornecida}
          tempoEsgotado={props.irPraProximoPasso}
        />
      ) : (
        false
      )}

      <Botao
        onClick={props.irPraProximoPasso}
        texto={props.ultimaPergunta ? "Finalizar" : "Proxima Pergunta"}
      />
    </div>
  );
};

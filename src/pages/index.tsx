import { useState } from "react";
import Botao from "../components/Botao";
import Questao from "../components/Questao";
import QuestaoModel from "../models/questao";
import RespostaModel from "../models/resposta";
import questoes from "./api/bancoDeQuestoes";

const questaoMock = questoes[0]
export default () => {

  const [questao, setQuestao] = useState(questaoMock);

  const respostaFornecida = (indice: number) => setQuestao(questao.responderCom(indice));
  const tempoEsgotado = () => !questao.respondida && setQuestao(questao.responderCom(-1));
  

  return (
    <div 
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}
    >
      <Questao
      valor={questao} 
      respostaFornecida={respostaFornecida} 
      tempoEsgotado={tempoEsgotado}
      tempoParaResposta={10}
      />
      <Botao
      texto="Proxima Questao"
      href="/resultado"
      />
    </div>
  )
}

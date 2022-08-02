import QuestaoModel from "../models/questao"
import styles from "../styles/Questao.module.css"
import Enunciado from "./Enunciado"
import Resposta from "./Resposta"
import Temporizador from "./Temporizador"

interface QuestaoProps {
  valor: QuestaoModel
  tempoParaResposta?: number
  respostaFornecida: (indice: number) => void
  tempoEsgotado: () => void;
}

const letras = [
  { valor: 'A', cor: '#632672' },
  { valor: 'B', cor: '#a0271e' },
  { valor: 'C', cor: '#006290' },
  { valor: 'D', cor: '#006855' }
]

export default (props: QuestaoProps) => {
  const { valor: questao } = props

  const renderizarRespostas = () => questao.respostas.map((resposta, i) => {
    return (
      <Resposta
        key={`${questao.id}-${i}`}
        valor={resposta}
        indice={i}
        letra={letras[i].valor}
        corFundoLetra={letras[i].cor}
        respostaFornecida={props.respostaFornecida}
      />
    )
  })

  return (
    <div className={styles.questao}>
      <Enunciado texto={questao.enunciado}/>
      <Temporizador key={questao.id} duracao={props.tempoParaResposta ?? 10} tempoEsgotado={props.tempoEsgotado}/>
      {renderizarRespostas()}
    </div>
  )
}
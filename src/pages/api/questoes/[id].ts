import questoes from "../bancoDeQuestoes"
export default (req, res) => {
  const id = +req.query.id;

  const questaoUnica = questoes.filter(questao => questao.id === id)

  if(questaoUnica.length == 1) {
    const questaoSelecionada = questaoUnica[0].embaralharRespostas();
    const obj = questaoSelecionada.responderCom(0).toObject()
    res.status(200).json(questaoSelecionada.toObject())
  } else {
    res.status(404).send()
  }
}
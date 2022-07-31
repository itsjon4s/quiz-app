import QuestaoModel from "../../models/questao";
import RespostaModel from "../../models/resposta";

const questoes: QuestaoModel[] = [
  new QuestaoModel(201, 'Quantos fusos horários tem a Rússia?',
  [
     RespostaModel.errada('16'),
     RespostaModel.errada('3'),
     RespostaModel.errada('5'),
     RespostaModel.certa('11')
  ]),
  new QuestaoModel(202, 'Qual é o país mais pequeno do mundo?',
  [
     RespostaModel.errada('Inglaterra'),
     RespostaModel.errada('Portugal'),
     RespostaModel.errada('Mônaco'),
     RespostaModel.certa('Vaticano')
  ]),
  new QuestaoModel(203, 'Qual é a capital do Canadá?',
  [
     RespostaModel.errada('Lisboa'),
     RespostaModel.errada('Nova Iorque'),
     RespostaModel.errada('Espanha'),
     RespostaModel.certa('Ottawa')
  ]),
  new QuestaoModel(204, 'De quem é a famosa frase “Penso, logo existo”?',
  [
     RespostaModel.errada('Platão'),
     RespostaModel.errada('Galileu Galilei'),
     RespostaModel.errada('Sócrates'),
     RespostaModel.certa('Descartes')
  ]),
  new QuestaoModel(205, 'De onde é a invenção do chuveiro elétrico?',
  [
     RespostaModel.errada('França'),
     RespostaModel.errada('Inglaterra'),
     RespostaModel.errada('Itália'),
     RespostaModel.certa('Brasil')
  ]),
  new QuestaoModel(206, 'Qual o livro mais vendido no mundo a seguir à Bíblia?',
  [
     RespostaModel.errada('O Senhor dos Anéis'),
     RespostaModel.errada('O Pequeno Príncipe'),
     RespostaModel.errada('Ela, a Feiticeira'),
     RespostaModel.certa('Dom Quixote')
  ]),
  new QuestaoModel(207, 'Quantas casas decimais tem o número pi?',
  [
     RespostaModel.errada('Duas'),
     RespostaModel.errada('Centenas'),
     RespostaModel.errada('Vinte'),
     RespostaModel.certa('Infinitas')
  ]),
  new QuestaoModel(208, 'Em que período da pré-história o fogo foi descoberto?',
  [
     RespostaModel.errada('Idade dos Metais'),
     RespostaModel.errada('Período da Pedra Polida'),
     RespostaModel.errada('Idade Média'),
     RespostaModel.certa('Paleolítico')
  ]),
]

export default questoes
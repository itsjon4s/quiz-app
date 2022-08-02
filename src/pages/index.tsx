import { useEffect, useState } from "react";
import QuestaoModel from "../models/questao";
import Questionario from "../components/Questionario";
import { useRouter } from "next/router";
const BASE_URL = "http://localhost:3000/api";

export default function Quiz() {
  const router = useRouter();

  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([]);
  const [questao, setQuestao] = useState<QuestaoModel>();
  const [respostasCertas, setRespostasCertas] = useState<number>(0);

  const carregarQuestoesId = async () => {
    const resp = await fetch(`${BASE_URL}/questionario`);
    const idsDasQuestoes = await resp.json();
    setIdsDasQuestoes(idsDasQuestoes);
  };

  const carregarQuestao = async (id: number) => {
    const resp = await fetch(`${BASE_URL}/questoes/${id}`);
    const json = await resp.json();
    const novaQuestao = QuestaoModel.fromJSON(json);
    setQuestao(novaQuestao);
  };

  useEffect(() => {
    carregarQuestoesId();
  }, []);

  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0]);
  }, [idsDasQuestoes]);

  const questaoRespondida = (questao: QuestaoModel) => {
    setQuestao(questao);
    const { acertou } = questao;
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0));
  };

  const idProximaPergunta = () => {
    const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1;
    return idsDasQuestoes[proximoIndice];
  };

  const irPraProximoPasso = () => {
    const proximoId = idProximaPergunta();
    proximoId ? irPraProximaQuestao(proximoId) : finalizar();
  };

  const irPraProximaQuestao = (proximoId: number) => {
    carregarQuestao(proximoId);
  };

  const finalizar = () => {
    router.push({
      pathname: "resultado",
      query: {
        t: idsDasQuestoes.length,
        c: respostasCertas,
      },
    });
  };

  return questao ? (
    <Questionario
      questao={questao}
      ultimaPergunta={idProximaPergunta() === undefined}
      questaoRespondida={questaoRespondida}
      irPraProximoPasso={irPraProximoPasso}
    />
  ) : (
    false
  );
};

import React from "react";
import Faq from "./Faq";

const FaqContainer = () => {
  return (
    <>
      <section className={"faq-section"}>
        <div className={"container"}>
          <div className={"faq-content"}>
            <div className={"faq-content__title"}>
              <h5>FAQ</h5>
              <h2>Perguntas frequentes</h2>
              <p>
                Perguntas frequentes sobre o processo de reserva de aluguel de barcos
                em nosso site: Respostas e dúvidas comuns.
              </p>
            </div>
            <div className={"all-questions"}>
              <Faq
                id={"q1"}
                faq={
                  "O que há de especial em comparar ofertas de aluguel de barcos?"
                }
                text={`A comparação de ofertas de aluguel de barcos é importante, pois ajuda a encontrar o
                    melhor negócio que se adapta ao seu orçamento e requisitos, garantindo que você
                    obtenha o máximo valor pelo seu dinheiro. Ao comparar vários
                    opções, você pode encontrar ofertas que oferecem preços mais baixos,
                    serviços adicionais ou melhores modelos de barcos. Você pode encontrar
                    ofertas de aluguel pesquisando on-line e comparando preços de
                    diferentes locadoras`}
              />
              <Faq
                id={"q2"}
                faq={
                  "Como faço para encontrar as ofertas de aluguel de barcos?"
                }
                text={`recomendado para se inscrever em boletins informativos por e-mail e seguir aluguel
                    empresas automobilísticas nas mídias sociais para serem informadas sobre qualquer
                    ofertas ou promoções.`}
              />
              <Faq
                id={"q3"}
                faq={"Posso consumir bebidas alcolicas no barco"}
                text={`Apesar de não haver nenhuma legislação que proíba o consumo ou o transporte 
                de bebidas alcoólicas no interior do veículo, o usuário terá recusado o embarque ou
                 determinado seu desembarque, quando estiver em estado de embriaguez; comprometer 
                 a segurança, o conforto ou a tranqüilidade dos demais passageiros ou demonstrar incontinência
                 no comportamento.`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqContainer;

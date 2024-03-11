import { Container, Text, Separator, TitleWrap, Title, Icon } from './styles';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'react-headless-accordion';
import React, { useState, useEffect } from 'react';

export default function AccordionComp({ area, colS, colE, rowS, rowE }) {
  const [iconFaq, setIconFaq] = useState(false);
  const [itemOpen, setItemOpen] = useState();

  const changeIcon = (item) => {
    setIconFaq(!iconFaq);
    setItemOpen(item.question);
  };
  const Faq = [
    {
      question: 'O que é?',
      answer:
        'Synopsis é um aplicativo que conecta leitores através de clubes de leitura.',
    },
    {
      question: 'Eu pago para usar o Synopsis?',
      answer:
        'Não, você pode se cadastrar gratuitamente e usar nosso aplicativo.',
    },
    {
      question: 'Eu posso usar o aplicativo sem conexão de internet?',
      answer: 'Não, as funcionalidades só estão disponíveis online.',
    },
  ];

  const mapFAQ = Faq.map((item, i) => {
    return (
      <div key={i} onClick={() => changeIcon(item)}>
        <AccordionItem>
          <AccordionHeader className="titleAcc">
            <TitleWrap>
              <Title>{item.question}</Title>
              <Icon open={iconFaq && itemOpen === item.question} />
            </TitleWrap>
          </AccordionHeader>
          <AccordionBody>
            <Text>{item.answer}</Text>
          </AccordionBody>
          <Separator />
        </AccordionItem>
      </div>
    );
  });

  return (
    <Container area={area} colS={colS} colE={colE} rowS={rowS} rowE={rowE}>
      <Accordion>{mapFAQ}</Accordion>
    </Container>
  );
}

import React, { useState, useEffect } from 'react';

import { Container, Text, Icon, Content, Mobile } from './styles';

export default function BackTop({ area, colS, colE, rowS, rowE }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Container colS={colS} colE={colE} rowS={rowS} rowE={rowE}>
      <Content
        area={area}
        mouseScroll={scrollPosition}
        onClick={() => backToTop()}
      >
        <Mobile>
          <Text>voltar ao topo</Text>
          <Icon />
        </Mobile>
      </Content>
    </Container>
  );
}

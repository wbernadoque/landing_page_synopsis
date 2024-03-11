import React, { useState, useEffect } from 'react';

import { Container, Text, Icon, Content, Mobile, TextLabel } from './styles';

export default function Label({ text }) {
  return (
    <Container>
      <TextLabel>{text}</TextLabel>
    </Container>
  );
}

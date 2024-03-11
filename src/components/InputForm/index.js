import React, { useState, useEffect } from 'react';

import {
  Container,
  Text,
  Icon,
  Content,
  Mobile,
  TextLabel,
  InputTxt,
  InputArea,
} from './styles';

export default function InputForm({ label, placeholder, type, onChange }) {
  return (
    <Container>
      <TextLabel>{label}</TextLabel>
      {type === 'txt' && (
        <InputTxt
          placeholder={placeholder}
          onChange={(e) => onChange(e.currentTarget.value)}
        />
      )}
      {type === 'area' && (
        <InputArea
          placeholder={placeholder}
          onChange={(e) => onChange(e.currentTarget.value)}
        />
      )}
    </Container>
  );
}

import React, { ReactElement } from 'react';

const NextButton = ({ color = 'black', backgroundColor = 'transparent' }: any): ReactElement => (
  <button style={{ color, backgroundColor }} type="submit">
    Button
  </button>
);

export default NextButton;

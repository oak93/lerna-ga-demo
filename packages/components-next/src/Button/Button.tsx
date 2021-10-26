import React, { ReactElement } from 'react';

const NextButton = ({ color = 'black' }: any): ReactElement => (
  <button style={{ color }} type="submit">
    Button
  </button>
);

export default NextButton;

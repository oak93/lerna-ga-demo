import React, { ReactElement } from 'react';

const Alert = ({ children, color = 'red', backgroundColor = 'transparent', fontSize = '16px' }: any): ReactElement => (
  <div style={{ backgroundColor, color, fontSize }} aria-label="alert component">
    {children}
  </div>
);

export default Alert;

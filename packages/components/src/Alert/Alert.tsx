import React, { ReactElement } from 'react';

const Alert = ({ children, color = 'red', backgroundColor = 'transparent' }: any): ReactElement => (
  <div style={{ backgroundColor, color }} aria-label="alert component">
    {children}
  </div>
);

export default Alert;

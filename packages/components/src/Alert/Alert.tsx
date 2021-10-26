import React, { ReactElement } from 'react';

const Alert = ({ children, color = 'red', backgroundColor = 'transparent' }: any): ReactElement => (
  <div style={{ color, backgroundColor }} aria-label="alert">
    {children}
  </div>
);

export default Alert;

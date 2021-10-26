import React, { ReactElement } from 'react';

const Alert = ({ children, color = 'red' }: any): ReactElement => (
  <div style={{ color }} aria-label="alert">
    {children}
  </div>
);

export default Alert;

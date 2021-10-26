import React, { ReactElement } from 'react';
import { Button, Input } from '@oakspace/components';

const App = (): ReactElement => {
  return (
    <div className="App">
      <Button />
      <Input />
      <div>is this working?</div>
      <div>i don not know, is it?</div>
    </div>
  );
};

export default App;

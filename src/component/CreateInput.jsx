import { useState } from 'react';
import Button from './Button';
import Input from './InputTag';

function CreateInput() {
  const [state, setState] = useState({
    name: '',
    price: '',
  });

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
      <Input text="name" name={state.name} isText={true} setState={setState} />
      <Input text="price" name={state.price} isText={false} setState={setState} />
      <Button
        size="small"
        color="green"
        name="저장"
        onClick={() => alert(`이름 : ${state.name}, 가격 : ${state.price}`)}
      />
    </div>
  );
}

export default CreateInput;

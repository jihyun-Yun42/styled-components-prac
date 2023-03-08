import './App.css';
import Button from './component/Button';
import CreateInput from './component/CreateInput';
import { ModalComponent } from './component/ModalComponent';
import Select from './component/Select';

function App() {
  return (
    <div>
      <section>
        <h1>Button</h1>
        <div style={{ display: 'flex', margin: '10px', gap: '10px' }}>
          <Button size="large" color="green" name="Large Primary Button" />
          <Button size="medium" color="green" name="medium" />
          <Button size="small" color="green" name="small" />
        </div>
        <div style={{ display: 'flex', margin: '10px', gap: '10px' }}>
          <Button size="large" color="pink" func="prompt" name="Large Primary Button" />
          <Button size="medium" color="pink" name="medium" />
          <Button size="small" color="pink" name="small" />
        </div>
      </section>
      <section>
        <h1>Input</h1>
        <div>
          <CreateInput />
        </div>
      </section>
      <section>
        <h1>Modal</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
          <ModalComponent />
        </div>
      </section>
      <section>
        <h1>Seclect</h1>
        <Select />
      </section>
    </div>
  );
}

export default App;

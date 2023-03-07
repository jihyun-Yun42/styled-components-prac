import './App.css';
import { Button, Input } from './Style';

function App() {
  return (
    <div>
      <article>
        <h1>Button</h1>
        <section style={{ display: 'flex', margin: '10px', gap: '10px' }}>
          <Button size="large" color="green" text="Large Primary Button" />
          <Button size="medium" color="green" text="Medium" />
          <Button size="small" color="green" text="small" />
        </section>
        <section style={{ display: 'flex', margin: '10px', gap: '10px' }}>
          <Button size="large" color="pink" text="Large Primary Button" />
          <Button size="medium" color="pink" text="Medium" />
          <Button size="small" color="pink" text="small" />
        </section>
      </article>
      <article>
        <h1>Input</h1>
        <section>
          <Input text="이름" isText={true} />
          <Input text="가격" isText={false} />
        </section>
      </article>
    </div>
  );
}

export default App;

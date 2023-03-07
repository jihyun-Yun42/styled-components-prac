import './App.css';
import { Button } from './component/Button';
import Input from './component/Input';

function App() {
  return (
    <div>
      <article>
        <h1>Button</h1>
        <section style={{ display: 'flex', margin: '10px', gap: '10px' }}>
          <Button size="large" color="green" func="alert">
            Large Primary Button
          </Button>
          <Button size="medium" color="green">
            Medium
          </Button>
          <Button size="small" color="green">
            small
          </Button>
        </section>
        <section style={{ display: 'flex', margin: '10px', gap: '10px' }}>
          <Button size="large" color="pink" func="prompt">
            Large Primary Button
          </Button>
          <Button size="medium" color="pink">
            Medium
          </Button>
          <Button size="small" color="pink">
            small
          </Button>
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

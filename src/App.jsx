import { useState } from 'react';
import './App.css';
import { add, subtract } from './redux/slices/calculatorSlice';

// TODO: 계산결과를 redux를 이용한 전역상태로 관리해 보세요.
function App() {
    const [value, setvalue] = useState(0);

    const valueChange = (e) => {
        setvalue(e.target.value);
    };
    const handleAdd = () => {
        dispatchEvent(add(number(value)));
    };
    const handleSubtract = () => {
        dispatchEvent(subtract(number(value)));
    };
    return (
        <div className="App">
            <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
            <div>
                <input type="number" value={value} onChange={valueChange} /> 만큼을
                <button onClick={handleAdd}>더할게요</button>
                <button onClick={handleSubtract}>뺄게요</button>
            </div>
            <hr />
            <div>
                <h3>결과</h3>
                <p>0</p>
            </div>
        </div>
    );
}

export default App;

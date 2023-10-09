import React, { useState } from 'react';
import Canvas from './Canvas';

function App() {
    const [state, setState] = useState({
        zoom: 1,
        pan: { x: 0, y: 0 },
        shapes: [],
        pattern: null,
    });

    return <Canvas state={state} setState={setState} />;
}

export default App;

import React from 'react';
import {render} from 'react-dom';
import Demo from '../../src';

const App = () => {
    return <div>
        <Demo />
    </div>
}

render(<App />, document.getElementById('app'))
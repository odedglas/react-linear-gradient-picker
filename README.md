# react-linear-gradient-picker

## What you need to know before installing?
- This package is using hooks, which means you need to use React 16.8 or higher.

## Installation

```
npm i react-linear-gradient-picker
```

## Gradient Picker Usage
![Preview](/assets/gp.png)<br/>

```js
import React, { useState } from 'react';
import { Panel as ColorPicker } from 'rc-color-picker';
import { GradientPicker } from 'react-linear-gradient-picker';

const WrappedColorPicker = ({ onSelect, ...rest }) => (
	<ColorPicker {...rest} onChange={c => {
		onSelect(c.color, c.alpha / 100);
	}}/>
);

const App = () => {
    const [palette, setPalette] = useState([
        { offset: '0.00', color: '#eef10b' },
        { offset: '0.49', color: '#d78025' },
        { offset: '1.00', color: '#7e20cf' }
    ]);

    return (
        <GradientPicker {...{
            width: 320,
            height: 32,
            palette,
            onPaletteChange: setPalette
        }}>
            <ColorPicker/>
        </GradientPicker>
    );
};
```

## Angle Picke Usage
![Preview](/assets/ap.png)<br/>

```js
import React, { useState } from 'react';
import { AnglePicker } from 'react-linear-gradient-picker';

const App = () => {
    const [angle, setAngle] = useState(25);

    return (
        <AnglePicker angle={angle} onChange={setAngle}/>
    );
};
```

### Accepted props

| Name | Type | Default Value | Required? | Description
|-|-|-|-|-
| `angle` | `Number` | `undefined` | Yes | The controlled angle.
| `onChange` | `Function` | `undefined` | Yes | The on change to be trigger after an angle was changes.
| `size` | `Number` | `48` | No | Determines the size of the angle picker
| `snap` | `Number` | `5` | No | Determines the angle change snapping, Can be removed with setting as 0

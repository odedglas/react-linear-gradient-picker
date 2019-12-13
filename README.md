# react-linear-gradient-picker
This package takes any color picker for you choice, And wraps it as a gradient picker.
This plays well with the package angle picker, which allows your users to play with the gradient angle. 

## What you need to know before installing?
- This package is using hooks, which means you need to use React 16.8 or higher.

## Installation

```
npm i react-linear-gradient-picker
```

## Gradient Picker Usage
<img width="200" alt="gradient_preview" src="/assets/gp.png"> <br/>

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
            paletteHeight: 32,
            palette,
            onPaletteChange: setPalette
        }}>
            <ColorPicker/>
        </GradientPicker>
    );
};
```

### Accepted props

| Name | Type | Default Value | Required? | Description
|-|-|-|-|-
| `palette` | `PaletteColor[]` | `undefined` | Yes | The gradient pickers color palette, Each palette color struct is described below
| `onPaletteChange` | `Function` | `undefined` | Yes | The function to trigger upon palette change (Can be neither from stop drag or color select).
| `paletteHeight` | `Number` | `32` | No | The stops palette display area height 
| `width` | `Number` | `400` | No | Determines the width of the gradient picker
| `stopRemovalDrop` | `Number` | `50` | No | Sets the Y stop drop removal offset, If the user will drag the color stop further than specified, Color will be removed
| `maxStops` | `Number` | `5` | No | The max gradient picker palette length can have
| `minStops` | `Number` | `2` | No | The min gradient picker palette length can have

PaletteColor = shape({
	color: string.isRequired,
	offset: string.isRequired,
	opacity: number,
});

## Angle Picke Usage
<img width="200" alt="gradient_preview" src="/assets/ap.png"> <br/>

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
| `setAngle` | `Function` | `undefined` | Yes | The set angle method to be trigger after an angle was changes.
| `size` | `Number` | `48` | No | Determines the size of the angle picker
| `snap` | `Number` | `5` | No | Determines the angle change snapping, Can be removed with setting as 0

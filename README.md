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
        { offset: '0.00', color: 'rgb(238, 241, 11)' },
        { offset: '0.49', color: 'rgb(215, 128, 37)' },
        { offset: '1.00', color: 'rgb(126, 32, 207)' }
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
| `onPaletteChange` | `Function` | `undefined` | Yes | The function to trigger upon palette change (Can be either from stop drag or color select).
| `paletteHeight` | `Number` | `32` | No | The stops palette display area height 
| `width` | `Number` | `400` | No | Determines the width of the gradient picker
| `stopRemovalDrop` | `Number` | `50` | No | Sets the Y stop drop removal offset, If the user will drag the color stop further than specified, Color will be removed
| `maxStops` | `Number` | `5` | No | The max gradient picker palette length can have
| `minStops` | `Number` | `2` | No | The min gradient picker palette length can have

|> Palette Color
| Name | Type | Default Value | Required? | Description
|-|-|-|-|-
| `color` | `String` | `` | Yes | The stop color, can be either hex of rgb format.
| `offset`| `Number` | `` | `Yes` | The stop color offset in percent.
| `opacity`| `Number` | `1` | `No` | The stop color opacity.
| `active`| `Boolean` | `` | `No` | Rather the current color is active (selected) or not.

## Angle Picke Usage
<img width="200" alt="gradient_preview" src="/assets/ap.png"> <br/>

```js
import React, { useState } from 'react';
import { AnglePicker } from 'react-linear-gradient-picker';

const App = () => {
    const [angle, setAngle] = useState(25);

    return (
        <AnglePicker angle={angle} setAngle={setAngle}/>
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

## Gradient Picker Popover Usage
<img width="200" alt="gradient_popover_preview" src="/assets/gpp.jpg"> <br/>

```js
import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import { GradientPickerPopover } from 'react-linear-gradient-picker';
import './index.css';

const rgbToRgba = (rgb, a = 1) => rgb
	.replace('rgb(', 'rgba(')
	.replace(')', `, ${a})`)

const WrapperPropTypes = {
	onSelect: PropTypes.func
};

const WrappedSketchPicker = ({ onSelect, ...rest }) => {
	return (
		<SketchPicker {...rest}
					  color={rgbToRgba(rest.color, rest.opacity)}
					  onChange={c => {
						  const { r, g, b, a } = c.rgb;
						  onSelect(`rgb(${r}, ${g}, ${b})`, a);
					  }}/>
	);
}

const initialPallet = [
	{ offset: '0.00', color: 'rgb(238, 241, 11)' },
	{ offset: '1.00', color: 'rgb(126, 32, 207)' }
];

const App = () => {
	const [open, setOpen] = useState(false);
	const [angle, setAngle] = useState(90);
	const [palette, setPalette] = useState(initialPallet);

	return (
		<GradientPickerPopover {...{
			open,
			setOpen,
			angle,
			setAngle,
			showAnglePicker: true,
			width: 220,
			maxStops: 3,
			paletteHeight: 32,
			palette,
			onPaletteChange: setPalette
		}}>
			<WrappedSketchPicker/>
		</GradientPickerPopover>
	);
};

export default App;
```

### Accepted props

| Name | Type | Default Value | Required? | Description
|-|-|-|-|-
| `trigger` | `React Component` | `defaultTrigger` | No | The popover trigger component, Will use default implementation if empty.
| `open` | `Boolean` | `false` | Yes | Controls the popover open state
| `setOpen` | `Function` | `undefined` | Yes | The setOpen method to be called upon open changes
| `showAnglePicker` | `Boolean` | `false` | No | Will add to gradient picker the angle picker component at the bottom
| `angle` | `Number` | `undefined` | No | The angle picker angle value
| `setAngle` | `Function` | `undefined` | No | Then angle picker setAngle method to be called upon angle changes

* This component accepts all of GradientPicker pros.

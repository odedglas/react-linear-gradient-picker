# react-linear-gradient-picker

## What you need to know before installing?
- This package is using hooks, which means you need to use React 16.8 or higher.

## Installation

```
npm i react-linear-gradient-picker
```

## Gradient Picker Usage
![Preview](/assets/gp.png)<br/>


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

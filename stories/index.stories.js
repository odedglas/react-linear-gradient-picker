import React from 'react';

import { storiesOf } from '@storybook/react';
import App from './App';
import './App.css';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Gradient Picker', module).add('Example', () => <App/>);

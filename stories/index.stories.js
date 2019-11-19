import React from 'react';

import { storiesOf } from '@storybook/react';
import App from '../src';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('App', module).add('App', () => <App/>);

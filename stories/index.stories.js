import React from 'react';
import { storiesOf } from '@storybook/react';

// todo
// import './index.less';
// import '../dist/css/index.less';

import '../esm/style/index.less';
import '../esm/alert/style/index.less';

import DemoAlert from './components/alert';

const components = storiesOf('Components', module);
const componentsMap = {
  Alert: () => <DemoAlert />,
};

Object.keys(componentsMap)
  .sort((a, b) => (a > b ? 1 : -1))
  .forEach((componentsName) => {
    components.add(componentsName, componentsMap[componentsName]);
  });

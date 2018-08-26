import React from 'react';
import { storiesOf } from '@storybook/react';

import Image from './index';

function buildStory(attrs) {
  const props = {
    src: 'https://avatars1.githubusercontent.com/u/8772991?s=460&v=4',
    alt: 'logo name',
    width: 360,
    height: 360,
    ...attrs,
  };

  return <Image {...props} />;
}

storiesOf('Image', module)
  .addDecorator(story => <div className="list-items">{story()}</div>)
  .add('square', () => buildStory({}))
  .add('circle', () => buildStory({ circle: true }));

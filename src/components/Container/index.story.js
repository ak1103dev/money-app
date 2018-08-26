import React from 'react';
import { storiesOf } from '@storybook/react';

import Container from './index';

function buildStory(attrs) {
  const props = {
    ...attrs,
  };

  return (
    <Container {...props}>
      <div style={{ background: 'black', width: '100%', height: 40 }} />
    </Container>
  );
}

storiesOf('Container', module)
  .addDecorator(story => (
    <div className="list-items" style={{ background: 'white' }}>
      {story()}
    </div>
  ))
  .add('default', () => buildStory({}));

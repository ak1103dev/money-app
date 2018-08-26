import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './index';

function buildStory(attrs) {
  const props = {
    ...attrs,
  };

  return <Button {...props} />;
}

storiesOf('Button', module)
  .addDecorator(story => (
    <div className="list-items" style={{ background: 'white' }}>
      {story()}
    </div>
  ))
  .add('default', () => buildStory({ children: 'default' }))
  .add('primary', () => buildStory({ primary: true, children: 'primary' }))
  .add('secondary', () =>
    buildStory({ secondary: true, children: 'secondary' })
  )
  .add('fullWidth', () =>
    buildStory({ fullWidth: true, children: 'full width' })
  );

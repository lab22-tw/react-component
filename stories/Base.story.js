import React from 'react';
import {storiesOf} from '@kadira/storybook';

import {Button} from '../src';

storiesOf('Button', module)

.addWithInfo('Button',
'A complete Trello board with multiple lanes fed as json data',
() => (
    <Button data='xd' />
));

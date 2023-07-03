import * as React from 'react';
import { Drawer } from 'react-native-paper';

const RootNavigation = () => {

  const [active, setActive] = React.useState('');

  return (
    <Drawer.Section theme={{ colors: { primary: 'green' } }} title="Some title">
      <Drawer.Item
        label="First Item"
        active={active === '1'}
        onPress={() => setActive('1')}
      />
      <Drawer.Item
        label="Second Item"
        active={active === '2'}
        onPress={() => setActive('2')}
      />
      <Drawer.Item
        label="Second Item"
        active={active === '3'}
        onPress={() => setActive('3')}
      />
      <Drawer.Item
        label="Second Item"
        active={active === '4'}
        onPress={() => setActive('4')}
      />
      <Drawer.Item
        label="Second Item"
        active={active === '5'}
        onPress={() => setActive('5')}
      />
      <Drawer.Item
        label="Second Item"
        active={active === '6'}
        onPress={() => setActive('6')}
      />
    </Drawer.Section>
  )
};

export default RootNavigation;
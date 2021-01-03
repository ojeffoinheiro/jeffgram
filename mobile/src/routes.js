import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from '~/pages/Tab/Home';

const Routes = createAppContainer(createSwitchNavigator({ Home }));

export default Routes;
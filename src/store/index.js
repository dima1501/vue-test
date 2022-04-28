import { createStore } from 'vuex';

import { userModule } from './modules/userModule';
import { beerModule } from './modules/beerModule';

export const store = createStore({
  modules: {
    userModule,
    beerModule,
  },
});

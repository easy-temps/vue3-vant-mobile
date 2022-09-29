import store from 'store';
import expirePlugin from 'store/plugins/expire';

// plugin usage:
store.addPlugin(expirePlugin);

export { store as localStorage };

export default store;

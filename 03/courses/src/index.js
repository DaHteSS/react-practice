import state from './redux/state'
import * as serviceWorker from './serviceWorker';
import { rerender } from './render';

rerender(state);

serviceWorker.unregister();

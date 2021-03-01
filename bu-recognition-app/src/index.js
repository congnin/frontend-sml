import { runWithAdal } from 'react-adal';
import { AuthContext } from './common/context/auth-context';

runWithAdal(AuthContext, () => {
  require('./indexApp.js');
}, true);

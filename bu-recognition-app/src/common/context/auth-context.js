import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';
import { adalConfig } from '../../config';

export const AuthContext = new AuthenticationContext(adalConfig);
export const adalApiFetch = (fetch, url, options) =>
  adalFetch(AuthContext, adalConfig.endpoints.api, fetch, url, options);
export const withAdalLoginApi = withAdalLogin(AuthContext, adalConfig.endpoints.api);

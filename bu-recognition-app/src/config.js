export const apiUrl = 'http://localhost:3000/';
export const appUrl = 'http://localhost:3001/';

export const adalConfig = {
  tenant: 'FPTSoftware362.onmicrosoft.com',
  clientId: 'e6bd3720-8dae-4d3f-a8e4-43479d1b806a',
  endpoints: {
    api: 'e6bd3720-8dae-4d3f-a8e4-43479d1b806a',
  },
  cacheLocation: 'localStorage',
  postLogoutRedirectUri: window.location.origin + '/sign-in',
}

import AppProvider from 'providers/AppProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import BreakpointsProvider from 'providers/BreakpointsProvider';
import SettingsPanelProvider from 'providers/SettingsPanelProvider';
import { RouterProvider } from 'react-router-dom';
import { router } from 'Routes';
import ChatWidgetProvider from 'providers/ChatWidgetProvider';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-isv8tpi8osjnxqi3.us.auth0.com"
      clientId="VkBdGIFwbTkXMMoP8kcu04oWq3uN0dRT"
      authorizationParams={{
        redirect_uri: 'https://hr.elenogy.com/',
        audience: 'https://dev-isv8tpi8osjnxqi3.us.auth0.com/api/v2/',
        scope: 'openid profile email'
      }}
      cacheLocation="localstorage"
      useRefreshTokens={true}
      onRedirectCallback={appState => {
        window.location.replace(appState?.returnTo || '/'); // Redirect to intended page
      }}
    >
      <AppProvider>
        <SettingsPanelProvider>
          <ChatWidgetProvider>
            <BreakpointsProvider>
              <RouterProvider router={router} />
            </BreakpointsProvider>
          </ChatWidgetProvider>
        </SettingsPanelProvider>
      </AppProvider>
    </Auth0Provider>
  </React.StrictMode>
);

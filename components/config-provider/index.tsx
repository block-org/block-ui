import React, { createContext } from 'react';
import { ConfigProviderProps } from './interface';

const defaultProps: ConfigProviderProps = {
  prefixCls: 'block',
  getPopupContainer: () => document.body,
  size: 'default',
};

export const ConfigContext = createContext<ConfigProviderProps>({
  getPrefixCls: (componentName: string, customPrefix?: string) => {
    return `${customPrefix || 'block'}-${componentName}`;
  },
  ...defaultProps,
});

function ConfigProvider(baseProps: ConfigProviderProps) {
  return null;
}

export const ConfigConsumer = ConfigContext.Consumer;

ConfigProvider.ConfigContext = ConfigContext;

ConfigProvider.displayName = 'ConfigProvider';

export default ConfigProvider;

export { ConfigProviderProps };

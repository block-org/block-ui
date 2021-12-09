import { AlertProps } from '../alert/interface';

export type ComponentConfig = {
  Alert?: AlertProps;
};

/**
 * @title ConfigProvider
 */
export interface ConfigProviderProps {
  /**
 * @zh 用于全局配置所有组件的默认参数
 * @en Default parameters for global configuration of all components
 * @version 2.23.0
 */
  componentConfig?: ComponentConfig;
  size?: 'mini' | 'small' | 'default' | 'large';
  /**
   * @zh 全局组件类名前缀
   * @en Global ClassName prefix
   * @defaultValue block
   */
  prefixCls?: string;
  getPrefixCls?: (componentName: string, customPrefix?: string) => string;
  /**
   * @zh 全局弹出框挂载的父级节点。
   * @en The parent node of the global popup.
   * @defaultValue () => document.body
   */
  getPopupContainer?: (node: HTMLElement) => Element;
}

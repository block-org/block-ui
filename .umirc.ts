import { defineConfig } from 'dumi';

// 仓库名
let base = '/block-ui';
let publicPath = '/block-ui/';

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
    base = undefined;
    publicPath = undefined;
}

export default defineConfig({
    // 站点名称
    title: 'Block UI',
    // 模式
    mode: 'site',
    // 输出文件夹
    outputPath: 'doc-site',
    // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
    exportStatic: {},
    // 拆包 站点过大时可以优化首屏加载速度
    dynamicImport: {},
    base,
    publicPath,
});
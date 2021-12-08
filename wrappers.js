(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"9kvl":function(e,n,t){"use strict";var r=t("FfOG");t.d(n,"a",(function(){return r["b"]}));t("bCY9")},Xmus:function(e,n,t){"use strict";t.r(n);var r=t("0Owb"),i=t("q1tI"),o=t.n(i),a=t("q3YX"),s=t("9og8"),p=t("WmNS"),l=t.n(p),c=t("rlch"),d="import React from 'react';\nimport Alert from '../alert';\nimport '../style';\n\nexport default () => <Alert kind=\"warning\">\u8fd9\u662f\u4e00\u6761\u8b66\u544a\u63d0\u793a</Alert>;",u="import React from 'react';\nimport t from 'prop-types';\n\nimport type { AlertProps, KindMap } from './interface';\n\nconst prefixCls = 'block-ui';\n\nconst kinds: KindMap = {\n  info: '#5352ED',\n  positive: '#2ED573',\n  negative: '#FF4757',\n  warning: '#FFA502',\n};\n\nconst Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (\n  <div\n    className={prefixCls}\n    style={{\n      background: kinds[kind],\n    }}\n    {...rest}\n  >\n    {children}\n  </div>\n);\n\nAlert.propTypes = {\n  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),\n};\n\nexport default Alert;",m="import './index.less';",f="@popupPrefix: block-ui;\n\n.@{popupPrefix} {\n  padding: 20px;\n  color: white;\n  background: white;\n  border-radius: 3px;\n}",x={"alert-basic":{component:Object(c["c"])({loader:function(){var e=Object(s["a"])(l.a.mark((function e(){return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(3).then(t.bind(null,"025M"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:d},"alert.tsx":{import:"../alert",content:u},"style/index.ts":{import:"../style",content:m},"style/index.less":{import:"./index.less",content:f}},dependencies:{react:{version:"17.0.2"},"prop-types":{version:"15.7.2"}},componentName:"alert",identifier:"alert-basic"}}},b=t("x2v5"),h=t("KcUY"),k=t.n(h);n["default"]=e=>o.a.createElement(k.a,Object(r["a"])({},e,{config:a,demos:x,apis:b}))},q3YX:function(e){e.exports=JSON.parse('{"menus":{"en-US":{"/alert":[{"title":"\u53cd\u9988","meta":{"order":1,"__fallback":true},"children":[{"path":"/alert","title":"Alert \u8b66\u544a\u63d0\u793a","meta":{}}]}],"*":[{"path":"/","title":"Block UI","meta":{}}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u7ec4\u4ef6","order":2,"path":"/alert"}]},"title":"Block UI","mode":"site","repository":{"url":"","branch":"master"},"theme":{},"exportStatic":{}}')},x2v5:function(e){e.exports=JSON.parse("{}")}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"F+kV":function(n,e,t){"use strict";t.r(e);var r=t("q1tI"),i=t.n(r),o=t("dEAq");t("Rsk4");e["default"]=n=>(i.a.useEffect((()=>{var e;null!==n&&void 0!==n&&null!==(e=n.location)&&void 0!==e&&e.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))}),[]),i.a.createElement(i.a.Fragment,null))},Rsk4:function(n,e,t){"use strict";t.r(e);var r=t("9og8"),i=t("WmNS"),o=t.n(i),s=t("rlch"),a="import React from 'react';\nimport Alert from '../alert';\nimport '../style';\n\nexport default () => <Alert kind=\"warning\">\u8fd9\u662f\u4e00\u6761\u8b66\u544a\u63d0\u793a</Alert>;",p="import React from 'react';\nimport t from 'prop-types';\n\nimport type { AlertProps, KindMap } from './interface';\n\nconst prefixCls = 'block-ui';\n\nconst kinds: KindMap = {\n  info: '#5352ED',\n  positive: '#2ED573',\n  negative: '#FF4757',\n  warning: '#FFA502',\n};\n\nconst Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (\n  <div\n    className={prefixCls}\n    style={{\n      background: kinds[kind],\n    }}\n    {...rest}\n  >\n    {children}\n  </div>\n);\n\nAlert.propTypes = {\n  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),\n};\n\nexport default Alert;",c="import './index.less';",l="@popupPrefix: block-ui;\n\n.@{popupPrefix} {\n  padding: 20px;\n  color: white;\n  background: white;\n  border-radius: 3px;\n}";e["default"]={"alert-basic":{component:Object(s["c"])({loader:function(){var n=Object(r["a"])(o.a.mark((function n(){return o.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.e(3).then(t.bind(null,"025M"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function e(){return n.apply(this,arguments)}return e}()}),previewerProps:{sources:{_:{tsx:a},"alert.tsx":{import:"../alert",content:p},"style/index.ts":{import:"../style",content:c},"index.less":{import:"./index.less",content:l}},dependencies:{react:{version:"17.0.2"},"prop-types":{version:"15.7.2"}},componentName:"alert",identifier:"alert-basic"}}}},x2v5:function(n){n.exports=JSON.parse("{}")}}]);
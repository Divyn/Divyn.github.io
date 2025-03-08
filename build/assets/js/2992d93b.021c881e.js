"use strict";(self.webpackChunkdivyasshree_portfolio=self.webpackChunkdivyasshree_portfolio||[]).push([[2715],{1482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"Personal Blog/Kubernetes/Taints&Tolerations","title":"Taints and Tolerations","description":"Taints and tolerations are used to set restrictions on what pods can be shared.Taints and tolerations have nothing to do with security or intrusion on a cluster.","source":"@site/docs/Personal Blog/Kubernetes/Taints&Tolerations.md","sourceDirName":"Personal Blog/Kubernetes","slug":"/Personal Blog/Kubernetes/Taints&Tolerations","permalink":"/docs/Personal Blog/Kubernetes/Taints&Tolerations","draft":false,"unlisted":false,"editUrl":"https://github.com/divyn/divyn.github.io/edit/main/docs/Personal Blog/Kubernetes/Taints&Tolerations.md","tags":[],"version":"current","frontMatter":{"layout":"default","title":"Taints and Tolerations","parent":"Kubernetes"},"sidebar":"tutorialSidebar","previous":{"title":"Storage Classes","permalink":"/docs/Personal Blog/Kubernetes/StorageClasses"},"next":{"title":"Service Accounts","permalink":"/docs/Personal Blog/Kubernetes/serviceAccounts"}}');var s=n(4848),r=n(8453);const a={layout:"default",title:"Taints and Tolerations",parent:"Kubernetes"},i=void 0,l={},c=[];function d(e){const t={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Taints and tolerations are used to set restrictions on what pods can be shared.Taints and tolerations have nothing to do with security or intrusion on a cluster."}),"\n",(0,s.jsx)(t.p,{children:"For eg;\nAssume we have dedicated resources on node 1 for a particular Application A.Then we dont want pods with any other applications on Node 1, so you place a taint on node 1.\nTo allow the pods with A we add a Toleration to nodes which have A."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"kubectl taint nodes node1 key1=value1:NoSchedule\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'tolerations:\n- key: "key1"\n  operator: "Equal"\n  value: "value1"\n  effect: "NoSchedule"\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var o=n(6540);const s={},r=o.createContext(s);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);
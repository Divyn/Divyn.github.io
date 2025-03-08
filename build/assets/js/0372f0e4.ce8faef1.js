"use strict";(self.webpackChunkdivyasshree_portfolio=self.webpackChunkdivyasshree_portfolio||[]).push([[4138],{5816:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"Personal Blog/Kubernetes/NodeAffinity","title":"Node Affinity","description":"nodeSelector provides a very simple way to constrain pods to nodes with particular labels.","source":"@site/docs/Personal Blog/Kubernetes/NodeAffinity.md","sourceDirName":"Personal Blog/Kubernetes","slug":"/Personal Blog/Kubernetes/NodeAffinity","permalink":"/divyn.github.io/docs/Personal Blog/Kubernetes/NodeAffinity","draft":false,"unlisted":false,"editUrl":"https://github.com/divyn/divyn.github.io/edit/main/docs/Personal Blog/Kubernetes/NodeAffinity.md","tags":[],"version":"current","frontMatter":{"layout":"default","title":"Node Affinity","parent":"Kubernetes"},"sidebar":"tutorialSidebar","previous":{"title":"Microservices","permalink":"/divyn.github.io/docs/Personal Blog/Kubernetes/MultiContainerPods"},"next":{"title":"Node Selection","permalink":"/divyn.github.io/docs/Personal Blog/Kubernetes/NodeSelectors"}}');var i=t(4848),o=t(8453);const s={layout:"default",title:"Node Affinity",parent:"Kubernetes"},a="Affinity",l={},d=[];function c(e){const n={code:"code",em:"em",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"affinity",children:"Affinity"})}),"\n",(0,i.jsx)(n.p,{children:"nodeSelector provides a very simple way to constrain pods to nodes with particular labels."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"The affinity/anti-affinity language is more expressive. The language offers more matching rules besides exact matches created with a logical AND operation"})}),"\n",(0,i.jsx)(n.p,{children:'You can indicate that the rule is "soft"/"preference" rather than a hard requirement, so if the scheduler can\'t satisfy it, the pod will still be scheduled;'}),"\n",(0,i.jsxs)(n.p,{children:["There are currently two types of node affinity, called _",(0,i.jsx)(n.em,{children:"requiredDuringSchedulingIgnoredDuringExecution"})," and ",(0,i.jsx)(n.strong,{children:"preferredDuringSchedulingIgnoredDuringExecution"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"spec:\n  affinity:\n    nodeAffinity:\n      requiredDuringSchedulingIgnoredDuringExecution:\n        nodeSelectorTerms:\n        - matchExpressions:\n          - key: kubernetes.io/e2e-az-name\n            operator: In\n            values:\n            - e2e-az1\n            - e2e-az2\n      preferredDuringSchedulingIgnoredDuringExecution:\n      - weight: 1\n        preference:\n          matchExpressions:\n          - key: another-node-label-key\n            operator: In\n            values:\n            - another-node-label-value\n\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(6540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);
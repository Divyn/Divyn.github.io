import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/work',
    component: ComponentCreator('/work', '931'),
    routes: [
      {
        path: '/work',
        component: ComponentCreator('/work', '36f'),
        routes: [
          {
            path: '/work/tags',
            component: ComponentCreator('/work/tags', 'd69'),
            exact: true
          },
          {
            path: '/work/tags/editing',
            component: ComponentCreator('/work/tags/editing', 'eb6'),
            exact: true
          },
          {
            path: '/work/tags/kubernetes',
            component: ComponentCreator('/work/tags/kubernetes', 'fcc'),
            exact: true
          },
          {
            path: '/work/tags/pods',
            component: ComponentCreator('/work/tags/pods', '489'),
            exact: true
          },
          {
            path: '/work',
            component: ComponentCreator('/work', 'c26'),
            routes: [
              {
                path: '/work/category/crm',
                component: ComponentCreator('/work/category/crm', 'bcf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/work/category/design-research',
                component: ComponentCreator('/work/category/design-research', 'fd0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/work/category/game-theory',
                component: ComponentCreator('/work/category/game-theory', '6d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/work/category/kubernetes',
                component: ComponentCreator('/work/category/kubernetes', '49b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/work/category/miscellaneous',
                component: ComponentCreator('/work/category/miscellaneous', '1f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/work/CRM/SalesAutomation',
                component: ComponentCreator('/work/CRM/SalesAutomation', '373'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/work/design/Basics',
                component: ComponentCreator('/work/design/Basics', 'ff7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/work/GameTheory/MahabharatGame',
                component: ComponentCreator('/work/GameTheory/MahabharatGame', '0f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/work/intro',
                component: ComponentCreator('/work/intro', '0ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/work/Kubernetes/BasicCommandsOverview',
                component: ComponentCreator('/work/Kubernetes/BasicCommandsOverview', '6a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/work/Kubernetes/EditingaProd',
                component: ComponentCreator('/work/Kubernetes/EditingaProd', '225'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/work/Kubernetes/MultiContainerPods',
                component: ComponentCreator('/work/Kubernetes/MultiContainerPods', '83f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/work/Kubernetes/NodeAffinity',
                component: ComponentCreator('/work/Kubernetes/NodeAffinity', '08f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/work/Kubernetes/NodeSelectors',
                component: ComponentCreator('/work/Kubernetes/NodeSelectors', 'd16'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/work/Kubernetes/Resources',
                component: ComponentCreator('/work/Kubernetes/Resources', '6ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/work/Kubernetes/Scheduling',
                component: ComponentCreator('/work/Kubernetes/Scheduling', '774'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/work/Kubernetes/Secrets',
                component: ComponentCreator('/work/Kubernetes/Secrets', '8bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/work/Kubernetes/SecurityContext',
                component: ComponentCreator('/work/Kubernetes/SecurityContext', '6c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/work/Kubernetes/serviceAccounts',
                component: ComponentCreator('/work/Kubernetes/serviceAccounts', '8be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/work/Kubernetes/ServicesCoreConcepts',
                component: ComponentCreator('/work/Kubernetes/ServicesCoreConcepts', '5dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/work/Kubernetes/StatefulSets',
                component: ComponentCreator('/work/Kubernetes/StatefulSets', '85a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/work/Kubernetes/StorageClasses',
                component: ComponentCreator('/work/Kubernetes/StorageClasses', '971'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/work/Kubernetes/Taints&Tolerations',
                component: ComponentCreator('/work/Kubernetes/Taints&Tolerations', 'feb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/work/Miscellaneous/BigData_OS_Security',
                component: ComponentCreator('/work/Miscellaneous/BigData_OS_Security', '951'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/work/Miscellaneous/ChaosCovid',
                component: ComponentCreator('/work/Miscellaneous/ChaosCovid', '8bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/work/Miscellaneous/QuantumComputing',
                component: ComponentCreator('/work/Miscellaneous/QuantumComputing', '4db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/work/SaaS/SaaS_Stack',
                component: ComponentCreator('/work/SaaS/SaaS_Stack', '4c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

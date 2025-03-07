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
    path: '/docs',
    component: ComponentCreator('/docs', '7f0'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '37c'),
        routes: [
          {
            path: '/docs/tags',
            component: ComponentCreator('/docs/tags', 'fce'),
            exact: true
          },
          {
            path: '/docs/tags/editing',
            component: ComponentCreator('/docs/tags/editing', 'f84'),
            exact: true
          },
          {
            path: '/docs/tags/kubernetes',
            component: ComponentCreator('/docs/tags/kubernetes', 'a8b'),
            exact: true
          },
          {
            path: '/docs/tags/pods',
            component: ComponentCreator('/docs/tags/pods', '867'),
            exact: true
          },
          {
            path: '/docs',
            component: ComponentCreator('/docs', '7fa'),
            routes: [
              {
                path: '/docs/category/crm',
                component: ComponentCreator('/docs/category/crm', 'bbc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/design-research',
                component: ComponentCreator('/docs/category/design-research', '462'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/game-theory',
                component: ComponentCreator('/docs/category/game-theory', '0c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/kubernetes',
                component: ComponentCreator('/docs/category/kubernetes', 'af5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/miscellaneous',
                component: ComponentCreator('/docs/category/miscellaneous', 'dba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CRM/SalesAutomation',
                component: ComponentCreator('/docs/CRM/SalesAutomation', 'f95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/design/Basics',
                component: ComponentCreator('/docs/design/Basics', '7b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/featured-work/code-samples',
                component: ComponentCreator('/docs/featured-work/code-samples', '3cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/featured-work/digital-products',
                component: ComponentCreator('/docs/featured-work/digital-products', '901'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/featured-work/events',
                component: ComponentCreator('/docs/featured-work/events', '9bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/featured-work/infographics',
                component: ComponentCreator('/docs/featured-work/infographics', 'afe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/featured-work/investigation-videos',
                component: ComponentCreator('/docs/featured-work/investigation-videos', 'c17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/featured-work/long-form-articles',
                component: ComponentCreator('/docs/featured-work/long-form-articles', 'd22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/featured-work/product-documentation',
                component: ComponentCreator('/docs/featured-work/product-documentation', '467'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/featured-work/product-newsletter',
                component: ComponentCreator('/docs/featured-work/product-newsletter', 'dd9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/featured-work/video-tutorials',
                component: ComponentCreator('/docs/featured-work/video-tutorials', '058'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/GameTheory/MahabharatGame',
                component: ComponentCreator('/docs/GameTheory/MahabharatGame', '676'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Kubernetes/BasicCommandsOverview',
                component: ComponentCreator('/docs/Kubernetes/BasicCommandsOverview', '7f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Kubernetes/EditingaProd',
                component: ComponentCreator('/docs/Kubernetes/EditingaProd', '639'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Kubernetes/MultiContainerPods',
                component: ComponentCreator('/docs/Kubernetes/MultiContainerPods', '9f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Kubernetes/NodeAffinity',
                component: ComponentCreator('/docs/Kubernetes/NodeAffinity', 'f1f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Kubernetes/NodeSelectors',
                component: ComponentCreator('/docs/Kubernetes/NodeSelectors', '30f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Kubernetes/Resources',
                component: ComponentCreator('/docs/Kubernetes/Resources', 'cfa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Kubernetes/Scheduling',
                component: ComponentCreator('/docs/Kubernetes/Scheduling', 'ed1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Kubernetes/Secrets',
                component: ComponentCreator('/docs/Kubernetes/Secrets', '6ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Kubernetes/SecurityContext',
                component: ComponentCreator('/docs/Kubernetes/SecurityContext', '36e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Kubernetes/serviceAccounts',
                component: ComponentCreator('/docs/Kubernetes/serviceAccounts', '9e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Kubernetes/ServicesCoreConcepts',
                component: ComponentCreator('/docs/Kubernetes/ServicesCoreConcepts', '05b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Kubernetes/StatefulSets',
                component: ComponentCreator('/docs/Kubernetes/StatefulSets', '5f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Kubernetes/StorageClasses',
                component: ComponentCreator('/docs/Kubernetes/StorageClasses', '738'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Kubernetes/Taints&Tolerations',
                component: ComponentCreator('/docs/Kubernetes/Taints&Tolerations', 'da9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Miscellaneous/BigData_OS_Security',
                component: ComponentCreator('/docs/Miscellaneous/BigData_OS_Security', '9a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Miscellaneous/ChaosCovid',
                component: ComponentCreator('/docs/Miscellaneous/ChaosCovid', 'b95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Miscellaneous/QuantumComputing',
                component: ComponentCreator('/docs/Miscellaneous/QuantumComputing', '144'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SaaS/SaaS_Stack',
                component: ComponentCreator('/docs/SaaS/SaaS_Stack', '959'),
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

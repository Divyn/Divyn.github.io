import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/divyn.github.io/markdown-page',
    component: ComponentCreator('/divyn.github.io/markdown-page', '67e'),
    exact: true
  },
  {
    path: '/divyn.github.io/docs',
    component: ComponentCreator('/divyn.github.io/docs', '83a'),
    routes: [
      {
        path: '/divyn.github.io/docs',
        component: ComponentCreator('/divyn.github.io/docs', 'f81'),
        routes: [
          {
            path: '/divyn.github.io/docs/tags',
            component: ComponentCreator('/divyn.github.io/docs/tags', 'bd6'),
            exact: true
          },
          {
            path: '/divyn.github.io/docs/tags/editing',
            component: ComponentCreator('/divyn.github.io/docs/tags/editing', '57a'),
            exact: true
          },
          {
            path: '/divyn.github.io/docs/tags/kubernetes',
            component: ComponentCreator('/divyn.github.io/docs/tags/kubernetes', 'f37'),
            exact: true
          },
          {
            path: '/divyn.github.io/docs/tags/pods',
            component: ComponentCreator('/divyn.github.io/docs/tags/pods', 'f21'),
            exact: true
          },
          {
            path: '/divyn.github.io/docs',
            component: ComponentCreator('/divyn.github.io/docs', '64f'),
            routes: [
              {
                path: '/divyn.github.io/docs/category/crm',
                component: ComponentCreator('/divyn.github.io/docs/category/crm', 'fe1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/category/design-research',
                component: ComponentCreator('/divyn.github.io/docs/category/design-research', '934'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/category/featured-work',
                component: ComponentCreator('/divyn.github.io/docs/category/featured-work', '9e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/category/game-theory',
                component: ComponentCreator('/divyn.github.io/docs/category/game-theory', 'ca3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/category/kubernetes',
                component: ComponentCreator('/divyn.github.io/docs/category/kubernetes', '9b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/category/miscellaneous',
                component: ComponentCreator('/divyn.github.io/docs/category/miscellaneous', 'c9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/category/personal-blog',
                component: ComponentCreator('/divyn.github.io/docs/category/personal-blog', '58d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/featured-work/code-samples',
                component: ComponentCreator('/divyn.github.io/docs/featured-work/code-samples', 'bcb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/featured-work/digital-products',
                component: ComponentCreator('/divyn.github.io/docs/featured-work/digital-products', '0b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/featured-work/events',
                component: ComponentCreator('/divyn.github.io/docs/featured-work/events', '33b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/featured-work/infographics',
                component: ComponentCreator('/divyn.github.io/docs/featured-work/infographics', 'cc2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/featured-work/investigation-videos',
                component: ComponentCreator('/divyn.github.io/docs/featured-work/investigation-videos', '049'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/featured-work/long-form-articles',
                component: ComponentCreator('/divyn.github.io/docs/featured-work/long-form-articles', 'd70'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/featured-work/product-documentation',
                component: ComponentCreator('/divyn.github.io/docs/featured-work/product-documentation', '647'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/featured-work/product-newsletter',
                component: ComponentCreator('/divyn.github.io/docs/featured-work/product-newsletter', '045'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/featured-work/video-tutorials',
                component: ComponentCreator('/divyn.github.io/docs/featured-work/video-tutorials', 'f7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/intro',
                component: ComponentCreator('/divyn.github.io/docs/intro', '0af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/Personal Blog/CRM/SalesAutomation',
                component: ComponentCreator('/divyn.github.io/docs/Personal Blog/CRM/SalesAutomation', 'a93'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/Personal Blog/design/Basics',
                component: ComponentCreator('/divyn.github.io/docs/Personal Blog/design/Basics', 'bfe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/Personal Blog/GameTheory/MahabharatGame',
                component: ComponentCreator('/divyn.github.io/docs/Personal Blog/GameTheory/MahabharatGame', '6a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/Personal Blog/Kubernetes/BasicCommandsOverview',
                component: ComponentCreator('/divyn.github.io/docs/Personal Blog/Kubernetes/BasicCommandsOverview', '7f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/Personal Blog/Kubernetes/EditingaProd',
                component: ComponentCreator('/divyn.github.io/docs/Personal Blog/Kubernetes/EditingaProd', 'fd6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/Personal Blog/Kubernetes/MultiContainerPods',
                component: ComponentCreator('/divyn.github.io/docs/Personal Blog/Kubernetes/MultiContainerPods', '092'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/Personal Blog/Kubernetes/NodeAffinity',
                component: ComponentCreator('/divyn.github.io/docs/Personal Blog/Kubernetes/NodeAffinity', 'a7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/Personal Blog/Kubernetes/NodeSelectors',
                component: ComponentCreator('/divyn.github.io/docs/Personal Blog/Kubernetes/NodeSelectors', '53f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/Personal Blog/Kubernetes/Resources',
                component: ComponentCreator('/divyn.github.io/docs/Personal Blog/Kubernetes/Resources', '668'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/Personal Blog/Kubernetes/Scheduling',
                component: ComponentCreator('/divyn.github.io/docs/Personal Blog/Kubernetes/Scheduling', 'a1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/Personal Blog/Kubernetes/Secrets',
                component: ComponentCreator('/divyn.github.io/docs/Personal Blog/Kubernetes/Secrets', '3c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/Personal Blog/Kubernetes/SecurityContext',
                component: ComponentCreator('/divyn.github.io/docs/Personal Blog/Kubernetes/SecurityContext', '949'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/Personal Blog/Kubernetes/serviceAccounts',
                component: ComponentCreator('/divyn.github.io/docs/Personal Blog/Kubernetes/serviceAccounts', 'dac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/Personal Blog/Kubernetes/ServicesCoreConcepts',
                component: ComponentCreator('/divyn.github.io/docs/Personal Blog/Kubernetes/ServicesCoreConcepts', '3e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/Personal Blog/Kubernetes/StatefulSets',
                component: ComponentCreator('/divyn.github.io/docs/Personal Blog/Kubernetes/StatefulSets', '135'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/Personal Blog/Kubernetes/StorageClasses',
                component: ComponentCreator('/divyn.github.io/docs/Personal Blog/Kubernetes/StorageClasses', '8a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/Personal Blog/Kubernetes/Taints&Tolerations',
                component: ComponentCreator('/divyn.github.io/docs/Personal Blog/Kubernetes/Taints&Tolerations', '634'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/Personal Blog/Miscellaneous/BigData_OS_Security',
                component: ComponentCreator('/divyn.github.io/docs/Personal Blog/Miscellaneous/BigData_OS_Security', 'a48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/Personal Blog/Miscellaneous/ChaosCovid',
                component: ComponentCreator('/divyn.github.io/docs/Personal Blog/Miscellaneous/ChaosCovid', 'f8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/Personal Blog/Miscellaneous/QuantumComputing',
                component: ComponentCreator('/divyn.github.io/docs/Personal Blog/Miscellaneous/QuantumComputing', '044'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/divyn.github.io/docs/Personal Blog/SaaS/SaaS_Stack',
                component: ComponentCreator('/divyn.github.io/docs/Personal Blog/SaaS/SaaS_Stack', 'a8a'),
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
    path: '/divyn.github.io/',
    component: ComponentCreator('/divyn.github.io/', '9a9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

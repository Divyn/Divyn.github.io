import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'a2e'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '55b'),
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
            component: ComponentCreator('/docs', '465'),
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
                path: '/docs/category/featured-work',
                component: ComponentCreator('/docs/category/featured-work', '754'),
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
                path: '/docs/category/personal-blog',
                component: ComponentCreator('/docs/category/personal-blog', 'b33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/web3',
                component: ComponentCreator('/docs/category/web3', 'eb8'),
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
                component: ComponentCreator('/docs/featured-work/investigation-videos', '828'),
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
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal Blog/CRM/SalesAutomation',
                component: ComponentCreator('/docs/Personal Blog/CRM/SalesAutomation', 'd40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal Blog/design/Basics',
                component: ComponentCreator('/docs/Personal Blog/design/Basics', '405'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal Blog/GameTheory/MahabharatGame',
                component: ComponentCreator('/docs/Personal Blog/GameTheory/MahabharatGame', 'a68'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal Blog/Kubernetes/BasicCommandsOverview',
                component: ComponentCreator('/docs/Personal Blog/Kubernetes/BasicCommandsOverview', 'be6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal Blog/Kubernetes/EditingaProd',
                component: ComponentCreator('/docs/Personal Blog/Kubernetes/EditingaProd', 'ba5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal Blog/Kubernetes/MultiContainerPods',
                component: ComponentCreator('/docs/Personal Blog/Kubernetes/MultiContainerPods', 'e8d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal Blog/Kubernetes/NodeAffinity',
                component: ComponentCreator('/docs/Personal Blog/Kubernetes/NodeAffinity', '2db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal Blog/Kubernetes/NodeSelectors',
                component: ComponentCreator('/docs/Personal Blog/Kubernetes/NodeSelectors', 'f92'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal Blog/Kubernetes/Resources',
                component: ComponentCreator('/docs/Personal Blog/Kubernetes/Resources', '479'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal Blog/Kubernetes/Scheduling',
                component: ComponentCreator('/docs/Personal Blog/Kubernetes/Scheduling', '6a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal Blog/Kubernetes/Secrets',
                component: ComponentCreator('/docs/Personal Blog/Kubernetes/Secrets', 'e6b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal Blog/Kubernetes/SecurityContext',
                component: ComponentCreator('/docs/Personal Blog/Kubernetes/SecurityContext', 'f17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal Blog/Kubernetes/serviceAccounts',
                component: ComponentCreator('/docs/Personal Blog/Kubernetes/serviceAccounts', 'e41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal Blog/Kubernetes/ServicesCoreConcepts',
                component: ComponentCreator('/docs/Personal Blog/Kubernetes/ServicesCoreConcepts', '4ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal Blog/Kubernetes/StatefulSets',
                component: ComponentCreator('/docs/Personal Blog/Kubernetes/StatefulSets', 'fd5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal Blog/Kubernetes/StorageClasses',
                component: ComponentCreator('/docs/Personal Blog/Kubernetes/StorageClasses', '523'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal Blog/Kubernetes/Taints&Tolerations',
                component: ComponentCreator('/docs/Personal Blog/Kubernetes/Taints&Tolerations', '56c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal Blog/Miscellaneous/BigData_OS_Security',
                component: ComponentCreator('/docs/Personal Blog/Miscellaneous/BigData_OS_Security', 'f5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal Blog/Miscellaneous/ChaosCovid',
                component: ComponentCreator('/docs/Personal Blog/Miscellaneous/ChaosCovid', 'ed4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal Blog/Miscellaneous/QuantumComputing',
                component: ComponentCreator('/docs/Personal Blog/Miscellaneous/QuantumComputing', '4ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal Blog/SaaS/SaaS_Stack',
                component: ComponentCreator('/docs/Personal Blog/SaaS/SaaS_Stack', 'cd3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal Blog/Web3/hedgey-exploit-6-months',
                component: ComponentCreator('/docs/Personal Blog/Web3/hedgey-exploit-6-months', '1de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal Blog/Web3/the-end-of-eoas-how-rip-7212-changes-ethereum',
                component: ComponentCreator('/docs/Personal Blog/Web3/the-end-of-eoas-how-rip-7212-changes-ethereum', '47b'),
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

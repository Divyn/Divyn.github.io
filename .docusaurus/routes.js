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
    component: ComponentCreator('/docs', '852'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '3d1'),
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
            component: ComponentCreator('/docs', 'c5a'),
            routes: [
              {
                path: '/docs/category/chaos-theory-quantum-computing-random-concepts',
                component: ComponentCreator('/docs/category/chaos-theory-quantum-computing-random-concepts', '47c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
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
                path: '/docs/category/personal-blog',
                component: ComponentCreator('/docs/category/personal-blog', 'b33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/think-tank',
                component: ComponentCreator('/docs/category/think-tank', '8a4'),
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
                path: '/docs/featured-work/packages',
                component: ComponentCreator('/docs/featured-work/packages', '19f'),
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
                path: '/docs/featured-work/video-tutorials',
                component: ComponentCreator('/docs/featured-work/video-tutorials', 'aa2'),
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
                path: '/docs/Personal_Blog/CRM/SalesAutomation',
                component: ComponentCreator('/docs/Personal_Blog/CRM/SalesAutomation', 'f55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal_Blog/design/Basics',
                component: ComponentCreator('/docs/Personal_Blog/design/Basics', '132'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal_Blog/GameTheory/MahabharatGame',
                component: ComponentCreator('/docs/Personal_Blog/GameTheory/MahabharatGame', '941'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal_Blog/Kubernetes/BasicCommandsOverview',
                component: ComponentCreator('/docs/Personal_Blog/Kubernetes/BasicCommandsOverview', '330'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal_Blog/Kubernetes/EditingaProd',
                component: ComponentCreator('/docs/Personal_Blog/Kubernetes/EditingaProd', 'f2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal_Blog/Kubernetes/MultiContainerPods',
                component: ComponentCreator('/docs/Personal_Blog/Kubernetes/MultiContainerPods', '95b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal_Blog/Kubernetes/NodeAffinity',
                component: ComponentCreator('/docs/Personal_Blog/Kubernetes/NodeAffinity', '117'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal_Blog/Kubernetes/NodeSelectors',
                component: ComponentCreator('/docs/Personal_Blog/Kubernetes/NodeSelectors', 'd1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal_Blog/Kubernetes/Resources',
                component: ComponentCreator('/docs/Personal_Blog/Kubernetes/Resources', '566'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal_Blog/Kubernetes/Scheduling',
                component: ComponentCreator('/docs/Personal_Blog/Kubernetes/Scheduling', '56e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal_Blog/Kubernetes/Secrets',
                component: ComponentCreator('/docs/Personal_Blog/Kubernetes/Secrets', '742'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal_Blog/Kubernetes/SecurityContext',
                component: ComponentCreator('/docs/Personal_Blog/Kubernetes/SecurityContext', '928'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal_Blog/Kubernetes/serviceAccounts',
                component: ComponentCreator('/docs/Personal_Blog/Kubernetes/serviceAccounts', '481'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal_Blog/Kubernetes/ServicesCoreConcepts',
                component: ComponentCreator('/docs/Personal_Blog/Kubernetes/ServicesCoreConcepts', 'c78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal_Blog/Kubernetes/StatefulSets',
                component: ComponentCreator('/docs/Personal_Blog/Kubernetes/StatefulSets', '43f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal_Blog/Kubernetes/StorageClasses',
                component: ComponentCreator('/docs/Personal_Blog/Kubernetes/StorageClasses', 'ef9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal_Blog/Kubernetes/Taints&Tolerations',
                component: ComponentCreator('/docs/Personal_Blog/Kubernetes/Taints&Tolerations', 'd60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal_Blog/Miscellaneous/BigData_OS_Security',
                component: ComponentCreator('/docs/Personal_Blog/Miscellaneous/BigData_OS_Security', '6c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal_Blog/Miscellaneous/ChaosCovid',
                component: ComponentCreator('/docs/Personal_Blog/Miscellaneous/ChaosCovid', '3b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal_Blog/Miscellaneous/QuantumComputing',
                component: ComponentCreator('/docs/Personal_Blog/Miscellaneous/QuantumComputing', '310'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal_Blog/Think_Tank/detecting-AI-content',
                component: ComponentCreator('/docs/Personal_Blog/Think_Tank/detecting-AI-content', '9b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal_Blog/Web3/hedgey-exploit-6-months',
                component: ComponentCreator('/docs/Personal_Blog/Web3/hedgey-exploit-6-months', '0b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Personal_Blog/Web3/the-end-of-eoas-how-rip-7212-changes-ethereum',
                component: ComponentCreator('/docs/Personal_Blog/Web3/the-end-of-eoas-how-rip-7212-changes-ethereum', 'fd0'),
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

import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Developer Relations & Technical Writing',
    Svg: require('@site/static/img/undraw_cooking.svg').default,
    description: (
      <>
       I tinker with technical content, API docs, and developer advocacy. 
       I've put together some guides, videos, and demos—hopefully making it a bit easier for developers to navigate blockchain data on AWS, Kafka, Snowflake, and Supabase!
      </>
    ),
  },
  {
    title: 'Software Development',
    Svg: require('@site/static/img/undraw_writing-down-ideas.svg').default,
    description: (
      <>
I've dabbled in a few interesting projects across different areas—enterprise CRM, blockchain data APIs, and on-chain intelligence apps. Somehow, they worked out!      </>
    ),
  },
  {
    title: 'Community & Growth',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       As a Lead Developer Relations Engineer at Bitquery, I help developers, try to answer their questions, help solve problems (or at least attempt to), gather feedback, and brainstorm ways to get more people to actually use our product!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

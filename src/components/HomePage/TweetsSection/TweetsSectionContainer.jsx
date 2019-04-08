import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import TweetsSection from './TweetsSection';
import { extractNodes } from '../../../helpers/data';

const TweetsSectionContainer = () => (
  // <StaticQuery
  //   query={graphql`
  //     query {
  //       allTweet {
  //         edges {
  //           node {
  //             tweetId: id_str
  //           }
  //         }
  //       }
  //     }
  //   `}
  //   render={data => <TweetsSection tweets={extractNodes(data.allTweet)} />}
  // />
  <TweetsSection tweets={[]} />
);

export default TweetsSectionContainer;

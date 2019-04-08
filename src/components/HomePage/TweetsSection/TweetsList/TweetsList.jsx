/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TwitterTweetEmbed } from 'react-twitter-embed';

import List from '../../../common/List';
import { media } from '../../../../styles/mixins';
import { medLarge, small } from '../../../../styles/variables';

const TweetCard = styled(List.Item)`
  list-style-type: none;
  text-align: left;
  margin-bottom: 1em;
  
  ${media(small)`
    display: inline-block;
    vertical-align: top;
    width: 44%;
    margin: 0 2.5%;
    margin-bottom: 2em;
  `}
  
  ${media(medLarge)`
    width: 28%;
    margin-right: 2%;
    margin-left: 2%;
  `}
`;

const TweetsList = ({ tweets }) => (
  <List>
    {tweets.map(({ tweetId }, i) => (
      <TweetCard key={i}>
        <TwitterTweetEmbed tweetId={tweetId} />
      </TweetCard>
    ))}
  </List>
);

TweetsList.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TweetsList;

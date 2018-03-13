import React from 'react';
import styled from 'styled-components';
import Link from './Link';

import comcast from '../img/sponsors/comcast.svg';

import netflix from '../img/sponsors/netflix.svg';
import bitmovin from '../img/sponsors/bitmovin.svg';
import google from '../img/sponsors/google.svg';

import wowza from '../img/sponsors/wowza.svg';
import cbsi from '../img/sponsors/cbsi.svg';
import fastly from '../img/sponsors/fastly.svg';
import peer5 from '../img/sponsors/peer5.svg';
import jwplayer from '../img/sponsors/jwplayer.svg';

import unifiedStreaming from '../img/sponsors/unifiedStreaming.svg';
import hulu from '../img/sponsors/hulu.svg';

import brightcove from '../img/sponsors/brightcove.svg';

const Sponsors = styled(({ className }) =>
  <div className={className}>
    <div className="group platinum">
      <h5>Platinum</h5>

      <ul>
        <li>
          <Link href="https://comcast.com">
            <img className="gold" src={comcast} alt="Comcast" />
          </Link>
        </li>
      </ul>
    </div>

    <div className="group gold">
      <h5>Gold</h5>
      <ul>
        <li>
          <Link href="https://netflix.com">
            <img className="gold" src={netflix} alt="Netflix" />
          </Link>
        </li>

        <li>
          <Link href="https://bitmovin.com">
            <img className="gold" src={bitmovin} alt="Bitmovin" />
          </Link>
        </li>

        <li>
          <Link href="https://google.com">
            <img className="gold" src={google} alt="Google" />
          </Link>
        </li>
      </ul>
    </div>

    <div className="group silver">
      <h5>Silver</h5>

      <ul>
        <li>
          <Link href="https://wowza.com">
            <img src={wowza} alt="Wowza" />
          </Link>
        </li>

        <li>
          <Link href="https://cbsinteractive.com">
            <img src={cbsi} alt="CBS Interactive" />
          </Link>
        </li>

        <li>
          <Link href="https://fastly.com">
            <img src={fastly} alt="Fastly" />
          </Link>
        </li>

        <li>
          <Link href="https://peer5.com">
            <img src={peer5} alt="Peer5" />
          </Link>
        </li>

        <li>
          <Link href="https://jwplayer.com">
            <img src={jwplayer} alt="JW Player" />
          </Link>
        </li>
      </ul>
    </div>

    <div className="group bronze">
      <h5>Bronze</h5>

      <ul>
        <li>
          <Link href="https://unified-streaming.com">
            <img src={unifiedStreaming} alt="Unified Streaming" />
          </Link>
        </li>

        <li>
          <Link href="https://hulu.com">
            <img src={hulu} alt="Hulu" />
          </Link>
        </li>
      </ul>
    </div>

    <div className="group party">
      <h5>party</h5>

      <ul>
        <li>
          <Link href="https://brightcove.com">
            <img src={brightcove} alt="Brightcove" />
          </Link>
        </li>
      </ul>
    </div>
  </div>
)`

  h5 {
    font-size: 12px;
    line-height: 1.4375;
    margin-bottom: 2em;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  ul {
    list-style: none;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;

    li:last-child {
      margin-right: 0;
    }
  }

  li {
    display: inline-block;
  }

  .group {
    margin-bottom: 30px;

    img { height: auto; }
  }

  .platinum img { width: 300px; }

  .gold {
    width: 75%;
    margin: 0 auto 30px;

    img {
      width: 220px;
      max-height: ${220/2}px;
    }
  }

  .silver img {
    width: 190px;
    max-height: ${190/3}px;
  }

  .bronze {
    max-width: 50%;
    margin 0 auto 30px;
    img {
      width: 160px;
      max-height: ${160/3}px;
    }
  }

  .party img {
    width: 240px;
    max-height: ${160/3}px;
  }
`;

export default Sponsors;

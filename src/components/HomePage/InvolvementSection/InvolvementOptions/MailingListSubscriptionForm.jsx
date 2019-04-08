import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

import Button from '../../../common/Button';
import { fontSize, transitionAll } from '../../../../styles/mixins';
import { brandGrey, buttonFont } from '../../../../styles/variables';

const EmailInput = styled.input`
  ${fontSize('12px')};
  font-family: ${buttonFont};
  border-radius: 0;
  box-shadow: 0;
  appearance: none;
  padding: 0.4em 1em;
  border: none;
  outline: none;
  background-color: ${brandGrey};
  width: 74%;
  margin-right: 10px;

  &:focus {
    ${transitionAll};
    background-color: ${darken(0.1, brandGrey)};
  }
`;

const SubmitButton = styled(Button)`
  ${fontSize('12px')};
  border: 0;
  padding: 0.5em 1em;
  width: 21%;
  text-align: center;
`;

const MailingListSubscriptionForm = () => (
  <form
    action="https://demuxed.us14.list-manage.com/subscribe/post?u=7bbc679a78def4588e1661330&amp;id=4d4cb1d884"
    method="post"
    id="mc-embedded-subscribe-form"
    target="_blank"
    noValidate
  >
    <EmailInput
      required
      type="email"
      id="mce-EMAIL"
      name="EMAIL"
      placeholder="your email address"
    />
    <div
      style={{ position: 'absolute', left: '-5000px' }}
      aria-hidden="true"
    >
      <input
        type="checkbox"
        value="1"
        name="group[3999][1]"
        id="mce-group[3999]-3999-0"
        checked
        readOnly
      />
      <input
        type="checkbox"
        value="2"
        name="group[3999][2]"
        id="mce-group[3999]-3999-1"
        checked
        readOnly
      />
      <input
        type="checkbox"
        value="4"
        name="group[3999][4]"
        id="mce-group[3999]-3999-2"
        checked
        readOnly
      />
      <input
        type="checkbox"
        value="8"
        name="group[3999][8]"
        id="mce-group[3999]-3999-3"
        checked
        readOnly
      />
      {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
      <input
        type="text"
        name="b_7bbc679a78def4588e1661330_4d4cb1d884"
        tabIndex="-1"
        value=""
        readOnly
      />
    </div>
    <SubmitButton type="submit">
      Go
    </SubmitButton>
  </form>
);

export default MailingListSubscriptionForm;

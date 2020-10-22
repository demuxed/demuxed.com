import React from 'react';
import styled from 'styled-components';

import Layout from '../components/common/Layout';
import PageSection from '../components/common/PageSection';

const CodeOfConductContent = styled.div`
  text-align: left;
  max-width: 80%;
  margin: 0 auto;

  h2 {
    padding: 2em 0 1em 0;
  }

  p {
    padding: 1em 0;
  }

  ul {
    padding-top: 1em;
    padding-left: 2em;
  }

  li {
    color: currentColor;
  }
`;

const CodeOfConduct = () => (
  <Layout>
    <PageSection>
      <PageSection.Heading>Code of Conduct</PageSection.Heading>

      <CodeOfConductContent>
        <p>
          Part of ensuring that Demuxed is a good experience for all attendees
          is the enforcement of a strong code of conduct. All attendees,
          speakers, sponsors, and volunteers at Demuxed are required to agree
          with the following code of conduct. Organizers will strongly enforce
          this code throughout the event and all attendees must agree to this
          policy when purchasing tickets. We expect cooperation from all
          participants to help ensure a safe and inclusive environment for
          everybody.
        </p>

        <h2>Need Help?</h2>

        <p>
          For the duration of the entire event, conference organizers will be
          actively monitoring the emails and phone numbers listed below:
          <ul>
            <li>
              In person: find a staff member of Demuxed staff (wearing staff
              t-shirts or staff badges)
            </li>
            <li>Phone: 706-363-0553</li>
            <li>
              Email: <a href="mailto:info@demuxed.com">info@demuxed.com</a>
            </li>
          </ul>
        </p>

        <h2>The Quick Version</h2>

        <p>
          Demuxed is dedicated to providing a harassment-free conference
          experience for everyone, regardless of gender, gender identity and
          expression, age, sexual orientation, disability, physical appearance,
          body size, race, ethnicity, religion (or lack thereof), or technology
          choices. We do not tolerate harassment of conference participants in
          any form. Sexual language and imagery is not appropriate for any
          conference venue, including talks, workshops, parties, Twitter, and
          other online media. Demuxed participants violating these rules may be
          sanctioned or expelled from the conference without a refund at the
          discretion of the conference organizers.
        </p>

        <h2>The Less Quick Version</h2>

        <p>
          Harassment includes offensive verbal comments related to gender,
          gender identity and expression, age, sexual orientation, disability,
          physical appearance, body size, race, ethnicity, religion, technology
          choices, sexual images in public spaces, deliberate intimidation,
          stalking, following, harassing photography or recording, sustained
          disruption of talks or other events, inappropriate physical contact,
          and unwelcome sexual attention.
        </p>

        <p>
          Participants asked to stop any harassing behavior are expected to
          comply immediately.
        </p>

        <p>
          Sponsors are also subject to the anti-harassment policy. In
          particular, sponsors should not use sexualized images, activities, or
          other material. Booth staff (including volunteers) should not use
          sexualized clothing/uniforms/costumes, or otherwise create a
          sexualized environment.
        </p>

        <p>
          If a participant engages in harassing behavior, the conference
          organizers may take any action they deem appropriate, including
          warning the offender or expulsion from the conference with no refund.
        </p>

        <p>
          If you are being harassed, notice that someone else is being harassed,
          or have any other concerns, please contact a member of Demuxed staff
          immediately. Conference staff can be identified as they’ll be wearing
          branded clothing. You can also contact staff via email
          (info@demuxed.com) or telephone (706-363-0553).
        </p>

        <p>
          Demuxed staff will be happy to help participants contact hotel/venue
          security or local law enforcement, provide escorts, or otherwise
          assist those experiencing harassment to feel safe for the duration of
          the conference. We value your attendance.
        </p>

        <p>
          We expect participants to follow these rules at conference, workshop
          venues and conference-related social events.
        </p>

        <p>
          If you have questions about this document or why it exists, please
          read this very helpful guide about codes of conduct.
        </p>

        <h2>Attribution</h2>

        <p>
          The text of this page is a modified version of{' '}
          <a href="https://confcodeofconduct.com">confcodeofconduct.com</a>,
          which is recommended by diversity and inclusion experts for in-person
          group events. It has been modified to include our conference name and
          relevant contact information.
        </p>
      </CodeOfConductContent>
    </PageSection>
  </Layout>
);

export default CodeOfConduct;

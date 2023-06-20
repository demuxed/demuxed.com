import Link from '@/components/Link';

export default function CoC() {
  return (
    <main className="container max-w-screen-md mx-auto pt-4 pb-16 prose">
      <h1>Demuxed Code of Conduct</h1>
      <p>
        All attendees, speakers, sponsors and volunteers at our conference are
        required to agree with the following code of conduct. Organisers will
        enforce this code throughout the event. We expect cooperation from all
        participants to help ensure a safe environment for everybody.
      </p>

      <h2>Need to get in touch?</h2>

      <p>
        For the duration of the entire event, conference organizers will be
        actively monitoring the emails and phone numbers listed below:
        <ul>
          <li>
            In person: find a staff member of Demuxed staff (wearing staff
            t-shirts or staff badges)
          </li>
          <li>
            Phone: <span className="font-mono">706-363-0553</span>
          </li>
          <li>
            Email:{' '}
            <Link href="mailto:info@demuxed.com">info at demuxed dot com</Link>
          </li>
        </ul>
      </p>

      <h2>The Quick Version</h2>

      <p>
        Our conference is dedicated to providing a harassment-free conference
        experience for everyone, regardless of gender, gender identity and
        expression, age, sexual orientation, disability, physical appearance,
        body size, race, ethnicity, religion (or lack thereof), or technology
        choices. We do not tolerate harassment of conference participants in any
        form. Sexual language and imagery is not appropriate for any conference
        venue, including talks, workshops, parties, Twitter and other online
        media. Conference participants violating these rules may be sanctioned
        or expelled from the conference <em>without a refund</em> at the
        discretion of the conference organisers.
      </p>

      <h2>The Less Quick Version</h2>

      <p>
        Harassment includes offensive verbal comments related to gender, gender
        identity and expression, age, sexual orientation, disability, physical
        appearance, body size, race, ethnicity, religion, technology choices,
        sexual images in public spaces, deliberate intimidation, stalking,
        following, harassing photography or recording, sustained disruption of
        talks or other events, inappropriate physical contact, and unwelcome
        sexual attention.
      </p>

      <p>
        Participants asked to stop any harassing behavior are expected to comply
        immediately.
      </p>

      <p>
        Sponsors are also subject to the anti-harassment policy. In particular,
        sponsors should not use sexualised images, activities, or other
        material. Booth staff (including volunteers) should not use sexualised
        clothing/uniforms/costumes, or otherwise create a sexualised
        environment.
      </p>

      <p>
        If a participant engages in harassing behavior, the conference
        organisers may take any action they deem appropriate, including warning
        the offender or expulsion from the conference with no refund.
      </p>

      <p>
        If you are being harassed, notice that someone else is being harassed,
        or have any other concerns, please contact a member of conference staff
        immediately. Conference staff can be identified as they&#39;ll be
        wearing branded clothing and/or badges.
      </p>

      <p>
        Conference staff will be happy to help participants contact hotel/venue
        security or local law enforcement, provide escorts, or otherwise assist
        those experiencing harassment to feel safe for the duration of the
        conference. We value your attendance.
      </p>

      <p>
        We expect participants to follow these rules at conference and workshop
        venues and conference-related social events.
      </p>
    </main>
  );
}

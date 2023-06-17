import Link from '@/components/Link';

export default function About() {
  return (
    <main className="container max-w-screen-md mx-auto pt-4 pb-16 prose">
      <h1>About Demuxed</h1>
      <h2>Who are we?</h2>
      <p>
        Demuxed is simply engineers talking about video technology. After years
        of chatting about video at the SF Video Technology Meetup, we decided it
        was time for an engineer-first event with quality technical talks about
        video. We started with a meetup in SF, then ran our first Demuxed, and
        now there are meetups all over the world! It doesn't feel like much of a
        stretch to say we're the best damn global community for developers
        working with video technology. If it is a stretch, we're saying it
        anyway. 😝
      </p>
      <h2>Who's organizing this?</h2>
      <p>
        For the conference itself and things like this site, most of the behind
        the scenes is done by folks from Mux (Demuxed came first ☝️) but none of
        this would be possible without amazing people from the community.
      </p>
      <p>
        Meetups and events are all run by fantastic local organizers from
        companies across the industry. We can't take credit for all of the hard
        work the organizers do, so think of it more like a loose coalition of
        esteemed colleagues. We share speakers and content when it makes sense,
        talk to each other for support, and sometimes Demuxed will pick up the
        tab for some beers and pizza.
      </p>
      <p>
        If you're thinking about starting a new meetup, shoot us an email! We'll
        send you a writeup of things that have worked (and not worked) for other
        folks, we'll pick up the tab for the first event's food/drink, and we'll
        even try to help find you a speaker (even if we have to import one!).
      </p>

      <h2>Our guiding principles</h2>
      <div className="grid md:grid-cols-3 gap-2">
        <div className="flex flex-col h-full">
          <h3>No Marketing</h3>
          <p>
            Speakers are selected based on merit, not how much money their
            company paid. To be clear, that means speaking slots aren't for
            sale. Attendee information is also not for sale, and that includes
            any sponsors.
          </p>
        </div>
        <div className="flex flex-col h-full">
          <h3>Affordable</h3>
          <p>
            We want anyone in the industry to be able to come, keeping tickets
            reasonably priced through amazing sponsors and backing from our
            employers. Working on a great open source project that can't afford
            to send you? Please reach out.
          </p>
        </div>
        <div className="flex flex-col h-full">
          <h3>For everyone in the industry</h3>
          <p>
            In keeping with our love for reasonable standards, we've adopted the{' '}
            <Link href="http://confcodeofconduct.com/">
              Conf Code of Conduct
            </Link>{' '}
            for the event. Any questions or concerns, please speak to any of our
            voluenteers or organizers. Or email us directly.
          </p>
        </div>
      </div>
    </main>
  );
}

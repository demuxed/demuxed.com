import Button from '@/components/Button';

interface NewsletterSubscribeProps {}

export default function NewsletterSubscribe(props: NewsletterSubscribeProps) {
  return (
    <form
      action="https://demuxed.us14.list-manage.com/subscribe/post?u=7bbc679a78def4588e1661330&id=4d4cb1d884"
      method="post"
      id="mc-embedded-subscribe-form"
      target="_blank"
      noValidate
    >
      <label
        htmlFor="mce-EMAIL"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Email
      </label>
      <input
        type="email"
        required={true}
        id="mce-EMAIL"
        name="EMAIL"
        placeholder="buck@leporidae.com"
        className="block w-full border-0 px-2 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 ring-offset-black"
      />
      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <input
          type="checkbox"
          value="1"
          name="group[3999][1]"
          id="mce-group[3999]-3999-0"
          readOnly
          checked
        />
        <input
          type="checkbox"
          value="2"
          name="group[3999][2]"
          id="mce-group[3999]-3999-1"
          readOnly
          checked
        />
        <input
          type="checkbox"
          value="4"
          name="group[3999][4]"
          id="mce-group[3999]-3999-2"
          readOnly
          checked
        />
        <input
          type="checkbox"
          value="8"
          name="group[3999][8]"
          id="mce-group[3999]-3999-3"
          readOnly
          checked
        />
        <input
          type="text"
          name="b_7bbc679a78def4588e1661330_4d4cb1d884"
          tabIndex={-1}
          value=""
          readOnly
        />
      </div>
      <Button type="submit" className="w-full">
        Send me video industry stuff
      </Button>
    </form>
  );
}

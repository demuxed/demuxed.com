import Link, { LinkProps } from 'next/link';

export default function StyledLink({
  children,
  ...props
}: LinkProps & React.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      className="text-slate-600 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
      {...props}
    >
      {children}
    </Link>
  );
}

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  color?: string;
}

export default function Badge({
  children,
  color = 'gray',
  className,
  ...props
}: BadgeProps) {
  const colorVariant: { [key: string]: string } = {
    green: 'bg-green-100 text-green-600',
  };

  return (
    <span
      className={`inline-flex items-center ${colorVariant[color]} px-2 py-1 text-xs font-medium ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

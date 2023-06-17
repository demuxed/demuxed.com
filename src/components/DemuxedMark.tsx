import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 60" fill="none" {...props}>
		<title>Demuxed X Icon</title>
		<path
			fill="currentColor"
			d="M36.252 9.836h8.194L15.395 50.164H7.2L36.25 9.836ZM17.887 24.234.97.5h8.947L22.23 18.43l-4.342 5.804Z"
		/>
		<path fill="currentColor" d="M17.887 24.234.97.5h8.947L22.23 18.43l-4.342 5.804Z" />
		<path stroke="currentColor" d="M17.887 24.234.97.5h8.947L22.23 18.43l-4.342 5.804Z" />
		<path fill="currentColor" d="M34.265 33.934 29.3 40.82 42.956 60h9.932L34.265 33.934Z" />
		<path fill="currentColor" d="M34.265 33.934 29.3 40.82 42.956 60h9.932L34.265 33.934Z" />
	</svg>
);

export default SvgComponent;

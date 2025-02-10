import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
	if (!request.cookies.has('client-location'))
		return NextResponse.redirect(new URL('/request-permission', request.url));

	return NextResponse.next();
}

export const config = {
	matcher: ['/', '/city/(.*)']
};

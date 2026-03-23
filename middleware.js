export default function middleware(request) {
    const url = new URL(request.url);

    if (url.hostname === 'www.proof.en-place.ai') {
        url.pathname = '/proof/index.html';
        return new Response(null, {
            headers: {
                'x-middleware-rewrite': url.toString(),
            },
        });
    }
}

export const config = {
    matcher: '/((?!assets|_vercel|proof-logo\\.svg|proof-favicon\\.svg|enplace-favicon\\.svg|[^/]+\\.[^/]+$).*)',
};
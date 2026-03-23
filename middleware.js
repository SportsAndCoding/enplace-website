export default function middleware(request) {
    const url = new URL(request.url);

    if (url.hostname === 'www.proof.en-place.ai') {
        return new Response(null, {
            headers: {
                'x-middleware-rewrite': url.origin + '/proof/index.html',
            },
        });
    }
}

export const config = {
    matcher: '/',
};
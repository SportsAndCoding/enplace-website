export default function middleware(request) {
    const url = new URL(request.url);

    // www.proof → permanent redirect to www.mise
    if (url.hostname === 'www.proof.en-place.ai') {
        return Response.redirect('https://www.mise.en-place.ai' + url.pathname, 301);
    }

    // www.mise → serve Mise landing page
    if (url.hostname === 'www.mise.en-place.ai') {
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
// games.soody.date → GitHub Pages(sungju888.github.io/nexix-games) 를 그대로 보여 준다.
// 내용은 GitHub 저장소에서 고치고, 여기는 손대지 않는다.
const ORIGIN = 'https://sungju888.github.io/nexix-games';
export default {
  async fetch(req) {
    const u = new URL(req.url);
    const path = u.pathname === '/' ? '/' : u.pathname;
    const r = await fetch(ORIGIN + path + u.search, { cf: { cacheTtl: 300, cacheEverything: true } });
    const h = new Headers(r.headers);
    h.delete('x-github-request-id');
    return new Response(r.body, { status: r.status, headers: h });
  },
};

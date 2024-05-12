import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro/server_CyyIn-Dk.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"file:///Users/simedunn/Projects/pristine-services/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/simedunn/Projects/pristine-services/dist/airbnb/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/airbnb","isIndex":false,"type":"page","pattern":"^\\/airbnb\\/?$","segments":[[{"content":"airbnb","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/airbnb.astro","pathname":"/airbnb","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/simedunn/Projects/pristine-services/dist/checklist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/checklist","isIndex":false,"type":"page","pattern":"^\\/checklist\\/?$","segments":[[{"content":"checklist","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/checklist.astro","pathname":"/checklist","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/simedunn/Projects/pristine-services/dist/commercial/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/commercial","isIndex":false,"type":"page","pattern":"^\\/commercial\\/?$","segments":[[{"content":"commercial","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/commercial.astro","pathname":"/commercial","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/simedunn/Projects/pristine-services/dist/residential/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/residential","isIndex":false,"type":"page","pattern":"^\\/residential\\/?$","segments":[[{"content":"residential","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/residential.astro","pathname":"/residential","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/simedunn/Projects/pristine-services/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/simedunn/Projects/pristine-services/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/simedunn/Projects/pristine-services/src/pages/airbnb.astro",{"propagation":"none","containsHead":true}],["/Users/simedunn/Projects/pristine-services/src/pages/checklist.astro",{"propagation":"none","containsHead":true}],["/Users/simedunn/Projects/pristine-services/src/pages/commercial.astro",{"propagation":"none","containsHead":true}],["/Users/simedunn/Projects/pristine-services/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/simedunn/Projects/pristine-services/src/pages/residential.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/airbnb@_@astro":"pages/airbnb.astro.mjs","\u0000@astro-page:src/pages/checklist@_@astro":"pages/checklist.astro.mjs","\u0000@astro-page:src/pages/commercial@_@astro":"pages/commercial.astro.mjs","\u0000@astro-page:src/pages/residential@_@astro":"pages/residential.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_ACAI2tFr.mjs","/Users/simedunn/Projects/pristine-services/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/src/pages/about.astro":"chunks/about_Bn-mDZgT.mjs","/src/pages/airbnb.astro":"chunks/airbnb_BxldWIdD.mjs","/src/pages/checklist.astro":"chunks/checklist_Dpgnecg-.mjs","/src/pages/commercial.astro":"chunks/commercial_LX5gJu6O.mjs","/src/pages/residential.astro":"chunks/residential_BCp9RE5w.mjs","/src/pages/index.astro":"chunks/index_ZwQ9_brf.mjs","@astrojs/react/client.js":"_astro/client.B7uNidBv.js","/Users/simedunn/Projects/pristine-services/src/components/Navigation.jsx":"_astro/Navigation.LAtNzQjF.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///Users/simedunn/Projects/pristine-services/dist/about/index.html","/file:///Users/simedunn/Projects/pristine-services/dist/airbnb/index.html","/file:///Users/simedunn/Projects/pristine-services/dist/checklist/index.html","/file:///Users/simedunn/Projects/pristine-services/dist/commercial/index.html","/file:///Users/simedunn/Projects/pristine-services/dist/residential/index.html","/file:///Users/simedunn/Projects/pristine-services/dist/index.html"],"buildFormat":"directory","checkOrigin":false});

export { manifest };

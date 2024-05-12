import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from './astro/server_CyyIn-Dk.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_B5A4Ywab.mjs';

const $$Residential = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pristine Services" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <div class="container"> <h1>Residential</h1> </div> </main> ` })}`;
}, "/Users/simedunn/Projects/pristine-services/src/pages/residential.astro", void 0);

const $$file = "/Users/simedunn/Projects/pristine-services/src/pages/residential.astro";
const $$url = "/residential";

export { $$Residential as default, $$file as file, $$url as url };

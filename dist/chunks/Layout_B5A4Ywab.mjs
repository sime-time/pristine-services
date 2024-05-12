import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as addAttribute, d as renderHead, e as renderSlot, f as createAstro } from './astro/server_CyyIn-Dk.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */
import { jsx, jsxs } from 'react/jsx-runtime';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-mtxgg6pp> <p data-astro-cid-mtxgg6pp>&copy; Pristine Clean Services 2024. All rights reserved.</p> </footer> `;
}, "/Users/simedunn/Projects/pristine-services/src/layouts/Footer.astro", void 0);

function Navigation() {
  return /* @__PURE__ */ jsx(Navbar, { expand: "lg", children: /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsx(Navbar.Brand, { href: "/", children: /* @__PURE__ */ jsx("img", { src: "logo.svg", height: "80", className: "d-inline-block align-top", alt: "Company logo" }) }),
    /* @__PURE__ */ jsx(Navbar.Toggle, { "aria-controls": "basic-navbar-nav" }),
    /* @__PURE__ */ jsx(Navbar.Collapse, { id: "basic-navbar-nav", children: /* @__PURE__ */ jsxs(Nav, { className: "me-auto", children: [
      /* @__PURE__ */ jsx(Nav.Link, { href: "/", children: "Home" }),
      /* @__PURE__ */ jsx(Nav.Link, { href: "/about", children: "About" }),
      /* @__PURE__ */ jsxs(NavDropdown, { title: "Services", id: "basic-nav-dropdown", children: [
        /* @__PURE__ */ jsx(NavDropdown.Item, { href: "/residential", children: "Residential" }),
        /* @__PURE__ */ jsx(NavDropdown.Item, { href: "/commercial", children: "Commercial" }),
        /* @__PURE__ */ jsx(NavDropdown.Item, { href: "/airbnb", children: "Airbnb" }),
        /* @__PURE__ */ jsx(NavDropdown.Divider, {}),
        /* @__PURE__ */ jsx(NavDropdown.Item, { href: "/checklist", children: "Cleaning Checklist" })
      ] })
    ] }) })
  ] }) });
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-body-tertiary"> ${renderComponent($$result, "Navigation", Navigation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/simedunn/Projects/pristine-services/src/components/Navigation.jsx", "client:component-export": "default" })} </header>`;
}, "/Users/simedunn/Projects/pristine-services/src/layouts/Header.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Pristine Services offers premium deep cleaning, airbnb cleaning, move in/out cleaning, post construction cleaning, and commercial cleaning services."><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/simedunn/Projects/pristine-services/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };

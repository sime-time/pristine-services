import{j as e}from"./jsx-runtime.CIvXN1Bf.js";import{T as d,a as r}from"./Tabs.CYDma93u.js";import"./index.CE64LHRp.js";import"./Nav.2z47sm-O.js";import"./main.BrtEitEW.js";import"./extends.BDfD00iB.js";function i({title:l,btnLabel:t,btnHref:n,description:s}){return e.jsx("div",{className:"card specific-h-lg-200 h-100 p-2 px-4 w-100 shadow mb-4",children:e.jsxs("div",{className:"card-body d-flex flex-column flex-md-row justify-content-between gap-3 mh-100",children:[e.jsxs("div",{className:"d-flex flex-column justify-content-between gap-2 mb-2",children:[e.jsx("h2",{className:"card-title",children:l}),e.jsx("div",{children:e.jsx("a",{href:n,className:"btn btn-outline-primary btn-lg px-4 py-2 fs-5 fw-bold",children:t})})]}),e.jsx("div",{className:"d-flex flex-column text-wrap fs-5 lh-lg specific-w-md-600",children:s})]})})}function f(){const l=e.jsxs("ul",{children:[e.jsx("li",{children:"Designed for regular upkeep, our standard clean service covers all your essential tasks."}),e.jsx("li",{children:"Set up recurring cleans weekly, biweekly, or monthly."}),e.jsx("li",{children:e.jsx("a",{href:"/checklist",children:"See our standard cleaning checklist."})})]}),t=e.jsxs("ul",{children:[e.jsx("li",{children:"Ideal for occasional, thorough cleanings going above and beyond a standard clean."}),e.jsx("li",{children:"Set up recurring deep cleans weekly, biweekly, or monthly."}),e.jsx("li",{children:e.jsx("a",{href:"/checklist",children:"See our deep cleaning checklist."})})]}),n=e.jsxs("ul",{children:[e.jsx("li",{children:"Our ideal option for those in transition."}),e.jsx("li",{children:e.jsx("a",{href:"/checklist",children:"See our moving clean checklist."})})]}),s=e.jsxs("ul",{children:[e.jsx("li",{children:"Must initially call, text, email, or submit online form for a quote."}),e.jsx("li",{children:"Our representative will reach out to schedule a customized scope of work for your space."}),e.jsx("li",{children:"Recurring options available."})]}),c=e.jsxs("ul",{children:[e.jsx("li",{children:"After the dust settles and the construction is complete, let our team take care of the final touch."}),e.jsx("li",{children:"Must initially call, text, email, or submit online form for a quote."})]}),o=e.jsxs("ul",{children:[e.jsx("li",{children:"Our team handles all aspects of turnover between guests. "}),e.jsx("li",{children:"We leave no corner untouched to guarantee a welcoming ambiance for each arrival."}),e.jsx("li",{children:e.jsx("a",{href:"/checklist",children:"See our turnover cleaning checklist."})})]}),a=e.jsxs("ul",{children:[e.jsx("li",{children:'We ensure this service brings your Airbnb back to its "factory" look.'}),e.jsx("li",{children:e.jsx("a",{href:"/checklist",children:"See our deep cleaning checklist."})})]});return e.jsxs(d,{defaultActiveKey:"residential",id:"clean-type-tabs",variant:"pills",className:"fs-4",justify:!0,children:[e.jsxs(r,{eventKey:"residential",title:"Residential",className:"py-4",children:[e.jsx(i,{title:"Standard Clean",btnLabel:"Book Now",btnHref:"/booking",description:l}),e.jsx(i,{title:"Deep Clean",btnLabel:"Book Now",btnHref:"/booking",description:t}),e.jsx(i,{title:"Move in/out Clean",btnLabel:"Book Now",btnHref:"/booking",description:n})]}),e.jsxs(r,{eventKey:"commercial",title:"Commercial",className:"py-4",children:[e.jsx(i,{title:"Commercial Clean",btnLabel:"Get Quote",btnHref:"/contact",description:s}),e.jsx(i,{title:"Post-Construction Clean",btnLabel:"Get Quote",btnHref:"/contact",description:c})]}),e.jsxs(r,{eventKey:"airbnb",title:"Airbnb",className:"py-4",children:[e.jsx(i,{title:"Airbnb Turnover",btnLabel:"Book Now",btnHref:"/booking",description:o}),e.jsx(i,{title:"Airbnb Deluxe Deep Clean",btnLabel:"Book Now",btnHref:"/booking",description:a})]})]})}export{f as default};
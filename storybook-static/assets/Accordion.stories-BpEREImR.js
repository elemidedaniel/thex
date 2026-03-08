import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as A}from"./iframe-BX1bmF3q.js";import{c as n,m as h}from"./cn-Cu1oTNr2.js";import{A as T}from"./index-CDD_YbyL.js";import{B as N}from"./Badge-DUqPitaB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C46wqaXo.js";const s=({items:u,multiple:x=!1,defaultOpen:f=[],variant:o="flat",className:g})=>{const[b,y]=A.useState(new Set(f)),w=t=>{y(r=>{const a=new Set(r);return a.has(t)?a.delete(t):(x||a.clear(),a.add(t)),a})},v=n(o==="separated"?"flex flex-col gap-2":"flex flex-col",g),k=(t,r)=>n("overflow-hidden transition-colors duration-200",o==="flat"&&["border-x border-white/8",t&&"border-t rounded-t-2xl",r&&"border-b rounded-b-2xl","border-b border-white/8"],o==="glass"&&["border-x border-white/10 backdrop-blur-md bg-white/3",t&&"border-t rounded-t-2xl",r&&"border-b rounded-b-2xl","border-b border-white/8"],o==="separated"&&["rounded-2xl border border-white/8 bg-[#0f0f17]"]);return e.jsx("div",{className:v,children:u.map((t,r)=>{const a=b.has(t.id),j=r===0,S=r===u.length-1;return e.jsxs("div",{className:k(j,S),children:[e.jsxs("button",{onClick:()=>!t.disabled&&w(t.id),disabled:t.disabled,className:n("w-full flex items-center justify-between gap-4","px-5 py-4 text-left","transition-colors duration-150","disabled:opacity-40 disabled:cursor-not-allowed",a?"text-white bg-white/3":"text-gray-400 hover:text-white hover:bg-white/2"),children:[e.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[t.icon&&e.jsx("span",{className:n("flex-shrink-0 transition-colors",a?"text-cyan-400":"text-gray-600"),children:t.icon}),e.jsx("span",{className:"font-semibold text-sm truncate",children:t.title}),t.badge&&e.jsx("span",{className:"flex-shrink-0",children:t.badge})]}),e.jsx(h.span,{animate:{rotate:a?180:0},transition:{duration:.2,ease:[.16,1,.3,1]},className:n("flex-shrink-0 text-xs transition-colors",a?"text-cyan-400":"text-gray-600"),children:"▼"})]}),e.jsx(T,{initial:!1,children:a&&e.jsx(h.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.25,ease:[.16,1,.3,1]},className:"overflow-hidden",children:e.jsx("div",{className:"px-5 pb-4 pt-1 text-sm text-gray-400 leading-relaxed border-t border-white/5",children:t.content})})})]},t.id)})})};s.displayName="Accordion";s.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"AccordionItem"}],raw:"AccordionItem[]"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultOpen:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'flat' | 'glass' | 'separated'",elements:[{name:"literal",value:"'flat'"},{name:"literal",value:"'glass'"},{name:"literal",value:"'separated'"}]},description:"",defaultValue:{value:"'flat'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const G={title:"TheX/Accordion",component:s,parameters:{layout:"padded",backgrounds:{default:"dark",values:[{name:"dark",value:"#0a0a0f"}]},docs:{description:{component:`
# Accordion

Smooth height-animated accordion with single and multiple open modes, icons, badges, and three variants.

## AI Prompt
\`\`\`
Build an Accordion component using React, TypeScript, Tailwind CSS and Framer Motion.
Support single and multiple open modes.
Smooth height animation using AnimatePresence.
Rotating arrow indicator. Icon and badge support per item.
Variants: flat, glass, separated.
Disabled item support. Dark theme with cyan accent.
\`\`\`
        `}}},tags:["autodocs"]},m=[{id:"1",title:"What is TheX component library?",content:"TheX is a production-grade React component library built with TypeScript, Tailwind CSS, and Framer Motion. It features 20 beautifully designed components with full accessibility support, animations, and Storybook documentation."},{id:"2",title:"How do I install TheX in my project?",content:'Install via npm: npm install @thex/core. Then import components directly: import { Button } from "@thex/core". All components are tree-shakeable so you only bundle what you use.'},{id:"3",title:"Is TheX accessible?",content:"Yes. Every component is built on Radix UI primitives with full keyboard navigation, ARIA attributes, and WCAG 2.2 compliance. Each Storybook page includes an accessibility score."},{id:"4",title:"Can I customize the theme?",content:"Absolutely. TheX uses CSS custom properties and a token system. Override any token to match your brand. Both dark and light themes are supported out of the box.",badge:e.jsx(N,{variant:"primary",size:"sm",children:"New"})},{id:"5",title:"This item is disabled",content:"You cannot open this item.",disabled:!0}],i={render:()=>e.jsx("div",{className:"max-w-lg mx-auto p-6",style:{background:"#0a0a0f"},children:e.jsx(s,{items:m,defaultOpen:["1"]})})},d={render:()=>e.jsx("div",{className:"max-w-lg mx-auto p-6",style:{background:"#0a0a0f"},children:e.jsx(s,{items:m,multiple:!0,defaultOpen:["1","2"]})})},l={render:()=>e.jsx("div",{className:"max-w-lg mx-auto p-6",style:{background:"#0a0a0f"},children:e.jsx(s,{items:m,variant:"separated",defaultOpen:["1"]})})},c={render:()=>e.jsx("div",{className:"max-w-lg mx-auto p-6",style:{background:"#0a0a0f"},children:e.jsx(s,{items:m,variant:"glass",defaultOpen:["1"]})})},p={render:()=>e.jsx("div",{className:"max-w-lg mx-auto p-6",style:{background:"#0a0a0f"},children:e.jsx(s,{variant:"separated",defaultOpen:["1"],items:[{id:"1",icon:e.jsx("span",{children:"🚀"}),title:"Getting Started",content:"Begin your journey with TheX by installing the package and importing your first component."},{id:"2",icon:e.jsx("span",{children:"🎨"}),title:"Theming",content:"Customize every aspect of TheX using our token system and CSS custom properties."},{id:"3",icon:e.jsx("span",{children:"♿"}),title:"Accessibility",content:"Every component meets WCAG 2.2 standards with full keyboard and screen reader support."},{id:"4",icon:e.jsx("span",{children:"⚡"}),title:"Performance",content:"Tree-shakeable exports ensure you only ship what you use. Zero runtime overhead."}]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-lg mx-auto p-6" style={{
    background: '#0a0a0f'
  }}>
      <Accordion items={faqItems} defaultOpen={['1']} />
    </div>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-lg mx-auto p-6" style={{
    background: '#0a0a0f'
  }}>
      <Accordion items={faqItems} multiple defaultOpen={['1', '2']} />
    </div>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-lg mx-auto p-6" style={{
    background: '#0a0a0f'
  }}>
      <Accordion items={faqItems} variant="separated" defaultOpen={['1']} />
    </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-lg mx-auto p-6" style={{
    background: '#0a0a0f'
  }}>
      <Accordion items={faqItems} variant="glass" defaultOpen={['1']} />
    </div>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-lg mx-auto p-6" style={{
    background: '#0a0a0f'
  }}>
      <Accordion variant="separated" defaultOpen={['1']} items={[{
      id: '1',
      icon: <span>🚀</span>,
      title: 'Getting Started',
      content: 'Begin your journey with TheX by installing the package and importing your first component.'
    }, {
      id: '2',
      icon: <span>🎨</span>,
      title: 'Theming',
      content: 'Customize every aspect of TheX using our token system and CSS custom properties.'
    }, {
      id: '3',
      icon: <span>♿</span>,
      title: 'Accessibility',
      content: 'Every component meets WCAG 2.2 standards with full keyboard and screen reader support.'
    }, {
      id: '4',
      icon: <span>⚡</span>,
      title: 'Performance',
      content: 'Tree-shakeable exports ensure you only ship what you use. Zero runtime overhead.'
    }]} />
    </div>
}`,...p.parameters?.docs?.source}}};const R=["Default","Multiple","Separated","Glass","WithIcons"];export{i as Default,c as Glass,d as Multiple,l as Separated,p as WithIcons,R as __namedExportsOrder,G as default};

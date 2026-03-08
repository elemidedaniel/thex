import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as x}from"./index-C46wqaXo.js";import{c as d,m}from"./cn-Cu1oTNr2.js";import"./iframe-BX1bmF3q.js";import"./preload-helper-PPVm8Dsz.js";const f=x("relative inline-flex items-center justify-center",{variants:{size:{xs:"w-4 h-4",sm:"w-6 h-6",md:"w-8 h-8",lg:"w-12 h-12",xl:"w-16 h-16"}},defaultVariants:{size:"md"}}),y={primary:"#22d3ee",white:"#ffffff",success:"#22c55e",error:"#f87171",warning:"#f59e0b"},v=({color:s})=>e.jsxs("svg",{className:"w-full h-full animate-spin",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:s,strokeOpacity:"0.15",strokeWidth:"3"}),e.jsx("path",{d:"M12 2a10 10 0 0 1 10 10",stroke:s,strokeWidth:"3",strokeLinecap:"round"})]}),h=({color:s})=>e.jsx("div",{className:"flex items-center gap-1",children:[0,1,2].map(a=>e.jsx(m.span,{className:"rounded-full w-2 h-2",style:{background:s},animate:{y:[0,-6,0],opacity:[.4,1,.4]},transition:{duration:.6,repeat:1/0,delay:a*.15,ease:"easeInOut"}},a))}),w=({color:s})=>e.jsxs("div",{className:"relative flex items-center justify-center w-full h-full",children:[e.jsx(m.span,{className:"absolute inline-flex rounded-full w-full h-full",style:{background:s},animate:{scale:[1,1.8],opacity:[.4,0]},transition:{duration:1,repeat:1/0,ease:"easeOut"}}),e.jsx("span",{className:"relative inline-flex rounded-full w-1/2 h-1/2",style:{background:s}})]}),r=({size:s,variant:a="ring",color:u="primary",label:p,className:g})=>{const c=y[u];return e.jsxs("div",{className:d("inline-flex flex-col items-center gap-2",g),children:[e.jsxs("div",{className:d(f({size:s})),children:[a==="ring"&&e.jsx(v,{color:c}),a==="dots"&&e.jsx(h,{color:c}),a==="pulse"&&e.jsx(w,{color:c})]}),p&&e.jsx("span",{className:"text-xs text-gray-500 font-medium",children:p})]})};r.displayName="Spinner";r.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{variant:{required:!1,tsType:{name:"union",raw:"'ring' | 'dots' | 'pulse'",elements:[{name:"literal",value:"'ring'"},{name:"literal",value:"'dots'"},{name:"literal",value:"'pulse'"}]},description:"",defaultValue:{value:"'ring'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'white' | 'success' | 'error' | 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'white'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}},composes:["VariantProps"]};const N={title:"TheX/Spinner",component:r,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#0a0a0f"}]},docs:{description:{component:`
# Spinner

Three loading styles — ring, dots, and pulse — with color variants and optional labels.

## AI Prompt
\`\`\`
Build a Spinner component with React, TypeScript, Tailwind CSS and Framer Motion.
Three variants: ring (SVG animated), dots (bouncing dots), pulse (radiating circle).
Colors: primary, white, success, error, warning.
Sizes: xs, sm, md, lg, xl.
Optional label below spinner.
Dark theme with cyan primary color.
\`\`\`
        `}}},argTypes:{variant:{control:"select",options:["ring","dots","pulse"]},size:{control:"select",options:["xs","sm","md","lg","xl"]},color:{control:"select",options:["primary","white","success","error","warning"]},label:{control:"text"}},tags:["autodocs"]},l={args:{variant:"ring",size:"md",color:"primary"}},i={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-8 p-6",style:{background:"#0a0a0f"},children:[e.jsx(r,{variant:"ring",size:"lg",label:"Ring"}),e.jsx(r,{variant:"dots",size:"lg",label:"Dots"}),e.jsx(r,{variant:"pulse",size:"lg",label:"Pulse"})]})},n={render:()=>e.jsxs("div",{className:"flex flex-wrap items-end gap-6 p-6",style:{background:"#0a0a0f"},children:[e.jsx(r,{size:"xs"}),e.jsx(r,{size:"sm"}),e.jsx(r,{size:"md"}),e.jsx(r,{size:"lg"}),e.jsx(r,{size:"xl"})]})},t={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-6 p-6",style:{background:"#0a0a0f"},children:[e.jsx(r,{color:"primary",size:"lg",label:"Primary"}),e.jsx(r,{color:"white",size:"lg",label:"White"}),e.jsx(r,{color:"success",size:"lg",label:"Success"}),e.jsx(r,{color:"error",size:"lg",label:"Error"}),e.jsx(r,{color:"warning",size:"lg",label:"Warning"})]})},o={args:{variant:"ring",size:"lg",color:"primary",label:"Loading data..."}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ring',
    size: 'md',
    color: 'primary'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-8 p-6" style={{
    background: '#0a0a0f'
  }}>
      <Spinner variant="ring" size="lg" label="Ring" />
      <Spinner variant="dots" size="lg" label="Dots" />
      <Spinner variant="pulse" size="lg" label="Pulse" />
    </div>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-end gap-6 p-6" style={{
    background: '#0a0a0f'
  }}>
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-6 p-6" style={{
    background: '#0a0a0f'
  }}>
      <Spinner color="primary" size="lg" label="Primary" />
      <Spinner color="white" size="lg" label="White" />
      <Spinner color="success" size="lg" label="Success" />
      <Spinner color="error" size="lg" label="Error" />
      <Spinner color="warning" size="lg" label="Warning" />
    </div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ring',
    size: 'lg',
    color: 'primary',
    label: 'Loading data...'
  }
}`,...o.parameters?.docs?.source}}};const T=["Default","AllVariants","AllSizes","AllColors","WithLabel"];export{t as AllColors,n as AllSizes,i as AllVariants,l as Default,o as WithLabel,T as __namedExportsOrder,N as default};

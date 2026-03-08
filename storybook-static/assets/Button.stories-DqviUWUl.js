import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as a}from"./Button-CjDRLm9K.js";import"./iframe-BX1bmF3q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C46wqaXo.js";import"./cn-Cu1oTNr2.js";const x={title:"TheX/Button",component:a,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#0a0a0f"}]},docs:{description:{component:`
# Button

The foundation of every interaction in TheX. Six variants, five sizes, loading states, icon support, and spring animations baked in.

## AI Prompt
\`\`\`
Build a Button component using React, TypeScript, Tailwind CSS, Framer Motion and CVA.
Variants: primary, secondary, ghost, danger, success, glass.
Sizes: xs, sm, md, lg, xl.
Include loading state with spinner, leftIcon, rightIcon props.
Add whileTap scale and whileHover y animation.
Dark theme with cyan accent color.
\`\`\`
        `}}},argTypes:{variant:{control:"select",options:["primary","secondary","ghost","danger","success","glass"]},size:{control:"select",options:["xs","sm","md","lg","xl"]},loading:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},children:{control:"text"}},tags:["autodocs"]},r={args:{children:"Click me"}},n={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-3 p-6",style:{background:"#0a0a0f"},children:[e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"ghost",children:"Ghost"}),e.jsx(a,{variant:"danger",children:"Danger"}),e.jsx(a,{variant:"success",children:"Success"}),e.jsx(a,{variant:"glass",children:"Glass"})]})},s={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3 p-6",style:{background:"#0a0a0f"},children:[e.jsx(a,{size:"xs",children:"Extra Small"}),e.jsx(a,{size:"sm",children:"Small"}),e.jsx(a,{size:"md",children:"Medium"}),e.jsx(a,{size:"lg",children:"Large"}),e.jsx(a,{size:"xl",children:"Extra Large"})]})},t={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-3 p-6",style:{background:"#0a0a0f"},children:[e.jsx(a,{leftIcon:e.jsx("span",{children:"🚀"}),children:"Launch"}),e.jsx(a,{rightIcon:e.jsx("span",{children:"→"}),children:"Continue"}),e.jsx(a,{leftIcon:e.jsx("span",{children:"✓"}),variant:"success",children:"Confirmed"}),e.jsx(a,{leftIcon:e.jsx("span",{children:"✕"}),variant:"danger",children:"Delete"})]})},o={args:{children:"Loading...",loading:!0}},d={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-3 p-6",style:{background:"#0a0a0f"},children:[e.jsx(a,{rounded:"sm",children:"Rounded SM"}),e.jsx(a,{rounded:"default",children:"Rounded Default"}),e.jsx(a,{rounded:"full",children:"Rounded Full"})]})},l={render:()=>e.jsx("div",{className:"w-80 p-6",style:{background:"#0a0a0f"},children:e.jsx(a,{fullWidth:!0,children:"Full Width Button"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Click me'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3 p-6" style={{
    background: '#0a0a0f'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="success">Success</Button>
      <Button variant="glass">Glass</Button>
    </div>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-3 p-6" style={{
    background: '#0a0a0f'
  }}>
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3 p-6" style={{
    background: '#0a0a0f'
  }}>
      <Button leftIcon={<span>🚀</span>}>Launch</Button>
      <Button rightIcon={<span>→</span>}>Continue</Button>
      <Button leftIcon={<span>✓</span>} variant="success">Confirmed</Button>
      <Button leftIcon={<span>✕</span>} variant="danger">Delete</Button>
    </div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Loading...',
    loading: true
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3 p-6" style={{
    background: '#0a0a0f'
  }}>
      <Button rounded="sm">Rounded SM</Button>
      <Button rounded="default">Rounded Default</Button>
      <Button rounded="full">Rounded Full</Button>
    </div>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80 p-6" style={{
    background: '#0a0a0f'
  }}>
      <Button fullWidth>Full Width Button</Button>
    </div>
}`,...l.parameters?.docs?.source}}};const h=["Default","AllVariants","AllSizes","WithIcons","Loading","Rounded","FullWidth"];export{s as AllSizes,n as AllVariants,r as Default,l as FullWidth,o as Loading,d as Rounded,t as WithIcons,h as __namedExportsOrder,x as default};

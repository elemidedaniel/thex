import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./iframe-BX1bmF3q.js";import{m as V,c as _}from"./cn-Cu1oTNr2.js";import{A as C}from"./index-CDD_YbyL.js";import{B as r}from"./Button-CjDRLm9K.js";import{B as z}from"./Badge-DUqPitaB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C46wqaXo.js";const F={dark:"bg-[#1a1a2e] border border-white/10 text-gray-200",light:"bg-white border border-gray-200 text-gray-800",primary:"bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"},K={top:{x:0,y:8},bottom:{x:0,y:-8},left:{x:8,y:0},right:{x:-8,y:0}},a=({content:i,children:R,placement:h="top",delay:S=100,variant:D="dark",className:E,maxWidth:P=200,disabled:q})=>{const[x,v]=o.useState(!1),[b,A]=o.useState({top:0,left:0}),f=o.useRef(null),w=o.useRef(null),s=o.useRef(null),T=()=>{q||(s.current=setTimeout(()=>v(!0),S))},k=()=>{s.current&&clearTimeout(s.current),v(!1)};o.useEffect(()=>{if(!x||!f.current)return;const t=f.current.getBoundingClientRect(),B=w.current?.getBoundingClientRect(),g=B?.width??0,y=B?.height??0,c=8;let n=0,l=0;switch(h){case"top":n=t.top-y-c+window.scrollY,l=t.left+t.width/2-g/2+window.scrollX;break;case"bottom":n=t.bottom+c+window.scrollY,l=t.left+t.width/2-g/2+window.scrollX;break;case"left":n=t.top+t.height/2-y/2+window.scrollY,l=t.left-g-c+window.scrollX;break;case"right":n=t.top+t.height/2-y/2+window.scrollY,l=t.right+c+window.scrollX;break}A({top:n,left:l})},[x,h]),o.useEffect(()=>()=>{s.current&&clearTimeout(s.current)},[]);const{x:j,y:N}=K[h];return e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:f,className:"inline-flex",onMouseEnter:T,onMouseLeave:k,onFocus:T,onBlur:k,children:R}),e.jsx(C,{children:x&&e.jsx(V.div,{ref:w,role:"tooltip",className:_("fixed z-[9999] px-3 py-2 rounded-xl text-xs font-medium","shadow-[0_8px_24px_rgba(0,0,0,0.4)] pointer-events-none",F[D],E),style:{top:b.top,left:b.left,maxWidth:P},initial:{opacity:0,scale:.9,x:j,y:N},animate:{opacity:1,scale:1,x:0,y:0},exit:{opacity:0,scale:.9,x:j,y:N},transition:{duration:.15,ease:[.16,1,.3,1]},children:i})})]})};a.displayName="Tooltip";a.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},delay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'dark' | 'light' | 'primary'",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"},{name:"literal",value:"'primary'"}]},description:"",defaultValue:{value:"'dark'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},maxWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const $={title:"TheX/Tooltip",component:a,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#0a0a0f"}]},docs:{description:{component:`
# Tooltip

Smart-positioned tooltips with spring animations, three variants, four placements, and rich content support.

## AI Prompt
\`\`\`
Build a Tooltip component using React, TypeScript, Tailwind CSS and Framer Motion.
Placements: top, bottom, left, right with dynamic positioning.
Variants: dark, light, primary.
Show/hide delay support. Keyboard accessible (focus/blur).
Spring scale animation. Arrow indicator per placement.
Rich content support. Dark theme.
\`\`\`
        `}}},tags:["autodocs"]},d={render:()=>e.jsx("div",{className:"grid grid-cols-2 gap-8 p-16",style:{background:"#0a0a0f"},children:["top","bottom","left","right"].map(i=>e.jsx("div",{className:"flex justify-center",children:e.jsx(a,{content:`Tooltip on ${i}`,placement:i,children:e.jsx(r,{variant:"secondary",size:"sm",children:i})})},i))})},p={render:()=>e.jsxs("div",{className:"flex gap-6 p-12",style:{background:"#0a0a0f"},children:[e.jsx(a,{content:"Dark tooltip",variant:"dark",children:e.jsx(r,{variant:"secondary",children:"Dark"})}),e.jsx(a,{content:"Light tooltip",variant:"light",children:e.jsx(r,{variant:"secondary",children:"Light"})}),e.jsx(a,{content:"Primary tooltip",variant:"primary",children:e.jsx(r,{variant:"primary",children:"Primary"})})]})},m={render:()=>e.jsxs("div",{className:"flex gap-6 p-12",style:{background:"#0a0a0f"},children:[e.jsx(a,{content:e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("p",{className:"font-bold text-white",children:"Daniel Elemide"}),e.jsx("p",{className:"text-gray-400 text-xs",children:"Full Stack Developer"}),e.jsx(z,{variant:"success",dot:!0,pulse:!0,size:"sm",children:"Online"})]}),maxWidth:180,children:e.jsx(r,{variant:"secondary",children:"Hover for profile"})}),e.jsx(a,{content:e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("p",{className:"font-bold text-white",children:"Keyboard shortcut"}),e.jsxs("div",{className:"flex gap-1 mt-1",children:[e.jsx("kbd",{className:"px-1.5 py-0.5 bg-white/10 rounded text-xs",children:"⌘"}),e.jsx("kbd",{className:"px-1.5 py-0.5 bg-white/10 rounded text-xs",children:"K"})]})]}),maxWidth:160,children:e.jsx(r,{variant:"primary",children:"Rich tooltip"})})]})},u={render:()=>e.jsxs("div",{className:"flex gap-6 p-12",style:{background:"#0a0a0f"},children:[e.jsx(a,{content:"This works!",disabled:!1,children:e.jsx(r,{variant:"primary",children:"Enabled"})}),e.jsx(a,{content:"This is disabled",disabled:!0,children:e.jsx(r,{variant:"ghost",children:"Disabled tooltip"})})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-8 p-16" style={{
    background: '#0a0a0f'
  }}>
      {(['top', 'bottom', 'left', 'right'] as const).map(placement => <div key={placement} className="flex justify-center">
          <Tooltip content={\`Tooltip on \${placement}\`} placement={placement}>
            <Button variant="secondary" size="sm">
              {placement}
            </Button>
          </Tooltip>
        </div>)}
    </div>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6 p-12" style={{
    background: '#0a0a0f'
  }}>
      <Tooltip content="Dark tooltip" variant="dark">
        <Button variant="secondary">Dark</Button>
      </Tooltip>
      <Tooltip content="Light tooltip" variant="light">
        <Button variant="secondary">Light</Button>
      </Tooltip>
      <Tooltip content="Primary tooltip" variant="primary">
        <Button variant="primary">Primary</Button>
      </Tooltip>
    </div>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6 p-12" style={{
    background: '#0a0a0f'
  }}>
      <Tooltip content={<div className="flex flex-col gap-1">
            <p className="font-bold text-white">Daniel Elemide</p>
            <p className="text-gray-400 text-xs">Full Stack Developer</p>
            <Badge variant="success" dot pulse size="sm">Online</Badge>
          </div>} maxWidth={180}>
        <Button variant="secondary">Hover for profile</Button>
      </Tooltip>

      <Tooltip content={<div className="flex flex-col gap-1">
            <p className="font-bold text-white">Keyboard shortcut</p>
            <div className="flex gap-1 mt-1">
              <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-xs">⌘</kbd>
              <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-xs">K</kbd>
            </div>
          </div>} maxWidth={160}>
        <Button variant="primary">Rich tooltip</Button>
      </Tooltip>
    </div>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6 p-12" style={{
    background: '#0a0a0f'
  }}>
      <Tooltip content="This works!" disabled={false}>
        <Button variant="primary">Enabled</Button>
      </Tooltip>
      <Tooltip content="This is disabled" disabled>
        <Button variant="ghost">Disabled tooltip</Button>
      </Tooltip>
    </div>
}`,...u.parameters?.docs?.source}}};const G=["AllPlacements","AllVariants","RichContent","Disabled"];export{d as AllPlacements,p as AllVariants,u as Disabled,m as RichContent,G as __namedExportsOrder,$ as default};

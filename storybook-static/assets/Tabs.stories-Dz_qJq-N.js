import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-BX1bmF3q.js";import{m as w,c as d}from"./cn-Cu1oTNr2.js";import{A as I}from"./index-CDD_YbyL.js";import{B as y}from"./Badge-DUqPitaB.js";import{C as P}from"./Card-CY8ycHlp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C46wqaXo.js";const i=({tabs:s,defaultTab:j,variant:t="underline",orientation:N="horizontal",onChange:A,className:k})=>{const[l,C]=p.useState(j||s[0]?.id),[o,S]=p.useState({left:0,width:0,top:0,height:0}),T=p.useRef({}),c=N==="vertical";p.useEffect(()=>{const a=T.current[l];if(!a)return;const r=a.parentElement;if(!r)return;const u=r.getBoundingClientRect(),m=a.getBoundingClientRect();S({left:m.left-u.left,width:m.width,top:m.top-u.top,height:m.height})},[l,t]);const z=a=>{C(a),A?.(a)},B=s.find(a=>a.id===l);return e.jsxs("div",{className:d(c?"flex gap-4":"flex flex-col",k),children:[e.jsxs("div",{className:d("relative",c?"flex flex-col flex-shrink-0 w-48":"flex",t==="underline"&&!c&&"border-b border-white/8",t==="card"&&"bg-white/3 border border-white/8 rounded-2xl p-1",t==="pill"&&"bg-white/3 border border-white/8 rounded-full p-1"),children:[(t==="pill"||t==="card")&&e.jsx(w.div,{className:d("absolute pointer-events-none z-0",t==="pill"&&"bg-white/10 border border-white/10 rounded-full",t==="card"&&"bg-white/8 border border-white/8 rounded-xl"),animate:{left:o.left,top:o.top,width:o.width,height:o.height},transition:{duration:.2,ease:[.16,1,.3,1]}}),s.map(a=>{const r=a.id===l;return e.jsxs("button",{ref:u=>{T.current[a.id]=u},onClick:()=>!a.disabled&&z(a.id),disabled:a.disabled,className:d("relative z-10 flex items-center gap-2 font-semibold text-sm","transition-colors duration-150 select-none","disabled:opacity-40 disabled:cursor-not-allowed",c?"px-4 py-2.5 rounded-xl text-left w-full":"px-4 py-2.5",t==="underline"&&["text-gray-500 hover:text-white",r&&"text-white"],t==="pill"&&["text-gray-500 hover:text-white rounded-full",r&&"text-white"],t==="card"&&["text-gray-500 hover:text-white rounded-xl",r&&"text-white"]),children:[a.icon&&e.jsx("span",{className:d("transition-colors",r?"text-cyan-400":"text-gray-600"),children:a.icon}),a.label,a.badge&&e.jsx("span",{className:"ml-1",children:a.badge}),t==="underline"&&r&&e.jsx(w.div,{layoutId:"underline",className:"absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full",transition:{duration:.2,ease:[.16,1,.3,1]}})]},a.id)})]}),e.jsx("div",{className:"flex-1",children:e.jsx(I,{mode:"wait",children:e.jsx(w.div,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},exit:{opacity:0,y:-6},transition:{duration:.2,ease:[.16,1,.3,1]},children:B?.content},l)})})]})};i.displayName="Tabs";i.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"Tab"}],raw:"Tab[]"},description:""},defaultTab:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'underline' | 'pill' | 'card'",elements:[{name:"literal",value:"'underline'"},{name:"literal",value:"'pill'"},{name:"literal",value:"'card'"}]},description:"",defaultValue:{value:"'underline'",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const W={title:"TheX/Tabs",component:i,parameters:{layout:"padded",backgrounds:{default:"dark",values:[{name:"dark",value:"#0a0a0f"}]},docs:{description:{component:`
# Tabs

Animated tabs with underline, pill, and card variants. Supports icons, badges, vertical orientation, and smooth content transitions.

## AI Prompt
\`\`\`
Build a Tabs component using React, TypeScript, Tailwind CSS and Framer Motion.
Variants: underline (animated indicator), pill (sliding background), card (box background).
Horizontal and vertical orientation.
Icon and badge support per tab. Disabled tab support.
AnimatePresence for content transitions.
Dark theme with cyan accent.
\`\`\`
        `}}},tags:["autodocs"]},n=s=>e.jsx("div",{className:"pt-4",children:e.jsx(P,{variant:"flat",children:e.jsxs("p",{className:"text-gray-400 text-sm leading-relaxed",children:["This is the ",e.jsx("span",{className:"text-cyan-400 font-semibold",children:s})," tab content. Each tab animates in smoothly when selected."]})})}),f=[{id:"overview",label:"Overview",icon:e.jsx("span",{children:"📊"}),content:n("Overview")},{id:"analytics",label:"Analytics",icon:e.jsx("span",{children:"📈"}),content:n("Analytics"),badge:e.jsx(y,{variant:"primary",size:"sm",children:"New"})},{id:"settings",label:"Settings",icon:e.jsx("span",{children:"⚙️"}),content:n("Settings")},{id:"billing",label:"Billing",icon:e.jsx("span",{children:"💳"}),content:n("Billing"),disabled:!0}],b={render:()=>e.jsx("div",{className:"max-w-lg p-6",style:{background:"#0a0a0f"},children:e.jsx(i,{tabs:f,variant:"underline",defaultTab:"overview"})})},g={render:()=>e.jsx("div",{className:"max-w-lg p-6",style:{background:"#0a0a0f"},children:e.jsx(i,{tabs:f,variant:"pill",defaultTab:"overview"})})},v={render:()=>e.jsx("div",{className:"max-w-lg p-6",style:{background:"#0a0a0f"},children:e.jsx(i,{tabs:f,variant:"card",defaultTab:"overview"})})},h={render:()=>e.jsx("div",{className:"max-w-2xl p-6",style:{background:"#0a0a0f"},children:e.jsx(i,{tabs:f,variant:"card",orientation:"vertical",defaultTab:"overview"})})},x={render:()=>e.jsx("div",{className:"max-w-lg p-6",style:{background:"#0a0a0f"},children:e.jsx(i,{variant:"underline",defaultTab:"tab1",tabs:[{id:"tab1",label:"All",content:n("All")},{id:"tab2",label:"Active",content:n("Active"),badge:e.jsx(y,{variant:"success",size:"sm",children:"12"})},{id:"tab3",label:"Pending",content:n("Pending"),badge:e.jsx(y,{variant:"warning",size:"sm",children:"3"})},{id:"tab4",label:"Archived",content:n("Archived")}]})})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-lg p-6" style={{
    background: '#0a0a0f'
  }}>
      <Tabs tabs={defaultTabs} variant="underline" defaultTab="overview" />
    </div>
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-lg p-6" style={{
    background: '#0a0a0f'
  }}>
      <Tabs tabs={defaultTabs} variant="pill" defaultTab="overview" />
    </div>
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-lg p-6" style={{
    background: '#0a0a0f'
  }}>
      <Tabs tabs={defaultTabs} variant="card" defaultTab="overview" />
    </div>
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-2xl p-6" style={{
    background: '#0a0a0f'
  }}>
      <Tabs tabs={defaultTabs} variant="card" orientation="vertical" defaultTab="overview" />
    </div>
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-lg p-6" style={{
    background: '#0a0a0f'
  }}>
      <Tabs variant="underline" defaultTab="tab1" tabs={[{
      id: 'tab1',
      label: 'All',
      content: tabContent('All')
    }, {
      id: 'tab2',
      label: 'Active',
      content: tabContent('Active'),
      badge: <Badge variant="success" size="sm">12</Badge>
    }, {
      id: 'tab3',
      label: 'Pending',
      content: tabContent('Pending'),
      badge: <Badge variant="warning" size="sm">3</Badge>
    }, {
      id: 'tab4',
      label: 'Archived',
      content: tabContent('Archived')
    }]} />
    </div>
}`,...x.parameters?.docs?.source}}};const F=["Underline","Pill","CardVariant","Vertical","WithoutIcons"];export{v as CardVariant,g as Pill,b as Underline,h as Vertical,x as WithoutIcons,F as __namedExportsOrder,W as default};

import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as t}from"./Card-CY8ycHlp.js";import{B as n}from"./Badge-DUqPitaB.js";import{B as o}from"./Button-CjDRLm9K.js";import{A as c}from"./Avatar-DBXzDxFp.js";import"./index-C46wqaXo.js";import"./cn-Cu1oTNr2.js";import"./iframe-BX1bmF3q.js";import"./preload-helper-PPVm8Dsz.js";const b={title:"TheX/Card",component:t,parameters:{layout:"padded",backgrounds:{default:"dark",values:[{name:"dark",value:"#0a0a0f"}]},docs:{description:{component:`
# Card

A versatile card component with image support, hover lift effect, glow variants, and flexible slots.

## AI Prompt
\`\`\`
Build a Card component using React, TypeScript, Tailwind CSS and Framer Motion.
Variants: flat, glass, neu, glow.
Sizes: sm, md, lg.
Support image with zoom on hover, header, body, footer slots.
Badge overlay support. Hover lift animation with glow overlay.
Custom glow color prop. Dark theme.
\`\`\`
        `}}},tags:["autodocs"]},s={render:()=>e.jsx("div",{className:"grid grid-cols-2 gap-4 p-6",style:{background:"#0a0a0f"},children:["flat","glass","neu","glow"].map(a=>e.jsx(t,{variant:a,hoverable:!0,header:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-white font-bold capitalize",children:a}),e.jsx(n,{variant:"primary",size:"sm",children:a})]}),footer:e.jsx(o,{size:"sm",variant:"ghost",fullWidth:!0,children:"Learn more →"}),children:e.jsxs("p",{className:"text-gray-500 text-sm leading-relaxed",children:["The ",a," variant of TheX Card component. Hover to see the lift effect."]})},a))})},r={render:()=>e.jsx("div",{className:"p-6 flex justify-center",style:{background:"#0a0a0f"},children:e.jsx(t,{variant:"flat",hoverable:!0,className:"w-72",badge:e.jsx(n,{variant:"success",dot:!0,pulse:!0,children:"Online"}),footer:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(o,{size:"sm",variant:"primary",fullWidth:!0,children:"Follow"}),e.jsx(o,{size:"sm",variant:"ghost",fullWidth:!0,children:"Message"})]}),children:e.jsxs("div",{className:"flex flex-col items-center text-center gap-3",children:[e.jsx(c,{name:"Daniel Elemide",size:"xl",status:"online"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white font-black text-lg",children:"Daniel Elemide"}),e.jsx("p",{className:"text-gray-500 text-sm",children:"Full Stack Developer"}),e.jsx("p",{className:"text-gray-600 text-xs mt-1",children:"Lagos, Nigeria 🇳🇬"})]}),e.jsxs("div",{className:"flex gap-6 pt-2 border-t border-white/5 w-full justify-center",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-white font-bold",children:"24"}),e.jsx("p",{className:"text-gray-600 text-xs",children:"Projects"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-white font-bold",children:"3.2k"}),e.jsx("p",{className:"text-gray-600 text-xs",children:"Stars"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-white font-bold",children:"180"}),e.jsx("p",{className:"text-gray-600 text-xs",children:"Followers"})]})]})]})})})},l={render:()=>e.jsx("div",{className:"grid grid-cols-2 gap-4 p-6",style:{background:"#0a0a0f"},children:[{label:"Total Revenue",value:"$48,294",change:"+12.5%",color:"text-green-400",glow:"rgba(34,197,94,0.06)"},{label:"Active Users",value:"2,841",change:"+8.2%",color:"text-cyan-400",glow:"rgba(34,211,238,0.06)"},{label:"Conversion",value:"3.24%",change:"-0.4%",color:"text-red-400",glow:"rgba(248,113,113,0.06)"},{label:"Avg. Session",value:"4m 32s",change:"+1.1%",color:"text-amber-400",glow:"rgba(245,158,11,0.06)"}].map(a=>e.jsxs(t,{variant:"flat",hoverable:!0,glowColor:a.glow,children:[e.jsx("p",{className:"text-gray-500 text-xs font-semibold uppercase tracking-wider",children:a.label}),e.jsx("p",{className:"text-white text-2xl font-black mt-1",children:a.value}),e.jsxs("p",{className:`text-xs font-semibold mt-1 ${a.color}`,children:[a.change," this month"]})]},a.label))})},i={render:()=>e.jsx("div",{className:"p-6 flex justify-center",style:{background:"#0a0a0f"},children:e.jsxs(t,{variant:"flat",hoverable:!0,className:"w-72",image:"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop",imageAlt:"Crypto",badge:e.jsx(n,{variant:"primary",size:"sm",children:"Featured"}),footer:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-gray-500 text-xs",children:"5 min read"}),e.jsx(o,{size:"sm",variant:"ghost",children:"Read →"})]}),children:[e.jsx("h3",{className:"text-white font-bold text-base",children:"The Future of DeFi in 2025"}),e.jsx("p",{className:"text-gray-500 text-sm mt-1 leading-relaxed",children:"How decentralized finance is reshaping the global economy."})]})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-4 p-6" style={{
    background: '#0a0a0f'
  }}>
      {(['flat', 'glass', 'neu', 'glow'] as const).map(variant => <Card key={variant} variant={variant} hoverable header={<div className="flex items-center justify-between">
              <h3 className="text-white font-bold capitalize">{variant}</h3>
              <Badge variant="primary" size="sm">{variant}</Badge>
            </div>} footer={<Button size="sm" variant="ghost" fullWidth>
              Learn more →
            </Button>}>
          <p className="text-gray-500 text-sm leading-relaxed">
            The {variant} variant of TheX Card component. Hover to see the lift effect.
          </p>
        </Card>)}
    </div>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-6 flex justify-center" style={{
    background: '#0a0a0f'
  }}>
      <Card variant="flat" hoverable className="w-72" badge={<Badge variant="success" dot pulse>Online</Badge>} footer={<div className="flex gap-2">
            <Button size="sm" variant="primary" fullWidth>Follow</Button>
            <Button size="sm" variant="ghost" fullWidth>Message</Button>
          </div>}>
        <div className="flex flex-col items-center text-center gap-3">
          <Avatar name="Daniel Elemide" size="xl" status="online" />
          <div>
            <h3 className="text-white font-black text-lg">Daniel Elemide</h3>
            <p className="text-gray-500 text-sm">Full Stack Developer</p>
            <p className="text-gray-600 text-xs mt-1">Lagos, Nigeria 🇳🇬</p>
          </div>
          <div className="flex gap-6 pt-2 border-t border-white/5 w-full justify-center">
            <div className="text-center">
              <p className="text-white font-bold">24</p>
              <p className="text-gray-600 text-xs">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-white font-bold">3.2k</p>
              <p className="text-gray-600 text-xs">Stars</p>
            </div>
            <div className="text-center">
              <p className="text-white font-bold">180</p>
              <p className="text-gray-600 text-xs">Followers</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-4 p-6" style={{
    background: '#0a0a0f'
  }}>
      {[{
      label: 'Total Revenue',
      value: '$48,294',
      change: '+12.5%',
      color: 'text-green-400',
      glow: 'rgba(34,197,94,0.06)'
    }, {
      label: 'Active Users',
      value: '2,841',
      change: '+8.2%',
      color: 'text-cyan-400',
      glow: 'rgba(34,211,238,0.06)'
    }, {
      label: 'Conversion',
      value: '3.24%',
      change: '-0.4%',
      color: 'text-red-400',
      glow: 'rgba(248,113,113,0.06)'
    }, {
      label: 'Avg. Session',
      value: '4m 32s',
      change: '+1.1%',
      color: 'text-amber-400',
      glow: 'rgba(245,158,11,0.06)'
    }].map(stat => <Card key={stat.label} variant="flat" hoverable glowColor={stat.glow}>
          <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
            {stat.label}
          </p>
          <p className="text-white text-2xl font-black mt-1">{stat.value}</p>
          <p className={\`text-xs font-semibold mt-1 \${stat.color}\`}>
            {stat.change} this month
          </p>
        </Card>)}
    </div>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-6 flex justify-center" style={{
    background: '#0a0a0f'
  }}>
      <Card variant="flat" hoverable className="w-72" image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop" imageAlt="Crypto" badge={<Badge variant="primary" size="sm">Featured</Badge>} footer={<div className="flex items-center justify-between">
            <span className="text-gray-500 text-xs">5 min read</span>
            <Button size="sm" variant="ghost">Read →</Button>
          </div>}>
        <h3 className="text-white font-bold text-base">
          The Future of DeFi in 2025
        </h3>
        <p className="text-gray-500 text-sm mt-1 leading-relaxed">
          How decentralized finance is reshaping the global economy.
        </p>
      </Card>
    </div>
}`,...i.parameters?.docs?.source}}};const N=["AllVariants","ProfileCard","StatCards","WithImage"];export{s as AllVariants,r as ProfileCard,l as StatCards,i as WithImage,N as __namedExportsOrder,b as default};

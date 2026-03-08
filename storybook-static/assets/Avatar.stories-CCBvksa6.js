import{j as a}from"./jsx-runtime-u17CrQMm.js";import{A as e,a as l}from"./Avatar-DBXzDxFp.js";import"./iframe-BX1bmF3q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C46wqaXo.js";import"./cn-Cu1oTNr2.js";const g={title:"TheX/Avatar",component:e,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#0a0a0f"}]},docs:{description:{component:`
# Avatar

User avatars with image support, initials fallback with auto-generated gradients, status indicators, and group stacking.

## AI Prompt
\`\`\`
Build an Avatar component using React, TypeScript, Tailwind CSS and Framer Motion.
Support image src with error fallback to initials.
Auto-generate gradient background from name.
Status indicator: online, offline, away, busy.
Sizes: xs, sm, md, lg, xl, 2xl.
AvatarGroup component with overlap and overflow count.
Dark theme.
\`\`\`
        `}}},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl","2xl"]},variant:{control:"select",options:["flat","primary","glass"]},status:{control:"select",options:["online","offline","away","busy"]}},tags:["autodocs"]},s={args:{name:"Daniel Elemide"}},r={render:()=>a.jsxs("div",{className:"flex flex-wrap items-end gap-4 p-6",style:{background:"#0a0a0f"},children:[a.jsx(e,{name:"Daniel Elemide",size:"xs"}),a.jsx(e,{name:"Daniel Elemide",size:"sm"}),a.jsx(e,{name:"Daniel Elemide",size:"md"}),a.jsx(e,{name:"Daniel Elemide",size:"lg"}),a.jsx(e,{name:"Daniel Elemide",size:"xl"}),a.jsx(e,{name:"Daniel Elemide",size:"2xl"})]})},n={render:()=>a.jsxs("div",{className:"flex flex-wrap gap-4 p-6",style:{background:"#0a0a0f"},children:[a.jsx(e,{name:"Daniel E",status:"online",size:"lg"}),a.jsx(e,{name:"Sarah K",status:"offline",size:"lg"}),a.jsx(e,{name:"John D",status:"away",size:"lg"}),a.jsx(e,{name:"Jane S",status:"busy",size:"lg"})]})},i={render:()=>a.jsxs("div",{className:"flex flex-wrap gap-4 p-6",style:{background:"#0a0a0f"},children:[a.jsx(e,{name:"Daniel Elemide",size:"lg"}),a.jsx(e,{name:"Sarah Khan",size:"lg"}),a.jsx(e,{name:"John Doe",size:"lg"}),a.jsx(e,{name:"Emma Wilson",size:"lg"}),a.jsx(e,{name:"Michael Brown",size:"lg"}),a.jsx(e,{name:"Olivia Davis",size:"lg"})]})},t={render:()=>a.jsxs("div",{className:"flex flex-col gap-6 p-6",style:{background:"#0a0a0f"},children:[a.jsx(l,{size:"md",avatars:[{name:"Daniel E"},{name:"Sarah K"},{name:"John D"},{name:"Emma W"},{name:"Mike B"},{name:"Olivia D"}],max:4}),a.jsx(l,{size:"lg",avatars:[{name:"Daniel E",status:"online"},{name:"Sarah K",status:"away"},{name:"John D",status:"busy"},{name:"Emma W",status:"offline"}],max:3})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Daniel Elemide'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-end gap-4 p-6" style={{
    background: '#0a0a0f'
  }}>
      <Avatar name="Daniel Elemide" size="xs" />
      <Avatar name="Daniel Elemide" size="sm" />
      <Avatar name="Daniel Elemide" size="md" />
      <Avatar name="Daniel Elemide" size="lg" />
      <Avatar name="Daniel Elemide" size="xl" />
      <Avatar name="Daniel Elemide" size="2xl" />
    </div>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4 p-6" style={{
    background: '#0a0a0f'
  }}>
      <Avatar name="Daniel E" status="online" size="lg" />
      <Avatar name="Sarah K" status="offline" size="lg" />
      <Avatar name="John D" status="away" size="lg" />
      <Avatar name="Jane S" status="busy" size="lg" />
    </div>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4 p-6" style={{
    background: '#0a0a0f'
  }}>
      <Avatar name="Daniel Elemide" size="lg" />
      <Avatar name="Sarah Khan" size="lg" />
      <Avatar name="John Doe" size="lg" />
      <Avatar name="Emma Wilson" size="lg" />
      <Avatar name="Michael Brown" size="lg" />
      <Avatar name="Olivia Davis" size="lg" />
    </div>
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 p-6" style={{
    background: '#0a0a0f'
  }}>
      <AvatarGroup size="md" avatars={[{
      name: 'Daniel E'
    }, {
      name: 'Sarah K'
    }, {
      name: 'John D'
    }, {
      name: 'Emma W'
    }, {
      name: 'Mike B'
    }, {
      name: 'Olivia D'
    }]} max={4} />
      <AvatarGroup size="lg" avatars={[{
      name: 'Daniel E',
      status: 'online'
    }, {
      name: 'Sarah K',
      status: 'away'
    }, {
      name: 'John D',
      status: 'busy'
    }, {
      name: 'Emma W',
      status: 'offline'
    }]} max={3} />
    </div>
}`,...t.parameters?.docs?.source}}};const x=["Default","AllSizes","WithStatus","InitialsGradients","Group"];export{r as AllSizes,s as Default,t as Group,i as InitialsGradients,n as WithStatus,x as __namedExportsOrder,g as default};

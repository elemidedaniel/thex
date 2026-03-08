import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as a}from"./Input-Dhx7yJC5.js";import"./iframe-BX1bmF3q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C46wqaXo.js";import"./cn-Cu1oTNr2.js";import"./index-CDD_YbyL.js";const h={title:"TheX/Input",component:a,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#0a0a0f"}]},docs:{description:{component:`
# Input

A fully featured input component with floating labels, icons, validation states, and password toggle.

## AI Prompt
\`\`\`
Build an Input component using React, TypeScript, Tailwind CSS, Framer Motion and CVA.
Support floating label animation, left and right icons.
States: default, error, success with animated hint messages.
Password type with show/hide toggle.
Sizes: sm, md, lg.
Variants: flat, glass.
Dark theme with cyan focus ring.
\`\`\`
        `}}},argTypes:{size:{control:"select",options:["sm","md","lg"]},variant:{control:"select",options:["flat","glass"]},label:{control:"text"},hint:{control:"text"},error:{control:"text"},success:{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"},floatingLabel:{control:"boolean"}},tags:["autodocs"]},l={args:{placeholder:"Enter text...",label:"Email"},decorators:[c=>e.jsx("div",{className:"w-80 p-6",style:{background:"#0a0a0f"},children:e.jsx(c,{})})]},s={render:()=>e.jsxs("div",{className:"w-80 flex flex-col gap-4 p-6",style:{background:"#0a0a0f"},children:[e.jsx(a,{label:"Default",placeholder:"Enter text...",hint:"This is a hint message"}),e.jsx(a,{label:"Error",placeholder:"Enter email...",error:"Please enter a valid email address"}),e.jsx(a,{label:"Success",placeholder:"Enter username...",success:"Username is available!"}),e.jsx(a,{label:"Disabled",placeholder:"Disabled input",disabled:!0})]})},r={render:()=>e.jsxs("div",{className:"w-80 flex flex-col gap-4 p-6",style:{background:"#0a0a0f"},children:[e.jsx(a,{label:"Search",placeholder:"Search anything...",leftIcon:e.jsx("span",{children:"🔍"})}),e.jsx(a,{label:"Email",placeholder:"you@example.com",leftIcon:e.jsx("span",{children:"✉️"})}),e.jsx(a,{label:"Website",placeholder:"https://",rightIcon:e.jsx("span",{children:"🔗"})})]})},t={render:()=>e.jsxs("div",{className:"w-80 flex flex-col gap-4 p-6",style:{background:"#0a0a0f"},children:[e.jsx(a,{floatingLabel:!0,label:"Email Address",type:"email"}),e.jsx(a,{floatingLabel:!0,label:"Password",type:"password"}),e.jsx(a,{floatingLabel:!0,label:"Full Name"})]})},o={args:{type:"password",label:"Password",placeholder:"Enter password..."},decorators:[c=>e.jsx("div",{className:"w-80 p-6",style:{background:"#0a0a0f"},children:e.jsx(c,{})})]},n={render:()=>e.jsxs("div",{className:"w-80 flex flex-col gap-4 p-6",style:{background:"#0a0a0f"},children:[e.jsx(a,{size:"sm",placeholder:"Small input",label:"Small"}),e.jsx(a,{size:"md",placeholder:"Medium input",label:"Medium"}),e.jsx(a,{size:"lg",placeholder:"Large input",label:"Large"})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...',
    label: 'Email'
  },
  decorators: [Story => <div className="w-80 p-6" style={{
    background: '#0a0a0f'
  }}>
      <Story />
    </div>]
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80 flex flex-col gap-4 p-6" style={{
    background: '#0a0a0f'
  }}>
      <Input label="Default" placeholder="Enter text..." hint="This is a hint message" />
      <Input label="Error" placeholder="Enter email..." error="Please enter a valid email address" />
      <Input label="Success" placeholder="Enter username..." success="Username is available!" />
      <Input label="Disabled" placeholder="Disabled input" disabled />
    </div>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80 flex flex-col gap-4 p-6" style={{
    background: '#0a0a0f'
  }}>
      <Input label="Search" placeholder="Search anything..." leftIcon={<span>🔍</span>} />
      <Input label="Email" placeholder="you@example.com" leftIcon={<span>✉️</span>} />
      <Input label="Website" placeholder="https://" rightIcon={<span>🔗</span>} />
    </div>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80 flex flex-col gap-4 p-6" style={{
    background: '#0a0a0f'
  }}>
      <Input floatingLabel label="Email Address" type="email" />
      <Input floatingLabel label="Password" type="password" />
      <Input floatingLabel label="Full Name" />
    </div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter password...'
  },
  decorators: [Story => <div className="w-80 p-6" style={{
    background: '#0a0a0f'
  }}>
      <Story />
    </div>]
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80 flex flex-col gap-4 p-6" style={{
    background: '#0a0a0f'
  }}>
      <Input size="sm" placeholder="Small input" label="Small" />
      <Input size="md" placeholder="Medium input" label="Medium" />
      <Input size="lg" placeholder="Large input" label="Large" />
    </div>
}`,...n.parameters?.docs?.source}}};const f=["Default","AllStates","WithIcons","FloatingLabel","Password","Sizes"];export{s as AllStates,l as Default,t as FloatingLabel,o as Password,n as Sizes,r as WithIcons,f as __namedExportsOrder,h as default};

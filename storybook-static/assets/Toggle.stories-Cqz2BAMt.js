import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as g}from"./iframe-BX1bmF3q.js";import{c as C}from"./index-C46wqaXo.js";import{m as j,c as l}from"./cn-Cu1oTNr2.js";import"./preload-helper-PPVm8Dsz.js";const N=C(["relative inline-flex items-center flex-shrink-0","rounded-full border-2 cursor-pointer","transition-colors duration-200","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]","disabled:opacity-40 disabled:cursor-not-allowed"],{variants:{size:{sm:"w-8 h-5",md:"w-11 h-6",lg:"w-14 h-7"},checked:{true:"border-transparent",false:"border-transparent bg-white/10"},color:{primary:"",success:"",warning:"",danger:""}},defaultVariants:{size:"md",checked:!1,color:"primary"}}),A={sm:"w-3 h-3",md:"w-4 h-4",lg:"w-5 h-5"},D={sm:{off:2,on:14},md:{off:2,on:22},lg:{off:2,on:30}},M={primary:{on:"bg-cyan-500",glow:"rgba(34,211,238,0.3)"},success:{on:"bg-green-500",glow:"rgba(34,197,94,0.3)"},warning:{on:"bg-amber-500",glow:"rgba(245,158,11,0.3)"},danger:{on:"bg-red-500",glow:"rgba(248,113,113,0.3)"}},o=({checked:s=!1,onChange:t,label:e,description:r,disabled:n,className:h,color:b="primary",size:p="md"})=>{const{on:x,glow:S}=M[b],y=D[p],w=A[p],v=()=>{n||t?.(!s)},T=f=>{(f.key===" "||f.key==="Enter")&&(f.preventDefault(),v())},k=a.jsx("button",{type:"button",role:"switch","aria-checked":s,disabled:n,onClick:v,onKeyDown:T,className:l(N({size:p,checked:s,color:b}),s?x:"bg-white/10",h),style:s?{boxShadow:`0 0 12px ${S}`}:void 0,children:a.jsx(j.span,{className:l("block rounded-full bg-white shadow-sm flex-shrink-0",w),animate:{x:s?y.on:y.off},transition:{type:"spring",stiffness:500,damping:35}})});return e?a.jsxs("div",{className:l("flex items-center gap-3",h),children:[k,a.jsxs("div",{className:"flex flex-col",children:[a.jsx("span",{className:l("text-sm font-semibold transition-colors",s?"text-white":"text-gray-400",n&&"opacity-40"),children:e}),r&&a.jsx("span",{className:"text-xs text-gray-600",children:r})]})]}):k};o.displayName="Toggle";o.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'success' | 'warning' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}},composes:["Omit"]};const V={title:"TheX/Toggle",component:o,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#0a0a0f"}]},docs:{description:{component:`
# Toggle

A spring-animated switch with color variants, label and description support, and full keyboard accessibility.

## AI Prompt
\`\`\`
Build a Toggle/Switch component using React, TypeScript, Tailwind CSS and Framer Motion.
Spring animation on the thumb using Framer Motion.
Colors: primary, success, warning, danger with glow effect when on.
Sizes: sm, md, lg.
Support label and description alongside toggle.
Keyboard accessible with Space and Enter keys.
ARIA role="switch" with aria-checked.
Dark theme with cyan primary.
\`\`\`
        `}}},tags:["autodocs"]},i={render:()=>{const[s,t]=g.useState(!1);return a.jsx("div",{className:"p-6",style:{background:"#0a0a0f"},children:a.jsx(o,{checked:s,onChange:t})})}},c={render:()=>{const[s,t]=g.useState({primary:!0,success:!0,warning:!0,danger:!0});return a.jsx("div",{className:"flex flex-col gap-4 p-6",style:{background:"#0a0a0f"},children:["primary","success","warning","danger"].map(e=>a.jsx(o,{color:e,checked:s[e],onChange:r=>t(n=>({...n,[e]:r})),label:e.charAt(0).toUpperCase()+e.slice(1)},e))})}},d={render:()=>{const[s,t]=g.useState({sm:!0,md:!0,lg:!0});return a.jsx("div",{className:"flex items-center gap-6 p-6",style:{background:"#0a0a0f"},children:["sm","md","lg"].map(e=>a.jsx(o,{size:e,checked:s[e],onChange:r=>t(n=>({...n,[e]:r}))},e))})}},u={render:()=>{const[s,t]=g.useState({notifications:!0,darkMode:!0,autoSave:!1,analytics:!1});return a.jsxs("div",{className:"flex flex-col gap-5 w-72 p-6",style:{background:"#0a0a0f"},children:[a.jsx(o,{checked:s.notifications,onChange:e=>t(r=>({...r,notifications:e})),label:"Push Notifications",description:"Receive alerts for price changes",color:"primary"}),a.jsx(o,{checked:s.darkMode,onChange:e=>t(r=>({...r,darkMode:e})),label:"Dark Mode",description:"Use dark theme across the app",color:"primary"}),a.jsx(o,{checked:s.autoSave,onChange:e=>t(r=>({...r,autoSave:e})),label:"Auto Save",description:"Automatically save your changes",color:"success"}),a.jsx(o,{checked:s.analytics,onChange:e=>t(r=>({...r,analytics:e})),label:"Analytics",description:"Share usage data to improve TheX",color:"warning"})]})}},m={render:()=>a.jsxs("div",{className:"flex flex-col gap-4 p-6",style:{background:"#0a0a0f"},children:[a.jsx(o,{checked:!1,disabled:!0,label:"Disabled Off"}),a.jsx(o,{checked:!0,disabled:!0,label:"Disabled On",color:"primary"})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div className="p-6" style={{
      background: '#0a0a0f'
    }}>
        <Toggle checked={checked} onChange={setChecked} />
      </div>;
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [states, setStates] = useState({
      primary: true,
      success: true,
      warning: true,
      danger: true
    });
    return <div className="flex flex-col gap-4 p-6" style={{
      background: '#0a0a0f'
    }}>
        {(['primary', 'success', 'warning', 'danger'] as const).map(color => <Toggle key={color} color={color} checked={states[color]} onChange={v => setStates(s => ({
        ...s,
        [color]: v
      }))} label={color.charAt(0).toUpperCase() + color.slice(1)} />)}
      </div>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [states, setStates] = useState({
      sm: true,
      md: true,
      lg: true
    });
    return <div className="flex items-center gap-6 p-6" style={{
      background: '#0a0a0f'
    }}>
        {(['sm', 'md', 'lg'] as const).map(size => <Toggle key={size} size={size} checked={states[size]} onChange={v => setStates(s => ({
        ...s,
        [size]: v
      }))} />)}
      </div>;
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [states, setStates] = useState({
      notifications: true,
      darkMode: true,
      autoSave: false,
      analytics: false
    });
    return <div className="flex flex-col gap-5 w-72 p-6" style={{
      background: '#0a0a0f'
    }}>
        <Toggle checked={states.notifications} onChange={v => setStates(s => ({
        ...s,
        notifications: v
      }))} label="Push Notifications" description="Receive alerts for price changes" color="primary" />
        <Toggle checked={states.darkMode} onChange={v => setStates(s => ({
        ...s,
        darkMode: v
      }))} label="Dark Mode" description="Use dark theme across the app" color="primary" />
        <Toggle checked={states.autoSave} onChange={v => setStates(s => ({
        ...s,
        autoSave: v
      }))} label="Auto Save" description="Automatically save your changes" color="success" />
        <Toggle checked={states.analytics} onChange={v => setStates(s => ({
        ...s,
        analytics: v
      }))} label="Analytics" description="Share usage data to improve TheX" color="warning" />
      </div>;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 p-6" style={{
    background: '#0a0a0f'
  }}>
      <Toggle checked={false} disabled label="Disabled Off" />
      <Toggle checked={true} disabled label="Disabled On" color="primary" />
    </div>
}`,...m.parameters?.docs?.source}}};const U=["Default","AllColors","AllSizes","WithLabels","Disabled"];export{c as AllColors,d as AllSizes,i as Default,m as Disabled,u as WithLabels,U as __namedExportsOrder,V as default};

import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as j}from"./iframe-BX1bmF3q.js";import{c as S}from"./index-C46wqaXo.js";import{m as g,c as m}from"./cn-Cu1oTNr2.js";import{B as V}from"./Button-CjDRLm9K.js";import"./preload-helper-PPVm8Dsz.js";const k=S("relative overflow-hidden rounded-full bg-white/5 border border-white/5",{variants:{size:{xs:"h-1",sm:"h-1.5",md:"h-2.5",lg:"h-4",xl:"h-6"}},defaultVariants:{size:"md"}}),B={primary:{bar:"from-cyan-500 to-blue-500",glow:"rgba(34,211,238,0.4)"},success:{bar:"from-green-500 to-emerald-500",glow:"rgba(34,197,94,0.4)"},error:{bar:"from-red-500 to-rose-500",glow:"rgba(248,113,113,0.4)"},warning:{bar:"from-amber-500 to-orange-500",glow:"rgba(245,158,11,0.4)"},info:{bar:"from-blue-500 to-indigo-500",glow:"rgba(59,130,246,0.4)"}},l=({value:s,max:t=100,size:r,color:a="primary",label:p,showValue:i,animated:f=!0,striped:n,className:c})=>{const o=Math.min(Math.max(s/t*100,0),100),{bar:u,glow:w}=B[a];return e.jsxs("div",{className:m("flex flex-col gap-1.5 w-full",c),children:[(p||i)&&e.jsxs("div",{className:"flex items-center justify-between",children:[p&&e.jsx("span",{className:"text-xs font-semibold text-gray-400",children:p}),i&&e.jsxs("span",{className:"text-xs font-bold text-gray-300",children:[Math.round(o),"%"]})]}),e.jsx("div",{className:m(k({size:r})),children:e.jsx(g.div,{className:m("h-full rounded-full bg-gradient-to-r",u,n&&"bg-stripes"),initial:{width:0},animate:{width:`${o}%`},transition:{duration:f?.8:0,ease:[.16,1,.3,1]},style:{boxShadow:`0 0 10px ${w}`},children:f&&e.jsx(g.div,{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent",animate:{x:["-100%","200%"]},transition:{duration:1.5,repeat:1/0,ease:"linear",repeatDelay:1}})})})]})},d=({value:s,max:t=100,size:r=80,strokeWidth:a=6,color:p="primary",label:i,showValue:f=!0,className:n})=>{const c=Math.min(Math.max(s/t*100,0),100),o=(r-a)/2,u=2*Math.PI*o,w=u-c/100*u,P={primary:"#22d3ee",success:"#22c55e",error:"#f87171",warning:"#f59e0b",info:"#3b82f6"};return e.jsxs("div",{className:m("inline-flex flex-col items-center gap-2",n),children:[e.jsxs("div",{className:"relative",style:{width:r,height:r},children:[e.jsxs("svg",{width:r,height:r,className:"-rotate-90",children:[e.jsx("circle",{cx:r/2,cy:r/2,r:o,fill:"none",stroke:"rgba(255,255,255,0.05)",strokeWidth:a}),e.jsx(g.circle,{cx:r/2,cy:r/2,r:o,fill:"none",stroke:P[p],strokeWidth:a,strokeLinecap:"round",strokeDasharray:u,initial:{strokeDashoffset:u},animate:{strokeDashoffset:w},transition:{duration:1,ease:[.16,1,.3,1]},style:{filter:`drop-shadow(0 0 6px ${P[p]}80)`}})]}),f&&e.jsx("div",{className:"absolute inset-0 flex flex-col items-center justify-center",children:e.jsxs("span",{className:"text-white font-black text-sm",children:[Math.round(c),"%"]})})]}),i&&e.jsx("span",{className:"text-xs text-gray-500 font-medium",children:i})]})},N=({steps:s,currentStep:t,color:r="primary",className:a})=>{const i={primary:{active:"bg-cyan-500 border-cyan-500 text-white",done:"bg-cyan-500/20 border-cyan-500/40 text-cyan-400",line:"bg-cyan-500"},success:{active:"bg-green-500 border-green-500 text-white",done:"bg-green-500/20 border-green-500/40 text-green-400",line:"bg-green-500"},error:{active:"bg-red-500 border-red-500 text-white",done:"bg-red-500/20 border-red-500/40 text-red-400",line:"bg-red-500"},warning:{active:"bg-amber-500 border-amber-500 text-white",done:"bg-amber-500/20 border-amber-500/40 text-amber-400",line:"bg-amber-500"},info:{active:"bg-blue-500 border-blue-500 text-white",done:"bg-blue-500/20 border-blue-500/40 text-blue-400",line:"bg-blue-500"}}[r];return e.jsx("div",{className:m("flex items-center w-full",a),children:s.map((f,n)=>{const c=n<t,o=n===t,u=n>t;return e.jsxs("div",{className:"flex items-center flex-1 last:flex-none",children:[e.jsxs("div",{className:"flex flex-col items-center gap-1.5",children:[e.jsx(g.div,{className:m("w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all",c&&i.done,o&&i.active,u&&"bg-transparent border-white/10 text-gray-600"),animate:{scale:o?1.1:1},transition:{duration:.2},children:c?"✓":n+1}),e.jsx("span",{className:m("text-xs font-medium whitespace-nowrap",c&&"text-gray-400",o&&"text-white",u&&"text-gray-600"),children:f})]}),n<s.length-1&&e.jsx("div",{className:"flex-1 h-0.5 mx-2 mb-5 bg-white/5 overflow-hidden rounded-full",children:e.jsx(g.div,{className:m("h-full rounded-full",i.line),initial:{width:0},animate:{width:c?"100%":"0%"},transition:{duration:.4,ease:[.16,1,.3,1]}})})]},f)})})};l.displayName="ProgressBar";d.displayName="CircularProgress";N.displayName="StepProgress";l.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{value:{required:!0,tsType:{name:"number"},description:""},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"keyof typeof colorMap",elements:[{name:"literal",value:"primary"},{name:"literal",value:"success"},{name:"literal",value:"error"},{name:"literal",value:"warning"},{name:"literal",value:"info"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},showValue:{required:!1,tsType:{name:"boolean"},description:""},animated:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},striped:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}},composes:["VariantProps"]};d.__docgenInfo={description:"",methods:[],displayName:"CircularProgress",props:{value:{required:!0,tsType:{name:"number"},description:""},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"80",computed:!1}},strokeWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"6",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"keyof typeof colorMap",elements:[{name:"literal",value:"primary"},{name:"literal",value:"success"},{name:"literal",value:"error"},{name:"literal",value:"warning"},{name:"literal",value:"info"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},showValue:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};N.__docgenInfo={description:"",methods:[],displayName:"StepProgress",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},currentStep:{required:!0,tsType:{name:"number"},description:""},color:{required:!1,tsType:{name:"union",raw:"keyof typeof colorMap",elements:[{name:"literal",value:"primary"},{name:"literal",value:"success"},{name:"literal",value:"error"},{name:"literal",value:"warning"},{name:"literal",value:"info"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const A={title:"TheX/Progress",parameters:{layout:"padded",backgrounds:{default:"dark",values:[{name:"dark",value:"#0a0a0f"}]},docs:{description:{component:`
# Progress

Three progress components — linear bar with shimmer, circular SVG, and step indicator — all animated.

## AI Prompt
\`\`\`
Build Progress components using React, TypeScript, Tailwind CSS and Framer Motion.
ProgressBar: animated fill with shimmer, gradient colors, sizes, showValue.
CircularProgress: SVG circle with animated stroke, glow effect, center label.
StepProgress: step indicator with animated connector lines, done/active/upcoming states.
Colors: primary, success, error, warning, info. Dark theme.
\`\`\`
        `}}},tags:["autodocs"]},x={render:()=>e.jsxs("div",{className:"flex flex-col gap-5 max-w-md p-6",style:{background:"#0a0a0f"},children:[e.jsx(l,{value:75,color:"primary",label:"Primary",showValue:!0}),e.jsx(l,{value:60,color:"success",label:"Success",showValue:!0}),e.jsx(l,{value:45,color:"error",label:"Error",showValue:!0}),e.jsx(l,{value:85,color:"warning",label:"Warning",showValue:!0}),e.jsx(l,{value:30,color:"info",label:"Info",showValue:!0})]})},b={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 max-w-md p-6",style:{background:"#0a0a0f"},children:[e.jsx(l,{value:70,size:"xs",label:"XS",showValue:!0}),e.jsx(l,{value:70,size:"sm",label:"SM",showValue:!0}),e.jsx(l,{value:70,size:"md",label:"MD",showValue:!0}),e.jsx(l,{value:70,size:"lg",label:"LG",showValue:!0}),e.jsx(l,{value:70,size:"xl",label:"XL",showValue:!0})]})},v={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-6 p-6",style:{background:"#0a0a0f"},children:[e.jsx(d,{value:75,color:"primary",label:"Primary"}),e.jsx(d,{value:60,color:"success",label:"Success"}),e.jsx(d,{value:45,color:"error",label:"Error"}),e.jsx(d,{value:85,color:"warning",label:"Warning"}),e.jsx(d,{value:30,color:"info",label:"Info",size:100,strokeWidth:8})]})},h={render:()=>{const[s,t]=j.useState(1),r=["Account","Profile","Payment","Confirm"];return e.jsxs("div",{className:"flex flex-col gap-6 max-w-lg p-6",style:{background:"#0a0a0f"},children:[e.jsx(N,{steps:r,currentStep:s}),e.jsxs("div",{className:"flex gap-3 justify-center",children:[e.jsx(V,{variant:"ghost",size:"sm",onClick:()=>t(a=>Math.max(0,a-1)),disabled:s===0,children:"← Back"}),e.jsx(V,{variant:"primary",size:"sm",onClick:()=>t(a=>Math.min(r.length-1,a+1)),disabled:s===r.length-1,children:"Next →"})]})]})}},y={render:()=>{const[s,t]=j.useState(0);return j.useEffect(()=>{const r=setInterval(()=>{t(a=>a>=100?0:a+1)},50);return()=>clearInterval(r)},[]),e.jsxs("div",{className:"flex flex-col gap-6 items-center p-6",style:{background:"#0a0a0f"},children:[e.jsx(d,{value:s,color:"primary",size:120,strokeWidth:8}),e.jsx("div",{className:"w-full max-w-sm",children:e.jsx(l,{value:s,color:"primary",label:"Loading...",showValue:!0})})]})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-5 max-w-md p-6" style={{
    background: '#0a0a0f'
  }}>
      <ProgressBar value={75} color="primary" label="Primary" showValue />
      <ProgressBar value={60} color="success" label="Success" showValue />
      <ProgressBar value={45} color="error" label="Error" showValue />
      <ProgressBar value={85} color="warning" label="Warning" showValue />
      <ProgressBar value={30} color="info" label="Info" showValue />
    </div>
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 max-w-md p-6" style={{
    background: '#0a0a0f'
  }}>
      <ProgressBar value={70} size="xs" label="XS" showValue />
      <ProgressBar value={70} size="sm" label="SM" showValue />
      <ProgressBar value={70} size="md" label="MD" showValue />
      <ProgressBar value={70} size="lg" label="LG" showValue />
      <ProgressBar value={70} size="xl" label="XL" showValue />
    </div>
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-6 p-6" style={{
    background: '#0a0a0f'
  }}>
      <CircularProgress value={75} color="primary" label="Primary" />
      <CircularProgress value={60} color="success" label="Success" />
      <CircularProgress value={45} color="error" label="Error" />
      <CircularProgress value={85} color="warning" label="Warning" />
      <CircularProgress value={30} color="info" label="Info" size={100} strokeWidth={8} />
    </div>
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [step, setStep] = useState(1);
    const steps = ['Account', 'Profile', 'Payment', 'Confirm'];
    return <div className="flex flex-col gap-6 max-w-lg p-6" style={{
      background: '#0a0a0f'
    }}>
        <StepProgress steps={steps} currentStep={step} />
        <div className="flex gap-3 justify-center">
          <Button variant="ghost" size="sm" onClick={() => setStep(s => Math.max(0, s - 1))} disabled={step === 0}>
            ← Back
          </Button>
          <Button variant="primary" size="sm" onClick={() => setStep(s => Math.min(steps.length - 1, s + 1))} disabled={step === steps.length - 1}>
            Next →
          </Button>
        </div>
      </div>;
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setValue(v => v >= 100 ? 0 : v + 1);
      }, 50);
      return () => clearInterval(interval);
    }, []);
    return <div className="flex flex-col gap-6 items-center p-6" style={{
      background: '#0a0a0f'
    }}>
        <CircularProgress value={value} color="primary" size={120} strokeWidth={8} />
        <div className="w-full max-w-sm">
          <ProgressBar value={value} color="primary" label="Loading..." showValue />
        </div>
      </div>;
  }
}`,...y.parameters?.docs?.source}}};const E=["LinearBars","AllSizes","Circular","Steps","Animated"];export{b as AllSizes,y as Animated,v as Circular,x as LinearBars,h as Steps,E as __namedExportsOrder,A as default};

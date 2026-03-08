import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as u}from"./iframe-BX1bmF3q.js";import{m as C,c as d}from"./cn-Cu1oTNr2.js";import{A as z}from"./index-CDD_YbyL.js";import"./preload-helper-PPVm8Dsz.js";const I={sm:{box:"w-4 h-4 rounded-md",text:"text-xs",icon:"text-[10px]"},md:{box:"w-5 h-5 rounded-lg",text:"text-sm",icon:"text-xs"},lg:{box:"w-6 h-6 rounded-xl",text:"text-base",icon:"text-sm"}},D={primary:{checked:"bg-cyan-500 border-cyan-500",glow:"0 0 12px rgba(34,211,238,0.3)"},success:{checked:"bg-green-500 border-green-500",glow:"0 0 12px rgba(34,197,94,0.3)"},warning:{checked:"bg-amber-500 border-amber-500",glow:"0 0 12px rgba(245,158,11,0.3)"},danger:{checked:"bg-red-500 border-red-500",glow:"0 0 12px rgba(248,113,113,0.3)"}},c=({checked:a=!1,indeterminate:t=!1,onChange:r,label:i,description:s,disabled:l,color:o="primary",size:n="md",className:p})=>{const{box:m,text:N,icon:w}=I[n],{checked:T,glow:A}=D[o],k=a||t,y=()=>{l||r?.(!a)},q=v=>{(v.key===" "||v.key==="Enter")&&(v.preventDefault(),y())},j=e.jsx(C.button,{type:"button",role:"checkbox","aria-checked":t?"mixed":a,disabled:l,onClick:y,onKeyDown:q,className:d("relative flex-shrink-0 flex items-center justify-center","border-2 transition-colors duration-150","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50","focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]","disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer",m,k?T:"bg-transparent border-white/20 hover:border-white/40"),style:k?{boxShadow:A}:void 0,whileTap:l?void 0:{scale:.9},transition:{duration:.1},children:e.jsx(z,{mode:"wait",children:t?e.jsx(C.span,{className:d("text-white font-black leading-none",w),initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},exit:{scale:0,opacity:0},transition:{duration:.15,ease:[.34,1.56,.64,1]},children:"—"},"indeterminate"):a?e.jsx(C.span,{className:d("text-white font-black leading-none",w),initial:{scale:0,opacity:0,rotate:-10},animate:{scale:1,opacity:1,rotate:0},exit:{scale:0,opacity:0},transition:{duration:.15,ease:[.34,1.56,.64,1]},children:"✓"},"check"):null})});return i?e.jsxs("div",{className:d("flex items-start gap-3",!l&&"cursor-pointer",p),onClick:l?void 0:y,children:[e.jsx("div",{className:"mt-0.5",children:j}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:d("font-semibold transition-colors select-none",N,k?"text-white":"text-gray-400",l&&"opacity-40"),children:i}),s&&e.jsx("span",{className:d("text-gray-600 select-none",n==="lg"?"text-sm":"text-xs"),children:s})]})]}):j},S=({options:a,value:t=[],onChange:r,color:i="primary",size:s="md",className:l})=>{const o=n=>{const p=t.includes(n)?t.filter(m=>m!==n):[...t,n];r?.(p)};return e.jsx("div",{className:d("flex flex-col gap-3",l),children:a.map(n=>e.jsx(c,{checked:t.includes(n.value),onChange:()=>o(n.value),label:n.label,description:n.description,disabled:n.disabled,color:i,size:s},n.value))})};c.displayName="Checkbox";S.displayName="CheckboxGroup";c.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'success' | 'warning' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};S.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string; description?: string; disabled?: boolean }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"{ value: string; label: string; description?: string; disabled?: boolean }[]"},description:""},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"values"}],return:{name:"void"}}},description:""},color:{required:!1,tsType:{name:"CheckboxProps['color']",raw:"CheckboxProps['color']"},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"CheckboxProps['size']",raw:"CheckboxProps['size']"},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const _={title:"TheX/Checkbox",component:c,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#0a0a0f"}]},docs:{description:{component:`
# Checkbox

An animated checkbox with indeterminate state, color variants, label support, and a group component.

## AI Prompt
\`\`\`
Build a Checkbox component using React, TypeScript, Tailwind CSS and Framer Motion.
Spring scale animation on check/uncheck.
Indeterminate state support.
Colors: primary, success, warning, danger with glow effect.
Sizes: sm, md, lg.
Label and description support. CheckboxGroup for multiple options.
ARIA role="checkbox" with aria-checked="mixed" for indeterminate.
Dark theme with cyan primary.
\`\`\`
        `}}},tags:["autodocs"]},h={render:()=>{const[a,t]=u.useState(!1);return e.jsx("div",{className:"p-6",style:{background:"#0a0a0f"},children:e.jsx(c,{checked:a,onChange:t,label:"Accept terms"})})}},b={render:()=>{const[a,t]=u.useState({primary:!0,success:!0,warning:!0,danger:!0});return e.jsx("div",{className:"flex flex-col gap-4 p-6",style:{background:"#0a0a0f"},children:["primary","success","warning","danger"].map(r=>e.jsx(c,{color:r,checked:a[r],onChange:i=>t(s=>({...s,[r]:i})),label:r.charAt(0).toUpperCase()+r.slice(1)},r))})}},g={render:()=>{const[a,t]=u.useState({sm:!0,md:!0,lg:!0});return e.jsx("div",{className:"flex flex-col gap-4 p-6",style:{background:"#0a0a0f"},children:["sm","md","lg"].map(r=>e.jsx(c,{size:r,checked:a[r],onChange:i=>t(s=>({...s,[r]:i})),label:`Size ${r.toUpperCase()}`},r))})}},x={render:()=>{const[a,t]=u.useState([{label:"React",checked:!0},{label:"TypeScript",checked:!1},{label:"Tailwind",checked:!0}]),r=a.every(s=>s.checked),i=a.some(s=>s.checked);return e.jsxs("div",{className:"flex flex-col gap-3 p-6",style:{background:"#0a0a0f"},children:[e.jsx(c,{checked:r,indeterminate:i&&!r,onChange:s=>t(l=>l.map(o=>({...o,checked:s}))),label:"Select All",size:"md"}),e.jsx("div",{className:"pl-6 flex flex-col gap-3 border-l border-white/8",children:a.map((s,l)=>e.jsx(c,{checked:s.checked,onChange:o=>t(n=>n.map((p,m)=>m===l?{...p,checked:o}:p)),label:s.label},s.label))})]})}},f={render:()=>{const[a,t]=u.useState(["react","typescript"]);return e.jsxs("div",{className:"p-6",style:{background:"#0a0a0f"},children:[e.jsx(S,{value:a,onChange:t,options:[{value:"react",label:"React",description:"UI component library"},{value:"typescript",label:"TypeScript",description:"Typed JavaScript"},{value:"tailwind",label:"Tailwind CSS",description:"Utility-first CSS"},{value:"framer",label:"Framer Motion",description:"Animation library"},{value:"disabled",label:"Disabled Option",disabled:!0}]}),e.jsxs("p",{className:"text-gray-600 text-xs mt-4",children:["Selected: ",a.join(", ")||"none"]})]})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div className="p-6" style={{
      background: '#0a0a0f'
    }}>
        <Checkbox checked={checked} onChange={setChecked} label="Accept terms" />
      </div>;
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
        {(['primary', 'success', 'warning', 'danger'] as const).map(color => <Checkbox key={color} color={color} checked={states[color]} onChange={v => setStates(s => ({
        ...s,
        [color]: v
      }))} label={color.charAt(0).toUpperCase() + color.slice(1)} />)}
      </div>;
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [states, setStates] = useState({
      sm: true,
      md: true,
      lg: true
    });
    return <div className="flex flex-col gap-4 p-6" style={{
      background: '#0a0a0f'
    }}>
        {(['sm', 'md', 'lg'] as const).map(size => <Checkbox key={size} size={size} checked={states[size]} onChange={v => setStates(s => ({
        ...s,
        [size]: v
      }))} label={\`Size \${size.toUpperCase()}\`} />)}
      </div>;
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState([{
      label: 'React',
      checked: true
    }, {
      label: 'TypeScript',
      checked: false
    }, {
      label: 'Tailwind',
      checked: true
    }]);
    const allChecked = items.every(i => i.checked);
    const someChecked = items.some(i => i.checked);
    return <div className="flex flex-col gap-3 p-6" style={{
      background: '#0a0a0f'
    }}>
        <Checkbox checked={allChecked} indeterminate={someChecked && !allChecked} onChange={v => setItems(prev => prev.map(i => ({
        ...i,
        checked: v
      })))} label="Select All" size="md" />
        <div className="pl-6 flex flex-col gap-3 border-l border-white/8">
          {items.map((item, index) => <Checkbox key={item.label} checked={item.checked} onChange={v => setItems(prev => prev.map((i, idx) => idx === index ? {
          ...i,
          checked: v
        } : i))} label={item.label} />)}
        </div>
      </div>;
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(['react', 'typescript']);
    return <div className="p-6" style={{
      background: '#0a0a0f'
    }}>
        <CheckboxGroup value={value} onChange={setValue} options={[{
        value: 'react',
        label: 'React',
        description: 'UI component library'
      }, {
        value: 'typescript',
        label: 'TypeScript',
        description: 'Typed JavaScript'
      }, {
        value: 'tailwind',
        label: 'Tailwind CSS',
        description: 'Utility-first CSS'
      }, {
        value: 'framer',
        label: 'Framer Motion',
        description: 'Animation library'
      }, {
        value: 'disabled',
        label: 'Disabled Option',
        disabled: true
      }]} />
        <p className="text-gray-600 text-xs mt-4">
          Selected: {value.join(', ') || 'none'}
        </p>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};const E=["Default","AllColors","AllSizes","Indeterminate","Group"];export{b as AllColors,g as AllSizes,h as Default,f as Group,x as Indeterminate,E as __namedExportsOrder,_ as default};

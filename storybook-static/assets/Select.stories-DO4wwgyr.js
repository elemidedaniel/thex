import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-BX1bmF3q.js";import{c as i,m as x}from"./cn-Cu1oTNr2.js";import{A as L}from"./index-CDD_YbyL.js";import"./preload-helper-PPVm8Dsz.js";const d=({options:l=[],groups:s=[],value:r,onChange:v,placeholder:P="Select an option...",label:C,hint:y,error:u,disabled:z,searchable:w,multiple:p,clearable:M,size:B="md",variant:V="flat",className:D})=>{const[o,S]=n.useState(!1),[j,k]=n.useState(""),N=n.useRef(null),q=n.useRef(null),c=p?Array.isArray(r)?r:[]:r?[r]:[],A=s.length>0?s.flatMap(a=>a.options):l,F=A.filter(a=>a.label.toLowerCase().includes(j.toLowerCase())),_=s.map(a=>({...a,options:a.options.filter(t=>t.label.toLowerCase().includes(j.toLowerCase()))})).filter(a=>a.options.length>0),R=a=>A.find(t=>t.value===a)?.label??a,E=()=>c.length===0?null:p?c.length===1?R(c[0]):`${c.length} selected`:R(c[0]),I=a=>{if(p){const t=Array.isArray(r)?r:[],m=t.includes(a)?t.filter(X=>X!==a):[...t,a];v?.(m)}else v?.(a),S(!1),k("")},J=a=>{a.stopPropagation(),v?.(p?[]:"")};n.useEffect(()=>{o&&w&&setTimeout(()=>q.current?.focus(),50),o||k("")},[o,w]),n.useEffect(()=>{const a=t=>{N.current&&!N.current.contains(t.target)&&S(!1)};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[]);const U={sm:"text-xs px-3 py-2 h-8 rounded-lg",md:"text-sm px-4 py-2.5 h-10 rounded-xl",lg:"text-base px-4 py-3 h-12 rounded-xl"},O={flat:"bg-white/3 border-white/8 hover:border-white/15",glass:"bg-white/5 border-white/10 backdrop-blur-md hover:border-white/20"},G=a=>a.map(t=>{const m=c.includes(t.value);return e.jsxs(x.button,{type:"button",disabled:t.disabled,onClick:()=>I(t.value),className:i("w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left","text-sm transition-colors duration-100","disabled:opacity-40 disabled:cursor-not-allowed",m?"bg-cyan-500/10 text-cyan-400":"text-gray-300 hover:bg-white/5 hover:text-white"),whileTap:{scale:.98},children:[p&&e.jsx("div",{className:i("w-4 h-4 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-colors",m?"bg-cyan-500 border-cyan-500":"border-white/20"),children:m&&e.jsx("span",{className:"text-white text-xs",children:"✓"})}),t.icon&&e.jsx("span",{className:"flex-shrink-0",children:t.icon}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"truncate font-medium",children:t.label}),t.description&&e.jsx("p",{className:"text-xs text-gray-600 truncate",children:t.description})]}),!p&&m&&e.jsx("span",{className:"text-cyan-400 text-xs flex-shrink-0",children:"✓"})]},t.value)});return e.jsxs("div",{className:i("flex flex-col gap-1.5 w-full",D),ref:N,children:[C&&e.jsx("label",{className:"text-gray-400 text-xs font-medium uppercase tracking-wider",children:C}),e.jsxs("button",{type:"button",disabled:z,onClick:()=>S(!o),className:i("relative w-full flex items-center gap-2 border transition-all duration-200","outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50","disabled:opacity-40 disabled:cursor-not-allowed",o&&"border-cyan-500/40 shadow-[0_0_0_3px_rgba(34,211,238,0.08)]",u&&"border-red-500/40",U[B],O[V],!o&&!u&&O[V]),children:[e.jsx("span",{className:i("flex-1 text-left truncate",E()?"text-white":"text-gray-600"),children:E()||P}),e.jsxs("div",{className:"flex items-center gap-1 flex-shrink-0",children:[M&&c.length>0&&e.jsx("span",{onClick:J,className:"text-gray-600 hover:text-gray-300 transition-colors text-xs px-1",children:"✕"}),e.jsx(x.span,{animate:{rotate:o?180:0},transition:{duration:.2},className:i("text-xs transition-colors",o?"text-cyan-400":"text-gray-600"),children:"▼"})]})]}),e.jsx(L,{children:o&&e.jsxs(x.div,{className:i("absolute z-50 w-full mt-1 py-2 px-2","bg-[#0f0f17] border border-white/10 rounded-2xl","shadow-[0_16px_48px_rgba(0,0,0,0.5)]","max-h-60 overflow-y-auto"),style:{top:"100%",left:0,right:0,position:"absolute"},initial:{opacity:0,y:-8,scale:.98},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-8,scale:.98},transition:{duration:.15,ease:[.16,1,.3,1]},children:[w&&e.jsx("div",{className:"px-1 pb-2",children:e.jsx("input",{ref:q,value:j,onChange:a=>k(a.target.value),placeholder:"Search...",className:"w-full bg-white/5 border border-white/8 rounded-xl px-3 py-2 text-sm text-white placeholder-gray-600 outline-none focus:border-cyan-500/40"})}),s.length>0?_.map(a=>e.jsxs("div",{children:[e.jsx("p",{className:"px-3 py-1.5 text-xs font-semibold text-gray-600 uppercase tracking-wider",children:a.label}),G(a.options)]},a.label)):G(F),F.length===0&&_.length===0&&e.jsx("p",{className:"text-center text-gray-600 text-sm py-4",children:"No results found"})]})}),e.jsx(L,{mode:"wait",children:(u||y)&&e.jsx(x.p,{initial:{opacity:0,y:-4},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},className:i("text-xs",u?"text-red-400":"text-gray-500"),children:u||y},u||y)})]})};d.displayName="Select";d.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},groups:{required:!1,tsType:{name:"Array",elements:[{name:"SelectGroup"}],raw:"SelectGroup[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select an option...'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},hint:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'flat' | 'glass'",elements:[{name:"literal",value:"'flat'"},{name:"literal",value:"'glass'"}]},description:"",defaultValue:{value:"'flat'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const Y={title:"TheX/Select",component:d,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#0a0a0f"}]},docs:{description:{component:`
# Select

A fully custom select with search, multi-select, grouped options, and animated dropdown.

## AI Prompt
\`\`\`
Build a Select component using React, TypeScript, Tailwind CSS and Framer Motion.
Features: searchable dropdown, multi-select with checkboxes, grouped options,
clearable, animated open/close, custom option icons and descriptions.
Sizes: sm, md, lg. Variants: flat, glass.
Click outside to close. Dark theme with cyan accent.
\`\`\`
        `}}},tags:["autodocs"]},T=[{value:"react",label:"React",icon:e.jsx("span",{children:"⚛️"}),description:"A JavaScript library for building UIs"},{value:"vue",label:"Vue",icon:e.jsx("span",{children:"💚"}),description:"The Progressive JavaScript Framework"},{value:"angular",label:"Angular",icon:e.jsx("span",{children:"🔴"}),description:"Platform for building web applications"},{value:"svelte",label:"Svelte",icon:e.jsx("span",{children:"🧡"}),description:"Cybernetically enhanced web apps"},{value:"next",label:"Next.js",icon:e.jsx("span",{children:"▲"}),description:"The React Framework for Production"}],h={render:()=>{const[l,s]=n.useState("");return e.jsx("div",{className:"w-72 p-6 relative",style:{background:"#0a0a0f"},children:e.jsx(d,{label:"Framework",options:T,value:l,onChange:r=>s(r),placeholder:"Select a framework...",clearable:!0})})}},f={render:()=>{const[l,s]=n.useState("");return e.jsx("div",{className:"w-72 p-6 relative",style:{background:"#0a0a0f"},children:e.jsx(d,{label:"Search Framework",options:T,value:l,onChange:r=>s(r),searchable:!0,clearable:!0,placeholder:"Search frameworks..."})})}},b={render:()=>{const[l,s]=n.useState([]);return e.jsxs("div",{className:"w-72 p-6 relative",style:{background:"#0a0a0f"},children:[e.jsx(d,{label:"Frameworks",options:T,value:l,onChange:r=>s(r),multiple:!0,clearable:!0,searchable:!0,placeholder:"Select frameworks..."}),l.length>0&&e.jsxs("p",{className:"text-gray-500 text-xs mt-2",children:["Selected: ",l.join(", ")]})]})}},g={render:()=>{const[l,s]=n.useState("");return e.jsx("div",{className:"w-72 p-6 relative",style:{background:"#0a0a0f"},children:e.jsx(d,{label:"Technology",value:l,onChange:r=>s(r),searchable:!0,clearable:!0,placeholder:"Select technology...",groups:[{label:"Frontend",options:[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"svelte",label:"Svelte"}]},{label:"Backend",options:[{value:"node",label:"Node.js"},{value:"elixir",label:"Elixir"},{value:"go",label:"Go"}]}]})})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="w-72 p-6 relative" style={{
      background: '#0a0a0f'
    }}>
        <Select label="Framework" options={frameworks} value={value} onChange={v => setValue(v as string)} placeholder="Select a framework..." clearable />
      </div>;
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="w-72 p-6 relative" style={{
      background: '#0a0a0f'
    }}>
        <Select label="Search Framework" options={frameworks} value={value} onChange={v => setValue(v as string)} searchable clearable placeholder="Search frameworks..." />
      </div>;
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div className="w-72 p-6 relative" style={{
      background: '#0a0a0f'
    }}>
        <Select label="Frameworks" options={frameworks} value={value} onChange={v => setValue(v as string[])} multiple clearable searchable placeholder="Select frameworks..." />
        {value.length > 0 && <p className="text-gray-500 text-xs mt-2">
            Selected: {value.join(', ')}
          </p>}
      </div>;
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="w-72 p-6 relative" style={{
      background: '#0a0a0f'
    }}>
        <Select label="Technology" value={value} onChange={v => setValue(v as string)} searchable clearable placeholder="Select technology..." groups={[{
        label: 'Frontend',
        options: [{
          value: 'react',
          label: 'React'
        }, {
          value: 'vue',
          label: 'Vue'
        }, {
          value: 'svelte',
          label: 'Svelte'
        }]
      }, {
        label: 'Backend',
        options: [{
          value: 'node',
          label: 'Node.js'
        }, {
          value: 'elixir',
          label: 'Elixir'
        }, {
          value: 'go',
          label: 'Go'
        }]
      }]} />
      </div>;
  }
}`,...g.parameters?.docs?.source}}};const Z=["Default","Searchable","MultiSelect","Grouped"];export{h as Default,g as Grouped,b as MultiSelect,f as Searchable,Z as __namedExportsOrder,Y as default};

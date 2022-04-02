(self.webpackChunk_zellosoft_antd_react_native=self.webpackChunk_zellosoft_antd_react_native||[]).push([[7940],{59733:n=>{n.exports={content:["article",["p",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/slider/demo/basic.tsx"},"Demo Source Code"]],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Text<span class="token punctuation">,</span> View <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Slider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@ant-design/react-native\'</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">BasicSliderExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>handleChange <span class="token operator">=</span> value <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        changingValue<span class="token punctuation">:</span> value<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>onAfterChange <span class="token operator">=</span> value <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        changedValue<span class="token punctuation">:</span> value<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>minMaxChange <span class="token operator">=</span> value <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        minMaxValue<span class="token punctuation">:</span> value<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      changingValue<span class="token punctuation">:</span> <span class="token number">0.25</span><span class="token punctuation">,</span>\n      changedValue<span class="token punctuation">:</span> <span class="token number">0.15</span><span class="token punctuation">,</span>\n      minMaxValue<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      slideCompletionCount<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>Default settings<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>Initial value<span class="token punctuation">:</span> <span class="token number">0.5</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0.5</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>min<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> max<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> current Value<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>minMaxValue<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span>\n            <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onAfterChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">minMaxChange</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>step<span class="token punctuation">:</span> <span class="token number">0.25</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span> <span class="token attr-name">step</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0.25</span><span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0.25</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>disabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span> <span class="token attr-name">disabled</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0.25</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>onChange value<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>changingValue<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span>\n            <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0.25</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleChange</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>onAfterChange value<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>changedValue<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span>\n            <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0.15</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onAfterChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onAfterChange</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>custom color<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span>\n            <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0.15</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">minimumTrackTintColor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span>\n            <span class="token attr-name">maximumTrackTintColor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code","import React from 'react';\nimport { Text, View } from 'react-native';\nimport { Slider } from '@ant-design/react-native';\nexport default class BasicSliderExample extends React.Component {\n  constructor(props) {\n    super(props);\n    this.handleChange = value => {\n      this.setState({\n        changingValue: value,\n      });\n    };\n    this.onAfterChange = value => {\n      this.setState({\n        changedValue: value,\n      });\n    };\n    this.minMaxChange = value => {\n      this.setState({\n        minMaxValue: value,\n      });\n    };\n    this.state = {\n      changingValue: 0.25,\n      changedValue: 0.15,\n      minMaxValue: 0,\n      slideCompletionCount: 0,\n    };\n  }\n  render() {\n    return (\n      <View>\n        <View>\n          <Text>Default settings</Text>\n          <Slider />\n        </View>\n\n        <View style={{ marginTop: 20 }}>\n          <Text>Initial value: 0.5</Text>\n          <Slider defaultValue={0.5} />\n        </View>\n\n        <View style={{ marginTop: 20 }}>\n          <Text>min: 0, max: 1, current Value: {this.state.minMaxValue}</Text>\n          <Slider\n            min={0}\n            max={1}\n            onAfterChange={value => this.minMaxChange(value)}\n          />\n        </View>\n\n        <View style={{ marginTop: 20 }}>\n          <Text>step: 0.25</Text>\n          <Slider step={0.25} value={0.25} />\n        </View>\n\n        <View style={{ marginTop: 20 }}>\n          <Text>disabled</Text>\n          <Slider disabled defaultValue={0.25} />\n        </View>\n\n        <View style={{ marginTop: 20 }}>\n          <Text>onChange value: {this.state.changingValue}</Text>\n          <Slider\n            defaultValue={0.25}\n            onChange={value => this.handleChange(value)}\n          />\n        </View>\n\n        <View style={{ marginTop: 20 }}>\n          <Text>onAfterChange value: {this.state.changedValue}</Text>\n          <Slider\n            defaultValue={0.15}\n            onAfterChange={value => this.onAfterChange(value)}\n          />\n        </View>\n\n        <View style={{ marginTop: 20 }}>\n          <Text>custom color: </Text>\n          <Slider\n            defaultValue={0.15}\n            minimumTrackTintColor=\"red\"\n            maximumTrackTintColor=\"blue\"\n          />\n        </View>\n      </View>\n    );\n  }\n}"]]],meta:{order:0,title:{"zh-CN":"基本","en-US":"Basic"},filename:"components/slider/demo/basic.md"}}},71346:(n,a,s)=>{n.exports={basic:s(59733)}}}]);
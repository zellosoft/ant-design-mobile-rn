(self.webpackChunk_zellosoft_antd_react_native=self.webpackChunk_zellosoft_antd_react_native||[]).push([[8518],{23363:n=>{n.exports={content:["article",["p",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/swipe-action/demo/basic.tsx"},"Demo Source Code"]],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">/* tslint:disable:no-console */</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> View <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> SwipeAction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@ant-design/react-native\'</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">BasicSwipeActionExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        text<span class="token punctuation">:</span> <span class="token string">\'More\'</span><span class="token punctuation">,</span>\n        onPress<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'more\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        style<span class="token punctuation">:</span> <span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'orange\'</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'white\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        text<span class="token punctuation">:</span> <span class="token string">\'Delete\'</span><span class="token punctuation">,</span>\n        onPress<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'delete\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        style<span class="token punctuation">:</span> <span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'red\'</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'white\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        text<span class="token punctuation">:</span> <span class="token string">\'Read\'</span><span class="token punctuation">,</span>\n        onPress<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'read\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        style<span class="token punctuation">:</span> <span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'white\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        text<span class="token punctuation">:</span> <span class="token string">\'Reply\'</span><span class="token punctuation">,</span>\n        onPress<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'reply\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        style<span class="token punctuation">:</span> <span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'green\'</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'white\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> paddingTop<span class="token punctuation">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SwipeAction</span>\n            <span class="token attr-name">autoClose</span>\n            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'transparent\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">right</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>right<span class="token punctuation">}</span></span>\n            <span class="token attr-name">left</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>left<span class="token punctuation">}</span></span>\n            <span class="token attr-name">onOpen</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'open\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'close\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>extra</span> <span class="token attr-name">content"</span><span class="token punctuation">></span></span>\n              Simple example<span class="token punctuation">:</span> left and right buttons\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SwipeAction</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code","/* tslint:disable:no-console */\nimport React from 'react';\nimport { View } from 'react-native';\nimport { List, SwipeAction } from '@ant-design/react-native';\nexport default class BasicSwipeActionExample extends React.Component {\n  render() {\n    const right = [\n      {\n        text: 'More',\n        onPress: () => console.log('more'),\n        style: { backgroundColor: 'orange', color: 'white' },\n      },\n      {\n        text: 'Delete',\n        onPress: () => console.log('delete'),\n        style: { backgroundColor: 'red', color: 'white' },\n      },\n    ];\n    const left = [\n      {\n        text: 'Read',\n        onPress: () => console.log('read'),\n        style: { backgroundColor: 'blue', color: 'white' },\n      },\n      {\n        text: 'Reply',\n        onPress: () => console.log('reply'),\n        style: { backgroundColor: 'green', color: 'white' },\n      },\n    ];\n    return (\n      <View style={{ paddingTop: 30 }}>\n        <List>\n          <SwipeAction\n            autoClose\n            style={{ backgroundColor: 'transparent' }}\n            right={right}\n            left={left}\n            onOpen={() => console.log('open')}\n            onClose={() => console.log('close')}\n          >\n            <List.Item extra=\"extra content\">\n              Simple example: left and right buttons\n            </List.Item>\n          </SwipeAction>\n        </List>\n      </View>\n    );\n  }\n}"]]],meta:{order:0,title:{"zh-CN":"基本","en-US":"Basic"},filename:"components/swipe-action/demo/basic.md"}}},75906:(n,s,a)=>{n.exports={basic:a(23363)}}}]);
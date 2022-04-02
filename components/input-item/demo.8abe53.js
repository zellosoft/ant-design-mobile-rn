(self.webpackChunk_zellosoft_antd_react_native=self.webpackChunk_zellosoft_antd_react_native||[]).push([[7630],{94742:n=>{n.exports={content:["article",["p",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/input-item/demo/basic.tsx"},"Demo Source Code"]],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ScrollView<span class="token punctuation">,</span> Text <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> InputItem<span class="token punctuation">,</span> List <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@ant-design/react-native\'</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">BasicInputItemExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n      value1<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n      value2<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n      value3<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n      value4<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n      labelnum1<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n      labelnum2<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n      labelnum3<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n      text<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n      bankCard<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n      phone<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n      password<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n      number<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ScrollView</span>\n        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> flex<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">automaticallyAdjustContentInsets</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">showsHorizontalScrollIndicator</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">showsVerticalScrollIndicator</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'基本\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputItem</span>\n            <span class="token attr-name">clear</span>\n            <span class="token attr-name">error</span>\n            <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n              <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                value<span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n            <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>元<span class="token punctuation">"</span></span>\n            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>有标签<span class="token punctuation">"</span></span>\n          <span class="token punctuation">></span></span>\n            输入框\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>InputItem</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputItem</span>\n            <span class="token attr-name">clear</span>\n            <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>不可编辑<span class="token punctuation">"</span></span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n              <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                value<span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n            <span class="token attr-name">extra={&lt;Text</span><span class="token punctuation">></span></span>元<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n            placeholder<span class="token operator">=</span><span class="token string">"不可编辑"</span>\n            editable<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span>\n          <span class="token operator">></span>\n            输入框\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>InputItem</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputItem</span>\n            <span class="token attr-name">clear</span>\n            <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value1<span class="token punctuation">}</span></span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n              <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                value1<span class="token punctuation">:</span> value<span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>无标签<span class="token punctuation">"</span></span>\n          <span class="token punctuation">/></span></span>\n          <span class="token operator">&lt;</span>InputItem\n            defaultValue<span class="token operator">=</span><span class="token string">"xx"</span>\n            clear\n            placeholder<span class="token operator">=</span><span class="token string">"自动获取光标"</span>\n            autoFocus<span class="token operator">=</span><span class="token punctuation">{</span>\n              <span class="token comment" spellcheck="true">/* TODO: https://github.com/facebook/jest/issues/3707  */</span> <span class="token keyword">typeof</span> jest <span class="token operator">===</span>\n              <span class="token string">\'undefined\'</span>\n            <span class="token punctuation">}</span>\n          <span class="token operator">></span>\n            标题\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>InputItem</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputItem</span>\n            <span class="token attr-name">clear</span>\n            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>点击下方按钮该输入框会获取光标<span class="token punctuation">"</span></span>\n            <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>el <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>inputRef <span class="token operator">=</span> el<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">></span></span>\n            标题\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>InputItem</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>\n              <span class="token attr-name">onPress</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n                <span class="token keyword">this</span><span class="token punctuation">.</span>inputRef<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n              <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>\n            <span class="token punctuation">></span></span>\n              点击获取光标\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'固定标签字数\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputItem</span>\n            <span class="token attr-name">clear</span>\n            <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>labelnum1<span class="token punctuation">}</span></span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n              <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                labelnum1<span class="token punctuation">:</span> value<span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n            <span class="token attr-name">labelNumber</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>两个字标签<span class="token punctuation">"</span></span>\n          <span class="token punctuation">></span></span>\n            姓名\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>InputItem</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputItem</span>\n            <span class="token attr-name">clear</span>\n            <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>labelnum2<span class="token punctuation">}</span></span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n              <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                labelnum2<span class="token punctuation">:</span> value<span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n            <span class="token attr-name">labelNumber</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>三个字标签<span class="token punctuation">"</span></span>\n          <span class="token punctuation">></span></span>\n            校验码\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>InputItem</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputItem</span>\n            <span class="token attr-name">clear</span>\n            <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>labelnum3<span class="token punctuation">}</span></span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n              <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                labelnum3<span class="token punctuation">:</span> value<span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n            <span class="token attr-name">labelNumber</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>四个字标签（默认）<span class="token punctuation">"</span></span>\n          <span class="token punctuation">></span></span>\n            四字标签\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>InputItem</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'格式\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputItem</span>\n            <span class="token attr-name">clear</span>\n            <span class="token attr-name">error</span>\n            <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>text<span class="token punctuation">}</span></span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n              <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                text<span class="token punctuation">:</span> value<span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span>\n          <span class="token punctuation">></span></span>\n            文本输入\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>InputItem</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputItem</span>\n            <span class="token attr-name">clear</span>\n            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bankCard<span class="token punctuation">"</span></span>\n            <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>bankcard<span class="token punctuation">}</span></span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n              <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                bankcard<span class="token punctuation">:</span> value<span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bankCard<span class="token punctuation">"</span></span>\n          <span class="token punctuation">></span></span>\n            银行卡\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>InputItem</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputItem</span>\n            <span class="token attr-name">clear</span>\n            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>phone<span class="token punctuation">"</span></span>\n            <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>phone<span class="token punctuation">}</span></span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n              <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                phone<span class="token punctuation">:</span> value<span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>phone<span class="token punctuation">"</span></span>\n          <span class="token punctuation">></span></span>\n            手机号\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>InputItem</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputItem</span>\n            <span class="token attr-name">clear</span>\n            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>\n            <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>password<span class="token punctuation">}</span></span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n              <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                password<span class="token punctuation">:</span> value<span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>\n          <span class="token punctuation">></span></span>\n            密码\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>InputItem</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputItem</span>\n            <span class="token attr-name">clear</span>\n            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span>\n            <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>number<span class="token punctuation">}</span></span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n              <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                number<span class="token punctuation">:</span> value<span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span>\n          <span class="token punctuation">></span></span>\n            数字\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>InputItem</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ScrollView</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code",'import React from \'react\';\nimport { ScrollView, Text } from \'react-native\';\nimport { Button, InputItem, List } from \'@ant-design/react-native\';\nexport default class BasicInputItemExample extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: \'\',\n      value1: \'\',\n      value2: \'\',\n      value3: \'\',\n      value4: \'\',\n      labelnum1: \'\',\n      labelnum2: \'\',\n      labelnum3: \'\',\n      text: \'\',\n      bankCard: \'\',\n      phone: \'\',\n      password: \'\',\n      number: \'\',\n    };\n  }\n  render() {\n    return (\n      <ScrollView\n        style={{ flex: 1 }}\n        automaticallyAdjustContentInsets={false}\n        showsHorizontalScrollIndicator={false}\n        showsVerticalScrollIndicator={false}\n      >\n        <List renderHeader={\'基本\'}>\n          <InputItem\n            clear\n            error\n            value={this.state.value}\n            onChange={value => {\n              this.setState({\n                value,\n              });\n            }}\n            extra="元"\n            placeholder="有标签"\n          >\n            输入框\n          </InputItem>\n          <InputItem\n            clear\n            value="不可编辑"\n            onChange={value => {\n              this.setState({\n                value,\n              });\n            }}\n            extra={<Text>元</Text>}\n            placeholder="不可编辑"\n            editable={false}\n          >\n            输入框\n          </InputItem>\n          <InputItem\n            clear\n            value={this.state.value1}\n            onChange={value => {\n              this.setState({\n                value1: value,\n              });\n            }}\n            placeholder="无标签"\n          />\n          <InputItem\n            defaultValue="xx"\n            clear\n            placeholder="自动获取光标"\n            autoFocus={\n              /* TODO: https://github.com/facebook/jest/issues/3707  */ typeof jest ===\n              \'undefined\'\n            }\n          >\n            标题\n          </InputItem>\n          <InputItem\n            clear\n            placeholder="点击下方按钮该输入框会获取光标"\n            ref={el => (this.inputRef = el)}\n          >\n            标题\n          </InputItem>\n          <List.Item>\n            <Button\n              onPress={() => {\n                this.inputRef.focus();\n              }}\n              type="primary"\n            >\n              点击获取光标\n            </Button>\n          </List.Item>\n        </List>\n        <List renderHeader={\'固定标签字数\'}>\n          <InputItem\n            clear\n            value={this.state.labelnum1}\n            onChange={value => {\n              this.setState({\n                labelnum1: value,\n              });\n            }}\n            labelNumber={2}\n            placeholder="两个字标签"\n          >\n            姓名\n          </InputItem>\n          <InputItem\n            clear\n            value={this.state.labelnum2}\n            onChange={value => {\n              this.setState({\n                labelnum2: value,\n              });\n            }}\n            labelNumber={3}\n            placeholder="三个字标签"\n          >\n            校验码\n          </InputItem>\n          <InputItem\n            clear\n            value={this.state.labelnum3}\n            onChange={value => {\n              this.setState({\n                labelnum3: value,\n              });\n            }}\n            labelNumber={4}\n            placeholder="四个字标签（默认）"\n          >\n            四字标签\n          </InputItem>\n        </List>\n        <List renderHeader={\'格式\'}>\n          <InputItem\n            clear\n            error\n            value={this.state.text}\n            onChange={value => {\n              this.setState({\n                text: value,\n              });\n            }}\n            placeholder="text"\n          >\n            文本输入\n          </InputItem>\n          <InputItem\n            clear\n            type="bankCard"\n            value={this.state.bankcard}\n            onChange={value => {\n              this.setState({\n                bankcard: value,\n              });\n            }}\n            placeholder="bankCard"\n          >\n            银行卡\n          </InputItem>\n          <InputItem\n            clear\n            type="phone"\n            value={this.state.phone}\n            onChange={value => {\n              this.setState({\n                phone: value,\n              });\n            }}\n            placeholder="phone"\n          >\n            手机号\n          </InputItem>\n          <InputItem\n            clear\n            type="password"\n            value={this.state.password}\n            onChange={value => {\n              this.setState({\n                password: value,\n              });\n            }}\n            placeholder="password"\n          >\n            密码\n          </InputItem>\n          <InputItem\n            clear\n            type="number"\n            value={this.state.number}\n            onChange={value => {\n              this.setState({\n                number: value,\n              });\n            }}\n            placeholder="number"\n          >\n            数字\n          </InputItem>\n        </List>\n      </ScrollView>\n    );\n  }\n}']]],meta:{order:0,title:{"zh-CN":"基本","en-US":"Basic"},filename:"components/input-item/demo/basic.md"}}},54628:(n,a,s)=>{n.exports={basic:s(94742)}}}]);
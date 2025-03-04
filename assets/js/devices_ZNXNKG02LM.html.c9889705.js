"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[63557],{70070:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>a,data:()=>c});var n=o(6254);const i={},a=(0,o(58079).A)(i,[["render",function(e,t){const o=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[t[7]||(t[7]=(0,n.Lk)("h1",{id:"aqara-znxnkg02lm",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#aqara-znxnkg02lm"},[(0,n.Lk)("span",null,"Aqara ZNXNKG02LM")])],-1)),(0,n.Lk)("table",null,[t[6]||(t[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[t[2]||(t[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"ZNXNKG02LM")],-1)),(0,n.Lk)("tr",null,[t[1]||(t[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(o,{to:"/supported-devices/#v=Aqara"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("Aqara")]))),_:1})])]),t[3]||(t[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Smart rotary knob H1 (wireless)")],-1)),t[4]||(t[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"operation_mode, battery, voltage, action_rotation_angle, action_rotation_angle_speed, action_rotation_percent, action_rotation_percent_speed, action_rotation_time, action_rotation_button_state, sensitivity, action")],-1)),t[5]||(t[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZNXNKG02LM.png",alt:"Aqara ZNXNKG02LM"})])],-1))])]),t[8]||(t[8]=(0,n.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Press and hold the button on the device until the blue light starts blinking, release it and the pairing should begin. If you&#39;re having problems pairing, try keeping the device alive (press the button every second) after pairing started, until pairing completed</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="operation-mode-enum" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum"><span>Operation mode (enum)</span></a></h3><p>Command mode is usefull for binding. Event mode is usefull for processing.. Value can be found in the published state on the <code>operation_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>event</code>, <code>command</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="action-rotation-angle-numeric" tabindex="-1"><a class="header-anchor" href="#action-rotation-angle-numeric"><span>Action rotation angle (numeric)</span></a></h3><p>Rotation angle. Value can be found in the published state on the <code>action_rotation_angle</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>*</code>.</p><h3 id="action-rotation-angle-speed-numeric" tabindex="-1"><a class="header-anchor" href="#action-rotation-angle-speed-numeric"><span>Action rotation angle speed (numeric)</span></a></h3><p>Rotation angle speed. Value can be found in the published state on the <code>action_rotation_angle_speed</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>*</code>.</p><h3 id="action-rotation-percent-numeric" tabindex="-1"><a class="header-anchor" href="#action-rotation-percent-numeric"><span>Action rotation percent (numeric)</span></a></h3><p>Rotation percent. Value can be found in the published state on the <code>action_rotation_percent</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="action-rotation-percent-speed-numeric" tabindex="-1"><a class="header-anchor" href="#action-rotation-percent-speed-numeric"><span>Action rotation percent speed (numeric)</span></a></h3><p>Rotation percent speed. Value can be found in the published state on the <code>action_rotation_percent_speed</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="action-rotation-time-numeric" tabindex="-1"><a class="header-anchor" href="#action-rotation-time-numeric"><span>Action rotation time (numeric)</span></a></h3><p>Rotation time. Value can be found in the published state on the <code>action_rotation_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ms</code>.</p><h3 id="action-rotation-button-state-enum" tabindex="-1"><a class="header-anchor" href="#action-rotation-button-state-enum"><span>Action rotation button state (enum)</span></a></h3><p>Button state during rotation. Value can be found in the published state on the <code>action_rotation_button_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>released</code>, <code>pressed</code>.</p><h3 id="sensitivity-enum" tabindex="-1"><a class="header-anchor" href="#sensitivity-enum"><span>Sensitivity (enum)</span></a></h3><p>Rotation sensitivity. Value can be found in the published state on the <code>sensitivity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sensitivity&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>hold</code>, <code>single</code>, <code>double</code>, <code>release</code>, <code>start_rotating</code>, <code>rotation</code>, <code>stop_rotating</code>.</p>',26))])}]]),c=JSON.parse('{"path":"/devices/ZNXNKG02LM.html","title":"Aqara ZNXNKG02LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Aqara ZNXNKG02LM control via MQTT","description":"Integrate your Aqara ZNXNKG02LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-10-01T17:18:02.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Operation mode (enum)","slug":"operation-mode-enum","link":"#operation-mode-enum","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Action rotation angle (numeric)","slug":"action-rotation-angle-numeric","link":"#action-rotation-angle-numeric","children":[]},{"level":3,"title":"Action rotation angle speed (numeric)","slug":"action-rotation-angle-speed-numeric","link":"#action-rotation-angle-speed-numeric","children":[]},{"level":3,"title":"Action rotation percent (numeric)","slug":"action-rotation-percent-numeric","link":"#action-rotation-percent-numeric","children":[]},{"level":3,"title":"Action rotation percent speed (numeric)","slug":"action-rotation-percent-speed-numeric","link":"#action-rotation-percent-speed-numeric","children":[]},{"level":3,"title":"Action rotation time (numeric)","slug":"action-rotation-time-numeric","link":"#action-rotation-time-numeric","children":[]},{"level":3,"title":"Action rotation button state (enum)","slug":"action-rotation-button-state-enum","link":"#action-rotation-button-state-enum","children":[]},{"level":3,"title":"Sensitivity (enum)","slug":"sensitivity-enum","link":"#sensitivity-enum","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]}]}],"git":{"updatedTime":1741116151000},"filePathRelative":"devices/ZNXNKG02LM.md"}')}}]);
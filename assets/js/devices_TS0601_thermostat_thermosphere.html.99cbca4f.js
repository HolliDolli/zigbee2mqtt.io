"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[72371],{97757:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>d,data:()=>n});var i=o(6254);const a={},d=(0,o(58079).A)(a,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[7]||(t[7]=(0,i.Lk)("h1",{id:"tuya-ts0601-thermostat-thermosphere",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#tuya-ts0601-thermostat-thermosphere"},[(0,i.Lk)("span",null,"Tuya TS0601_thermostat_thermosphere")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"TS0601_thermostat_thermosphere")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Tuya"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Tuya")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"ThermoSphere thermostat")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"climate (system_mode, current_heating_setpoint, local_temperature), sensor_mode, adaptive_start, max_temperature_limit, min_temperature_limit, boost, display_brightness, holiday_start_stop, holiday_temperature, frost_protection, switch_delay, power_rating, open_window_active, open_window_sensing_time, open_window_drop_limit, open_window_off_time")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0601_thermostat_thermosphere.png",alt:"Tuya TS0601_thermostat_thermosphere"})])],-1))])]),t[8]||(t[8]=(0,i.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>system_mode</code>, <code>current_heating_setpoint</code>, <code>local_temperature</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>35</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Whether the thermostat is turned on or off. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>auto</code>. Reading (<code>/get</code>) this attribute is not possible.</li></ul><h3 id="sensor-mode-enum" tabindex="-1"><a class="header-anchor" href="#sensor-mode-enum"><span>Sensor mode (enum)</span></a></h3><p>What type of sensor are you using to meausure the temperature of the floor?. Value can be found in the published state on the <code>sensor_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensor_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>room_temperature</code>, <code>floor_temperature</code>, <code>room_with_floor_limit</code>.</p><h3 id="adaptive-start-binary" tabindex="-1"><a class="header-anchor" href="#adaptive-start-binary"><span>Adaptive start (binary)</span></a></h3><p>Preheat the room to the desired tempature before the scheduled start time.. Value can be found in the published state on the <code>adaptive_start</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;adaptive_start&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> adaptive start is ON, if <code>OFF</code> OFF.</p><h3 id="max-temperature-limit-numeric" tabindex="-1"><a class="header-anchor" href="#max-temperature-limit-numeric"><span>Max temperature limit (numeric)</span></a></h3><p>Maximum temperature (default: 35 ºC). Value can be found in the published state on the <code>max_temperature_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_temperature_limit&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="min-temperature-limit-numeric" tabindex="-1"><a class="header-anchor" href="#min-temperature-limit-numeric"><span>Min temperature limit (numeric)</span></a></h3><p>Minimum temperature limit for frost protection. Turns the thermostat on regardless of setpoint if the temperature drops below this.. Value can be found in the published state on the <code>min_temperature_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_temperature_limit&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>5</code>. The unit of this value is <code>°C</code>.</p><h3 id="boost-enum" tabindex="-1"><a class="header-anchor" href="#boost-enum"><span>Boost (enum)</span></a></h3><p>Override the schedule and boost at the current temperature until turned off. Value can be found in the published state on the <code>boost</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;boost&quot;: NEW_VALUE}</code>. The possible values are: <code>ON</code>, <code>OFF</code>.</p><h3 id="display-brightness-numeric" tabindex="-1"><a class="header-anchor" href="#display-brightness-numeric"><span>Display brightness (numeric)</span></a></h3><p>Brightness of the display when in use. Value can be found in the published state on the <code>display_brightness</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;display_brightness&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>.</p><h3 id="holiday-start-stop-numeric" tabindex="-1"><a class="header-anchor" href="#holiday-start-stop-numeric"><span>Holiday start stop (numeric)</span></a></h3><p>Set the number of days of holiday, this will start immediately.. Value can be found in the published state on the <code>holiday_start_stop</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;holiday_start_stop&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>99</code>.</p><h3 id="holiday-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#holiday-temperature-numeric"><span>Holiday temperature (numeric)</span></a></h3><p>Holiday temperature. Value can be found in the published state on the <code>holiday_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;holiday_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="frost-protection-binary" tabindex="-1"><a class="header-anchor" href="#frost-protection-binary"><span>Frost protection (binary)</span></a></h3><p>Turning on will keep heating at the minimum temperature limit. Value can be found in the published state on the <code>frost_protection</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;frost_protection&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> frost protection is ON, if <code>OFF</code> OFF.</p><h3 id="switch-delay-numeric" tabindex="-1"><a class="header-anchor" href="#switch-delay-numeric"><span>Switch delay (numeric)</span></a></h3><p>How long to wait between making a change and it taking effect. Value can be found in the published state on the <code>switch_delay</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_delay&quot;: NEW_VALUE}</code>. The minimal value is <code>10</code> and the maximum value is <code>90</code>. The unit of this value is <code>s</code>.</p><h3 id="power-rating-numeric" tabindex="-1"><a class="header-anchor" href="#power-rating-numeric"><span>Power rating (numeric)</span></a></h3><p>How much power is the underfloor heating rated to. Entering a value will allow the Thermostat to record a value of power usage that can be checked under settings on the physical Thermostat. Value can be found in the published state on the <code>power_rating</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_rating&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>4500</code>. The unit of this value is <code>W</code>.</p><h3 id="open-window-active-binary" tabindex="-1"><a class="header-anchor" href="#open-window-active-binary"><span>Open window active (binary)</span></a></h3><p>When active the heating will cut off if an Open Window is detected. Value can be found in the published state on the <code>open_window_active</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;open_window_active&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> open window active is ON, if <code>OFF</code> OFF.</p><h3 id="open-window-sensing-time-numeric" tabindex="-1"><a class="header-anchor" href="#open-window-sensing-time-numeric"><span>Open window sensing time (numeric)</span></a></h3><p>The duration that the drop in temperature needs to occur over. Value can be found in the published state on the <code>open_window_sensing_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;open_window_sensing_time&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>30</code>. The unit of this value is <code>minutes</code>.</p><h3 id="open-window-drop-limit-numeric" tabindex="-1"><a class="header-anchor" href="#open-window-drop-limit-numeric"><span>Open window drop limit (numeric)</span></a></h3><p>The drop in ambient room temperature that will trigger an open window warning. Value can be found in the published state on the <code>open_window_drop_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;open_window_drop_limit&quot;: NEW_VALUE}</code>. The minimal value is <code>2</code> and the maximum value is <code>4</code>. The unit of this value is <code>C</code>.</p><h3 id="open-window-off-time-numeric" tabindex="-1"><a class="header-anchor" href="#open-window-off-time-numeric"><span>Open window off time (numeric)</span></a></h3><p>The length of time the drop in temperature must be consistent for to turn the heating off. Value can be found in the published state on the <code>open_window_off_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;open_window_off_time&quot;: NEW_VALUE}</code>. The minimal value is <code>10</code> and the maximum value is <code>60</code>. The unit of this value is <code>minutes</code>.</p>',34))])}]]),n=JSON.parse('{"path":"/devices/TS0601_thermostat_thermosphere.html","title":"Tuya TS0601_thermostat_thermosphere control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya TS0601_thermostat_thermosphere control via MQTT","description":"Integrate your Tuya TS0601_thermostat_thermosphere via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-10-31T20:34:53.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Sensor mode (enum)","slug":"sensor-mode-enum","link":"#sensor-mode-enum","children":[]},{"level":3,"title":"Adaptive start (binary)","slug":"adaptive-start-binary","link":"#adaptive-start-binary","children":[]},{"level":3,"title":"Max temperature limit (numeric)","slug":"max-temperature-limit-numeric","link":"#max-temperature-limit-numeric","children":[]},{"level":3,"title":"Min temperature limit (numeric)","slug":"min-temperature-limit-numeric","link":"#min-temperature-limit-numeric","children":[]},{"level":3,"title":"Boost (enum)","slug":"boost-enum","link":"#boost-enum","children":[]},{"level":3,"title":"Display brightness (numeric)","slug":"display-brightness-numeric","link":"#display-brightness-numeric","children":[]},{"level":3,"title":"Holiday start stop (numeric)","slug":"holiday-start-stop-numeric","link":"#holiday-start-stop-numeric","children":[]},{"level":3,"title":"Holiday temperature (numeric)","slug":"holiday-temperature-numeric","link":"#holiday-temperature-numeric","children":[]},{"level":3,"title":"Frost protection (binary)","slug":"frost-protection-binary","link":"#frost-protection-binary","children":[]},{"level":3,"title":"Switch delay (numeric)","slug":"switch-delay-numeric","link":"#switch-delay-numeric","children":[]},{"level":3,"title":"Power rating (numeric)","slug":"power-rating-numeric","link":"#power-rating-numeric","children":[]},{"level":3,"title":"Open window active (binary)","slug":"open-window-active-binary","link":"#open-window-active-binary","children":[]},{"level":3,"title":"Open window sensing time (numeric)","slug":"open-window-sensing-time-numeric","link":"#open-window-sensing-time-numeric","children":[]},{"level":3,"title":"Open window drop limit (numeric)","slug":"open-window-drop-limit-numeric","link":"#open-window-drop-limit-numeric","children":[]},{"level":3,"title":"Open window off time (numeric)","slug":"open-window-off-time-numeric","link":"#open-window-off-time-numeric","children":[]}]}],"git":{"updatedTime":1741116151000},"filePathRelative":"devices/TS0601_thermostat_thermosphere.md"}')}}]);
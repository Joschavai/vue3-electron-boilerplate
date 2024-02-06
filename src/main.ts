import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';


import "./samples/node-api";

/*****************************************************************************/
/* CSS ICONS PRIMEFLEX */
/*****************************************************************************/
import './assets/primevue-sass-theme-3.47.2/themes/move-light/theme.scss';
import 'primeicons/primeicons.css'; //icons
import '/node_modules/primeflex/primeflex.css';

/*****************************************************************************/
/* Components */
/*****************************************************************************/

import Button from "primevue/button";
import Card from "primevue/card";
import Checkbox from "primevue/checkbox";
import ConfirmDialog from 'primevue/confirmdialog';
import Divider from 'primevue/divider';
import Dropdown from 'primevue/dropdown';
import Knob from 'primevue/knob';
import InputText from "primevue/inputtext";
import InputNumber from 'primevue/inputnumber';
import InputSwitch from 'primevue/inputswitch';
import Panel from 'primevue/panel';
import RadioButton from 'primevue/radiobutton';
import Slider from 'primevue/slider';
import TabMenu from 'primevue/tabmenu';





// Plugins

const pinia = createPinia();

const app = createApp(App);

app.use(pinia).use(router);
app.use(PrimeVue);
app.use(ConfirmationService);
app.use(ToastService);

router.isReady().then(() => {
  app.mount("#app").$nextTick(() => {
    postMessage({ payload: "removeLoading" }, "*");
  });
});

app.component('Button', Button);
app.component('Card', Card);
app.component('Checkbox', Checkbox);
app.component('ConfirmDialog', ConfirmDialog);
app.component('Divider', Divider);
app.component('Dropdown', Dropdown);
app.component('Knob', Knob);
app.component('InputText', InputText);
app.component('InputNumber', InputNumber);
app.component('InputSwitch', InputSwitch);
app.component('Panel', Panel);
app.component('RadioButton', RadioButton);
app.component('Slider', Slider);
app.component('TabMenu', TabMenu);

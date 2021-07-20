import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';
import PrimeVue from 'primevue/config';
import Checkbox from 'primevue/checkbox';
import Panel from 'primevue/panel';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Chart from 'primevue/chart';
import ProgressBar from 'primevue/progressbar';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

const mount = (el) => {
  const app = createApp(Dashboard);
  app.use(PrimeVue);

  app.component('Checkbox', Checkbox);
  app.component('Panel', Panel);
  app.component('Dropdown', Dropdown);
  app.component('InputText', InputText);
  app.component('Button', Button);
  app.component('Column', Column);
  app.component('DataTable', DataTable);
  app.component('Chart', Chart);
  app.component('ProgressBar', ProgressBar);

  app.mount(el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dashboard-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };

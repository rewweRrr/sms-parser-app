import {RouterModule, Routes} from "@angular/router";
import {SmsListComponent} from "./components/sms-list.component";

const routes: Routes = [
  {
    path: 'sms',
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: 'list', component: SmsListComponent}
    ]
  }
];

export const SmsRoutingModule = RouterModule.forRoot(routes);

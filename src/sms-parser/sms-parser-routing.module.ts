import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', redirectTo: 'sms', pathMatch: 'full'}
];

export const SmsParserRoutingModule = RouterModule.forRoot(routes);

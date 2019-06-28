import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: CustomerComponent },
            { path: 'detail/:id', component: CustomerDetailComponent },
            { path: 'add', component: CustomerAddComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule { }

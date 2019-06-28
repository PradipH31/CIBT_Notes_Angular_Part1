import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: CustomerComponent },
            { path: 'detail/:id', component: CustomerDetailComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule { }

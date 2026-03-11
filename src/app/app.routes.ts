import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { Property } from './databinding/property/property';
import { TwoWay } from './databinding/two-way/two-way';
import { Attribute } from './databinding/attribute/attribute';
import { Class } from './databinding/class/class';
import { Style } from './databinding/style/style';
import { Interpolation } from './databinding/interpolation/interpolation';
import { EventBinding } from './databinding/event-binding/event-binding';
import { ProductList } from './products/product-list/product-list';
import { ProductDetails } from './products/product-details/product-details';

export const routes: Routes = [
    { path: 'home', component: Home},
    { path: 'interpolation', component: Interpolation},
    { path: 'property-binding', component: Property},
    { path: 'event-binding', component: EventBinding},
    { path: 'two-way', component: TwoWay},
    { path: 'attribute', component: Attribute},
    { path: 'class', component: Class},
    { path: 'style', component: Style},
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'product-list', component: ProductList, children: [
        {
            path: 'id',
            children: [
                { path: 'product-details', component: ProductDetails}
            ]
        },
    ]}
];

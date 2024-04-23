import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ItemsRoutingModule
    ],
    /*
    declarations: [
        SubNavComponent,
        LayoutComponent,
        OverviewComponent
    ]*/
})
export class ItemsModule { }
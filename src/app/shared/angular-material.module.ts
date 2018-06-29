import { NgModule } from '@angular/core';
import {
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
} from '@angular/material';

@NgModule({
    imports: [
        MatCardModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule
    ],
    exports: [
        MatCardModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule
    ]
})

export class AngularMaterialModule { }

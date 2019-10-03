import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu'
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
    imports:[
        MatButtonModule,MatProgressSpinnerModule,
        MatCardModule,MatFormFieldModule,MatInputModule,
        MatToolbarModule,MatSidenavModule, MatIconModule,
        MatListModule, MatDialogModule, MatSelectModule, 
        MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatMenuModule,
        MatProgressBarModule, MatSlideToggleModule, MatChipsModule, MatButtonToggleModule,
        MatTooltipModule, MatTableModule, MatRippleModule, MatCheckboxModule
    ],
    exports:[
        MatButtonModule,MatProgressSpinnerModule,
        MatCardModule,MatFormFieldModule,MatInputModule,
        MatToolbarModule,MatSidenavModule, MatIconModule,
        MatListModule, MatDialogModule, MatSelectModule, 
        MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatMenuModule,
        MatProgressBarModule, MatSlideToggleModule, MatChipsModule, MatButtonToggleModule, 
        MatTooltipModule, MatTableModule, MatRippleModule, MatCheckboxModule
    ]
})

export class MaterialModule{}
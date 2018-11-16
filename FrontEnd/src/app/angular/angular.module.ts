import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMatSearchBarModule } from 'ng-mat-search-bar'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule, MatListModule, MatChipsModule, MatSelectModule, MatExpansionModule, MatBottomSheetModule, MatTooltipModule } from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    NgMatSearchBarModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatDialogModule,
    MatChipsModule,
    MatSelectModule,
    MatExpansionModule,
    MatBottomSheetModule,
    ReactiveFormsModule,
    MatTooltipModule
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    NgMatSearchBarModule,
    MatChipsModule,
    MatSelectModule,
    MatExpansionModule,
    MatBottomSheetModule,
    ReactiveFormsModule,
    MatTooltipModule
  ],
  declarations: []
})
export class AngularModule { }

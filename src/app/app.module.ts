import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DirectoryContainerComponent } from './Directory/directory-container/directory-container.component';
import { CalenderRestService } from './Calender/services/calender-rest-service.service';

import { MasterDataCardComponent } from './Masterdata/master-data-card/master-data-card.component';
import { MasterdataOverviewComponent } from './Masterdata/masterdata-overview/masterdata-overview.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  providers: [CalenderRestService],
  declarations: [
    AppComponent,
    DirectoryContainerComponent,
    MasterDataCardComponent,
    MasterdataOverviewComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

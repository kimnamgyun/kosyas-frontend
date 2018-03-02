import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { JoinComponent } from './join/join.component';
import { TopComponent } from './content/top.component';
import { TabmenuComponent } from './content/tabmenu.component';
import { DashboardMainComponent } from './content/dashboard/dashboard-main/dashboard-main.component';
import { DashboardVulnerabilityComponent } from './content/dashboard/dashboard-vulnerability/dashboard-vulnerability.component';
import { DashboardSystemsComponent } from './content/dashboard/dashboard-systems/dashboard-systems.component';
import { DashboardFullLogsComponent } from './content/dashboard/dashboard-full-logs/dashboard-full-logs.component';
import { DashboardIntrusionOverviewComponent } from './content/dashboard/intrusion/dashboard-intrusion-overview/dashboard-intrusion-overview.component';
import { DashboardIntrusionRulesComponent } from './content/dashboard/intrusion/dashboard-intrusion-rules/dashboard-intrusion-rules.component';
import { DashboardIntrusionDevicesComponent } from './content/dashboard/intrusion/dashboard-intrusion-devices/dashboard-intrusion-devices.component';
import { DashboardIntrusionLogsComponent } from './content/dashboard/intrusion/dashboard-intrusion-logs/dashboard-intrusion-logs.component';
import { DashboardIntrusionFilesComponent } from './content/dashboard/intrusion/dashboard-intrusion-files/dashboard-intrusion-files.component';
import { AnalysisMainComponent } from './content/analysis/analysis-main/analysis-main.component';
import { AnalysisOverviewComponent } from './content/analysis/corelation/analysis-overview/analysis-overview.component';
import { AnalysisConfigComponent } from './content/analysis/corelation/analysis-config/analysis-config.component';
import { AnalysisAddruleComponent } from './content/analysis/corelation/analysis-addrule/analysis-addrule.component';
import { ConfigMainComponent } from './content/configuration/config-main/config-main.component';
import { ConfigUsermanageComponent } from './content/configuration/config-usermanage/config-usermanage.component';
import { ConfigSystemmmanageComponent } from './content/configuration/config-systemmmanage/config-systemmmanage.component';
import { ConfigLogmanageIntrusionComponent } from './content/configuration/logmanage/config-logmanage-intrusion/config-logmanage-intrusion.component';
import { ConfigLogmanageVulnerabilityComponent } from './content/configuration/logmanage/config-logmanage-vulnerability/config-logmanage-vulnerability.component';
import { ConfigLogmanageDeviceComponent } from './content/configuration/logmanage/config-logmanage-device/config-logmanage-device.component';
import { ReportMainComponent } from './content/report/report-main/report-main.component';
import { ReportConfigurationComponent } from './content/report/report-configuration/report-configuration.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotComponent,
    JoinComponent,
    TopComponent,
    TabmenuComponent,
    DashboardMainComponent,
    DashboardVulnerabilityComponent,
    DashboardSystemsComponent,
    DashboardFullLogsComponent,
    DashboardIntrusionOverviewComponent,
    DashboardIntrusionRulesComponent,
    DashboardIntrusionDevicesComponent,
    DashboardIntrusionLogsComponent,
    DashboardIntrusionFilesComponent,
    AnalysisMainComponent,
    AnalysisOverviewComponent,
    AnalysisConfigComponent,
    AnalysisAddruleComponent,
    ConfigMainComponent,
    ConfigUsermanageComponent,
    ConfigSystemmmanageComponent,
    ConfigLogmanageIntrusionComponent,
    ConfigLogmanageVulnerabilityComponent,
    ConfigLogmanageDeviceComponent,
    ReportMainComponent,
    ReportConfigurationComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

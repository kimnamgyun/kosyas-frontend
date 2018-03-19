import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';

import { routing } from './app.routes';
import { CommonService } from './common.service';

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
import { Chart1Component } from './chart1/chart1.component';
import { Chart2PieComponent } from './chart2-pie/chart2-pie.component';
import { Chart2LineComponent } from './chart2-line/chart2-line.component';
import { Chart2AreaComponent } from './chart2-area/chart2-area.component';
import { SystemConfigComponent } from './system-config/system-config.component';
import { UserConfigComponent } from './user-config/user-config.component';
import { AnalysisConfig1Component } from './analysis-config1/analysis-config1.component';

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

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
    ReportConfigurationComponent,
    Chart1Component,
    Chart2PieComponent,
    Chart2LineComponent,
    Chart2AreaComponent,
    SystemConfigComponent,
    UserConfigComponent,
    AnalysisConfig1Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FusionChartsModule

  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})

export class AppModule { }

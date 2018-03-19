import { Routes,RouterModule } from '@angular/router';
//import { JoinComponent } from './join/join.component';
//import { ForgotComponent } from './forgot/forgot.component';
//import { LoginComponent } from './login/login.component';
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
import { AnalysisConfig1Component } from './analysis-config1/analysis-config1.component';

	const APP_ROUTES:Routes = [
            //{path:'',component: LoginComponent},
            //{path:'join',component: JoinComponent},
            //{path:'forgot',component: ForgotComponent},
            {path:'content',component: TopComponent},
            {path:'content1',component: TabmenuComponent},
            {path:'dashboard-main',component: DashboardMainComponent},
            {path:'dashboard-vulnerability',component: DashboardVulnerabilityComponent},
            {path:'dashboard-systems',component: DashboardSystemsComponent},
            {path:'dashboard-full-logs',component: DashboardFullLogsComponent},
            {path:'dashboard-intrusion-overview',component: DashboardIntrusionOverviewComponent},
            {path:'dashboard-intrusion-rules',component: DashboardIntrusionRulesComponent},
            {path:'dashboard-intrusion-devices',component: DashboardIntrusionDevicesComponent},
            {path:'dashboard-intrusion-logs',component: DashboardIntrusionLogsComponent},
            {path:'dashboard-intrusion-files',component: DashboardIntrusionFilesComponent},
            {path:'analysis-main',component: AnalysisMainComponent},
            {path:'analysis-overview',component: AnalysisOverviewComponent},
            {path:'analysis-config',component: AnalysisConfigComponent},
            //{path:'analysis-addrule',component: AnalysisAddruleComponent},
            {path:'analysis-addrule',component: AnalysisConfig1Component},
            {path:'config-main',component: ConfigMainComponent},
            {path:'config-usermanage',component: ConfigUsermanageComponent},
            {path:'config-systemmanage',component: ConfigSystemmmanageComponent},
            {path:'config-logmanage-intrusion',component: ConfigLogmanageIntrusionComponent},
            {path:'config-logmanage-vulnerability',component: ConfigLogmanageVulnerabilityComponent},
            {path:'config-logmanage-device',component: ConfigLogmanageDeviceComponent},
            {path:'report-main',component: ReportMainComponent},
            {path:'report-configuration',component: ReportConfigurationComponent},
            {path: '',redirectTo: 'dashboard-main', pathMatch: 'full' }
	];

    export const routing = RouterModule.forRoot(APP_ROUTES);
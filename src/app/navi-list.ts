export class ListForm {
    name : string;
    parents : string;
}

export class TabListForm {
    name : string;
    Link : string;
}

export const TAB_LIST:TabListForm[] =[
    {name: "DashBoard", Link: "/dashboard-main"},
    {name: "Analysis", Link: "/analysis-main"},
    {name: "Configuration", Link: "/config-main"},
    {name: "Report", Link: "/report-main"},
    {name: "Intelligence", Link: "/intelligence"}
]

export const DASHBOARD_LIST:ListForm [] = [
    {name : "Instrusion", parents : ""},
    {name : "Rules", parents:"Instrusion"},
    {name : "Devices", parents:"Instrusion"},
    {name : "Logs", parents:"Instrusion"},
    {name : "Files", parents:"Instrusion"},
    {name : "Vulnerability", parents : ""},
    {name : "Systems", parents : ""},
    {name : "Full Logs", parents : ""}
]

export const ANALYSIS_LIST:ListForm [] = [
    {name : "Corelation", parents : ""},
    {name : "Configuration", parents : "Corelation"},
    {name : "Add Rule", parents : "Corelation"},
    {name : "ElastAlert", parents : "Corelation"}
]

export const CONFIGURATION_LIST:ListForm [] = [
    {name : "Log", parents : ""},
    {name : "Intrusion", parents : "Log"},
    {name : "Vulnerability", parents : "Log"},
    {name : "Devices", parents : "Log"},
    {name : "User", parents : ""},
    {name : "System", parents : ""},
]

export const REPORT_LIST:ListForm [] = [
    {name : "Configuration", parents : ""}
]


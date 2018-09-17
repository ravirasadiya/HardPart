"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var achievement_component_1 = require("~/achievement/achievement.component");
var attendance_component_1 = require("~/attendance/attendance.component");
var dashboard_component_1 = require("~/dashboard/dashboard.component");
var login_component_1 = require("./login/login.component");
var homework_component_1 = require("./homework/homework.component");
var homework_detail_component_1 = require("./homework-detail/homework-detail.component");
var timetable_component_1 = require("./timetable/timetable.component");
var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    //{ path: '', redirectTo: '/attendance', pathMatch: 'full' },
    { path: "achievement", component: achievement_component_1.AchievementComponent },
    { path: "attendance", component: attendance_component_1.AttendanceComponent },
    { path: "dashboard", component: dashboard_component_1.DashboardComponent },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "homework", component: homework_component_1.HomeworkComponent },
    { path: "homeworkdetails/:id", component: homework_detail_component_1.HomeworkDetailComponent },
    { path: "timetable", component: timetable_component_1.TimetableComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            exports: [router_1.NativeScriptRouterModule],
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUd6QyxzREFBdUU7QUFFdkUsNkVBQTJFO0FBQzNFLDBFQUF3RTtBQUN4RSx1RUFBcUU7QUFDckUsMkRBQXlEO0FBQ3pELG9FQUFrRTtBQUNsRSx5RkFBc0Y7QUFDdEYsdUVBQXFFO0FBRXJFLElBQU0sTUFBTSxHQUFXO0lBQ2xCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDdEQsNkRBQTZEO0lBRTdELEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsNENBQW9CLEVBQUM7SUFDdkQsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSwwQ0FBbUIsRUFBQztJQUNyRCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHdDQUFrQixFQUFDO0lBQ25ELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUM1QyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFO0lBQ2xELEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFLFNBQVMsRUFBRSxtREFBdUIsRUFBRTtJQUNuRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHdDQUFrQixFQUFDO0NBQ3RELENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1lBQ25DLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0RCxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgQWNoaWV2ZW1lbnRDb21wb25lbnQgfSBmcm9tIFwifi9hY2hpZXZlbWVudC9hY2hpZXZlbWVudC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQXR0ZW5kYW5jZUNvbXBvbmVudCB9IGZyb20gXCJ+L2F0dGVuZGFuY2UvYXR0ZW5kYW5jZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSBcIn4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSG9tZXdvcmtDb21wb25lbnQgfSBmcm9tIFwiLi9ob21ld29yay9ob21ld29yay5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSG9tZXdvcmtEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2hvbWV3b3JrLWRldGFpbC9ob21ld29yay1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGltZXRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi90aW1ldGFibGUvdGltZXRhYmxlLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2xvZ2luJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICAgIC8veyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJy9hdHRlbmRhbmNlJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuXHJcbiAgICB7IHBhdGg6IFwiYWNoaWV2ZW1lbnRcIiwgY29tcG9uZW50OiBBY2hpZXZlbWVudENvbXBvbmVudH0sXHJcbiAgICB7IHBhdGg6IFwiYXR0ZW5kYW5jZVwiLCBjb21wb25lbnQ6IEF0dGVuZGFuY2VDb21wb25lbnR9LFxyXG4gICAgeyBwYXRoOiBcImRhc2hib2FyZFwiLCBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudH0sXHJcbiAgICB7IHBhdGg6IFwibG9naW5cIiwgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcImhvbWV3b3JrXCIsIGNvbXBvbmVudDogSG9tZXdvcmtDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJob21ld29ya2RldGFpbHMvOmlkXCIsIGNvbXBvbmVudDogSG9tZXdvcmtEZXRhaWxDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJ0aW1ldGFibGVcIiwgY29tcG9uZW50OiBUaW1ldGFibGVDb21wb25lbnR9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV0sXHJcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9Il19
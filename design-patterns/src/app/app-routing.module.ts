import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Pattern1Component } from "./routes/pattern1/pattern1.component";
import { Pattern2Component } from "./routes/pattern2/pattern2.component";

const routes: Routes = [
  { path: "", redirectTo: "/second", pathMatch: "full" },
  {
    path: "first",
    loadChildren: () =>
      import("./routes/pattern1/pattern1.module").then((m) => m.Pattern1Module),
  },
  {
    path: "second",
    loadChildren: () =>
      import("./routes/pattern2/pattern2.module").then((m) => m.Pattern2Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

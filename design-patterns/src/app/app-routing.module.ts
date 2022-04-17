import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/Adapter", pathMatch: "full" },
  {
    path: "Adapter",
    loadChildren: () =>
      import("./routes/pattern1/pattern1.module").then((m) => m.Pattern1Module),
  },
  {
    path: "Singleton",
    loadChildren: () =>
      import("./routes/pattern2/pattern2.module").then((m) => m.Pattern2Module),
  },
  {
    path: "Bridge",
    loadChildren: () =>
      import("./routes/pattern3/pattern3.module").then((m) => m.Pattern3Module),
  },
  {
    path: "Factory",
    loadChildren: () =>
      import("./routes/pattern4/pattern4.module").then((m) => m.Pattern4Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

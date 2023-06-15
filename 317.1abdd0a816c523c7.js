"use strict";(self.webpackChunkvidactiva=self.webpackChunkvidactiva||[]).push([[317],{1317:(R,y,i)=>{i.r(y),i.d(y,{CategorysModule:()=>q});var u=i(6895),m=i(5197),h=i(5226),c=i.n(h),a=i(4006),t=i(1571),g=i(7359);function b(e,n){1&e&&(t.TgZ(0,"span",15),t._uU(1," Invalid Name "),t.qZA())}let v=(()=>{class e{constructor(o,r,s){this.fb=o,this.service=r,this.router=s,this.myForm=this.fb.group({name:["",[a.kI.required,a.kI.minLength(3)]]})}ngOnInit(){}notValidField(o){return this.myForm.controls[o].errors&&this.myForm.controls[o].touched}save(){this.myForm.invalid?this.myForm.markAllAsTouched():(this.service.saveCategory(this.myForm.value).subscribe({next:o=>{this.router.navigate(["/categorys"]),c().fire("Good job!","You have created a new category!","success")},error:o=>{c().fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}}),this.myForm.reset({}))}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(a.qu),t.Y36(g.H),t.Y36(m.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-category"]],decls:18,vars:2,consts:[[1,"bg-image",2,"background-color","#111010"],[1,"mask","d-flex","align-items-center","gradient-custom-3"],[1,"container"],[1,"row","d-flex","justify-content-center","align-items-center"],[1,"col-12","col-md-9","col-lg-7","col-xl-6"],[1,"card",2,"border-radius","15px"],[1,"card-body","p-5"],[1,"text-uppercase","text-center","mb-5"],["autocomplete","off",1,"form-horizontal",3,"formGroup","ngSubmit"],[1,"form-outline","mb-4"],["for","form3Example1cg",1,"form-label"],["type","text","id","form3Example1cg","formControlName","name",1,"form-control","form-control-lg"],["class","form-text text-danger",4,"ngIf"],[1,"d-flex","justify-content-center"],["type","submit",1,"btn","btn-dark","btn-block","btn-lg","gradient-custom-4"],[1,"form-text","text-danger"]],template:function(o,r){1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"h2",7),t._uU(8,"Create an account"),t.qZA(),t.TgZ(9,"form",8),t.NdJ("ngSubmit",function(){return r.save()}),t.TgZ(10,"div",9)(11,"label",10),t._uU(12,"Name"),t.qZA(),t._UZ(13,"input",11),t.YNc(14,b,2,0,"span",12),t.qZA(),t.TgZ(15,"div",13)(16,"button",14),t._uU(17,"Add"),t.qZA()()()()()()()()()()),2&o&&(t.xp6(9),t.Q6J("formGroup",r.myForm),t.xp6(5),t.Q6J("ngIf",r.notValidField("name")))},dependencies:[u.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u]}),e})(),x=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-category"]],decls:2,vars:0,template:function(o,r){1&o&&(t.TgZ(0,"p"),t._uU(1,"category works!"),t.qZA())}}),e})();var l=i(7155),p=i(6308),f=i(2778),_=i(1816);const Z=function(){return["/categorys/add"]};function T(e,n){1&e&&(t.TgZ(0,"a",18)(1,"button",19),t._uU(2,"Add Category"),t.qZA()()),2&e&&t.Q6J("routerLink",t.DdM(1,Z))}function A(e,n){1&e&&(t.TgZ(0,"mat-header-cell",20),t._uU(1," ID "),t.qZA())}function U(e,n){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.id," ")}}function F(e,n){1&e&&(t.TgZ(0,"mat-header-cell",20),t._uU(1," Name "),t.qZA())}function L(e,n){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.name," ")}}function w(e,n){1&e&&t._UZ(0,"mat-header-cell")}function N(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"mat-cell")(1,"button",21),t.NdJ("click",function(){const d=t.CHM(o).$implicit,G=t.oxw();return t.KtG(G.delete(d.id))}),t._uU(2," Delete "),t.qZA()()}}function Y(e,n){1&e&&t._UZ(0,"mat-header-cell")}const J=function(e){return["/categorys/update",e]};function S(e,n){if(1&e&&(t.TgZ(0,"mat-cell")(1,"a",18)(2,"button",22),t._uU(3," Update "),t.qZA()()()),2&e){const o=n.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(1,J,o.id))}}function k(e,n){1&e&&t._UZ(0,"mat-header-row")}function D(e,n){1&e&&t._UZ(0,"mat-row")}const M=function(){return[5,10,25]};let C=(()=>{class e{constructor(o){this.CategoryService=o,this.articles=[],this.error=!0,this.displayedColumns=["id","name","button","button2"],this.filterValue="",this.admin=""}ngOnInit(){this.articleList(),this.token=(0,_.Z)(localStorage.getItem("token")),this.token&&(this.admin=this.token.role),"ADMIN"!=this.admin&&(this.displayedColumns=["id","name"])}applyFilter(){this.filterValue=this.filterValue.trimStart(),this.filterValue=this.filterValue.toLowerCase(),this.dataSource.filter=this.filterValue}articleList(){this.CategoryService.categoryList().subscribe({next:o=>{this.dataSource=new l.by(o.content),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}})}delete(o){const r=c().mixin({customClass:{confirmButton:"btn btn-success",cancelButton:"btn btn-danger"},buttonsStyling:!1});r.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(s=>{s.isConfirmed?(this.CategoryService.deleteCategory(o).subscribe({next:d=>{}}),r.fire("Deleted!","Your file has been deleted.","success").then(()=>{this.articleList()})):s.dismiss===c().DismissReason.cancel&&r.fire("Cancelled","Your file is safe :)","error")})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(g.H))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-category-list"]],viewQuery:function(o,r){if(1&o&&(t.Gf(f.NW,5),t.Gf(p.YE,5)),2&o){let s;t.iGM(s=t.CRH())&&(r.paginator=s.first),t.iGM(s=t.CRH())&&(r.sort=s.first)}},inputs:{filterValue:"filterValue"},decls:23,vars:7,consts:[[1,"container"],[1,"arriba"],[1,"boton"],[3,"routerLink",4,"ngIf"],[1,"example-header"],["placeholder","Filter",3,"ngModel","keyup","ngModelChange"],[1,"example-container","mat-elevation-z8"],["matSort","",3,"dataSource"],["matColumnDef","id"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","name"],["matColumnDef","button"],[4,"matHeaderCellDef"],["matColumnDef","button2"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[3,"pageSizeOptions"],[3,"routerLink"],["type","button",1,"btn","btn-success"],["mat-sort-header",""],[1,"btn","btn-danger",3,"click"],[1,"btn","btn-warning"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t.YNc(3,T,3,2,"a",3),t.qZA(),t.TgZ(4,"div",4)(5,"input",5),t.NdJ("keyup",function(){return r.applyFilter()})("ngModelChange",function(d){return r.filterValue=d}),t.qZA()()(),t.TgZ(6,"div",6)(7,"mat-table",7),t.ynx(8,8),t.YNc(9,A,2,0,"mat-header-cell",9),t.YNc(10,U,2,1,"mat-cell",10),t.BQk(),t.ynx(11,11),t.YNc(12,F,2,0,"mat-header-cell",9),t.YNc(13,L,2,1,"mat-cell",10),t.BQk(),t.ynx(14,12),t.YNc(15,w,1,0,"mat-header-cell",13),t.YNc(16,N,3,0,"mat-cell",10),t.BQk(),t.ynx(17,14),t.YNc(18,Y,1,0,"mat-header-cell",13),t.YNc(19,S,4,3,"mat-cell",10),t.BQk(),t.YNc(20,k,1,0,"mat-header-row",15),t.YNc(21,D,1,0,"mat-row",16),t.qZA(),t._UZ(22,"mat-paginator",17),t.qZA()()),2&o&&(t.xp6(3),t.Q6J("ngIf","ADMIN"==r.admin),t.xp6(2),t.Q6J("ngModel",r.filterValue),t.xp6(2),t.Q6J("dataSource",r.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",r.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",r.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(6,M)))},dependencies:[u.O5,m.yS,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,f.NW,p.YE,p.nU,a.Fj,a.JJ,a.On],styles:[".arriba[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.boton[_ngcontent-%COMP%]{margin-bottom:5px}"]}),e})();function I(e,n){1&e&&(t.TgZ(0,"span",15),t._uU(1," Invalid Name "),t.qZA())}const Q=[{path:"add",component:v},{path:"list",component:C},{path:"",component:C},{path:":id",component:x},{path:"update/:id",component:(()=>{class e{constructor(o,r,s,d){this.fb=o,this.service=r,this.route=s,this.router=d,this.myForm=this.fb.group({name:["",[a.kI.required,a.kI.minLength(3)]]})}ngOnInit(){this.id=this.route.snapshot.params.id,this.service.category(this.id).subscribe({next:o=>{this.myForm.setValue({name:o.name})}})}notValidField(o){return this.myForm.controls[o].errors&&this.myForm.controls[o].touched}save(){this.myForm.invalid?this.myForm.markAllAsTouched():(this.service.updateCategory(this.myForm.value,this.id).subscribe({next:o=>{c().fire("Great!","The product has been updated!","success")},error:o=>{c().fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}}),this.router.navigate(["/categorys"]))}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(a.qu),t.Y36(g.H),t.Y36(m.gz),t.Y36(m.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-update-category"]],decls:20,vars:3,consts:[[1,"bg-image",2,"background-color","#111010"],[1,"mask","d-flex","align-items-center","gradient-custom-3"],[1,"container"],[1,"row","d-flex","justify-content-center","align-items-center"],[1,"col-12","col-md-9","col-lg-7","col-xl-6"],[1,"card",2,"border-radius","15px"],[1,"card-body","p-5"],[1,"text-uppercase","text-center","mb-5"],["autocomplete","off",1,"form-horizontal",3,"formGroup","ngSubmit"],[1,"form-outline","mb-4"],["for","form3Example1cg",1,"form-label"],["type","text","id","form3Example1cg","formControlName","name",1,"form-control","form-control-lg"],["class","form-text text-danger",4,"ngIf"],[1,"d-flex","justify-content-center"],["type","submit",1,"btn","btn-dark","btn-block","btn-lg","gradient-custom-4"],[1,"form-text","text-danger"]],template:function(o,r){1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"h2",7),t._uU(8,"Update Category"),t.qZA(),t.TgZ(9,"form",8),t.NdJ("ngSubmit",function(){return r.save()}),t.TgZ(10,"h2"),t._uU(11),t.qZA(),t.TgZ(12,"div",9)(13,"label",10),t._uU(14,"Name"),t.qZA(),t._UZ(15,"input",11),t.YNc(16,I,2,0,"span",12),t.qZA(),t.TgZ(17,"div",13)(18,"button",14),t._uU(19,"Update"),t.qZA()()()()()()()()()()),2&o&&(t.xp6(9),t.Q6J("formGroup",r.myForm),t.xp6(2),t.hij("Category with id: ",r.id," "),t.xp6(5),t.Q6J("ngIf",r.notValidField("id")))},dependencies:[u.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u]}),e})()}];let B=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.Bz.forChild(Q),m.Bz]}),e})();var j=i(3546),V=i(9549),O=i(4333);let q=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,B,j.QW,l.p0,V.lN,f.TU,p.JX,O.JX,a.u5,a.UX]}),e})()}}]);
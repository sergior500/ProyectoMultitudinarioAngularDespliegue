import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticleService } from '../article-Services/article.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { Content } from '../../../interfaces/article.interface';
import { Category } from '../../../interfaces/category.interface';
import { CategoryComponent } from '../../categorys/category/category.component';
import { CategoryService } from '../../categorys/category-Services/category.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

  constructor(private fb: FormBuilder,private service: ArticleService, private route: ActivatedRoute, private catService : CategoryService, private router: Router) { }

  categorias : Category[] = [];

  myForm: FormGroup = this.fb.group({
    name:["",[Validators.required,Validators.minLength(3)]],
    price:["",[Validators.required,Validators.min(0.1)]],
    stock:["",[Validators.required,Validators.min(1)]],
    description:["",[Validators.required,Validators.minLength(4)]],
    categoryName:["",[Validators.required]]
  },)

  id!:number;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.service.article(this.id)
      .subscribe({
        next: (res) => {
          this.myForm.setValue({
                name : res.name,
                price : res.price,
                stock : res.stock,
                description : res.description,
                categoryName : res.category.name
          })
          
        }
      })

      this.catService.categoryList()
      .subscribe({
        next: (resp) => {
          this.categorias = resp.content;
        }
      })
  }

  notValidField(field:string){
    return this.myForm.controls[field].errors &&
    this.myForm.controls[field].touched;
  }

  save(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return
    }

    this.service.updateArticle(this.myForm.value,this.id)
    .subscribe({
      next:(res)=>{
        Swal.fire(
          'Great!',
          'The product has been updated!',
          'success'
        )
    },
      error:(err)=>{
        
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      }})

    this.router.navigate(["/articles"])
  }
}


import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from "../blog-http.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {


  constructor(private blogHttpService: BlogHttpService, private _route: ActivatedRoute, private router: Router, private toastr: ToastrService) {}


  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories = ["COMEDY" , "DRAMA", "ACTION", "TECHNOLOGY"]


  ngOnInit() {
  }
  public createBlog(): any{
    let blogData = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory
    } //end blog data

    console.log(blogData);
    this.blogHttpService.createBlog(blogData).subscribe(
      data => {
        console.log("Blog Created");
        console.log(data);
       this.toastr.success('Blog posted successfully', 'Success!');
        setTimeout(()=>{
          this.router.navigate(['/blog',data.data.blogId]);
        }, 2000)

      },
      error =>
    {
      console.log("some error occurred");
      console.log(error.errorMessage);
     this.toastr.error('Some error occurred','Error!');

    }
    )
  } //end create blog method

}

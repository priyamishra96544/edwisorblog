import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from "../blog-http.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { BlogService } from "./../blog.service";
import { Location } from '@angular/common';


@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog;
  public possibleCategories = ["COMEDY" , "DRAMA", "ACTION", "TECHNOLOGY"];
  constructor(private blogHttpService: BlogHttpService, private _route: ActivatedRoute, private router: Router, private toastr: ToastrService) {}
  
  ngOnInit() {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data => {
        console.log(data);
        this.currentBlog =  data["data"];
        console.log("current Blog is");
        console.log(this.currentBlog);
      },
      error => {
        console.log("Some error occurred");
        console.log(error.errorMessage);

      }
    )
  } // end init


  public editThisBlog(): any {
    this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(
      data => {
        console.log(data);
        this.toastr.success('Blog edited successfully', 'Success!');
        setTimeout(() => {
          this.router.navigate(['/blog', this.currentBlog.blogId]);

        },1000)
      },
      error => {
        console.log("Some error Occurred");
        this.toastr.error('Error Occurred','Error!');
      }
    )
  }

}

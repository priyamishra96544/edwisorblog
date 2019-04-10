import { Injectable } from '@angular/core';
//importing http client to make the requests
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  public authToken= 'ZGE5YWU3NWRlMDk3MjljMDdiZmFiMmFkZGRlMzU0Y2VkOTY1ZWRkZGZhMDIyZWU3YmEwYjk0ODRlNzllOTc5MzdkNTg2NWYyMjhjNWFiNWEzN2QyMGU0NDVhYjRhNzcxODFhNzk3MDZjMWZhM2EyZDE4MDU4NjFiM2JjMjhmZmM3NWU2'


  constructor(private _http:HttpClient ) {
    console.log("blog-http service was called");

   }

   //exception handlerr
   private handleError(err:HttpErrorResponse){
     console.log("Handle error Http calls")
     console.log(err.message);
     return Observable.throw(err.message);
   }



  //method to return all blogs
   public getAllBlogs():any{
     
     let myResponse = this._http.get(this.baseUrl+'/all?authToken=' +this.authToken);
     
     console.log(myResponse);
     return myResponse;

    
  }

  //method to get a particular blog
  public getSingleBlogInformation(currentBlogId): any{

    let myResponse = this._http.get(this.baseUrl + '/view' + '/'+ currentBlogId + '?authToken=' + this.authToken)
    return myResponse;
    
  
  }//end get blog information function
  public createBlog(blogData):any {
    let myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken, blogData)
    return myResponse;

  }//end create blog
  public deleteBlog(blogId):any {
    let data = {}
    let myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken= ' + this.authToken,data)
    return myResponse;

  }//end of delete blog
  public editBlog(blogId, blogData): any {
    let myResponse=this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authToken, blogData)
    return myResponse;
  }//end of edit blog
}

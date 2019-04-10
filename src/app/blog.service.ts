import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {


  //declare a dummy blog variable here
  public allBlogs = [
    {
      "blogId":"1",
      "lastModified":"2017-10-20T12:20:47.8542",
      "created": "2017-10-20T12:20:47.8542",
      "tags":[],
      "author":"Admin",
      "category":"Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml":"This is blog body",
      "description": "this is blog 1 description",
      "title": "This is blog 1"
    },
    {
      "blogId":"2",
      "lastModified":"2018-10-20T12:20:47.8542",
      "created": "2018-10-20T12:20:47.8542",
      "tags":[],
      "author":"Admin",
      "category":"Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml":"<h1> This is blog body </h1><p> heya people </p>",
      "description": "this is blog 2 description",
      "title": "This is blog 2"
    },
    {
      "blogId":"3",
      "lastModified":"2019-10-20T12:20:47.8542",
      "created": "2019-10-20T12:20:47.8542",
      "tags":[],
      "author":"Admin",
      "category":"Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml":"This is blog body",
      "description": "this is blog 3 description",
      "title": "This is blog 3"
    }

  ]

  public currentBlog;
  
  constructor() {
    console.log("service constructor is called");
   }
   
   //method to return all blogs
  public getAllBlogs():any{
    return this.allBlogs
  }

  //method to get a particular blog
  public getSingleBlogInformation(currentBlogId): any{
    //using a for of loop here from type script
    //https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html
    for (let blog of this.allBlogs){
      if (blog.blogId == currentBlogId){
        this.currentBlog = blog;
      }
    }
    console.log("blog",this.currentBlog);
  
  }//end get blog information function


 
}


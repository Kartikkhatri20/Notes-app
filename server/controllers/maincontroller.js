/*
*get/
*homepage
*/

exports.homepage=async(req,res)=>
    {
       const locals={
        title:"Nodejs Notes",
        description:"Free nodejs notes app",
       }
      
       res.render('index',{locals
         ,layout:'../views/layouts/front-page'
    });
    }

    /*
*get/
*about
*/

exports.about=async(req,res)=>
   {
      const locals={
       title:"About Nodejs Notes",
       description:"Free nodejs notes app",
      }
      
      res.render('about',locals);
   }

   //contact
   exports.contact=async(req,res)=>
      {
         const locals={
          title:"Nodejs contacts",
          description:"contact us on app",
         }
         
         res.render('contact',locals);
      }
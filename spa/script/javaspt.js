console.log(1);
    var details={
 
     rakshith:"<h1>hello!!!i am rakshith..i m cool</h1>",
     paona:"<h1>i am paona ..working sincerely</h1>",
     priya:`
     <!doctype html>
                   <html>
                        <head meta charset="utf-8">
                             <link rel="stylesheet" href="templates/style.css"/>
                                 
                                  <center><h1><font color="#0b0e0d" font size="50px"> <u>myself</u> </font></h1></center>
                                     <div class="image"> 
                                      <img src="assets/images/dumb.jpg">
                                      </div>	 
                        <div class="name">
                                 <p >R PRIYA DARSHINI</p>
                                 <p>priyakittypd279@gmail.com</p>
                                 <p>9663783687</p>
                           <div class="shadow">
     >
                             <table >			
                                  <h2><font color="black">EDUCATION DETAILS:</font></h2>
                              <body>
                                   <tr>
                                     <th>course completed</th>
                                     <th>name of the institute</th>
                                     <th>year of passing</th> 
                                     <th>percentage obtained</th>
                                     </tr>
                                  <tr>
                                     <td>BCA</td>
                                     <td><a href="www.theoxford.edu" target="_blank">the oxford college of science</a></td>
                                     <td>2020</td>
                                     <td> </td>
                                  </tr>
                                  <tr >
                                     <td>PUC</td>
                                     <td><a href="www.ssmrv.ac.in" target="_blank">SSMRV pu college</a></td>
                                     <td>2017</td>
                                     <td>65.5%</td>
                                  </tr>
                                  <tr >
                                     <td>SSLC</td>
                                     <td><a href="www.vecjnr.edu.in" target="_blank">vivekanandha educational centre</a></td>
                                     <td>2015</td>
                                     <td>71%</td>
                                  </tr>
                              </body>	 
                              </table>
                         </div>
                              
                         <div class="design">
     
                                   <h2><font color="black">PERSONAL DETAILS:</font></h2>
                          <div>
                                  <p>
                                     FATHERS NAME:L.rajendran</p>
                                  <p>
                                     ADDRESS:no.311,28th main,37th b cross,9th block,jayanagar,banglore-560069></p>
     
                                  <p>
                                     DATE OF BIRTH:26-02-2000</p>
                                  <p>
                                     LANGUAGES KNOWN:tamil,telugu,kannada,hindi,english</p>
                                  <p>
                                     HOBBIES:karate,dance,reading books,listening music</p>
                           
                          </div>
                         </div>
                         <div class="color">
     
                                   <h2><font color="black">ABOUT MYSELF:</font>
                                           <center>
                                               <p> I am a very practical person with excellent cultural activities. I strongly believe in what I do.I believe that I have a good communication skills as well.
     I would like to be  more creative and different from others.I want my future to be bright with same attitude.I am an active person with strong feeling that I  can do anything. </p>
                                           </center>
                                           <center>
                                   </h2>
                                   
     
                                     
     
     
     
     
     
     
     
     
      
     ' 
`,

     gayathri:"<h1>gayathri..working harrddd</h1>"
}
    
    function displaydetails(names){
    var a=document.getElementsByClassName("container")[0];
    a.innerHTML=details[names];
    }

    



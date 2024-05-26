import React, { useState } from "react";

export default function WebDevelopment() {
  const [modal, setModal] = useState(false);
  const [modalNet, setModalNet] = useState(false);
  const toggleModal = () => {
    setModal(!modal)
  }
 
  if(modal){
    document.body.classList.add('active-modal');
  } else if(modalNet){
    document.body.classList.add('active-modal');
  }else{
    document.body.classList.remove('active-modal');

  }


  const toggleModalNet = () => {
    setModalNet(!modalNet)
  }
 
  return (
    <>
      <section>
        <div className="md:cont pt-2 pb-2 px-3 md:px-0">
          <div className="flex gap-1 text-red-600 text-[16px] font-medium">
            <h1>Home</h1>»<h1>Web Development</h1>
          </div>
        </div>
        <div className="banner">
          <div className="md:cont w-full h-full flex items-center">
            <h1 className="text-3xl md:text-4xl text-white font-bold uppercase px-3 md:px-0">
              Web Development Training In Bahawalpur
            </h1>
          </div>
        </div>
          
          <div className="mt-10 w-full">
            <div className="box flex flex-wrap items-center justify-center gap-10">
              <div>
                <button onClick={toggleModal} className="btn-modal w-[200px] bg-[#cc3036] text-white p-2 rounded-lg text-[15px] hover:bg-red-500">PHP Course Outline</button>
              </div>
              <div>
                <button onClick={toggleModalNet} className="btn-modal w-[200px] bg-[rgb(204,48,54)] text-white p-2 rounded-lg text-[15px] hover:bg-red-500">.NET Course Outline</button>
              </div>
            </div>
          </div>

         {modal && (
           <div className="modal  top-0 bottom-0 left-0 right-0  w-full h-full fixed z-50 ">
           <div onClick={toggleModal} className="overlay cursor-pointer top-0 bottom-0 left-0 right-0  w-full h-full fixed">
             <div className="modal-content  bg-white overflow-scroll w-[80%] md:w-2/5 h-[300px] border absolute top-[50%] left-[50%] ">
               <h2 className="w-full text-lg p-1 text-white bg-[#CC3036] text-center">PHP Course Outline</h2>
               <h2 className="text-2xl font-semibold px-4 py-1">Course outline</h2>
               <ol className="px-10 list-decimal text-[15px]">
<li className="py-1">Introduction, Overview of Domain Name, Web Hosting and Basic Website Structuring</li>
<li className="py-1">Webpage Designing with HTML Basics using Notepad</li>
<li className="py-1">Webpage Designing using CSS and JavaScript in Adobe Dreamweaver or Microsoft Expression</li>
<li className="py-1">Designing a html-based website of Multiple Webpages with CSS and JavaScript, using Dreamweaver or Microsoft Expression</li>
<li className="py-1">Introduction to PHP</li>
<li className="py-1">Learn PHP Variables and Functions</li>
<li className="py-1">Learn PHP Arrays and Loops</li>
<li className="py-1">Design &amp; Develop PHP based Website using Dreamweaver or Microsoft Expression</li>
<li className="py-1">Introduction to Basic Microsoft ASP.Net Development with Visual Studio and MS SQL Server</li>
<li className="py-1">Learn how to connect MS SQL database with Asp.net Web Pages</li>
<li className="py-1">Learn how to generate text area, drop downs, radio button, lists and tables, dynamically</li>
<li className="py-1">Learn How to Create, Compile and Build a .Net Web project and run it in a web browser</li>
<li className="py-1">Introduction to WordPress and Xamp.</li>
<li className="py-1">Customize WordPress Website</li>
<li className="py-1">Understand plugins &amp; themes and how to find/install them</li>
<li className="py-1">Secure and Optimize WordPress Website</li>
<li className="py-1">Deploying WordPress Website on cloud server / web hosting</li>
<li className="py-1">Understanding and Configuration of htaccess and php.ini file at web hosting</li>
<li className="py-1">On-Page SEO</li>
<li className="py-1">3rd Party Integration with WordPress Website</li>
<li className="py-1">E-Commerce Website designing and development in WordPress using WooCommerce</li>
</ol>

               <button onClick={toggleModal} className="close-modal absolute top-2 right-2 p-2 bg-red-500 text-white">Close</button>
             </div>
           </div>
         </div>
         )}
         {modalNet && (
           <div className="modal  top-0 bottom-0 left-0 right-0  w-full h-full fixed z-50">
           <div onClick={toggleModalNet} className="overlay cursor-pointer top-0 bottom-0 left-0 right-0  w-full h-full fixed">
             <div className="modal-content  bg-white overflow-scroll w-[80%] md:w-2/5 h-[300px] border absolute top-[50%] left-[50%] ">
               <h2 className="w-full text-lg p-1 text-white bg-[#CC3036] text-center">.NET Course Outline</h2>
               <h2 className="text-2xl font-semibold px-4 py-1">Course outline of Web an Mobile Development with .NET</h2>
               <ol className="px-10 list-decimal text-[15px]">
<li className="py-1">Introduction to .NET&amp; Development Env, Introduction to Debugging &amp; User Interactions &amp; Strings</li>
<li className="py-1">Intro, Basics Syntax and Codes of C#</li>
<li className="py-1">Char String Date Time Quiz</li>
<li className="py-1">Object Oriented Class Libraries Development</li>
<li className="py-1">Fields and Methods Constructor</li>
<li className="py-1">Relationship Types Inheritance</li>
<li className="py-1">Advanced Practical Concepts of Csharp</li>
<li className="py-1">more CSharp Concepts MAUI — &gt; Androd, iOS, Windows,Tizen, Linux</li>
<li className="py-1">MAUI App Androd, iOS, Windows ,Tizen, Linux Layouts Styles Media Fonts</li>
<li className="py-1">MAUI App Androd, iOS, Windows ,Tizen, Linux, MVVM Binding Model Collection</li>
<li className="py-1">MAUI App Androd, iOS, Windows ,Tizen, Linux, XAML</li>
<li className="py-1">MAUI App Androd, iOS, Windows ,Tizen, Linux, XAML</li>
<li className="py-1">MAUI App Androd, iOS, Windows ,Tizen, Linux, XAML C#, Project – 1 CRUD Operation</li>
<li className="py-1">MAUI App Androd, iOS, Windows ,Tizen, Linux, XAML C#</li>
<li className="py-1">Project-2 News App Android iOS Windows</li>
<li className="py-1">Database basics, Entity Framework</li>
<li className="py-1">Entity Framework, Blogging Project</li>
<li className="py-1">FrontEnd Development HTML, Cascading Style Sheets (CSS)</li>
<li className="py-1">CSS Transitions and Animations Bootstrap 5</li>
<li className="py-1">Bootstrap 5, JavaScript</li>
</ol>

               <button onClick={toggleModalNet} className="close-modal absolute top-2 right-2 p-2 bg-red-500 text-white">Close</button>
             </div>
           </div>
         </div>
         )}
        <div className="cont mt-10 px-3 md:px-20 ">
          <p className="py-3 text-[16px] font-medium">
            Corvit Systems has been serving the nation through its cutting-edge
            training programs for those who want to proceed with their career as
            IT professionals. These services have made Corvit Systems one of
            Bahawalpur’s most established and leading Pakistan IT training
            institutes. One of the key areas we focus on here to focus more on
            web development training. It is because local and international
            companies need web developers. Therefore, our experts have designed
            a web development training course in Bahawalpur to help individuals
            develop their web development skills and knowledge and succeed in
            the ever-evolving field of web development.
          </p>

          <h1 className="text-2xl  font-semibold mt-12">
            Why Do You Need Web Development Training in Bahawalpur?
          </h1>

          <p className="py-3 text-[16px] font-medium">
            {" "}
            Corvit Systems offers a comprehensive training course covering all
            essential web development aspects. This course is the best for all
            students, whether they are beginners or experienced professionals.
            This training in Bahawalpur is designed so that every individual can
            deal with various issues related to web development.
          </p>

          <h1 className="text-2xl  font-semibold mt-12">
            Web Development Training Course Details{" "}
          </h1>

          <p className="py-3 text-[16px] font-medium">
            Corvit Systems offers a wide range of topics in our
            artistically-designed web training program in Bahawalpur. Some of
            them are:{" "}
          </p>

          <h1 className="text-xl  font-semibold mt-12"> HTML/CSS</h1>
          <p className="py-3 text-[16px] font-medium">
            When learning HTML/CSS, you can build web development blocks with
            expertise. It means you can create a website on your own with the
            help of HTML and CSS.
          </p>
          <h1 className="text-xl  font-semibold mt-12">JavaScript </h1>
          <p className="py-3 text-[16px] font-medium">
            You will also get some basic and fundamental knowledge of
            JavaScript. After learning JavaScript, you can use interactive and
            dynamic web pages because you will learn data types, arrays,
            functions, and variables when attending our web development training
            in Bahawalpur.
          </p>
          <h1 className="text-xl  font-semibold mt-12">jQuery </h1>
          <p className="py-3 text-[16px] font-medium">
            {" "}
            With JavaScript, you will also learn using the most popular
            JavaScript library named, jQuery. With this library, you can
            conveniently add some advanced functionalities to your websites.
          </p>
          <h1 className="text-xl  font-semibold mt-12"> PHP</h1>
          <p className="py-3 text-[16px] font-medium">
            {" "}
            The story continues as we also help you learn the basics of PHP. It
            is one of those leading server-side scripting languages that helps
            the most create dynamic web pages. The students will also learn how
            to use PHP to interact with databases.
          </p>
          <h1 className="text-xl  font-semibold mt-12">MySQL </h1>
          <p className="py-3 text-[16px] font-medium">
            When developing a website, basic information about MySQL is also
            essential. With our web training in Bahawalpur, you can develop some
            skills to use this relational database management system.
          </p>
          <h1 className="text-xl  font-semibold mt-12">WordPress </h1>
          <p className="py-3 text-[16px] font-medium">
            This content management system is the favorite for many because it
            helps them earn easy money. We also allow you to learn WordPress and
            create various websites and blogs.
          </p>
          <h1 className="text-2xl  font-semibold mt-12">
            Top features of web development training in Bahawalpur
          </h1>

          <p className="py-3 text-[16px] font-medium">
            The web development training program in Bahawalpur offered by Corvit
            Systems has many features. All these features make our training
            program an excellent choice for individuals and professionals
            looking to improve their web development skills. Some key features
            include:{" "}
          </p>

          <h1 className="text-xl  font-semibold mt-12"> Flexible Schedule</h1>

          <p className="py-3 text-[16px] font-medium">
            As we have a plan to help as many individuals as we can manage to
            prepare themselves to join the IT industry, we offer flexible
            schedules to our students. It means we have different timeslots, and
            you can join any of them.{" "}
          </p>

          <h1 className="text-xl  font-semibold mt-12">
            {" "}
            Experienced Instructors
          </h1>
          <p className="py-3 text-[16px] font-medium">
            The instructors at Corvit Systems have been serving the industry for
            years. They are experienced professionals who have spent over a
            decade in web development. Therefore, they can be the best option if
            you want to become successful as a web developer.
          </p>

          <h1 className="text-xl  font-semibold mt-12"> Hands-on Training</h1>

          <p className="py-3 text-[16px] font-medium">
            {" "}
            Our programs are designed so students can apply their skills through
            hands-on training. They are provided real-world scenarios to help
            them reinforce their learning and ensure they can face all
            challenges they may face at their workplace.
          </p>

          <h1 className="text-xl  font-semibold mt-12">
            {" "}
            State-of-the-Art Facilities
          </h1>

          <p className="py-3 text-[16px] font-medium">
            {" "}
            Our training institute is equipped with the latest technology and
            state-of-the-art facilities. This way, our students can use all the
            tools and resources to help them succeed.
          </p>

          <h1 className="text-2xl  font-semibold mt-12">
            Benefits of web development training in Bahawalpur{" "}
          </h1>

          <p className="py-3 text-[16px] font-medium">
            {" "}
            Corvit Systems provides many benefits to beginners and professionals
            of all age groups. Some of the benefits are:
          </p>

          <h1 className="text-xl  font-semibold mt-12">
            Improved Career Prospects{" "}
          </h1>

          <p className="py-3 text-[16px] font-medium">
            {" "}
            We have designed our web development program in Bahawalpur in a way
            individuals find a range of career opportunities in the field of web
            development.
          </p>

          <h1 className="text-xl  font-semibold mt-12">
            {" "}
            Increased Earning Potential
          </h1>

          <p className="py-3 text-[16px] font-medium">
            {" "}
            Every company is trying to find the best developers in their
            surroundings. So, you are in high demand if you are a web developer.
            This situation helps you lead to increased earning potential.
          </p>

          <h1 className="text-xl  font-semibold mt-12"> Enhanced Skillset</h1>

          <p className="py-3 text-[16px] font-medium">
            This program is designed so you can develop your web development
            understanding outstandingly. It can enhance your skills as an
            individual, and you can be considered one of the most valuable
            assets of your company.{" "}
          </p>
        </div>
      </section>
    </>
  );
}

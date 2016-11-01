# Trinity Computer Science Website
A website to help Computer Science students at Trinity College Dublin study their course material.  It can be found at <a href="https://nating.netsoc.ie">nating.netsoc.ie<a>. 


## Description
This website has a separate page for each year of study in Computer Science at Trinity College Dublin, as well as a page for studying for the Foundation Scholarships examinations.  
  Each page has buttons for every module in that year of study. When these buttons are clicked, the page displays buttons for:
  
* Relevant module links
* Past examination papers by year
* Past examination questions split by topic

Each of these buttons links the browser to either a website to help with the module, or the past examination papers in Trinity.  


## Motivation
There was a great need for someone to accumulate all the links for studying modules in Computer Science into one place. Beforehand, I had to bookmark in my browser 10s of links to different places where the course material could be found. Much study time can be wasted looking for different material if it can not be found in one centralised place.   
  In order to do well in examinations, it is important that students can see how questions are asked in the past and how those questions are changing over time. This is too frustrating to attempt when it takes you a minute to find the question from the previous year to see the similarities in the current year's question, and then another minute to get the question from the year before that.   
    This project began as an important fix to an immediate personal problem that was shared by many others, and in fixing could fix many others' problems.  
  
  
## Implementation
In order to make the process smoother for users, only one webpage is loaded for each year. A click of a _module button_ uses Javascript to swap in the relevant html to the page.  


## Adding Value
For each module in every year of the course, links were copied and pasted for past examination papers for the last 10 years where possible (or as far back as possible for the scholarship examinations). The real value of the website is added once links for past **questions** in different topics of modules are provided.   
  Generally, modules do not split their examinations into "clear cut" different topics that remain the same each year. I did my best going through the past papers in each module to find and define different topics that questions on past examinations generally adhere to. This means that a student, having studied a particular section of a module, can find the relevant problems from the past papers efficiently.  
  The work in splitting up past papers into topics can be found in the "PastQuestionsTable.pages" file.


## Problems

* Only being in my third year of Computer Science at Trinity, I was unable to split past papers of modules in higher year into topics. Unfortunately I will only be able to do this once I am more familiar with the course material of those modules which I have yet to take.
* Modules are changed by the school every so often. Decisions have to be made whether old modules' examination papers can be considered "past papers" of current modules with a different name. Also modules with different names have to be analysed to see if they have relevant questions on the material of a certain module.
* Lecturers change the directories of websites they have for modules, so these links have to be checked to be right every so often to ensure they are not linking to nowhere.
* Links for the course material in a module for students graduating in 2018 may not the same as links for students graduating in 2019. Decisions have to be made as to whether to link to a more generic place where all sets of students can advance from, or to make the links as accurate as possible for a subset of the students.
    
    
## The Future of the Project
For now, the website can only help students who are studying material that I have already studied or am currently studying. The future of the project will definitely see the entire Computer Science course material having past questions added.   
  As for possibilities of directions this project may go, there are many other courses in Trinity College who have a need for a website like this one. Different courses could be added to the website and all of the years of their course presented as well. Up until now, all work has been done by me clicking through different links, copying and pasting, and scrolling through past examination papers reading past questions and determining different topics those questions deal with. For this project to grow in scale to accomadate different courses (of which I have no knowledge),  either more workers must come on board or the process must be automated. My vision of the future of this project is that both will be taken advantage of. There are more than 50 different courses in Trinity, all of which take multiple years to complete and have many modules in each year. Currently I believe the steps in taking this project college-wide are:
  
* Make a template for course pages
* Make a template for year pages
* Scrape links into each of these templates for each course year

* Have a student in each course go through their course page to see:
  * Each link is present
  * Each link is correct
* Have someone go through a module's past papers and split them into topics

The last step (which adds the real value to the website) is the most difficult and worrying step. Not just anyone can be the person to split the past papers of a module into topics. Ideally, the lecturer of a module would be the one to do this but I don't feel confident that lecturers would do this. From first hand experience I can vouch that this is a very difficult task (although it should be easier for those who wrote the past papers).   
  If lecturers are not the ones to split the past papers into topics, then it must be students who know those topics and past papers inside out. It is vital, if every student in the course uses the site to study the material (as has been the case for Computer Science) that the past papers are split into topics well. So making sure this is the case will be very tricky.  
  

## Acknowledgments
  As this was my first website, many errors with conventions and bad code were looked over and advised on very generously by @dariota. (This whole thing would be a lot more hacky if it were not for him)  
  
  Thanks to https://www.netsoc.tcd.ie for hosting the website.  
  
  Thanks to everyone who's notes and pages are linked to on the website, notably @Scarlehh's fantastic Discrete Maths notes for second years.  
  

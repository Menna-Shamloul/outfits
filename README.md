# Outfits

Outfits is a social media platform for hikers and people who love the outdoors. It was created using React and Django Rest Frameowork. The purpose of the site is to allow users to share posts about trails they like in their local area or hiking trips they've taken. 

#
![pass-form-blank]()
* [Deloyed Front-End page](https://outfit-ms-4ee7085bae68.herokuapp.com/)

## **Contents**
- [**Planning and Project Conception**](#planning-and-project-conception)
	- [**Project Goals**](#project-goals)
	- [**Site Goals**](#site-goals)
	- [**Future Goals**](#future-goals)
		- [**GitHub Project Board**](#github-project-board)
		- [**Github Issues**](#github-issues)
		- [**Wireframes**](#wireframes)
		- [**List of Wireframe pages**](#list-of-wireframe-pages)
	- [**Epics**](#epics)
		- [Authentication](#authentication)
		- [Navigation](#navigation)
		- [Posts](#posts)
		- [Comments](#comments)
		- [Profiles](#profiles)
	- [**User Stories**](#user-stories)
		- [**Epic 1: Authentication**](#epic-1-authentication)
		- [**Epic 2: Navigation:**](#epic-2-navigation)
		- [**Epic 3: Posts**](#epic-3-posts)
		- [**Epic 4: Comments**](#epic-4-comments)
		- [**Epic 5: Profiles**](#epic-5-profiles)
	- [**Design**](#design)
		- [**Images**](#images)
		- [**Colour Scheme and Accessibility**](#colour-scheme-and-accessibility)
		- [**Typography**](#typography)
- [**Features**](#features)
	- [**Existing Features**](#existing-features)
	- [**logo**](#logo)
	- [**custom 404 page**](#custom-404-page)
	- [**Future Features**](#future-features)
- [**Technologies**](#technologies)
	- [**Languages used**](#languages-used)
	- [**Databases**](#databases)
	- [**Cloud storage and deployment services**](#cloud-storage-and-deployment-services)
	- [**Frameworks, tools and libraries**](#frameworks-tools-and-libraries)
		- [**API Back-End**](#api-back-end)
		- [**Front-End**](#front-end)
	- [**Installed packages, libraries and componenets**](#installed-packages-libraries-and-componenets)
- [**Components**](#components)
- [**Testing**](#testing)
	- [**Manual Testing**](#manual-testing)
	- [**Test cases**](#test-cases)
	- [**Integration Testing**](#integration-testing)
	- [**Code Validation**](#code-validation)
- [**Bugs**](#bugs)
	- [**Bugs encountered during development**](#bugs-encountered-during-development)
	- [**Bugs and issues encountered during testing**](#bugs-and-issues-encountered-during-testing)
	- [**Unresolved bugs**](#unresolved-bugs)
- [**Gitpod set up and deployment**](#gitpod-set-up-and-deployment)
	- [Set-up in gitpod](#set-up-in-gitpod)
	- [Initial Deployment](#initial-deployment)
	- [Deployment issues and bugs](#deployment-issues-and-bugs)
	- [Connect the Frontend app with the Backend API](#connect-the-frontend-app-with-the-backend-api)
	- [Final Deployment](#final-deployment)
	- [Cloning](#cloning)
	- [Forking](#forking)
- [**Credits**](#credits)
	- [Code Institute](#code-institute)
	- [Resources for creating the star rating component:](#resources-for-creating-the-star-rating-component)
	- [Bug fix sources:](#bug-fix-sources)


## **Planning and Project Conception**
### **Project Goals**
- The aim of this project was to build a Frontend application using React and to become familiar with developing  applications using component based architecture.
- This project was built with the use of resuable react-bootstrap components such as the navbar component, dropdown menu, card, media etc. 
- As well as reusability, React allows for faster rendering and imporved performance by using a virtual DOM that only updates and renders the necessary components of the UI when the user interacts with the site and many of the custom components built in this app take adavantage of this and appear throughout the site without needing to be reloaded or are reused in various parts of the site.
For example:
   -  The PopularProfiles component which like the navbar is displayed on most of the pages without reloading every time.
   -  The PostsPage component which is reused for the Home, Feed and Like pages. 
- Another aim of this project is to connect a frontend app to a backend api.
- Django Rest Framework was used to create RESTful APIs for the Frontend app.
- In the drf api, django models are converted into JSON by defining serialisers.
- These models are the architecture for the custom components for the frontend app such as the Post component. 
- Authentication, permissions and url routing is configured to manage api access in the backend.
- The React Frontend app is using axios to make http requests to the api endpoints.
- ReactRouter is implemented for UI-end routing to allow users to navigate between site pages.

[Back to top](#contents)

### **Site Goals**
- To build an online community around a common interest of being outdoors, walking and hiking.
- To allow community members to share picture and information regarding trails and hikes they've done.
- To allow commnunity members to follow other users whose content is interesting to them.
- To allow users to save posts that are interesting to them about trails they would like to do. 
- To allow users to easily search for trails by difficulty and location so they can find posts relevant to their needs.

### **Future Goals**
- To implement event features so that community members can use the site to organise hikes and walks in their local areas or arrange hiking holidays/trips.
- To make the current features more useful by providing google maps locations and directions.
- Allow users to interact more efficiently by implementing private messaging.

[Back to top](#contents)
#

#### **GitHub Project Board**

This project was devised using agile methodologies.
Epics, user stories, bugs and issues.

#### **Wireframes**
 * The plan for this project is based on the Code Institute Moments walkthrough project. 
 * Most of the UI is based on the same kind of features and functionality but customised for the specific purposes of this site
 * Initial plans were to include an event model, but that has been assigned as a future feature to help focus on the minimal viable product of  the site. 

#### **List of Wireframe pages**
![Home page]()
![Sign up page]()
![Sign in page]()
![Profile page]()

[Back to top](#contents)
#
### **Epics**
#### [Authentication](#epic-1-authentication)
#### [Navigation](#epic-2-navigation)
#### [Posts](#epic-3-posts)
#### [Comments](#epic-4-comments)
#### [Profiles](#epic-5-profiles)


### **User Stories**

#### **Epic 1: Authentication**

1. Sign up: As a **user** I can **create an account** so that I can **access all the site features**
 
2. Sign in: As a **user** I can **login** so that I can **access features only available to logged in users**

3. Sign out: As a **user** I can **logout** so that I can **exit my account and prevent others from gaining access**

4. Refreshing access tokens: As a **user** I can **maintain my logged in status for 24 hours** so that I can **easily interact with the app throughout the day**.

5. Create admin panel: As a **site owner** I can **access the admin panel** so that **I have access to all site features and functionality**.

6. Create superuser: As a **site owner** I can **create a superuser** so that **I can give admin users access to the admin panel**.

[Back to top](#contents)
#### **Epic 2: Navigation:**

7. As a **user** I can **quickly view my logged in/out status in the navbar** so that I can **decide on my next action**
 
	
8. Routing: As a **user** I can **view the navbar on every page** so that I can **easily navigate through the site**.

9. Conditional Rendering: As a **logged out user** I can **view sign in and sign up options** so that I can **easily tell whether I am logged in and can log in easily if not**.

10. Avatar: As a **logged in user** I can **view my profile link and avatar image on the navbar** so that I can **quickly see that I am logged in**

11. Popular profiles list: As a **logged in user** I can **view other user’s profile names and avatars** so that I can **easily identify and follow other users**

[Back to top](#contents)

#### **Epic 3: Posts**
12. Create a post: As a **logged in user** I can **create a new post** so that I can **share my experiences and suggestions for good hikes and walks I’ve been on**.

13. Edit a post: As a **logged in user** I can**edit my post** so that I can **revise my content**

14. Delete a post: As a **logged in user** I can **delete my post** so that I can **remove content I have posted**

15. View all posts: As a **user** I can **view all posts** so that I can **see what trails other users have walked and how they were**

16. View post detail: As a **user** I can **view individual post details** so that I can **view other details and comments about the post**
 

17. Like a post: As a **logged in user** I can **like a post** so that I can **quickly show my appreciation for another users content**

18. View liked posts: As a **logged in user** I can **view liked posts** so that I can **easily find the posts about trails that interested me**

19. Search posts: As a **user** I can **search posts** so that I can **find a post by author, trail name or location**

[Back to top](#contents)
#### **Epic 4: Comments**
20. Create a comment: As a **user** I can **leave a comment under a post** so that I can **express my opinion and engage with the content and the community**

21. Comment date: As a **user** I can **see the comment date** so that I can **know how long a go a comment was left**

22. View comments: As a **user** I can **view other comments** so that I can **see what others have said**

23. Edit comments: As a **user** I can **edit my comment** so that I can **revise the information**

24. Delete comments: As a **user** I can **delete my comment** so that I can **remove it from the post**
 
[Back to top](#contents)
#### **Epic 5: Profiles**
25. Profile page: As a **user** I can **view another user’s profile page** so that I can **see their posts and their bio**
 

26. User stats: As a **user** I can **see stats via a user profile** so that I can **see how many posts/followers/following/comments they have**

27. Follow/Unfollow a user: As a **logged in user** I can **follow other users whose content is more relevant or meaningful to me** so that I can **view content filtered by the users I follow**


28. Edit Profile: As a **user** I can **edit my profile** so that I can **update my personal details**
 
29. Update username and password: As a **user** I can **update my username/password** so that I can **make alterations as needed**

[Back to top](#contents)
### **Desgin**

#### **Colour Scheme and Accessibility**
 * I designed the color scheme around the logo which I used white and blue to color. 

## **Features**
### **Existing Features**
* For a comprehensive list of all site features, their function and UI design.

#
### **Future Features**
* Private messaging would be a good feature for a site like this, especially once event organisation becomes a feature.
* Social Account sign in using apis to allow users to login via their email accounts rather than going through the whole sign up process.

[Back to top](#contents)

## **Technologies** 
### **Languages used**
- [Python](https://www.python.org/) 

- [HTML](https://www.w3schools.com/html/html_intro.asp)

- [CSS](https://www.w3schools.com/css/css_intro.asp)

- [JS](https://reactjs.org/)

### **Databases**
- [Postgresql](https://www.postgresql.org/)

### **Cloud storage and deployment services**
- [Cloudinary](https://cloudinary.com/)
    - Used to store media files and images.
- [Heroku](https://www.heroku.com/)
    - Used to host the deployed sitewhat
- [ElephantSQL]() 
    - Used to host and operate the PostgresSQL database

[Back to top](#contents)

### **Frameworks, tools and libraries**
#### **API Back-End**
- [Django Rest Framework](https://www.django-rest-framework.org/)
- [Psycopg2](https://pypi.org/project/psycopg2/)
- [django_filters](https://django-filter.readthedocs.io/en/stable/guide/install.html) 
- [dj_rest_auth](https://dj-rest-auth.readthedocs.io/en/latest/installation.html)
- [rest_framework.authtoken](https://pypi.org/project/django-rest-authtoken/)
- [dj_rest_auth.registration](https://dj-rest-auth.readthedocs.io/en/latest/installation.html)
- [allauth](https://django-allauth.readthedocs.io/en/latest/installation.html)
- [corsheaders](https://pypi.org/project/django-cors-headers/)
- [JSON WEB tokens](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/getting_started.html)


[Back to top](#contents)
   
#### **Front-End**
- [React JS](https://reactjs.org/)
- [JSON Web Tokens](https://jwt.io/)
- [React Bootstrap](https://react-bootstrap-v4.netlify.app/)
- [react-simple-star-rating](https://www.npmjs.com/package/react-simple-star-rating/v/4.0.5)
- [React Router](https://v5.reactrouter.com/web/guides/quick-start)
- [Font Awesome](https://fontawesome.com/)
- [Favicon.io](https://favicon.io/favicon-converter/)
- [Schemecolor](https://www.schemecolor.com/)
- [Pixabay](https://pixabay.com/)
- [Google fonts](https://fonts.google.com/)
- [Markdown TOC generator](https://magnetikonline.github.io/markdown-toc-generate/)

[Back to top](#contents)

### **Installed packages, libraries and componenets**

- React
   - npx create-react-app . --use-npm
   - Main JavaScript framework for creating the UI
- Node 
   - Package manager used to install dependencies
- React simple star rating: 
   - npm i react-simple-star-rating@4.0.5
   - Star rating component as a rating field in the Posts model. 
- React Router: 
   - npm install react-router-dom
   - Handles routing of the React app:
       - Keeps the UI in sync with the URL and only renders components required by whichever URL path the user navigates to.
- Axios library:
   - npm install axios
   - Tells React app to send requests to the api
- React Infinite scroll
   - npm install react-infinite-scroll-component
   - Used with list pages instead of pagination
   - Utilised by posts and comments when there are long lists of these components
- jwtDecode library: 
   - npm install jwt-decode 
   - Stops unneccessary network requests every time unauthenticated user interacts with the app.
   - Stores the logged in user's refresh token timestamp in the browser using localStorage.
   - Then check if this timestamp exists and only if it does make attempt to refresh access token.

[Back to top](#content)

## **Components**
Below are some components not featured in user stories testing but which have been implemented within this project that have been reused throughout the project:

1. axiosDefault.js : Send http request to the backend API in the case of user crud actions or get requests for a specific object or list of objects.
2. Asset.js : exports the loading spinner when/where requied in the site.
3. Avatar.js exports users' avatar image to the popular profileslist, profile page and navbar profile link. 
3. MoreDropdown.js : displays menu to authorised users with options to edit/delete Posts, comments and profile details. 
4. CurrentUserContext.js : confirm users logged-in status to determine what functionality is available to that user.
5. ProfileDataContext.js : provide un/follow ability to authorised user via popular profiles componenet and profile page component.
6. useRedirect.js : redirects a user to another page if they are not authorised to be on the page they are trying to access.
7. useClickOutsideToggle.js : Implemented for the mobile dropdown nav component.
8.  utils.js : supplies functionality to all of the components that utilise the Infinite Scroll.

[Back to top](#contents)

## **Testing**
### **Manual testing**
This site is tested manually for different device sizes and browsers but the login functionality work only in google chrome and on computer,but not work in phone.
The resonsivity site is tested use google chrome devtools. 
The site was showen to be fully responsive, readable and functional on all of devices.

### **Testing user stories**
1. Sign up: As a **user** I can **create an account** so that I can **access all the site features**
    - Sign up page allows new users to create an account.
    - Handles errors for duplicate username, blank fields or mismatching passwords.
    - Tested all links working as normal. 
    - The link to the sign in page will redirect user to sign in page.
    - If all form fields are valid and user clicks sign up they will be redirected to the sign in page.
2. Sign in: As a **user** I can **login** so that I can **access features only available to logged in users**

    - Sign in page allows users who have created an account to sign in in order to access all the site features.
    - Handles errors for incorrect credentials and blank fields.
    - Tested all links working as normal. 
    - The link to the sign up page will redirect user to sign up page as expected.
    - If all form fields are valid and user clicks sign in, they will be redirected to the homepage.
3. Sign out: As a **user** I can **logout** so that I can **exit my account and prevent others from gaining access**
    - The Navbar displays a sign out button to logged in users so that they can sign out from any page in the site.
4. Refreshing access tokens: As a **user** I can **maintain my logged in status for 24 hours** so that I can **easily interact with the app throughout the day**.

    - Unless users click the sign out button, they remain logged in for 24 hours.
5. Create superuser: As a **site owner** I can **create a superuser** so that **I can give admin users access to the admin panel**.

  - This is a Backend api feature.
6. As a **user** I can **quickly view my logged in/out status in the navbar** so that I can **decide on my next action**

    - The Navbar displays a home, sign in and sign up link to logged out users so they can choose to interact with the site on a read only basis or sign in/up to access more features.
	- Once signed in the navbar gives the user access to other actions and pages such as add post, liked posts, feed and the users profile link with their avatar.
7. Routing: As a **user** I can **view the navbar on every page** so that I can **easily navigate through the site**.

    - The Navbar has been tested on every page and in different screen sizes. 
    - The navbar is fully responsive and fully functional.
    - Active navlinks are in green  to help the user know which page they are currently on.
    - When the user hovers over a navlink it will go green like the active navlink to help user know which link their mouse is over.
    - Both the logo and site name act as home navlinks to make it convenient and easy to get back to the home page.
8. Popular profiles list: As a **logged in user** I can **view other user’s profile names and avatars** so that I can **easily identify and follow other users**

    - The popular profiles list is displayed on the right of the screen for desktop users and at the top just under navbar for mobile users.
    - Profile avatars act as links to other users profiles, all these links have been tested and redirect to the correct profiles.
9. Create a post: As a **logged in user** I can **create a new post** so that I can **share my experiences and suggestions for good hikes and walks I’ve been on**.

    - Logged in users have access to the add post form and can create a post about their trail.
10. Edit a post: As a **logged in user** I can **edit my post** so that I can **revise my content**

    - Post owners have the ability to edit their posts from the post detail page via the three dot dropdown menu.
	- All fields have been tested to see if the edited value is updated as expected and in each case they pass. 
    - If all form fields are valid and the user clicks save, they are redirected to the post detail again.
    - If the user clicks cancel in this case they will be redirected to the post details page.
11. Delete a post: As a **logged in user** I can **delete my post** so that I can **remove content I have posted**

    - Post owners have the ability to delete their posts via the post detail page.
    - Post detail displays a three dot dropdown menu to users who are the post owner.
    - If the user clicks delete the post will be removed from the site and the user will be redirected to whatever page they navigated to the posts detail from, ie. their own profile or the home page.
    - In the Backend API the post model has an ondelete cascade so all comments and likes associated with the post will be deleted.
12. View all posts: As a **user** I can **view all posts** so that I can **see what trails other users have walked and how they were**

    - All posts are avaialable to be viewed by both logged-in and logged-out users via the home page.
13. View post detail: As a **user** I can **view individual post details** so that I can **view other details and comments about the post**

    - All users can view the post detail of individual posts.
    - All users can view the comments under the post and see how many likes the post has. 
    - Only logged in users will have the ability to post a comment or like a post.
14. Like a post: As a **logged in user** I can **like a post** so that I can **quickly show my appreciation for another users content**

    - Logged-in users can like posts via the home page, post detail page or their feed.
    - Clicking the heart icon will add the post to liked posts and fills in the heart icon with a red color.
	- Logged-out user cant make like.
15. View liked posts: As a **logged in user** I can **view liked posts** so that I can **easily find the posts about trails that interested me**

    - Logged-in users can view their liked posts page to easily find trails they are interested in and want to keep easily accessible by liking.
16. Search posts: As a **user** I can **search posts** so that I can **find a post by author, trail name or location**

    - The search bar allows users to search for posts by keywords including post author, location, country, trail name, difficulty.
    - It funtcions and displays correclty on all screen sizes, on the homepage, feed and liked page.
17. Create a comment: As a **user** I can **leave a comment under a post** so that I can **express my opinion and engage with the content and the community**

    - Logged-in users have access to a comment form via the post detail page.
    - Clicking the comment icon underneath a post will redirect the user straight down to the comments form on the post detail page, but the user can also access it by simply clicking on the post and scrolling down manually.
18. Comment date: As a **user** I can **see the comment date** so that I can **know how long a go a comment was left**

    - The amount of time since the comment was first created or last updated is published beside the comment to show users how old the comment is.
19. Edit comments: As a **user** I can **edit my comment** so that I can **revise the information**

    - If the user is the owner of a comment, a three dot dropdown will be displayed in the right hand corner of the published comment.
    - This dropdown menu contains the icon-link to open the edit comment form. 
20. Delete comments: As a **user** I can **delete my comment** so that I can **remove it from the post**

    - The delete icon is also available to comment owners via the three dot dropdown.
    - If the user clicks the delete icon, the comment is removed from the post detail page and the comments count goes down by 1.
21. Profile page: As a **user** I can **view another user’s profile page** so that I can **see their posts and their bio**

    - Both logged-in and logged-out users have access to other users' profile pages.
    - Logged-in users will have access to a follow/unfollow button when visiting other users' profiles
    - Logged-in users will have acccess to an edit dropdown menu for their own profile.
22. Follow/Unfollow a user: As a **logged in user** I can **follow other users whose content is more relevant or meaningful to me** so that I can **view content filtered by the users I follow**

    - As seen above, logged-in users have access to a follow button so that they can follow users whose content they enjoy.
    - The follow button toggles between follow and unfollow depending on whether the user currently follows the given profile or not. 
    - The posts of profile owners that the current user follows will be added to their feed, so they can easily see when a user they follow posts new content.
    - If the current logged-in user doesn't follow any profiles, their feed will display a message suggesting that they follow a profile.
23. Edit Profile: As a **user** I can **edit my profile** so that I can **update my personal details**

    - If the current logged-in user is the owner of a profile, a three dot dropdown will be displayed in the Profile header
    - This dropdown menu contains the icon-links to edit the profile, change the username,change the image and change the password or delete them. 


### **Code validation**
1. HTML validation : no errors found.
2. CSS validation : no errors found.
3. JSX validation : 

## **Bugs**
### **Unresolved bugs**
When i create post there is chosse file icon appear and i try to fixed it with tutor but i cant fixed it.

[Back to top](#contents)


## **Gitpod set up and deployment**
- This project was created and developed using gitpod using the following steps: 
### Set-up in gitpod
   - Navigate to your github repository page and click the green "new" button to create a new repo.
   - choose a name with all lower case letters: trekkers
   - Click the green "create repository" button.
   - Click the Green "Gitpod button to create a workspace.
   - Enter the following commands:
      - npx create-react-app . --use-npm
      - npm install -g npm@9.6.6
   - Run npm start to check the app is working.
   - Add extension to help manage the code:
      - ES7 React/Redux/GraphQl/React-Native : (snippets) by dsznajder
      - Prettier : (Code formatter) by esbenp
   - Commit  and push to github tr prepare for initial deployment.

[Back to top](#contents)
#
### Initial Deployment
- Navigate to heroku for initial deployment
- Click on the "new" dropdown and select "Create new app"
- Give the app a name and select the region, I selected Europe for this app. 
- Click the Create app button 
- Under the "Deploy" tab, click on github for deployment method and connect the app.
- Once the app  is connected to the correct github repository, click "Deploy Branch" and open the app in the browser to make sure it works.

[Back to top](#contents)

### Connect the Frontend app with the Backend API
- In order to connect not only the deployed Frontend app but also the development version of the app, we need to provide both heroku and local urls to the API on heroku.
- This was done using the following steps: 
1. Navigate to the deployed Backend api on heroku and go to the "Settings" tab.
2. Set two new Config Vars.
- Next we need to tell the Frontend app where to send requests to.
- This was done using the Axios library using the following steps: 
1. Install the Axios library : npm install axios.
2. Create an api folder inside the src folder and inside create an axiosDefaults.js file. 
3. Set the baseURL to the deployed api,and set the content type and Credentials.

[Back to top](#contents)
#
### Final Deployment
- In GITPOD IDE:

1. Remove React.StrictMode component from index.js.
2. Optimise bootstrap imports by making sure each component is imported individually:
Example:

   ```
   import Navbar from "react-bootstrap/Navbar";
   import Container from "react-bootstrap/Container";
   import Nav from "react-bootstrap/Nav";
   ```
3. Remove console.logs
   - note: I am following the advice of the moments walkthrough instructions and have left the console.logs inside the catch blocks commented out fr easy access to debug things later.

4. Add the Heroku deployment commands in package.json in the "scripts" section.
```
   "heroku-prebuild": "npm install -g serve",
```
5. Add a Procfile to the root of the project with the following command: 
```
web: serve -s build
```
6. After pushing the final version to GitHub, navigate to the app on heroku.
      - Under the deploy tab, scroll to the bottom of the page and click the "Deploy Branch" button.
      - Ensure the build is successful and open the app.
      - Test all feautures in in the final deployed app to make sure everythin is the same and working as it should. 

[Back to top](#contents)
## **Credits**
### Code Institute
This project is a variation and laregely based on the [Code Institute Moments](https://github.com/Code-Institute-Solutions/moments) walkthrough project.
It contains styles and logic from that project which have bee modified for the prupose of this one.



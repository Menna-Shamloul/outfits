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
# Mass Martial Arts

Mass Martial Arts is a crowdsourced library of martial arts gyms in the Greater Boston Area. It includes features such as token authentication and allows for creating, reading, updating and deleting (CRUD) the 'gym' resource in the database. Each gym document includes its name, training concentration, address, hours, and link to their website. One major feature is being able to filter gyms by training concentration (for example, only see 'MMA' gyms, or only browse 'boxing' gyms). Only authenticated 'owners' of each created gym are able to update or delete that respective gym; 'Update' and 'Delete' buttons are not available for a gym unless you are the 'owner'! The app of course includes user features including login, logout, sign up and change password. Only authenticated users are able to view gym profiles. The backend API is built with Express, MongoDB and Mongoose. I had a lot of fun using jQuery, JavaScript, and Boostrap to develop UI flow. As you can tell, I loved using modals for this project. Bootstrap's Carousel and Jumbotron features were super fun to experiment with too. I used Handlebars to format the response from my API into HTML and inserted it into the DOM with jQuery. Each gym is represented by a 'card' with all of its information, along with the Update/Delete buttons if you are the owner of the gym.

This app is useful for anyone who, like myself, is actively looking for certain martial arts gyms. Or, simply for anyone who wants to get in better shape and is looking for a good gym to train at! Even if you don't fall into either of these camps, I still think the app is pretty cool, so check it out if you have some time!

## Important Links

- [Deployed App](https://perryfhuang.github.io/mass-martial-arts-client/)
- [API GitHub Repo](https://github.com/perryfhuang/mass-martial-arts-api)


## Planning Story

I came up with this idea awhile back, maybe even beginning at the end of 2019, before I began SEI. This idea came to me as I was thinking about projects I could develop as I started my software engineering journey. I was also browsing out specific martial arts gyms at the time; I was looking for gyms training in certain concentrations, such as jiu jitsu, boxing and MMA. I wanted a one-stop place where I could filter gyms by martial arts training type, instead of having to Google 'jiu jitsu gyms boston' or 'boxing gyms near me'. The idea is similar to yelp, except for martial arts gyms in Boston! During initial planning, I wanted there to be user reviews for each gym, with a 5 star rating system and an average rating for each gym. I quickly gave myself a reality check and realized I would not have time to develop all the features I envisioned for this project, and instead just went for the MVP (minimum viable product), which is just being able to CRUD gyms, with each gym having a respective owner. This project served as a great learning opportunity for me to prioritize what features I want in an app and manage my time based on this. It helped me learn how to schedule out my time to conquer many small features that add up to big wins, whereas before I would just work on whatever I felt like until I was satisfied. I have learned that this strategy of planning and dividing features into small, conquerable pieces is much more effective for development.

### User Stories

1. As a user, I want to be able to GET list of ALL gyms in the database and GET list of gyms by martial arts concentration.
2. As a user, I want to be able to GET/view details of gyms including: name of gym, type of training, description, owner/creator of gym profile (contact info on user profile), address/location, hours, photos, videos, link to own website, reviews
3. As a user, I want to be able to write reviews on gyms (maybe upload pictures/videos with the review?) and include a rating out of 5 stars.
4. As a gym owner/employee, I want to be able to CREATE a gym profile of my gym, and UPDATE that gym profile, which includes the details listed in user story 2.
5. As a user, I want to be able to learn more about each type of martial art (maybe I have no idea what Brazilian jiu jitsu is and I want to find out more - maybe a quick about page for each concentration - and also what gym can I check out to get started?).

As I have mentioned, a lot of my vision for this app were again, stretch goals. I devicded to have the V1 not include pictures, videos, or a review system. However, these are definitely the first things on my list to work on for future iterations of the app.

### Technologies Used

- HTML5
- CSS/SAss
- Bootstrap
- Javascript
- jQuery
- Handlebars

### Future Iterations

I would really like for this app to be the yelp for martial arts gyms in Boston! This would mean having user reviews, a rating system, and an average rating for each gym. In addition, I would like for there to pictures/videos uploaded by gym owners for their respective gyms, as well as pictures/videos uploaded with user reviews. This would take some work with the API and Mongoose. Another feature I would like to develop is a user profile page, where users can upload profile pictures and update information about themselves such as what gym they train at, what concentrations they train in, how long they have been training, pictures/videos of themselves training, etc. There are many possibilities/ideas for the app to develop further that I have swimming around in my head, but these would be the first two I would work on!

### Planning Wireframes
Page 1
![Wireframe Page 1](https://i.imgur.com/POvLwIO.jpg "Page 1")

Page 2
![Wireframe Page 2](https://i.imgur.com/QR3f7UN.jpg "Page 2")

Page 3
![Wireframe Page 3](https://i.imgur.com/2banINf.jpg "Page 3")

All Pages
![Wireframe All Pages](https://i.imgur.com/dv5MKv2.jpg?1 "All Pages")

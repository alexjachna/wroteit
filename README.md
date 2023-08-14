# Wroteit
A react and tailwind blog page, similar to reddit, where users can create new posts, create an account, and upvote/downvote posts. Able will be able to create new communities where users can post on specific community pages.

## REMINDER ##
This project is a front-end project, meaning that there is no back-end/serverside to be able to save data. This is strictly just showcasing the use of useState to create new posts/communities, as well as the state of who is currently logged in.

------------

v1: basic front page UI

Page contains basic UI and design, with no functionality. Functionality will include the ability to log in, create posts, and like or dislike other posts.

![image](https://github.com/alexjachna/wroteit/assets/57778785/1318d1a7-38ca-4140-be91-857da2e6f320)

------------

v2: Updated <Post/> UI

Page now contains newly updated Post design, as well as a form to submit new posts. Current functionality is only limited to the same post being duplicated.

![image](https://github.com/alexjachna/wroteit/assets/57778785/7e4385d7-5f5f-47cc-ae86-303b483405ea)

------------

v3: Updated Nav bar with responsiveness (no functionality in terms of being able to view profile/communities)

Page now allows users to open a nav bar on mobile, where they can access the 'search' option, their profile, as well as their communities that they are subscribed by default.

![image](https://github.com/alexjachna/wroteit/assets/57778785/6e88afa8-eac7-4941-b827-b5d4a751f10d)

------------

v4: Added raw form of 'login' page

Wroteit now uses react-router-dom to provide the ability to navigate between pages. This will be used to navigate between pages, such as the 'login' page, and the current 'home' page. It will also be used to view a users profile page. EXTREMELY BARE-BONES version of the login page shown below. Will be updated to match the style/theme of the rest of the page.

![image](https://github.com/alexjachna/wroteit/assets/57778785/070444d9-c2f2-4bb6-ba53-1361655468cd)

------------

v5: Added 'update profile' page, and Profile page showcasing users own posts, and profile card

Wroteit now allows users to view their profiles, as well as view their posts they have made. They are also given the ability to change their username, and their bio, to give personality to the account. Currently, the profile page is not responsive, and is currently made for only desktop. Will be fixed in the next version!

![image](https://github.com/alexjachna/wroteit/assets/57778785/ba42a028-6510-4aee-a614-f9f8d918b343)

------------

v6: Added final updates before CODING WEEK (read for more information)

Added finals update preparations for coding week, which is a 4-day coding week where I will attempt to finish the project in a short amount of time, which will include deadlines for each day. The objectives are listed below. Things added this week are: Updated Login page, updated Profile page (text on whether user has posted or not), and basic repsonsiveness throughout the page.

UPDATE: Result of Coding Week ended with an issue involving the 'voting' system for each post. Major changes will be required to be made towards each 'post' object in order to fix the issue. Will be resolved in versions after v7.2.

![image](https://github.com/alexjachna/wroteit/assets/57778785/e89ca508-b165-4ed2-8efc-d6ad7b8ba512)

------------

v7.1: Added community pages/fixed 'unique key' problem

Users can now click on the community of a post to navigate to its own community page, where it will only include posts of that community. Still attempting to make it so users can post in that specific community when visiting that page.

![image](https://github.com/alexjachna/wroteit/assets/57778785/33abba56-6b16-4899-82b4-b24eda2eae12)

v7.2: Added 'vote' component; dealt new problem involving 'likes/voting' in posts (see v6 UPDATE & v7.2 ISSUE)

This version contains the new 'vote' component which will be used for post likes/dislikes, as well as comment likes/dislikes in the future. Image contains an example of a user liking a post, which signals to the user that they have liked/disliked a post.

ISSUE: The current issue with this version is involving the likes/dislikes system for each post. Each post has a fully functioning voting system (users can like/dislike only once), however, the number of likes/dislikes reset each page change, thus causing the voting system to be entirely irrelevent (voting feels temporary and wrong). A potential and possible solution to the fix is to add a new property to each 'post' object/component, that keeps track of its number of likes (similar to each post having its own unique ID).

![image](https://github.com/alexjachna/wroteit/assets/57778785/b2199fd4-301d-41d5-8cf1-ae4df6ab3799)

------------

v8: Added fully functioning voting system on posts

This version contains a fully functioning voting system where users can like/dislike posts. Fix contains every 'Post' component containing a 'likes' property, that saves the number of likes throughout the application. This allows the ability to hop to a new page on the application, and the previous number of likes saves, as well as saving if the user has liked the post or not. v8 also contains changes to images, where images are now directly imported through /src/assets, rather than ../public.

![image](https://github.com/alexjachna/wroteit/assets/57778785/8345b1aa-0a63-4aa1-8ae5-a5b42af66324)
![image](https://github.com/alexjachna/wroteit/assets/57778785/89311740-38d0-4799-b373-904ff0502cae)


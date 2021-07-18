# Project_Name
Trick_Generator

## Description:
```
This is a mobile-first program, and an ongoing project where content is continually added to the games and tricks sections. 
    *(Although at this time if you add something via the contact form it doesn't get added, it's just set up so that down the line that could be made possible.) 
Clicking either button should generate a random video from it's corresponding category, and should open up in a new web pg.

It's also meant to both look and act in a simplistic manner.

```

## CSS Features:
```
. Flexbox was used throughout the entire project with the exception of the hamburger menu. (More flexbox info in the @media section below.)
    - Navigation changes from the hamburger style to having all the navigation links displayed in two different ways.
    - At the largest viewport size the two content divs, with the generator buttons, change from columns to rows. 
. CSS was used to create the little lavender dots that are used to breakup some of the content.
. Selector types that were used: 
    .classes and #ids - Seen throughout the entire CSS stylesheet.
    :nth-child - Used to make the line breaks in the navigation menu for the larger viewport sizes.
    input/button[type=""] - Used to target and style buttons and the input fields in the contact form.
    
```

## JavaScript Features:
```
. function burgNav() was created for the hamburger navigation. 
. function playRandomTVid()/playRandomGVid() were created to open a new window once either button was clicked. Then a random video plays from an array.
. function confirmInfo() was created to confirm that the contact form is submitted without any empty fields.

```
## Other Features: 
```
This project uses 2 sizes of @media: 
    (max-width: 768px)
    - The navigation switches from a hamburger menu to a row layout where the site name is above the remaining navigation buttons.

    (min-width: 1025px)
    - The navigation switches to one line.
    - The image in the main content gets larger. 
    - The divs with with generator buttons break into 2 rows. 

```
## Future Additions: 
```
. Currently the videos are held in lists and can only be added on the backend. There's a few features I'd like to add in the future to better flesh out the program: 
    - Connect the pg to YouTube's API and be able to scrape in videos from specific channels.
    - Actually append any user suggested videos onto the lists the current lists.  

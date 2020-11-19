# Project_Name
Trick_Generator

## Description:
```
This web pg is a mobile-first, ongoing project which continually adds new content to the games and tricks sections. Clicking either button should generate a random video from it's corresponding category, and should open in a new web pg.

It's also meant to both look and act in a simplistic manner.

```

## CSS Features:
```
. Flexbox was used throughout the entire project, except in the hamburger menu. (More info in the @media sections below.)
    - For the navigation menu at both the larger viewport sizes.
    - At the largest viewport size the two content divs with the random generator buttons should seperate into 2 columns. 
. CSS was used to create the little lavender dots that are used to seperate some paragraphs/content.
. Selector types that were used: 
    .classes and #ids
    :first-child and :nth-child 
    input/button[type=""]
    
```

## JavaScript Features:
```
. function burgNav() was created for the hamburger navigation. 
. function playRandomTVid()/playRandomGVid() were created to open a new window once either button was clicked. Then a random video plays from an array.
. function confirmInfo() was created to confirm the email field on the contact form is submitted with a value.

```
## Other Features: 
```
. There's 2 sizes of @media used in this project: 
    - One is a (max-width: 768px)
    . The navigation switches from a hamburger menu to a simple row layout.

    - The other is (min-width: 1025px)
    .The navigation switches to one line.
    . The image in the main content gets larger. 
    . Content with generator buttons break into 2 columns. 





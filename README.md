# The Good Food Restaurant

**This is a website for The Good Food Restaurant made with react.**

[The Good Food Website - Live Site](https://thegoodfood.vercel.app/)

## **Preview**

![The Good Food](/src/images/Web%20capture_13-6-2022_181540_localhost.jpeg)

## Description

If you want an amazing dining experience, you need to come to The Good Food Restaurant. We have it all – great food, wonderful service, and a comfortable atmosphere. Whether you’re looking for a romantic evening out or a night with friends, you’ll find what you’re looking for here.

This website displays just that. It provides information on why the restaurant was established, and what it offers to its customers. In addition, it provides a list some of the dishes on the menu, customer favourites and a section where customers can get in touch with the restaurant.

## Motivation

I first built this project using [HTML and CSS](https://github.com/m-oniqu3/thegoodfoodproject) but managing all the different sections were a bit difficult. At the time I was not practicing using semantic HTML, therefore my code was not organized and all the sections were just `div` tags.
So I decided to rebuild the project using react so I could divide the file into smaller, more manageable components.

## Technologies

This project was built using **React** and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Challenges

Whilst building this project I faced a few challenges.

- I had a difficult time creating the navbar with react. If a user opened the website on desktop, the links in the menu would not show until the user resized the menu. This made for a bad user experience, however, I was able to solve this by using the useEffect hook and a conditional statement.

- I also had a hard time working on the customer favourites section. Getting the design to transition from the mobile design to the desktop design proved difficult for me. It took me a few tries to get it right, and even with the end result I was not able to get the design looking like the [original](https://www.figma.com/file/T1bxEjwZDoPu19u9I9iQAF/the-good-food?node-id=303%3A2) but it is pretty similar and the result is satusfactory.

## Design File

[Figma Design File](https://www.figma.com/file/T1bxEjwZDoPu19u9I9iQAF/the-good-food?node-id=303%3A2)

## Installation

To run this project on your local machine download the project files, run

`npm install` then `npm start`

This will run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.The page will reload when you make changes. You may also see any lint errors in the console.

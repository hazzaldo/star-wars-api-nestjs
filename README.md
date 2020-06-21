# VAUBAN Backend API Test

## Star Wars APIs
A collection of APIs to provide access to the Star Wars characters information.

Refer to the Postman documentation: https://documenter.getpostman.com/view/1139076/Szzn7woE?version=latest 

It contains the following requests:

* Get all characters
* Get character by name (category)
* Get character by height (category)
* Get character by mass (category)
* Get character by hair color (category)
* Get character by skin color (category)
* Get character by eye color (category)
* Get character by birth (category)
* Get character by gender (category)
* Get only the categories by character name
* Get only the categories of all characters
* Get all matched characters by text search (search query)

Please note, the domain name for all API endpoints is based on the scenario where the server is running locally on your local machine. Hence the domain name is `http://localhost:3000`. Otherwise this would be different based on the domain name used.

## Stack

- NestJS

## Guidelines

You will build an API that retrieve a random Star Wars character in JSON format.

- Retrieve a random character from a given category.
- Retrieve a list of available categories.
- Free text search.
- Provide an API documentation that is testable on Postman.

You will find the list of characters into **static/characters.js** file.

You can add any other external packages if you need.

We will pay intention to the way you organize your project and how you handle interactions inside your application.

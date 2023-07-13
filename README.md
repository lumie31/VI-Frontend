[![Netlify Status](https://api.netlify.com/api/v1/badges/9d5a689f-f556-4b5b-838f-1659a140e3cd/deploy-status)](https://app.netlify.com/sites/vi-frontend/deploys)

# VI Frontend

A live copy of the project can be viewed here: https://vi-frontend.netlify.app

## Description

The goal of this project is to implement a call to action component that is responsive and works on all viewport sizes.

## Design Requirements

- Font Sizes

  - Headline: 36px
  - Call to action title: 24px
  - Call to action description: 16px
  - Button text : 12px
  - Contact box title: 24px

  <br>

- Fonts (Google Fonts)

  - Serif: Playfair Display
  - Sans Serif: Roboto Condensed

  <br>

- There are no measurements for this Screen

  - Try to measure by eye. (It will not be evaluated if it is a pixel perfect match)

<br>

- Use any asset or mock image as you like

- The content next to the image is always vertical centered in the grey background

- The whole component has full page width

- A click on the call to action button opens the contact box

- Add a close button for the contact box wherever you think it would make sense from a UX standpoint

- A click on the close button closes the contact box

## Running the Project locally

These instructions will get you a copy of this project up and running on your local machine for development and testing purposes.

### Installing

- Open your local development terminal
- `cd` into the directory that you want the project to reside e.g:

```bash
cd projects
```

- Clone the repository into that directory

```bash
git clone https://github.com/lumie31/VI-Frontend.git
```

- Run `npm install` to install the project dependencies
- Run `npm run dev` to start a local development server
- Navigate to http://localhost:5173 to view the project in your browser

## Running Storybook

To see all components and their variations, we use storybook which allows us to develop our UI components

- Run `npm run storybook` to start storybook
- Navigate to http://localhost:6006 to view the storybook console in your browser

## Technologies used

- React
- CSS
- Typescript
- Vite
- Storybook

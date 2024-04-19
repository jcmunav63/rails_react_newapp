## Rails - React - NewApp

<a name="readme-top"></a>
<div align="center">
    <img src="/logo_jcm_md.png" alt="main-logo" width="500"  height="auto" />
  <br/>
  <h3><b>Rails - React - NewApp</b></h3>
</div>
📗 Table of Contents <a name="table_of-contents"></a>

- [📗 Table of Contents](#table-of-contents)
- [📖 About project ](#about-project)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
    - [Run tests](#run-tests)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [❓ FAQ ](#-faq-)
  - [📝 License ](#-license-)

## 📖 About project: Rails - React - NewApp <a name="about-project"></a>

The Rails - React - NewApp' is a template repo to start an web application set up in one repository, with a back-end developed with Ruby on Rails, and a PostgreSQL database, and a front-end developed with React.js. This setup uses Webpack & the 'jsbundling-rails' gem.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

  <ul>
    <li><a href="https://ruby-doc.org/">Ruby v 3.2.2</a></li>
    <li><a href="https://rubyonrails.org/">Rails v 7.1.3</a></li>
    <li><a href="https://www.postgresql.org/">PostgreSQL v 16.1.1</a></li>
    <li><a href="https://react.dev/">React v 18.2.0</a></li>
    <li><a href="https://redux.js.org/">Redux v 9.1.0</a></li>s
  </ul>

### Key Features <a name="key-features"></a>
- **Set up a Ruby on Rails back-end project together with React.js as the front-end, in one repository.**
- **Set up linters using Stylelint and Rubocop**
- **Connect the Rails project to a PostgreSQL database.**
- **Implement a random 'Hello' message with React and Redux to be displayed at the root page.**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

[Install Ruby](https://www.ruby-lang.org/en/documentation/installation/)

[Set Up Rails](https://www.ruby-lang.org/en/documentation/installation/)

Prerequisites: Ruby, Ruby Development Kit (for Windows), Ruby Gems packaging system, and PostgreSQL database server. Run the following commands...
```sh
$ gem install rails
```

### Setup

```sh
  cd my-folder
  git clone https://github.com/jcmunav63/rails_react_newapp.git
```

### Install

This project requires the following dependencies: the Ruby interpreter, the Gem package manager, the Ruby on Rails web framework, a PostgreSQL database server, the Webpack JS module bundler, the jsbundling-rails gem, and two linters checkers: RuboCop (Ruby) and Stylelint (CSS styles).

- To install all the gems for Ruby on Rails...
```sh
bundle install
```

- To install all dependencies for React, Redux, npm...
```sh
npm install
```

### Usage

To run the project, navigate to the project directory and execute the following command:

Using a GIT BASH terminal, start the Ruby on Rails web server together with the front-end server (React). It will start a development server that updates the page with every change in the fornt or back end...
```sh
  ./bin/dev
```

- This template follows the one-repo Ruby on Rails & React set up detailed in the following article...
Medium [article](https://betterprogramming.pub/react-with-rails-2022-bd28e1fcd355#ad0a) about setting up a Rails + React project (one repo)


### Check linters

* Install the Rubocop and Stylelint linters.

Install the Rubocop linters checker using the following steps...
- First add the following code to the Gem file:
```sh
gem 'rubocop', '>= 1.0', '< 2.0'
```
- Second run the command to install dependicies in your project:
```sh
bundle install
```
- Remember to copy the .rubocop.yml file to your root directory.

gem 'rubocop', '>= 1.0', '< 2.0'

Install Stylelint linters checker using the following command...
```sh
npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
```
- Remember to copy the .stylelintrc.json file to the root directory.

- Copy the linters.yml file inside of path .github/workflows


To run LINTERS, run the following command:

Run the following command for Ruby code...
```sh
rubocop
```

Run the following command for CSS code...
```sh
npx stylelint "**/*.{css,scss}"
```

* Unit tests with RSpec are not set up yet. These tests will be developed in another stage.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

👤 **Juan Carlos Muñoz**

- GitHub: [@jcmunav63](https://github.com/jcmunav63)
- Twitter: [@jcmunav63](https://twitter.com/jcmunav63)
- LinkedIn: [@juan-carlos-muñoz](https://www.linkedin.com/in/juan-carlos-mu%C3%B1oz-5a15b6276/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- **Add instructions to this file in order to use it as a template for new projects using Rails & React.**
- *** Unit, request, and integration tests using RSpec will be developed on another stage.**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

If you like this project please give me a star on Github. Thanks in advance.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank all my colleagues, who inspire me to do my best everyday.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ❓ FAQ <a name="faq"></a>

**Did you create this project from scratch?**

  - It is a simple Ruby on Rails project on the back-end set up in one repository with a front-end developed with React.js. It uses one repo by means of the Webpack JS bundler and the jsbundling-rails gem.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

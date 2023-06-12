# Evaluate a News Article with Natural Language Processing

This project is the final project of Front End Developer Nanodegree program by Bertelsmann Next Generation Tech Booster and Udacity. This application is integrated with MeaningCloud Sentiment Analysis API that allows users to analyze if the text or content of the URL users provided is positive, negative, or neutral using advanced natural language processing (NLP).

# Screenshot

## Starter Page

![Home](https://raw.githubusercontent.com/sirilaktem/udacity-nlp-analyzer-project/master/src/client/images/nlp_screenshot00_start.jpg)

## Sample Article Analysis Using URL

![Sample1](https://raw.githubusercontent.com/sirilaktem/udacity-nlp-analyzer-project/master/src/client/images/nlp_screenshot01_url.jpg)

## Sample Analysis Using Text Input

![Sample2](https://raw.githubusercontent.com/sirilaktem/udacity-nlp-analyzer-project/master/src/client/images/nlp_screenshot02_txt.jpg)

## Sample Analysis Using Text in Other Language

![Sample3](https://raw.githubusercontent.com/sirilaktem/udacity-nlp-analyzer-project/master/src/client/images/nlp_screenshot04_autolang.jpg)

## Sample Error Result

![Sample4](https://raw.githubusercontent.com/sirilaktem/udacity-nlp-analyzer-project/master/src/client/images/nlp_screenshot03_error.jpg)

# Table of Contents

-   [Evaluate a News Article with Natural Language Processing](#evaluate-a-news-article-with-natural-language-processing)
-   [Screenshot](#screenshot)
-   [Table of Contents](#table-of-contents)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Development](#development)

# Installation

[(Back to top)](#table-of-contents)

1.  This application can run on Node.js environment which you can visit [Node.js Download Page](https://nodejs.org/en/download/) to install it or follow instructions on [this article](https://www.mend.io/free-developer-tools/blog/how-to-update-node-js-to-latest-version/) to update to a newer version.

2.  After that please [download](https://github.com/sirilaktem/udacity-nlp-analyzer-project/archive/refs/heads/master.zip) or clone this project to your local computer.

3.  Then open the terminal, navigate to project directory and run this command to install dependencies:

    ```bash
      npm install
    ```

4.  You need to [https://www.meaningcloud.com/developer/login](create MeaningCloud account) to generate the API key.

5.  Create an .env file at the root directory and specify your API key using `API_KEY` as the environment variable

    `API_KEY = XXXXXXXXXXXXXXXXXXXXXXXX`

6.  When everything is set, start the server by running this command:

    ```bash
      npm run start
    ```

7.  Then please access the application through [http://localhost:8081](http://localhost:8081)

8.  To run the test script, use the following command:

    ```bash
      npm run test
    ```

# Usage

[(Back to top)](#table-of-contents)

User can use this app to analyze the sentiment of provided articles or text easily by filling the URL of that article or type in the text in the form field. Then click the submit button.

The results of analysis will show on the result area after form submission. It includes:

-   Text/URL that the user input
-   Type of the input which is either TEXT or URL
-   Polarity
-   Subjectivity
-   Agreement
-   Confidence
-   Irony

You can check the languages supported by this app [here](https://www.meaningcloud.com/developer/documentation/supported-languages).

# Development

[(Back to top)](#table-of-contents)

The starter code of this project is provided [here](https://github.com/udacity/fend/tree/refresh-2019/projects/evaluate-news-nlp), but I decided to develop this project from scratch using the free design from [Untitled UI](https://www.untitledui.com/).

This project is built using third-party resources as follow:

-   Quicksand and Reenie Beanie fonts from [Google Fonts](https://fonts.google.com/)
-   Sentiment Analysis API version 2.1 by [MeaningCloud](https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/what-is-sentiment-analysis)

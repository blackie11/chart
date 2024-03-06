# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   View the bar chart and hover over the individual bars to see the correct amounts for each day
-   See the current day’s bar highlighted in a different colour to the other bars
-   View the optimal layout for the content depending on their device’s screen size
-   See hover states for all interactive elements on the page
-   **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![](./src/images/Screenshot%202024-03-06%20at%2007-26-52%20Frontend%20Mentor%20Expenses%20chart%20component.png)

![](./src/images/Screenshot%202024-03-06%20at%2007-27-29%20Frontend%20Mentor%20Expenses%20chart%20component.png)

### Links

-   Solution URL: [Add solution URL here](https://your-solution-url.com)
-   Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

-   Semantic HTML5 markup
-   SCSS custom properties
-   Flexbox
-   CSS Grid
-   Mobile-first workflow
-   [ChartJS](https://www.chartjs.org/) - JS library

### What I learned

While carrying out this project, i encountered some difficulty in trying to use the chartJS libray to produce a pixel perfect bar chart, now while i als o learn and discover how to use the chartJS i and learn how to manipulate my javaScript code to make the UI better and more interactive with the User, some bugs i still could not fix .
I also learned How to make use of the canvas element in HTML to further make the component more sematic while dynamiclly through javascript add the bar chart to the DOM.
see below:

```html
<canvas class="spending-chart" id="spending-chart"></canvas>
```

```css
.spending-chart {
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid gray;
    cursor: pointer;
}
.sum-total {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .sum-total_left {
        line-height: 1.1;

        span {
            font-weight: bold;
            font-size: 2rem;
            color: $neutral-1;
        }
    }
}
```

```js

     labels,
            datasets: [
                {
                    label: "Amount",
                    data: amounts,
                    backgroundColor: (color) => {
                        console.log(color);
                        let colors =
                            color.index == 2
                                ? " hsl(186, 34%, 60%)"
                                : " hsl(10, 79%, 65%)";
                        return colors;
                    },
                    hoverBackgroundColor: (color) => {
                        let colors =
                            color.index >= 3
                                ? " hsl(27, 66%, 92%)"
                                : "  hsl(25, 47%, 15%)";
                        return colors;
                    },
                    borderColor: "transparent",
                    borderRadius: 5,
                    borderWidth: 1,
                },
            ],
        options: {
            scales: {
                x: {
                    grid: {
                        drawOnChartArea: false,
                        drawBorder: false,
                        drawTicks: false,
                    },
                },
                },
        }
```

### Continued development

While i am happy with my development and learning so far, upscaling to use tailwind css to produce better looking and more appealing display, layout and UI is where i want to head up to while also improving on my JavaScript programming skills.

### Useful resources

-   [ resource 1](https://www.youtube.com) - This helped me to further understand and viualize the project and also how to use chartjs properly.
-   [ resource 2](https://www.chartjs.com) - This is an amazing API which helped me in coding the bar chart . I'd recommend it to anyone still learning this concept.

## Author

-   Website - [Ahiakwo Great](https://www..com)
-   Frontend Mentor - [@blackie1](https://www.frontendmentor.io/profile/blackie1)
-   Twitter - [@GreatAhiakwo](https://www.twitter.com/@GreatAhiakwo)

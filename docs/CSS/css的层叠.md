```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        /* specificity: 0101 */
        #outer a {
            background-color: red;
        }

        /* specificity: 0201 */
        #outer #inner a {
            background-color: blue;
        }

        /* specificity: 0104 */
        #outer div ul li a {
            color: yellow;
        }

        /* specificity: 0113 */
        #outer div ul .nav a {
            color: white;
        }

        /* specificity: 0024 */
        div div li:nth-child(2) a:hover {
            border: 10px solid black;
        }

        /* specificity: 0023 */
        div li:nth-child(2) a:hover {
            border: 10px dashed black;
        }

        /* specificity: 0033 */
        div div .nav:nth-child(2) a:hover {
            border: 10px double black;
        }

        a {
            display: inline-block;
            line-height: 40px;
            font-size: 20px;
            text-decoration: none;
            text-align: center;
            width: 200px;
            margin-bottom: 10px;
        }

        ul {
            padding: 0;
        }

        li {
            list-style-type: none;
        }
    </style>
    <title>Document</title>
</head>

<body>
    <div id="outer" class="container">
        <div id="inner" class="container">
            <ul>
                <li class="nav"><a href="#">One</a></li>
                <li class="nav"><a href="#">Two</a></li>
            </ul>
        </div>
    </div>


</body>

</html>
```


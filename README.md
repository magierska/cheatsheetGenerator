# cheatsheetGenerator

The app is available on heroku: https://cheatsheet-generator-web-test.herokuapp.com/

Run the app in a docker container with:
```
docker-compose up
```

Configuration examples, that can be uploaded to generator, can be found [here](https://github.com/magierska/cheatsheetGenerator/tree/master/example).

## Gallery

### <a href="https://github.com/magierska/cheatsheetGenerator/tree/master/example/shinyJS">shinyJS</a>

<a href="https://github.com/magierska/cheatsheetGenerator/tree/master/example/shinyJS/cheatsheet.pdf">
  <img src="example/shinyJS/images/cheatsheet-1.png" width="300"/> <img src="example/shinyJS/images/cheatsheet-2.png" width="300"/>
</a>

## Content configuration

Content of cheatsheet can be configured by loading .json file and/or editing Configuration (.json) input field.

File structure is presented below:

```
{
	"name": "Library name",
	"description": "Library description",
	"footer": "Content of footer",
	"pages": [{
    "cards": [{
      "title": "Card title",
      "classes": "card_specific_class another_card_specific_class",
      "headerClasses": "card_header_specific_class",
      "bodyClasses": "card_body_specific_class",      
      "methods": [{
        "name": "method",
        "description": "Method description",
        "classes": "method_specific_class",
        "nameClasses": "method_name_specific_class",
        "descriptionClasses": "method_description_specific_class",  
        "parameterClasses": "method_parameter_in_brackets_specific_class",
        "params": [{
          "name": "param",
          "description": "Parameter description",
          "classes": "parameter_specific_class",
          "nameClasses": "parameter_name_specific_class",
          "descriptionClasses": "paremetr_description_specific_class"
        }]
      },{
        "name": "method_without_brackets",
        "description": "Method without parameters in brackets",
        "withoutBrackets": true,
        "params": [{
          "name": "param",
          "description": "Parameter description"
        }],
        "examples": [{
          "name": "method_without_brackets(1)",
          "classes": "example_specific_class"
        }]
      }]
    }]
  }]
}

```

Elements of pages array are cards located on specific page. Cards are displayed in columns in order set in configuration file. For each card title and methods can be defined. Methods is an array containing names, descriptions and parameters. If `withoutBrackets` parameter is not set to `true`, then method parameters are printed between `()` next to method name. In addition, if parameter description is defined, parameter description will appear under method description. Also examples for each method can be added. 

For cards, methods, parameters and examples specific css classes can be defined by `*Classes` parameters, as presented in file structure. If more than one class needs to be specified, they can be splitted with space. Names for these classes need to be different, than already existing ones.

## Styles configuration

You can configure cheatsheet styles with css. Upload your .css file and/or edit Configuration (.css) input field.

### General
The exemplary cheatsheet with possible changes is presented below. Configuration files for this example can be found <a href="https://github.com/magierska/cheatsheetGenerator/tree/master/example/readme-example">here</a>.

<a href="https://github.com/magierska/cheatsheetGenerator/tree/master/example/readme-example/cheatsheet.pdf">
  <img src="example/readme-example/images/css-vis.png" width="300" />
</a>

To edit styles for whole cheatsheet, use `cheatsheet-page` class:
```
.cheatsheet-page {
  background-color: lightGray;
}
```

Header:
```
.header {
  background-color: gold;
}

.header-title {
  color: rgba(255, 102, 0);
}

.header-title-name {
  font-style: italic;
}

.header-description {
  color: white;
}
```

Logo:
```
.logo {
  transform: rotate(180deg);
}
```

Footer:
```
.footer {
  font-weight: bold;
}
```

### Card

<img src="example/readme-example/images/css-card-vis.png" width="200" />

For changes affecting cards use these classes:

```
.card {
  border: 3px solid rgba(255, 102, 0);
}

.card-header {
  border: none;
  background-color: white;
}

.card-body {
  background-color: lightskyblue;
}
```

Methods are located inside cards. Use these classes to change theirs style:
```
.method {
  border-top: 2px dotted black;
}

.method-name {
  color: gold;
}

.method-parameter {
  font-size: x-small;
}

.method-description {
  font-style: italic;
}
```

Also parameters (for each method) can be changed:
```
.parameter {
  border-left: 2px solid rgba(255, 102, 0);
}

.parameter-name {
  text-decoration: underline;
}

.parameter-description {
  text-align: right;
}
```

To change styles of examples this class should be used:
```
.example {
  font-size: x-small;
}
```

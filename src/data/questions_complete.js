// const data = [
//   {
//     category: "HTML",
//     questions: [
//       {
//         question: "Question1",
//         options: ["option1", "option2", "option3", "option4"],
//         answer: "option1",
//       },
//       {
//         question: "Question2",
//         options: ["a", "b", "c", "d"],
//         answer: "b",
//       },
//       {
//         question: "Question3",
//         options: ["1", "2", "3", "4"],
//         answer: "2",
//       },
//       {
//         question: "Question4",
//         options: ["z", "x", "c", "v"],
//         answer: "c",
//       },
//       {
//         question: "Question5",
//         options: ["3", "4", "5", "6"],
//         answer: "6",
//       },
//     ],
//   },
//   {
//     category: "CSS",
//     questions: [
//       {
//         question: "Question1",
//         options: ["option1", "option2", "option3", "option4"],
//         answer: "option1",
//       },
//       {
//         question: "Question2",
//         options: ["a", "b", "c", "d"],
//         answer: "b",
//       },
//       {
//         question: "Question3",
//         options: ["1", "2", "3", "4"],
//         answer: "2",
//       },
//       {
//         question: "Question4",
//         options: ["z", "x", "c", "v"],
//         answer: "c",
//       },
//       {
//         question: "Question5",
//         options: ["3", "4", "5", "6"],
//         answer: "6",
//       },
//     ],
//   },
//   {
//     category: "JavaScript",
//     questions: [
//       {
//         question: "Question1",
//         options: ["option1", "option2", "option3", "option4"],
//         answer: "option1",
//       },
//       {
//         question: "Question2",
//         options: ["a", "b", "c", "d"],
//         answer: "b",
//       },
//       {
//         question: "Question3",
//         options: ["1", "2", "3", "4"],
//         answer: "2",
//       },
//       {
//         question: "Question4",
//         options: ["z", "x", "c", "v"],
//         answer: "c",
//       },
//       {
//         question: "Question5",
//         options: ["3", "4", "5", "6"],
//         answer: "6",
//       },
//     ],
//   },
// ];

// export default data;

const data = [
  {
    category: "HTML",
    questions: [
      {
        question: "Who is the father of HTML",
        options: [
          "Rasmus Lerdorf",
          "Tim Berners-Lee",
          "Brendan Eich",
          "Sergey Brin",
        ],
        answer: "Tim Berners-Lee",
      },
      {
        question:
          "Which of the following is not a difference between HTML and XHTML?",
        options: [
          "Charset in both html and xhtml is “text/html”",
          "Tags and attributes are case-insensitive in HTML but not in XHTML",
          "Special characters must be escaped using character entities in XHTML unlike HTML",
          "Charset in html is “text/html” where as in xhtml it is “application/xml+xhtml”",
        ],
        answer: "Charset in both html and xhtml is “text/html”",
      },
      {
        question: " What is DOM in HTML",
        options: [
          "Language dependent application programming",
          "Hierarchy of objects in ASP.NET",
          "Application programming interface",
          "Convention for representing and interacting with objects in html documents",
        ],
        answer:
          "Convention for representing and interacting with objects in html documents",
      },
      {
        question: "HTML is a subset of",
        options: ["SGMT", "SGML", "SGME", "XHTML"],
        answer: "SGML",
      },
      {
        question: "What is the work of <address> element in HTML5?",
        options: [
          "contains IP address",
          "contains home address",
          "contains url",
          "contains contact details for author",
        ],
        answer: "contains contact details for author",
      },
      {
        question: "What is the correct syntax of web address?",
        options: [
          "port://domain.filenmae:path/scheme/prefix",
          "prefix://scheme.port:domain/filename/path",
          "path://prefix.port:domain/filename/scheme",
          "scheme://prefix.domain:port/path/filename",
        ],
        answer: "path://prefix.port:domain/filename/scheme",
      },
      {
        question: "Which attribute is not essential under <iframe>?",
        options: ["frameborder", "width", "height", "src"],
        answer: "frameborder",
      },
      {
        question:
          "Which attribute specifies a unique alphanumeric identifier to be associated with an element?",
        options: ["type", "article", "id", "class"],
        answer: "id",
      },
      {
        question: " Which HTML element is used for YouTube videos?",
        options: ["<samp>", "<small>", "<frame>", "<iframe>"],
        answer: "<iframe>",
      },
      {
        question:
          "Which of the following is an HTML specification used to add more information to HTML tags?",
        options: ["Modifydata", "Minidata", "Macrodata", "Microdata"],
        answer: "Microdata",
      },
    ],
  },
  {
    category: "CSS",
    questions: [
      {
        question: "Which of the below is the abbreviation of CSS ? ",
        options: [
          "Cascading style sheets ",
          "Coded Style Sheet",
          "Cascade sheets style",
          "Color and style sheets ",
        ],
        answer: "Cascading style sheets ",
      },
      {
        question:
          " Which of the following CSS property is used to make the text bold?",
        options: [
          "text-decoration: bold",
          "font-weight: bold",
          "font-style: bold",
          "text-align: bold",
        ],
        answer: "font-weight: bold",
      },
      {
        question:
          "Which of the following CSS property can be used to set the image as a border instead of the border style?",
        options: [
          "background-image-source",
          "border-image-source",
          "border-image",
          " background-image",
        ],
        answer: "border-image-source",
      },
      {
        question:
          "Which of the following CSS property sets the font size of text?",
        options: [" text-size", "text", "font-size", "size"],
        answer: "font-size",
      },
      {
        question:
          "Which of the following type of HTML tag is used to define an internal style sheet?",
        options: ["<script>", "<link>", "<class>", "<style>"],
        answer: "<style>",
      },
      {
        question:
          "Which of the following tag is used to embed css in html page?",
        options: ["<script>", "<css>", "<!DOCTYPE html>", "<style>"],
        answer: "<style>",
      },
      {
        question:
          "Which of the below CSS properties is used to change the background color of CSS ?",
        options: ["bg color", "color-background", "background-color", "color"],
        answer: "background-color",
      },
      {
        question:
          " Which of the following is the correct syntax for referring the external style sheet?",
        options: [
          "<style src = example.css>",
          "<link rel='stylesheet' type='text/css' href='example.css'>",
          "<style src = 'example.css'>",
          "<stylesheet> example.css </stylesheet>",
        ],
        answer: "<link rel='stylesheet' type='text/css' href='example.css'>",
      },
      {
        question:
          " Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow? ",
        options: [
          "p {background-color : yellow;} ",
          "p {background-color : #yellow;}",
          "all {background-color : yellow;}",
          "all p {background-color : #yellow;} ",
        ],
        answer: "p {background-color : yellow;} ",
      },
      {
        question: "The correct syntax to give a line over text is -",
        options: [
          "text-decoration: line-through",
          "text-decoration: none",
          "text-decoration: overline",
          "text-decoration: underline",
        ],
        answer: "text-decoration: overline",
      },
    ],
  },
  {
    category: "JavaScript",
    questions: [
      {
        question: "What is JavaScript",
        options: [
          "scripting language",
          "assembly language",
          "compiled language",
          "None of the mentioned",
        ],
        answer: "scripting language",
      },
      {
        question: "Which JavaScript keyword is used to declare a variable",
        options: ["var", "let", "Var", "All of the above"],
        answer: "var",
      },
      {
        question: " In JavaScript, single line comment begins with ___.",
        options: ["#", "/*", "$", "//"],
        answer: "//",
      },
      {
        question: " In which HTML element, we put the JavaScript code?",
        options: [
          "<javascript>...</javascript>",
          "<js>...</js>",
          "<script>...</script>",
          "<css>...</css>",
        ],
        answer: "<script>...</script>",
      },
      {
        question:
          "What keyword is used to declare an asynchronous function in Javascript?",
        options: ["async", "await", "setTimeout", "None of the above"],
        answer: "async",
      },
      {
        question:
          "What is the correct syntax for referring to an external script called : 'script.js'?",
        options: [
          "<script href='script.js'>",
          "<script name='script.js'>",
          "<script src='script.js'>",
          "None of the above",
        ],
        answer: "<script src='script.js'>",
      },
      {
        question: "What is the original name of JavaScript?",
        options: ["LiveScript", "EScript", "Mocha", "JavaScript"],
        answer: "Mocha",
      },
      {
        question: "JavaScript arrays are written with _____.",
        options: [
          "round brackets ()",
          "curly brackets {}",
          'double quotes "" ',
          "square brackets []",
        ],
        answer: "square brackets []",
      },
      {
        question:
          "Which JavaScript operator is used to determine the type of a variable?",
        options: ["typeof", "TypeOf", "typeOf", "sizeof"],
        answer: "typeof",
      },
      {
        question: "Which of the following is not a Javascript framework?",
        options: ["Node", "Vue", "React", "Cassandra"],
        answer: "Cassandra",
      },
    ],
  },
];

export default data;

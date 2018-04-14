                    // Current Code I'm working on // 

// 1. Creat function that creates buttons based on strings inside array food

// var food = ["Spicy", "Fish", "Sushi", "Sweet", "Pizza"];
// var chosenFood = [];
// function createButtons() {
//   console.log("inside function");
//   for (var i = 0; i < food.length; i++) {
//     var a = $("<button>");
//     a.addClass("food");
//     a.attr("data-name", food[i]);
//     a.text(food[i]);
//     $("#foodButtons").append(a);
//   }
//   $("#foodButtons").on("click", ".food", function () {
//     var filter = $(this).attr("data-name");
//     console.log(filter);
//     var foodPush = [];
//     foodPush.push(filter);
//     chosenFood.push(foodPush);
//     // chosenFood.push(filter);
//     // console.log(chosenFood);
//   });
// };
// console.log(chosenFood);

// createButtons();
// //currently works

// // 2. add keyword and set the variable of keyword to chosenfood
// function search() {
//     var search = {
//       bounds: map.getBounds(),
//       types: ['restaurant'],
//       keyword: chosenFood
//     };

// currently works



































                   // All notes and reference code 


// // Gloal variables
// var keywords = ["crispy", "sweet", "sour"];
// var keywordText = $("#keywordInput").val().trim();
// var keywordDiv = $("#HoldFilters");
// // var elementContainer = document.createElement("div");
// // elementContainer.attr("class", "container");
// // elementContainer.attr("input type", "checkbox");
// // var elementCheckBox = document.createElement("input type", "checkbox");


// // Create function that when the keyword submit button is clicked, a function runs to create a div container, a checkbox element, and text to creae a filter
// $("#keywordSubmit").on("click", function () {

//     // create div element
//     // var inputElementContainer = document.createElement("input");
//     //  // add type, class, id, name
//     // inputElementContainer.attr("type", "checkbox");
//     // inputElementContainer.attr("class", "chk-btn");
//     // inputElementContainer.attr("id", keywordText);
//     // inputElementContainer.attr("name", "filter");
//     // console.log(inputElementContainer);
//     // create checkbox element
//     var elementCheckBox = ("input", "checkbox");
//     console.log(elementCheckBox);
//     // put this newly formed container into the existing div with the 3 starter keywords
//     // append the conatiner to the textbox
//     keywordDiv.append(keywordText);
//     // keywordDiv.append(keywordText);
//     console.log("check box should show up")
//     // create form to add new key words
// });











// Pseudo code for registering filters
// 1.  Limit the amount of filters to 3 filters.
// 2. Pull key words inputted by user in an input text bar, and push them into an empty array
    // in the $("#"), call the appropriaate 

// // global variable
// var popularFilters = ["salty", "bitter", "tart", "smoky", "spicy/hot", "creamy", "crumbly", "crunchy", "greasy", "gooey"]; 
// var chosenFilters = [];

// function storeFilter() {
//     var filter = $(this).attr("data-filter");

//       // Function for displaying movie data
//       function createButtons() {
//         // Deleting the buttons prior to adding new movies
//         // (this is necessary otherwise you will have repeat buttons)
//         $("#buttons-view").empty();
//         // Looping through the array of movies
//         for (var i = 0; i < popularFilters.length; i++) {
//           // Then dynamically generating buttons for each movie in the array
//           // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
//           var a = $("<button>");
//           // Adding a class of movie to our button
//           a.addClass("filter");
//           // Adding a data-attribute
//           a.attr("data-filter", popularFilters[i]);
//           // Providing the initial button text
//           a.text(popularFilters[i]);
//           // Adding the button to the buttons-view div
//           $("#DivTheFiltersWillAppearIn").append(a);
//         }
//       }
//     }



    // function filterss (pushedFilterArray) {
    //     var keywords = [];
    //     var a; 
    //     var inputTextBar = $("#inputTextBox").val().trim();
    //     for (var i = 0; i < keywords.length; i++) {
    //         a.text(inputTextBar);
    //         $("#displayFilterDiv").append(a);
    //     }


    //     // var pushedFilterArray = [];
    //     // var keywords = []
    //     // pushFilterArray.push(inputTextBar);
    //     // return(pushedFilterArray);
    // };
   
// 3.  Place filters into variables such as filterOne, filterTwo, filterThree, filterFour. 
    // var a = pushedFilterArray[0];
    // var b = pushedFilterArray[1]; 
    // var c =  pushedFilterArray[2];
    // var comboOne = a + b;
    // var comboTwo = a + c;
    // var comboThree = b + c;
// Create API config + key
// create basic html and bootstrap for input
// create var queryURL with website address inside
// Create variable that will hold what the user types use .val()

var search = $("addPlaceBtn").val()
var queryURL = "https://www.yelp.com/search?ns=1&amp;find_desc=" + search + "&amp;choq=1&amp;find_loc=";

// Find out where in the yelp address the key belongs. 

var apiRequest = "Authorization: Bearer <Ssylx13SLkEUzgFPPcO2IgvRFfvhKMNWBXcgCzxQQ4iqgXQel_HMAfsgQzKPEvVwpf8HInOrTABqT1f3rVH7l6Vtvw41CfnsuTXLB_agEO5y8pfpqeNLEc9ppYbNWnYx>"



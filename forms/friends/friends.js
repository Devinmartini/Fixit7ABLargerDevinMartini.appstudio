let firstFriend = prompt("Enter the name of your first of three friends.")
let secondFriend = prompt("Enter the name of your second of three friends.")
let thirdFriend = prompt("Enter the name of your third of three friends.")
let bestFriendNumber = Number(prompt("Enter a 1 if your first person was your best friend, a 2 for the second, and a 3 for the third"))

var friendNames = []

friendNames[1] = firstFriend
friendNames[2] = secondFriend
friendNames[3] = thirdFriend
let bestFriend = friendNames[bestFriendNumber]

if (bestFriend.charAt(0) == "A") {
   alert("Your best friend's name starts with A.")
} else if (bestFriend.charAt(0) == "B") {
   alert("Your best friend's name starts with B.")
} else {
   alert("Your best friend's name starts with something other than A or B.")
}


//set variables to define each of the three friends
//lowercased prompt on line 3
//changed the alert to a variable with a prompt on line 4
//changed what bestFriend is; added a literal that links best friend to the prompt
//changed the paranthesis to brackets on line 6
//got rid of semicolons (didn't need to just to make everything uniform)
//added brackets to the if, else if statements
//added another equals sign on line 15
//changed friends' to friend's (didn't have to but for grammer)
//changed your name to best friend's name on line 18
//changed firstChar() to charAt(0)



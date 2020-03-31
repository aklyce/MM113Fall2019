const StarTrekTweet = {
    name: 'Star Trek',
    handle: '@StarTrek',
    text: 'Welcome to the OFFICIAL Star Trek Twitter Page!'
}

const links = ['https://twitter.com/StarTrek', 'https://twitter.com/StarTrek', 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/26/1530003551-star-trek.jpg']

const modifyText = () => {
  //Change the text of message2 to be the message of the StarTrekTweet object
  //Change the text of user2 to be the handle from the StarTrekTweet object
  //Changes the text of message 2 class to be the handle from the StarTrekTweet object
  // YOUR CODE BELOW THIS LINE.
    document.getElementById("message2").innerHTML = StarTrekTweet.text;
    document.getElementById("user2").innerHTML = StarTrekTweet.name;
    document.querySelector('#link2').innerHTML = StarTrekTweet.handle;
}

const changeLinkAndImageAttributes = () => {
  //Set the href attribute for link1 to point to the first element in the links array
  //Sets the href attribute for link2 to point to the second element in the links array
  //Sets the src attribute for the Ohlone image to point to the third element in the links array
    document.querySelector('#link1').href = links[0];
    document.querySelector('#link2').href = links[1];
    document.querySelector('#Ohlone').src = links[2];
}

const changeClassAttribute = () => {
  //Update the changeClassAttribute
  //function so that it replaces the “tweet” class with the “tweet-pink” class for the two tweets.
  // change id="tweet1" class="tweet" to id="tweet1" class="tweet-pink"
  // YOUR CODE BELOW THIS LINE
    document.getElementById('tweet1').className = 'tweet-pink';
  
}

const appendElements = () => {
  //A. An "a" element (a link) to the bottom of tweet1 that links to Ohlone College
  //(http://www.ohlone.edu) and has a link text that say "Intro to JavaScript."
  //B. An "img" element (an image) to the bottom of tweet1 that
  //points to an image of your choice,symbolizing something about the course.
  //id="tweet1"
  // YOUR CODE BELOW THIS LINE
    const newLink = document.createElement ('a');
    newLink.href = 'http://www.ohlone.edu';
    newLink.appendChild(document.createTextNode('Intro to Javascript'));
    document.getElementById('tweet1').appendChild(newLink);
    const img = document.createElement('img');
    img.src = "https://icatcare.org/app/uploads/2018/06/Layer-1704-1920x840.jpg"
    document.getElementById('tweet1').appendChild(img);
}

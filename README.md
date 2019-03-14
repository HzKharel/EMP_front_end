# Web Technologies

## Hari Kharel – 40312824

#### COURSEWORK 1 – DESIGNING A WEBSITE WHICH ENCODES AND DECODES CIPHERS



## Introduction

### Overview

As per the coursework requirements, the website is developed and designed to suit all the basic
required features such as an area to enter the message, area to show encoded and decoded messages,
way to select different ciphers and finally a way to decipher. The website also implements a host of
additional functionality such as a responsive design to suit different screen sizes, A game based on the
encryption methods and Speech synthesis. The technologies used, as specified by the requirements
were HTML, CSS and JavaScript. No additional languages or frameworks were used.

### Choice of Ciphers

For this project, my chosen ciphers were ROT 13, Vignere Cipher, Autokey Cipher, Morse Code and
Binary.

**ROT 13** was chosen as its algorithm was covered in the labs and is a basic one that does not require a
key. Unlike the lab implementation, my implementation preserves case and not letter characters that
may have been entered. The labs served as background reading for ROT 13.

**Vignere Cipher** was chosen as it involves the usage of a key. It introduces a bit more complexity
compared to ROT 13. As for background reading, Wikipedia and various YouTube videos were used to
understand the algorithm it employs.

**Autokey Cipher** builds up on the complexity of the Vignere Cipher as it adds a dynamic key stream.
Similarly to Vignere Cipher, YouTube videos, Wikipedia articles were used for background reading.

**Morse Code** was chosen as it allows for audio feedback of the cipher and additional features. Wikipedia
was used as part of the background reading.

**Binary System** was also added to the project to have a unique feature to everyone else.


## SOFTWARE DESIGN

### Cipher Page Design

Before designing the software, few basic yet critical requirements were gathered. Some of them being;
webpage scalability, fluid flow and DOM elements & JavaScript interaction.

A sketch of the website was created in paint to serve as a guideline. The layout is containerized where
everything has its space. The design also considers different screen sizes, rather than using pixels, most
if the elements take up a percentage of the screen. On narrow devices, the elements are automatically
shifted around and in a vertical layout rather than the default horizontal. The diagrams below illustrate
the software design in a browser and a mobile browser.

Fig 1.1, 1.2 – Software layout in webpage and mobile

After designing the user interface, another important design decision was how the webpage interacts
with JavaScript. To simplify and improve readability, the DOM only calls the main JavaScript class, with a
few exceptions. This allows for one central place to modify the interaction. The ciphers were designed to
take few input parameters, run the algorithm and return the output. They do not directly update the
web page. The main entry point class handles that. The diagram below illustrates the interaction and
shows the previously mentioned exceptions.


Fig 1.3 – DOM interaction of the cipher page

### Game Page Design

As for the game page design, the HTML DOM elements directly interact with the game script. While
some functions are internally called by the game, the two accessible ones to the DOM are; new_game()
and user_letter_guess(). The diagram below illustrates how the Web page interacts with the game
script.

Fig 1.4 – DOM interaction of the game page.


## Implementation

### Cipher Implementation

Since the implementation was planned out, it made it very easy to just plug everything together and
make it work. During the implementation, A couple of problems with the CSS occurred which were not
expected.

Some features which were not designed initially were also implemented, such as Voice to Text synthesis
as well as Text to Speech for Morse Code. These were added after the implementation of the design to
enhance the features and user experience.

Fig 2.1 – The home page of the Website. Includes a navigation bar on the left, the cipher in the center
and the description on the Right. The description changes to fit the cipher when one is selected.


Fig 2. 2 – Shows the Autokey Cipher in action. The description on the right has also changed. The
descriptions for the ciphers were adapted from Wikipedia.

### Game Implementation

As for the game page implementation. It’s very simple and mostly text based. The game displays a
random country encrypted with a random encryption method. It gives users 5 tries to guess the country
correctly. If they guess it correctly, the game is then won, otherwise the user loses.

Fig 2.3, 2.4 – Shows the game in progress and the win screen.

## Critical Evaluation

The implementation of the website went as planned in the design phase. All the outlined features work
as intended. The finished webpage was faithful to the design but has also incorporated few additional
features. All the requirements outlined in the project requirements were met a function as intended.

A logical extension to the website would be to create a mobile app using React and React Native to
make the webpage scale better for mobile as well as optimize the layout. A leaderboard could be
implemented for the game as an extension, making use of Node.js. Finally, another feature that could be
implemented would be saving previously encrypted/decrypted messages using page cookies.

## Personal Evaluation

Undertaking such project increased my knowledge of how the web works and how to build production,
finished apps. This project gave me an opportunity to use version control system to keep track of my
project. It also allowed me to experiment with different features knowing that I could revert to fully
working state if anything were to go wrong. This project also gave me an opportunity to break down a


problem/idea to basic components and solve them one at a time. On top of that, my knowledge of
HTML, CSS and JavaScript increased as I implemented features that were not covered in classes.

## References

CSS tutorials and guidelines: https://www.w3schools.com/

Microphone Icon: https://www.istockphoto.com/

Cipher algorithms: https://www.wikipedia.org/



# ReactExamples

I take notes on the React course on Udemy by Max. I only write down things that I deem important.

## Where are the examples?

Go into a folder (like /section2) and there will be a README.md with all the notes.

## How do I run code?

To run .js files, you can either:

1.  Run them on your browser (browsers come with an engine for running .js files, but you will need to setup an HTML document).
2.  Use Node.js! (which is what I do).

### Using Node.js to run .js files
1. Go to https://nodejs.org/en/ and download the LTS (long term support) version.
2. In your proejct folder type `npm init` (npm or node package manager helps setup your project) and enter all the details (or spam your Enter key).
3. Add `"type": "module"` to the `package.json`. See `package.json` in this project if you need an example. Adding this is needed for running ES6 module stuff.
4. Make sure you're in the right folder with the `.js` file you want to run. Use `cd <directory>` to move directories or `cd ..` to go back.
5. Run `node my_file.js` in your terminal and voila! 

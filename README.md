This project was challenging and rewarding.  there was a lot of googling for direction on scripts for both populating and "drawing" on the etch a sketch.

I knew I wanted to use a CSS grid for my sketchzone. to define the grid size by prompt, I used CSS variables (excited about this functionality) to dictate the number of rows and columns in the grid with 1 fr each.  grid-coloumn and grid-row start: auto allowed the grid to fill square at a time in order.  the JS prompt takes the size of the grid, then plugs it into the :root variables --rowNum, --colNum.  then createGridDiv uses the css variables to determine the number of divs to populate the grid with and loops the creating until the right number is reached.  finally the draw function loops through each div on the sketchpad and assigns an event listener to change the background color on a mouseover.

I had a hang-up with resetting the grid - initially I had a button click just take away all the color from the divs, however, when creating a new set, it would just add to the list of divs, instead of replacing and renewing.  so starting with a grid size of 16 would produce 256 divs.  after clicking reset and establishing a grid size of 100, I would have a total of 10256 divs..... this didnt work and only allowed for drawing on the top half of the etch a sketch, as the newly added divs didnt get the command to take drawing.  it also, of course, produced an inaccurate grid size.  I fixed the cleanSlate function to remove all child elements first, before adding the new grid dementions. looping through each successive first child and removing it until their was no longer a child element.

The only bug which still needs fixing is if the prompt does not recieve a value or cancel.  I've written an "if" statement in the function to address this, but it broke functionality down the line and I didnt want to open a new can of worms.... I will address this later. for now time to move on :)
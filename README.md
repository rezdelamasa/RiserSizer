# RiserSizer

RiserSizer is an app I am currently developing that will help plumbing engineers size domestic water piping throughout buildings. The user simply creates a riser, initializes the starting floor with a label, then selects fixtures to add from the sidebar list of fixture types. All corresponding information and properties attached to each fixture so as the user adds or removes fixtures, the total fixture units, GPM's, and Pipe Size is calculated synchronously.

_A live demo of the current version, as seen in the "Done" Section can be found [here](https://rezdelamasa.github.io/RiserSizer/)._

## Done

* User can create a riser.
* User is prompted to initialize the riser with two forms: one for riser label and one for initial floor label.
* User can select fixtures to add to the floor.
* User can create a new floor either above or below and add fixtures.
* User can select another floor to edit.
* User can clear a whole floor of fixtures. _This is currently only a visual clear, it is not yet represented in the data._
* User can return to overview page to view all risers and the last edited riser is saved automatically.

## To Do

* Represent the clearing of a floor in the data.
* Add a running total of FU's, GPM's, and Pipe Sizes. 

  * _Each fixture has a set of properties, including their Fixture Units (FUs). The app must calculate the total number of fixtures on a floor and the corresponding FUs total, which then dictates the total GPMs, which then dictates the appropriate pipe size. All of this is done everytime the user adds a new fixture. There is essentially a running total in the background._
* Allow user to completely delete either the last or first floor of a riser. _Allowing a user to delete floors in the middle ruins the ordering, especially when it comes to the floor labels. Instead the user can just clear a "middle" floor and re-add fixtures again._
* Allow user to create another riser when they finish one and return to the overview page. 
* Allow user to group risers together so that the main pipe serving a group can be properly sized. Also allow them to indicate where that main pipe is located for accurate sizing.
* Allow users to indicate where the main pipe is serving all risers and riser groups, so that the final pipe can be sized.
* Allow users to create fixture groups on floors, and have the app calculate the size of the pipe serving each group and the pipe serving all groups on the floor.
* Allow user to create frequently used fixture groups that will be selectable from the sidebar. This allows users to quickly and easily add groups throughout the building, instead of clicking three separate fixtures every time.
* Make the overview page more comprehensive of what is in the data without making it too cluttered. _If the user wishes to see more information about a riser, they can just simply click to open the riser in the editor._
* Allow user to edit a riser by clicking its label.
* Allow user to clone risers and enter a new label for it. 

  * _For some buildings, layouts are typical which means some risers are identical, with the possiblity of some deviations. This allows for efficiency so that the user doesn't have to completely create another riser from scratch._
  
* Also allow user to clone floors either above or below.

  * _As stated above, sometimes layouts are typical, so allow the user to clone a floor for convenience._
* Allow user to delete risers.
* Allow user to edit riser labels.
* Allow users to print their overview page.
  * _This will, for the meantime, be a way for users to save a copy of their completed work while the backend is worked on._
* Warning message when the user leaves the page or refreshes. Just ensure that the user doesn't lose their work as there is not currently a way to save.

_This list will be updated as progress is made, I can't foresee more any features until I start to progress through the to-do list._

## Backend to-do (Won't happen until the front end is completed, which could be a while)

* Allow user to create accounts. This will allow users to:
  * Save their work online.
  * Edit and view past work.
  * Share their work with collaborators and colleagues.
  * Clone past projects under a different project number in the case of updates or renovations to an old job. This allows the user to keep both the new and old versions but then they don't have to start the new version from scratch.
  * Edit their preferences
    * For example, there are a total of 27 fixtures to select. Maybe a user frequently uses only a number of them. They would be able to save a favorites list which would show up as another tab on the fixtures sidebar.
    * Eventually, I'd probably like to allow the user to edit their color preferences. An idea would be to make it look similar to their AutoCAD color palette.

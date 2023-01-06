## React Projects Starter APP
Objectives -
Loading Screen,
Data Fetch using useEffect as the page loads 
Read More and ReadLess functionality inside Tour Description
Remove the specific component when Not Interested button is clicked
Remove All Tours When Clear All Button is clicked
Display No More Tours Available when All the Tours are Deleted


Steps
Create 2 useStates, Loading to define LoadingState. Tourdata to hold the json that was fetched from url
Set async fetchtour func with try and catch 
Set Conditional Rendering using if statements.
ex if(loading){             //To Display Loading
}
    if(tours.length=== 0) { //To Display Content When all Tours are Deleted 
	
}
return (  //Default return

)
Create a removeTour func that takes in an id and sets the state of Tourdata by removing the specific id from its array
Create a Tours Component and pass tourdata and removeTour functionality to it.
Add in the necessaary classes for CSS to target the elements in it.
Create a Tour Component within Tours and pass in the props tourdata and removeTour func
Iterate the tour component with the tourdata prop passed to it. 
Add a Not interested button and set onCLick to removeTour func passed in prop.
(This method of passing prop from parent to nested child components is also referred as "Prop Drilling",
 This can be omitted by using a context API which comes in other projects down the lane)
Add a state inside tour component for ReadMore and ReadLess Logic.

Syntax to remember:
info.substring(0, 200) -  
propname.substring(startval,maxval) helps in showing only the necessary strings from a huge paragraph 

While iterating, the element should always have a id 
ex: {tourdata.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removetour} />;
        })}


Things to remember

removeTour func was passed as prop to this component.
The funcs that are passed as prop to component, when used in onClick 
is expected to follow the syntax
onClick={()=>removeTour(id)} 

While passing prop data such as id from Component to functions inside onclick,
The syntax should be 
onClick={()=>removeTour(id)}   //correct
and not 
onClick={()=>removeTour({id})} //wrong

React is case-sensitive. So the propname that you pass in parent component should be same as you receive it inside the function\

Ex. <Tour tours={tours} removeTours={removeTours}> //Component

    const Tour = ({tours,removeTours}) => { This is correcr
 
I made a typo as  
    const Tour = ({tours,removetours}) => { //t in removeTours is small, Different name- Hence wrong

Took me so long to figure out this error. Very important. Becareful



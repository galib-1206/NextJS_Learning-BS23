//our-domain.com
//showing meetup lists
import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";


// create dummy object to pass
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Uganada",
    description: "This is a First Meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Barmuda",
    description: "This is a Second Meetup!",
  },
];

function HomePage() {
  const [loadedMeetups, setLoadedMeetups]= useState([]);

  useEffect(() => {
    //send a http req & fetch data
    setLoadedMeetups(DUMMY_MEETUPS)

  }, []);
  return (
    
     
      <MeetupList meetups={loadedMeetups} />
  );
}

export default HomePage;
/* Rendering:

 At first Home component page rendering->loadedMeetups will be  an empty array
 in that moment UseEffect will be executed->update state->component will be executed again
 ->Rerendering list 

so, there's is 2 render cycle -> create issue in search engine optimization(SEO)

if we see in page source after 1st rendeing , items (are seen in the UI) will be found empty in HTML page
which is fetching from server ! (becuase 2nd cycle is not occured yet)

So, Pre rendering is a solution for this As it's not waiting for 2nd cycle 
Also SEO optimization is quick , not loading!!!!!
*/
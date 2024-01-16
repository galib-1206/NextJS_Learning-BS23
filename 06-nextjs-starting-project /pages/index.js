//our-domain.com
//showing meetup lists
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

function HomePage(props) {
  // const [loadedMeetups, setLoadedMeetups]= useState([]);
  // useEffect(() => {
  //   //send a http req & fetch data
  //   setLoadedMeetups(DUMMY_MEETUPS)
  // }, []);
  return (
      <MeetupList meetups={props.meetups} />
  );
}

//async(promising)-> wait intill data is loaded
//getStaticProps(), creats props for the page at the very first before executing component page.

export async function getStaticProps() {
  //fetch data from API or read DB
  return {
    props:{
      meetups:DUMMY_MEETUPS
    }
  }
}

export default HomePage;
/* Rendering:

 At first Home component page rendering->loadedMeetups will be  an empty array
 in that moment UseEffect will be executed->update state->component will be executed again
 ->Rerendering list 

so, there's is 2 render cycle -> create issue in search engine optimization(SEO)

if we see in page source after 1st rendeing , items (are seen in the UI) will be found empty in HTML page
which is fetching from server ! (becuase 2nd cycle is not occured yet)

So, Pre rendering(SSG,SSR) is a solution for this As it's not waiting for 2nd cycle 
Also SEO optimization is quick , not loading!!!!!

--SSG
By default, NextJS prepared pages staticly in build process. 
When you use the getStaticProps function in a Next.js page, the page is automatically pre-rendered at build time. 
The data returned from getStaticProps is used to generate the static HTML pages.
The generated HTML pages are stored and served to clients without the need for additional server-side processing.
These static pages can be served from a Content Delivery Network (CDN) for improved performance and lower latency.
*/
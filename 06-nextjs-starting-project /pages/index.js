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

function HomePage() {
  return (
    
     
      <MeetupList meetups={DUMMY_MEETUPS} />
  );
}

export default HomePage;

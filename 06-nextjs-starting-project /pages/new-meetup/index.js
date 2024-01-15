// our-domain.com/new-meetup
 import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    function AddMeetUpHandler (meetupData){
        console.log(meetupData);
    }
    return <NewMeetupForm onAddMeetup = {AddMeetUpHandler} />

}

export default NewMeetupPage;
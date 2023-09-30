import '../pages/EmailGeneration.css';
import { useState, useEffect } from "react";

function EmailGeneration () {
    const [events, setEvents] = useState();
    const [email, setEmail] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("http://localhost:3001/getEvents");
                if (!response.ok) {
                    throw new Error(`Request failed with status: ${response.status}`);
                }
                console.log(events);
                const data = await response.json();
                setEvents(data);
                console.log(events);

                const emailString = data.map((x) => (
                    `${x.eventName}, `
                  )); 

                  setEmail(emailString)

                
                    
    
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []); 

    return (
        <div>
            <h1 className='text1'> Today's Events </h1>
            <h1 className='text1'> {email}</h1>


            <h1 className='text1'> Upcoming events! </h1>
            <h1 className='text1'> {email}</h1>
            
            
        </div>
    );
}

export default EmailGeneration;

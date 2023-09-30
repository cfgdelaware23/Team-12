import './EventData.css';
import Navbar from '../components/Navbar/navbar';

function EventData() {
    const [events, setEvents] = useState([]);

        async function fetchData() {
          const options = {
            method: 'GET',
            mode: 'cors',
          };
    
          try {
            const response = await fetch('http://localhost:3001/EventData', options);
            const data = await response.json();
    
            
            const firstTenEvents = data.slice(0, 10);
            setEvents(firstTenEvents);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        fetchData();
      }

    return(
        <>
    <Navbar />
    <h1>Event Data</h1>
    <div class = "data">
        <table>
            <tr>
                <th> Event Name: </th>
                <th> Host </th>
                <th> Volunteers </th>
                <th> Streamer </th>
                <th> Broadcaster </th>
                <th> Facilitator </th>
                <th> Moderator </th>
            </tr>
        </table>
    </div>
    </>
    )
    
}

export default EventData;
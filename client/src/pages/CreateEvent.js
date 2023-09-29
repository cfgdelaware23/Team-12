import './CreateEvent.css';
import {useState} from 'react'
function CreateEvent() {
const [form, setForm] = useState({name: "",timeStart: "",timeEnd: "",url:"",recurring:false});

const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

const submitEvent = (event) => 
{
    event.preventDefault();
    //post data 
}
  return (
 <div className = "form">
     <label type = "text" value = {form.name} onChange = {handleChange}>Podcast Name</label>
     <label>
          Pick your preferred day of the week:
          <select  onChange={handleChange}>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </label>
        <label>
          Pick your preferred start time:
          <select  onChange={handleChange}>
            <option value="9-AM">9:00 AM</option>
            <option value="9-30-AM">9:30 AM</option>
            <option value="10-AM">10:00 AM</option>
            <option value="10-30-AM">10:30 AM</option>
            <option value="11-AM">11:00 AM</option>
            <option value="11-30-AM">11:30 AM</option>
            <option value="12-PM">12:00 PM</option>
            <option value="12-30-PM">12:30 PM</option>
            <option value="1-PM">1:00 PM</option>
            <option value="1-30-PM">1:30 PM</option>
            <option value="2-PM">2:00 PM</option>
            <option value="2-30-PM">2:30 PM</option>
            <option value="3-PM">3:00 PM</option>
            <option value="3-30-PM">3:30 PM</option>
            <option value="4-PM">4:00 PM</option>
            <option value="4-30-PM">4:30 PM</option>
            <option value="5-PM">5:00 PM</option>
            <option value="5-30-PM">5:30 PM</option>
          </select>
        </label>
        <label>
        Pick your preferred end time:
        <select  onChange={handleChange}>
            <option value="9-30-AM">9:30 AM</option>
            <option value="10-AM">10:00 AM</option>
            <option value="10-30-AM">10:30 AM</option>
            <option value="11-AM">11:00 AM</option>
            <option value="11-30-AM">11:30 AM</option>
            <option value="12-PM">12:00 PM</option>
            <option value="12-30-PM">12:30 PM</option>
            <option value="1-PM">1:00 PM</option>
            <option value="1-30-PM">1:30 PM</option>
            <option value="2-PM">2:00 PM</option>
            <option value="2-30-PM">2:30 PM</option>
            <option value="3-PM">3:00 PM</option>
            <option value="3-30-PM">3:30 PM</option>
            <option value="4-PM">4:00 PM</option>
            <option value="4-30-PM">4:30 PM</option>
            <option value="5-PM">5:00 PM</option>
            <option value="5-30-PM">5:30 PM</option>
            <option value="6-PM">6:00 PM</option>
            <option value="6-30-PM">6:30 PM</option>
          </select>
        </label>
       <label type = "text" onChange = {handleChange} value = {form.url}></label>
       <label type = "checkbox" onChange = {handleChange} ></label>
    <button className ="submit" onSubmit = {submitEvent}>Submit</button>

 </div>

  );
}

export default CreateEvent;

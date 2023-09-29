import './CreateEvent.css';
import {useState} from 'react'
function CreateEvent() {
const [form, setForm] = useState({name: "",timeStart: "",timeEnd: "",url:"",recurring:false,recurringTwice:false,recurringThree:false,recurringFour:false,tags:[]});

const checkTime = ()=>
{

}
const handleChange = (event) => {
    
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
    console.log(form[name])
  };
  const handleClick = (event) => {
    
    console.log(event.target.name)
    const n = event.target.name
    setForm({ ...form, [event.target.name]: !form[n] });
    
  };

const submitEvent = (event) => 
{
    event.preventDefault();
    //post data 
}
  return (
 <div className = "form">
     
     <label>Name of Call:<input type = "text" value = {form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}></input></label>
     <div className = "day">
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
        </div>
        <div className = "startTime">
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
        </div>
        <div className = "endTime">
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
        </div>
        <div className = "url">
       <label type = "textarea" onChange = {handleChange} value = {form.url}>URL:</label>
       </div>
       <div class = "recur">
       <label>Is this a recurring event? <input name = "recurring" type = "checkbox" onChange = {handleClick}></input></label>
       </div>
       <div class = "recurrField">
       { form.recurring && 
       
       <label>How does it reccur? ?<select name = "recurringTwice"  onChange={handleChange}>
              <option value = "once">Once a Week</option>
              <option value = "other">Every other Week</option>
              <option value = "monthly">Once a month at this time</option>
            </select></label>}
            </div>
        <div className = "tags">Which of these apply to your event:
            
            
            </div> 
       
    <button className ="submit" onSubmit = {submitEvent}>Submit</button>

 </div>

  );
}

export default CreateEvent;

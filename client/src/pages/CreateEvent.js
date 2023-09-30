import './CreateEvent.css';
import {useState} from 'react';

import DateObject from "react-date-object";
import Navbar from '../components/Navbar/navbar';
function CreateEvent() {
const user = localStorage.getItem('user')
const cur_date = new Date()
const [form, setForm] = useState({date:cur_date,name: "",timeStart: 0.0,timeEnd: 30.0,url:"",recurring:false,recurringTwice:false,recurringThree:false,recurringFour:false,tags:[],desc:""});


async function adjustTime() {

    
   
     const newEvent = JSON.stringify({
     startTime:form.startTime,
     endTime:form.endTime,
     date:form.date,


      });
      console.log(newEvent);
 
      const options = {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
         "Content-Type": "application/json;charset=UTF-8",
        },
        body: newEvent,
      };
      try {
       const response = await fetch("http://localhost:3001/checkevent ", options);
       const result = await response.json();
       console.log(result)
       if(result === true){
        alert("That time has a conflict, please select another day and/or time")
        setForm({ ...form, timeStart: 0});
        setForm({ ...form, timeEnd: 0});
    }
    else
    {
        
    }
    console.log(result);
     } catch (err) {
        console.log(err);
        console.log("there was an error ");
      }
      
   }
const handleStartTime = (event) =>
{
   
   
    const comps = event.target.value.split('-');
    console.log(comps+" "+comps.length);
    //base of 9 AM
   let hour = parseInt(comps[0]);
            if(hour < 9)
            {
                hour+=12;
               hour =  (hour-9)*60;
            }
            else
            {
                console.log(hour);
                hour =(hour-9)*60;

            }
        if(comps.length === 3)
        {
            
            
            hour = hour + 30;
            
        }
       console.log(hour+"HOUR")
       adjustTime()
        setForm({ ...form, timeStart: hour});
     
    


}
const handleEndTime = (event) =>
{
 
    const comps = event.target.value.split('-');
    console.log(comps+" "+comps.length);
    //base of 9 AM
   let hour = parseInt(comps[0]);
            if(hour < 9)
            {
                hour+=12;
               hour =  (hour-9)*60;
            }
            else
            {
                console.log(hour);
                hour =(hour-9)*60;

            }
        if(comps.length === 3)
        {
            
            
            hour = hour + 30;
            
        }
       console.log(hour+"HOUR")
        setForm({ ...form, timeEnd: hour});
    
}
const handleChange = (event) => {
    
    const { name, value } = event.target;
   
    setForm({ ...form, [name]: value });
    
    
  };
  const handleDay = (event) =>
  {
    var d = new Date();
    
    const dates = 
    {
        "Monday":0,
        "Tuesday":1,
        "Wednesday":2,
        "Thursday":3,
        "Friday":4,
        "Saturday":5,
        "Sunday":6,

    }
    d.setDate(d.getDate() + (((1 + 7 - d.getDay()) % 7) || 7));
    d.setDate(d.getDate()+dates[event.target.value])
    console.log(d)
    setForm({ ...form, date: event.target.value });
  }
  const handleClick = (event) => {
    
    
    const n = event.target.name
    setForm({ ...form, [event.target.name]: !form[n] });
    
  };
const handleTag = (event) =>
{
    const tag = form.tags
    if (!tag.includes(event.target.name.toLowerCase()))
    {
        tag.push(event.target.name.toLowerCase());
        setForm({ ...form, 'tags': tag });
    }
    else{
        const rem = [];

        for (let i = 0; i < tag.length; i++) {
            if (tag[i] !== event.target.name) {
                rem.push(tag[i]);
            }
        }
        setForm({ ...form, 'tags': rem });
    }
    
}
    async function submitEvent(event) {

       
        event.preventDefault();
        const newEvent = JSON.stringify({
        eventName:form.name,
        url:form.url,
        startTime:form.timeStart,
        endTime:form.timeEnd,
        recurring:form.recurring,
        categories:form.tags,
        description:form.desc,
        date:form.date,
        broadcaster: "",
        facilitator: "",
        streamer:"",


         });
         console.log(newEvent);
    
         const options = {
           method: "POST",
           mode: "cors",
           headers: {
             Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
           },
           body: newEvent,
         };
         try {
          const response = await fetch("http://localhost:3001/planevent ", options);
          const result = await response.json();
          window.location.href = '/';
       console.log(result);
        } catch (err) {
           console.log(err);
           console.log("there was an error ");
         }
      }


  return (
      
 <div className = "form">
     <Navbar />
     <div className = "form-content">
         <h1>Register your Event !</h1>
     <label>Name of Call:<input type = "text" value = {form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}></input></label>
     <div className = "day">
     <label>
          Pick your preferred day of the week:
          <select  onChange={handleDay} >
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
          <select   onChange={handleStartTime}>
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
        <select  onChange={handleEndTime}>
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
<label>URL:<input type = 'textArea' onChange={(e) => setForm({ ...form, url: e.target.value})}></input></label>
{console.log(form.url)}
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
        <div className = "tags">Which of these tags apply to your event?
        <label> Academic<input name = "academic" type = "checkbox" onChange ={ handleTag}></input></label>
       
        <label> Social<input name = "social" type = "checkbox" onChange = { handleTag}></input></label>
        <label> Artistic<input name = "artistic" type = "checkbox" onChange = { handleTag}></input></label>
        
      
            
            </div> 
            <div className = "desc">
<label>Description of event:<input type = 'textArea' onChange={(e) => setForm({ ...form, desc: e.target.value})}></input></label>
{console.log(user)}
            </div>
           
            <button className="submit-form" onClick={form.name !=="" && form.url !=="" &&form.desc!=="" ? submitEvent : () => alert("You are missing fields")}>Submit</button>

 </div>
 </div>
  );
}

export default CreateEvent;

import React from 'react'
import "../Styles/CreateAppointment.css"

function CreateAppointment({closeModal5}) {
  return (
    <div>
        <div class="createappointmentbox">
                <div class="header">
                    <p class="heading">New appointment</p>
                    <button class="closebtn" onClick={() => closeModal5(false)}> X </button>
                </div>
                <div class="main">
                    <lable class="name">Consultation</lable>
                    <select class="field3">
                        <option disable selected hidden>select</option>
                        <option>abc</option>
                    </select>
                    <lable class="name">Clinician</lable>
                    <select class="field3">
                        <option disable selected hidden>select</option>
                        <option>xyz</option>
                    </select>
                    <lable class="name">Date</lable>
                    <input type="date" class="field2"/>
                    <lable  class="name">Time</lable>
                    <input type="time" class="field2"/>
                </div>
                <div class="footer">
                    <input type="button" class="cancelbtn" onClick={() => closeModal5(false)} value="Cancel"/>
                    <input type="button" class="savebtn5" value="Create"/>
                </div>
         </div>
    </div>
  )
}

export default CreateAppointment
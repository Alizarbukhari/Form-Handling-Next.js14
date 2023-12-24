import {contactTypes } from "@/app/types/types";

export default function Display(props:{contactInfo:contactTypes[]}) {
  return (
    <div>
      <div>
          <table>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Country</th>
            <th>Faher Name</th>
            <th>Education</th>
            <th>Subject</th>
            <th>City</th>
            <th>Address</th>
            <th>Message</th>
            </tr>
            {props.contactInfo.map((item,index) => {
            return (
                    <tr  key={index}>
                    <td>{item.name}</td>
                      <td>{item.fname}</td>
                      <td>{item.email}</td>
                      <td>{item.country}</td>
                      <td>{item.education}</td>
                      <td>{item.city}</td>
                      <td>{item.address}</td>
                      <td>{item.phone}</td>
                      <td>{item.subject}e</td>
                      <td>{item.message}</td>
                    </tr>

            )
              })}

                  </table>
        </div>
     
     </div>)
}

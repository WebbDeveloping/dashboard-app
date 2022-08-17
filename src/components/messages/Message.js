import React from "react";

export default function Message(props) {

  return ( 
    <div onClick={props.show} className="message-icon__notification">{props.messages.length}</div>
  );
}

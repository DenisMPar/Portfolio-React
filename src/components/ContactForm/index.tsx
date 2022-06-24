import React, { useState } from "react";
import { Button } from "../../ui/button";
import { MyForm, TextArea, TextInput, TextLabel } from "./contactFormElements";

function ContactForm() {
  const [flag, setFlag] = useState(false);

  function toggleMenu() {
    setFlag(!flag);
  }

  return (
    <MyForm>
      <TextLabel>
        Nombre
        <TextInput></TextInput>
      </TextLabel>
      <TextLabel>
        Email
        <TextInput></TextInput>
      </TextLabel>
      <TextLabel>
        Mensaje
        <TextArea></TextArea>
      </TextLabel>
      <Button>Enviar</Button>
    </MyForm>
  );
}

export { ContactForm };

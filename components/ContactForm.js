import React, { useState } from 'react'
import axios from 'axios'
import { Box, Button, Form, FormField, TextArea, TextInput } from 'grommet'

import styles from '../styles/ContactForm.module.css'

export default function ContactForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })
  const [inputs, setInputs] = useState({
    email: '',
    message: '',
  })
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })
      setInputs({
        email: '',
        message: '',
      })
    } else {
      setStatus({
        info: { error: true, msg: msg },
      })
    }
  }
  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xeqvgjba',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        )
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error)
      })
  }
  return (
    <div className={styles.wrapper}>
      <h1>Contact us for more information</h1>
      <hr />
      <Form onSubmit={handleOnSubmit}>
        <FormField name="_replyto" htmlFor="email" label="Email">
          <TextInput
            id="email"
            type="email"
            name="_replyto"
            onChange={handleOnChange}
            required
            value={inputs.email}
            placeholder="Enter email..."
          />
        </FormField>
        <FormField name="message" htmlFor="message" label="Message">
          <TextArea
            className={styles.message}
            id="message"
            name="message"
            onChange={handleOnChange}
            required
            value={inputs.message}
            placeholder="Enter message..."
            resize={false}
          />
        </FormField>
        <Button primary type="submit" disabled={status.submitting || status.submitted} label={!status.submitting ? !status.submitted ? 'Submit' : 'Submitted' : 'Submitting...'} />
      </Form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </div>
  )
}
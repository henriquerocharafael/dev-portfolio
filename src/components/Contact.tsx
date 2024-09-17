import { useState } from "react"

export function Contact() {
  const initialState = { 
    name: "", 
    email: "", 
    message: "" 
  }

  const [formDetails, setFormDetails] = useState(initialState)
  const [submitted, setSubmitted] = useState(false)

  function onValueChange(fieldName: string, value: string) {
    setFormDetails({...formDetails, [fieldName]: value})
  }

  async function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData()
    for (const name in formDetails) {
      formData.append(name, formDetails[name as keyof typeof formDetails])
    }
    try {
      const response = await fetch('https://devform.vercel.app/api/submit/86', {
        method: 'POST',
        body: formData,
        // contentType: 'application/json'
      })
      const result = await response.json()
      setSubmitted(true)
    } catch (event) {
      console.log(event)
    }

    setFormDetails(initialState)
  }

  return (
    <section>
      <h1 className="text-4xl text-left font-bold my-6">Contact me</h1>
      <div className="bg-white text-left rounded-xl p-8">
        <p>
          Interested in working together? Contact me at <a href="mailto:rafaelrocha2500@gmail.com">rafaelrocha2500@gmail.com</a>
        </p>
        <form onSubmit={handleSubmit} className="mt-3 flex flex-col gap-6">
          <input 
            type="text" 
            placeholder="your name" 
            className="text-md bg-background rounded-xl px-4 py-3 placeholder-opacity-50 focus:outline-none border w-full" 
            value={formDetails.name}
            onChange={(event) => onValueChange('name', event.target.value)}
          />
          <input 
            type="email" 
            placeholder="your email" 
            className="text-md bg-background rounded-xl px-4 py-3 placeholder-opacity-50 focus:outline-none border w-full" 
            value={formDetails.email}
            onChange={(event) => onValueChange('email', event.target.value)}
          />
          <textarea 
            placeholder="your message" 
            rows={4}
            className="text-md bg-background rounded-xl px-4 py-3 placeholder-opacity-50 focus:outline-none border w-full" 
            value={formDetails.message}
            onChange={(event) => onValueChange('message', event.target.value)}
          />
          {submitted ? <p className="text-green-600">Your message has been sent!</p> : null}
          <button className="bg-primary text-white" type="submit">Send</button>
        </form>
      </div>
    </section>
  )
}
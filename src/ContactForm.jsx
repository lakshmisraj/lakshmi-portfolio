import { useState } from 'react'
import { person } from './data'

// Sends through EmailJS when its three keys are set in .env (see README);
// otherwise opens the visitor's email app with the message filled in.
const keys = {
  service: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}
const hasEmailJs = Boolean(keys.service && keys.template && keys.publicKey)

export default function ContactForm() {
  const [status, setStatus] = useState('idle')

  async function submit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    if (!hasEmailJs) {
      const subject = encodeURIComponent(`Hello from ${data.name}`)
      const body = encodeURIComponent(`${data.message}\n\n${data.name}\n${data.email}`)
      window.location.href = `mailto:${person.email}?subject=${subject}&body=${body}`
      setStatus('mailto')
      return
    }

    setStatus('sending')
    try {
      const { default: emailjs } = await import('@emailjs/browser')
      await emailjs.send(
        keys.service,
        keys.template,
        {
          from_name: data.name,
          reply_to: data.email,
          message: data.message,
          to_name: person.first,
        },
        { publicKey: keys.publicKey },
      )
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const note = {
    idle: '',
    sending: 'Sending…',
    sent: 'Thank you. Your message is on its way.',
    mailto: 'Your email app should open with the message ready to send.',
    error: `That did not send. Please email ${person.email} directly.`,
  }[status]

  return (
    <form className="form" onSubmit={submit}>
      <label>
        <span>Your name</span>
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        <span>Your email</span>
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label className="form-wide">
        <span>What are you hiring for?</span>
        <textarea name="message" rows="4" required />
      </label>
      <div className="form-end">
        <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        <p className="form-note" role="status" aria-live="polite">
          {note}
        </p>
      </div>
    </form>
  )
}

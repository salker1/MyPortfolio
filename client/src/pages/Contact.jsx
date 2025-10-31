import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName:"", lastName:"", phone:"", email:"", message:"" });
  function update(e){ setForm({ ...form, [e.target.name]: e.target.value }); }
  function submit(e){ e.preventDefault(); console.log("Contact:", form); navigate("/"); }

  const max = { maxWidth: 820 }; // keep panel and form same width

  return (
    <main>
      <h1>Contact</h1>

      <div className="panel frame" style={{ ...max, marginBottom:16 }}>
        I’d be happy to connect about coursework or projects. Email:{" "}
        <a href="mailto:ksedra@gmail.com">ksedra@gmail.com</a> or use the form below.
      </div>

      <form onSubmit={submit} className="card frame" style={{ ...max, display:"grid", gap:12 }}>
        <div style={{ display:"grid", gap:12, gridTemplateColumns:"1fr 1fr" }}>
          <input name="firstName" placeholder="First Name" value={form.firstName} onChange={update}/>
          <input name="lastName"  placeholder="Last Name"  value={form.lastName}  onChange={update}/>
        </div>
        <div style={{ display:"grid", gap:12, gridTemplateColumns:"1fr 1fr" }}>
          <input name="phone" placeholder="Contact Number" value={form.phone} onChange={update}/>
          <input name="email" type="email" placeholder="Email Address" value={form.email} onChange={update}/>
        </div>
        <textarea name="message" rows={6} placeholder="Message" value={form.message} onChange={update}/>
        <button className="btn" type="submit">Send</button>
      </form>
    </main>
  );
}

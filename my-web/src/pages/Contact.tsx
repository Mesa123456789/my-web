import { contactData } from "../data/contactData";

export default function Contact() {
  return (
    <section className="min-h-screen pt-28 px-6 flex flex-col items-center justify-center text-center">
      <h2 className="text-4xl font-bold text-blue-600 mb-6">Contact</h2>

      <div className="space-y-4 mb-10">
        <p>{contactData.address}</p>
        <p className="text-blue-600 font-semibold">{contactData.email}</p>
        <p>{contactData.phone}</p>
      </div>

      <form className="bg-white/70 backdrop-blur-lg shadow-md rounded-xl p-6 max-w-md w-full space-y-4">
        <input className="w-full p-3 border rounded-md focus:outline-blue-400" placeholder="Name" />
        <input className="w-full p-3 border rounded-md focus:outline-blue-400" placeholder="Email" />
        <input className="w-full p-3 border rounded-md focus:outline-blue-400" placeholder="Subject" />
        <textarea className="w-full p-3 border rounded-md focus:outline-blue-400" rows={4} placeholder="Message" />
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition">
          Send Message
        </button>
      </form>
    </section>
  );
}

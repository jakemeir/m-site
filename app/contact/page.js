"use client";
import submitHandler from "@/lib/submission";
export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-2xl mx-auto p-4 bg-gray-800 shadow-md rounded-lg">
        <form className="space-y-4" action={submitHandler}>
          <div className="flex flex-col space-y-1">
            <label htmlFor="company" className="text-gray-300 font-medium">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              className="border border-gray-600 bg-gray-900 text-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="name" className="text-gray-300 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="border border-gray-600 bg-gray-900 text-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-gray-300 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="border border-gray-600 bg-gray-900 text-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="massage" className="text-gray-300 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="border border-gray-600 bg-gray-900 text-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}

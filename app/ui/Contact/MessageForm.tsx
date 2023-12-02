const MessageForm = () => {
  return (
    <div>
        <h2 className="text-xl font-medium mb-3 text-blue-900">Leave Us A Message</h2>
        <form action="" className="flex flex-col gap-2">
            <section className="flex flex-col gap-1">
              <label htmlFor="name" className=" text-base font-medium">Your Name</label>
              <input type="text" name="" id="" placeholder="Write your name" className="border-2 p-2 rounded-md outline-none focus:border-blue-900" />
            </section>

            <section className="flex flex-col gap-1">
              <label htmlFor="email" className=" text-base font-medium">Your Email</label>
              <input type="email" name="" id="" placeholder="Write your email" className="border-2 p-2 rounded-md outline-none focus:border-blue-900"  />
            </section>

            <section className="flex flex-col gap-1">
              <label htmlFor="message" className=" text-base font-medium">Message</label>
              <textarea name="" id="" rows={5} placeholder="Write your message" className="border-2 p-2 rounded-md outline-none focus:border-blue-900" ></textarea>
            </section>

            <div>
              <button type="submit" className="bg-blue-900 text-gray-50 font-semibold rounded-md px-3 py-2">Send Message</button>
            </div>
        </form>
    </div>
  )
}

export default MessageForm
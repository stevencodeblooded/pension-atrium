import ContactDetails from "../ui/Contact/ContactDetails"
import ContactHeading from "../ui/Contact/ContactHeading"
import Map from "../ui/Contact/Map"
import MessageForm from "../ui/Contact/MessageForm"

const Contact = () => {
  return (
    <div className="px-6 py-12 flex flex-col gap-14">
      <ContactHeading />
      <div className="flex w-full justify-between gap-10 xl:flex-col ">
        <div className=" w-1/2 xl:w-full xl:order-2">
          <Map />
        </div>
        <div className="w-1/2 flex flex-col gap-16 xl:w-full xl:order-1">
          <MessageForm />
          <ContactDetails />
        </div>
      </div>
    </div>
  )
}

export default Contact
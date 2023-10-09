import Navbar from "./Navbar";

function Contact({ data, navData, url }) {
  return (
    <section className="bg-[#242424] mx-[-17px] px-[17px] py-[44px]">
      <h3 className="heading-1 text-center">Contact</h3>
      <p className="text-white-1 text-[14px] text-justify leading-[19.684px] tracking-[.21px] mt-[12px]">
        {data?.description}
      </p>
      <form className="mt-[27px]" action="">
        <div className="flex flex-col gap-[20px]">
          <input className="input-1" type="text" placeholder="name" />
          <input
            className="input-1"
            type="email"
            name="email"
            id="email"
            placeholder="email"
          />
          <textarea
            className="input-1"
            name="message"
            id="message"
            cols="30"
            rows="3"
            placeholder="message"
          ></textarea>
        </div>

        <div className="flex justify-end mt-[25px]">
          <button className="btn-green" type="submit">
            send message
          </button>
        </div>

        <p className="line mt-[73px] mb-[30px]"></p>

        <Navbar data={navData} url={url} />
      </form>
    </section>
  );
}

export default Contact;

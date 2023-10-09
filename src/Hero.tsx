function Hero({ data, url = "" }) {
  return (
    <section>
      <div className="flex justify-center mt-[35px]">
        <img src={url + data?.protrait} alt="" />
      </div>
      <h1 className="heading-1 text-center">
        Nice to Meet you! <br /> I'm{" "}
        <span className="capitalize underline-green">{data?.name}</span>.
      </h1>
      <p className="text-white-2 font-bold mt-[10px] text-center">
        Based in the UK, I’m a front-end developer passionate about building
        accessible web apps that users love.
      </p>

      <div className="flex justify-center mt-[20px]">
        <button className="btn-green">Contact Me</button>
      </div>

      <p className="line mt-[60px]"></p>
    </section>
  );
}

export default Hero;

function Projects({ data, url = "" }) {
  return (
    <section className="mt-[60px] pb-[29px]">
      <div className="flex justify-between items-center mb-[23px]">
        <h2 className="heading-1">Projects</h2>
        <button className="btn-green">Contact Me</button>
      </div>

      {data?.map((x) => (
        <div className="mb-[29px]" key={x.name}>
          <img src={url + x.img} alt="" />
          <h3 className="text-[20px] text-white font-bold tracking-[1.1px] mt-[30px] uppercase">
            {x.name}
          </h3>

          <div className="flex gap-[12px] mt-[2px]">
            {x.tags?.map((tag) => (
              <h4
                className="uppercase text-white-1 text-base font-bold tracking-[.88px]"
                key={tag}
              >
                {tag}
              </h4>
            ))}
          </div>

          <div className="flex gap-[23px] mt-[12px]">
            <button className="btn-green text-[14px]">view code</button>
            <button className="btn-green text-[14px]">view project</button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;

function Experience({ data }) {
  return (
    <section className="mt-[38px]">
      {data?.map((x) => (
        <div
          className="mt-[24px] grid grid-cols-1 justify-items-center text-[24px] font-bold tracking-[1.32px]"
          key={x.name}
        >
          <h2 className="text-white">{x.name}</h2>
          <p className="mt-[2px] text-white-2 text-[14px] font-bold tracking-[.77px]">
            {x.year} Years Experience
          </p>
        </div>
      ))}
      <p className="line mt-[38px]"></p>
    </section>
  );
}

export default Experience;

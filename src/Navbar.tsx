function Navbar({ data, url }) {
  return (
    <nav className="flex flex-col items-center mt-[15px]">
      <h4 className="text-white text-xl font-bold">{data?.logo}</h4>
      <div className="flex gap-[24px] items-center mt-[14px]">
        <img src={url + data?.social_icons?.github} alt="github" />
        <img src={url + data?.social_icons?.linkedin} alt="linkedin" />
        <img src={url + data?.social_icons?.twitter} alt="twitter" />
      </div>
    </nav>
  );
}

export default Navbar;

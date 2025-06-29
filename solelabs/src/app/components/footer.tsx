function Footer() {
  return (
    <footer className="pt-28 pb-8 bg-[#212529] text-[#fff]">
      <hr className="mb-4 max-w-6xl md:mx-auto mx-4" />
      <div className="flex flex-col md:flex-row items-center gap-4 md:justify-around">
        <p>
          Copyright &copy; {new Date().getFullYear()} Sole Labs. All rights
          reserved.
        </p>
        <div className="flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

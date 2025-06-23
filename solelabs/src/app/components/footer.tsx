function Footer() {
  return (
    <footer>
      <div className="flex justify-between">
        <p>
          Copyright &copy; {new Date().getFullYear()} Sole Labs. All rights
          reserved.
        </p>
        <div className="flex space-x-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

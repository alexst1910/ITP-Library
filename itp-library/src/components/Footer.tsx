const Footer = () => {
  let copyright = String.fromCodePoint(169);
  return (
    <div className="container bg-secondary text-light">
      {copyright} Copyright IT Perspectives
    </div>
  );
};

export default Footer;

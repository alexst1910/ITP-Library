const Footer = () => {
  let copyright = String.fromCodePoint(169);
  return (
    <div className="container text-light bg-secondary">
      {copyright} Copyright IT Perspectives
    </div>
  );
};

export default Footer;

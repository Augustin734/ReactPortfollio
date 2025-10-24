function Record({ RecordName, onClickPath }) {
  const scrollToSection = () => {
    const section = document.querySelector(onClickPath);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const className = `record ${RecordName.toLowerCase().replace('_', '-')}`;

  return (
    <button className={className} onClick={scrollToSection}>
      <span>{RecordName}</span>
    </button>
  );
}

export default Record;


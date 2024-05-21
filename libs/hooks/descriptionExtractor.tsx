const descriptionExtractor = (description?: string) => {
  return (
    <>
      {description?.split("\r\n").map((item, idx) => (
        <p key={idx} className="group">
          {item}

          <br className="group-last:hidden" />
        </p>
      ))}
    </>
  );
};

export default descriptionExtractor;

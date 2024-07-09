const descriptionExtractor = (description?: string) => {
  return (
    <>
      {description?.split("\r\n").map((item, idx) => (
        <span key={idx} className="group flex flex-col  [column-count:2] [column-gap:40px]">
          {item}

          <span className="group-last:hidden h-2" />
        </span>
      ))}
    </>
  );
};

export default descriptionExtractor;

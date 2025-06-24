const Bio = ({ bioText }) => {
  return (
    bioText && (
      <>
        <p>{bioText}</p>
      </>
    )
  );
};

export default Bio;
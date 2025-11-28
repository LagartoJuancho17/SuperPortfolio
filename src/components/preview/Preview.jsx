import "./Preview.css";

const Preview = ({ imgSrc }) => {
  return (
    <div className="archive-preview">
      <img src={imgSrc} alt="currently selected source" />
    </div>
  );
};

export default Preview;

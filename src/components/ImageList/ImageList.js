import React from "react";
import PropTypes from "prop-types";
import "./ImageList.css";

const ImageProp = PropTypes.shape({
  urls: PropTypes.object,
  description: PropTypes.string
});

const ListItem = img =>
  img && (
    <li key={img.urls.small} className="image-list-item">
      <div className="image-list-tile">
        <a className="image-list-link" href={img.urls.regular}>
          <div className="image-list-photo">
            <img src={img.urls.regular} alt={img.description} />
          </div>
        </a>
      </div>
    </li>
  );

const List = ({ items }) => (
  <ul className="image-list">{items.map(ListItem)}</ul>
);

List.propTypes = {
  items: PropTypes.arrayOf(ImageProp)
};

export default List;

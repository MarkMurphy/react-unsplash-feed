import React, { Component } from "react";
import PropTypes from "prop-types";

class ProgressiveImage extends Component {
  static propTypes = {
    image: PropTypes.string,
    preview: PropTypes.string,
    alt: PropTypes.string
  };

  state = {
    currentImage: this.props.preview,
    loading: true
  };

  componentDidMount() {
    this.fetchImage(this.props.image);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.image !== this.props.image) {
      this.setState({ currentImage: nextProps.preview, loading: true }, () => {
        this.fetchImage(nextProps.image);
      });
    }
  }

  componentWillUnmount() {
    if (this.image) {
      this.image.onload = null;
    }
  }

  fetchImage = src => {
    const image = new Image();
    image.onload = () =>
      this.setState({ currentImage: this.image.src, loading: false });
    image.src = src;
    this.image = image;
  };

  style = loading => {
    return {
      ...this.props.style,
      transition: "0.5s filter linear",
      filter: loading ? "blur(50px)" : ""
    };
  };

  render() {
    const { currentImage, loading } = this.state;
    const { alt, ...props } = this.props;
    return (
      <img
        {...props}
        style={this.style(loading)}
        src={currentImage}
        alt={alt}
      />
    );
  }
}

export default ProgressiveImage;

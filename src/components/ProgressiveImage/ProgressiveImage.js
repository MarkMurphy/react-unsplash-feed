import React, { Component } from 'react';
import PropTypes from 'prop-types';

const cache = new Set();

class ProgressiveImage extends Component {
  static propTypes = {
    image: PropTypes.string,
    preview: PropTypes.string,
    alt: PropTypes.string,
  };

  state = {
    src: this.props.preview,
    loading: !cache.has(this.props.image),
  };

  componentDidMount() {
    this.fetchImage(this.props.image);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.image !== this.props.image) {
      this.setState({ src: nextProps.preview, loading: true }, () => {
        this.fetchImage(nextProps.image);
      });
    }
  }

  componentWillUnmount() {
    if (this.image) {
      this.image.onload = null;
    }
  }

  fetchImage = (src) => {
    const image = new Image();
    image.onload = () => {
      cache.add(src);
      this.setState({ src, loading: false });
    };
    image.src = src;
    this.image = image;
  };

  style = (loading) => {
    return {
      ...this.props.style,
      transition: '0.5s filter linear',
      filter: loading ? 'blur(50px)' : '',
    };
  };

  render() {
    const { src, loading } = this.state;
    return (
      <img
        {...this.props}
        alt={this.props.alt}
        style={this.style(loading)}
        src={src}
      />
    );
  }
}

export default ProgressiveImage;

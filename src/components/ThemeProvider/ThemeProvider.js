import { Component } from 'react';
import { connect } from 'react-redux';

class ThemeProvider extends Component {
  componentDidMount() {
    this.updateTheme();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.theme !== this.props.theme) {
      this.updateTheme();
    }
  }

  updateTheme() {
    const { classList } = document.body;
    if (this.props.theme === 'light') {
      classList.add('light');
      classList.remove('dark');
    } else {
      classList.add('dark');
      classList.remove('light');
    }
  }

  render() {
    return this.props.children;
  }
}

const mapState = (state) => ({ theme: state.theme });
export default connect(mapState)(ThemeProvider);

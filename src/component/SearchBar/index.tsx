import React, {
  Component,
  createRef,
  ChangeEventHandler,
  FocusEventHandler,
} from 'react';
import Input from './Input';
import KeywordWindow from './KeywordWindow';
import Tag from './Tag';

type State = ReturnType<typeof getInitState>;

function getInitState() {
  return {
    isOpenKeywordWindow: false,
    keyword: '',
  };
}

class SearchBar extends Component<{}, State> {
  state = getInitState();
  input = createRef<HTMLInputElement>();

  handleInputFocus: FocusEventHandler<HTMLInputElement> = e => {
    this.setState({
      isOpenKeywordWindow: true,
    });
  };
  handleInputBlur: FocusEventHandler<HTMLInputElement> = () => {
    this.setState({
      isOpenKeywordWindow: false,
    });
  };
  handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    this.setState({
      keyword: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Input
          onFocus={this.handleInputFocus}
          onBlur={this.handleInputBlur}
          onChange={this.handleInputChange}
        />
        <KeywordWindow
          isShow={this.state.isOpenKeywordWindow}
          keyword={this.state.keyword}
        />
        <Tag />
      </div>
    );
  }
}

export default SearchBar;

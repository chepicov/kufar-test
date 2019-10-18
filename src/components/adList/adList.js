import React from 'react';
import { connect } from 'react-redux';
import { fetchAds } from 'resources/ad/ad.actions';
import { getAds } from 'resources/ad/ad.selectors';
import Loading from 'components/common/loading';

import AdListItem from './components/adListItem';
import './adList.styles.css';

class AdList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  async componentDidMount() {
    this.props.fetchAds();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.ads.length) {
      this.setState({
        isLoading: false,
      });
    }
  }

  render() {
    const {
      isLoading,
    } = this.state;

    const {
      ads,
    } = this.props;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <ul className="ad-list">
        {
          ads.map((ad) => (
            <AdListItem
              key={ad.ad_id}
              ad={ad}
            >
              {ad.subject}
            </AdListItem>
          ))
        }
      </ul>
    );
  }
}

export default connect((state) => ({
  ads: getAds(state),
}), dispatch => ({
  fetchAds: fetchAds(dispatch),
}))(AdList);

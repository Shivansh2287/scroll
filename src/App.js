import React from 'react';
import ScrollHorizontal from 'react-scroll-horizontal';
import './index.css';

export default class App extends React.Component {

  render() {

    return (
      <main>
        <div style={{ height: `22.7em` }}>
          <ScrollHorizontal reverseScroll >
            <div className="tile">
              <img src="/images/viewers-national.png" class="img" />
            </div>
            <div className="tile">
              <img src="/images/viewers-national.png" class="img" />
            </div>
            <div className="tile">
              <img src="/images/viewers-national.png" class="img" />
            </div>
            <div className="tile">
              <img src="/images/viewers-national.png" class="img" />
            </div>
            <div className="tile">
              <img src="/images/viewers-national.png" class="img" />
            </div>
          </ScrollHorizontal>
        </div>
      </main>
    );
  }
}

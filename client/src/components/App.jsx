import React from 'react';
import axios from 'axios';
import PlayList from './PlayList';
import Search from './Search';
import VideoPlayer from './VideoPlayer';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentVid: {
        id: {
          videoId: '"YoB8t0B4jx4"'
        },
        snippet: {
          title: 'Mutant Giant Spider Dog (SA Wardega)',
          description: 'FACEBOOK: http://www.facebook.com/sawardega SUBSCRIBE: http://www.youtube.com/user/wardegasa?sub_confirmation=1 Muzyka pochodzi z katalogów X-Ray Dog, Kosinus i West One Music.'
        }
      },
      inventory: [],
      videos: [],
    }

    this.addToInventory = this.addToInventory.bind(this);
    this.searchYouTube = this.searchYouTube.bind(this);
  }

  addToInventory(video) {
    this.setState({inventory: [...this.state.inventory, video]});
    axios.post('/savePlaylist', this.state.inventory)
      .then( result => {
        console.log(result)
      })
      .catch( err => {
        console.log(err);
      })
  }

  searchYouTube(query) {
    let context = this;

    let params = {
      params: {
        query: query
      }
    }
    axios.get('/searchYouTube', params)
      .then( ({data}) => {
        context.setState({videos: data.items, currentVid: data.items[0]})
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {
    let {currentVid, videos} = this.state;

    return(
      <div>
        <div>
          <Search searchYouTube={this.searchYouTube} />
        </div>
        <div>
          <VideoPlayer currentVid={currentVid}/>
        </div>
        <div>
          <PlayList videos={videos}/>
        </div>
      </div>
    )
  }
}

export default App;
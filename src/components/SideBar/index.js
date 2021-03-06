import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style/index.scss";
import axios from "axios";
//import image from '../../../api/static/image.jpg'
import image_pie from '../../assets/Piee.png'
import image_dist from '../../assets/Dist.png'

//import image_dist from '../../../api/static/plot.png'


class index extends Component {
  constructor(props) {
    super(props);
    // console.log(props)
    this.state = {
      salary: "",
    };
    // bind

    this.handleChange = this.handleChange.bind(this);
    //this.search = this.search.bind(this);
  }

  static propTypes = {
    prop: PropTypes,
  };
  handleChange({ target }) {
    console.log(target.value);
    let url = "/salary/" + target.value;
    axios
      .get(url)
      .then((resp) => {
        console.log(resp.data);

        this.setState({
          jobs: resp.data,
        });

        this.props.handleJobs(this.state.jobs);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="sidebar__container">
        <form>
          <div data-role="rangeslider">
            <label for="range-1a">Salary Rank</label>
            <input
              type="range"
              name="range-1a"
              id="range-1a"
              min="0"
              max="130"
              value="30"
              // data-popup-enabled="true"
              // data-show-value="true"
            ></input>
            <label for="range-1b">Salary Rank</label>
            <input
              type="range"
              name="range-1b"
              id="range-1b"
              min="0"
              max="130"
              value="90"
              // data-popup-enabled="true"
              // data-show-value="true"
            ></input>
          </div>
        </form>
        {/* <h3>Salary Rank</h3>
         <ul>
         
          <li>
            <input type="checkbox" name="salary" id="" value="25-40" onClick={this.handleChange}/> 25k - 40k
          </li>
          <li>
            <input type="checkbox" name="salary" id="" value="40-60" onClick={this.handleChange} />40k - 60K
          </li>
          <li>
            <input type="checkbox" name="salary" id="" value="60-80" onClick={this.handleChange}/> 60k - 80k
          </li>
          <li>
            <input type="checkbox" name="salary" id="" value="80-100" onClick={this.handleChange}/>80k - 100k
          </li>
          <li>
            <input type="checkbox" name="salary" id="" value="100-180" onClick={this.handleChange}/>100k - 180k
          </li>
          <li>
            <input type="checkbox" name="salary" id="" value="120-180" onClick={this.handleChange}/>120k - 180k
          </li>
        </ul> */}
        <figure>
          <img src={image_pie} alt="Graphiques" />
          <figcaption>Graphiques</figcaption>
        </figure>
        <figure>
          <img src={image_dist} alt="Graphiques 2" />
          <figcaption>Graphiques</figcaption>
        </figure>
      </div>
    );
  }
}

export default index;

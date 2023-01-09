import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class NewsFeed extends Component {
  static defaultProps = {
    country: 'in',
    category: 'general',
    page_size:12
  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    page_size:PropTypes.number
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page_no: 1,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)}- News Villa`;
  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async handlePage(){
    this.props.setProgress(10)
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e8e6f34c45c04b548dc5795e17fee310&pageSize=${this.props.page_size}&page=${this.state.page_no}`;
    this.props.setProgress(20)
    // let data = await fetch(url);
    this.props.setProgress(70)
    // let parsedData = await data.json();
    let parsedData = {
      "status": "ok",
      "totalResults": 38,
      "articles": [
        {
          "source": {
            "id": null,
            "name": "India.com"
          },
          "author": "https://www.india.com/author/sportsdesk/",
          "title": "Highlights | Pak vs NZ 1st ODI, Score: Pakistan Beat New Zealand By 6 Wickets - India.com",
          "description": "Pakistan won the 1st ODI in Karachi as the Men in Green defeated the Kiwis by 6 wickets.",
          "url": "https://www.india.com/sports/highlights-pak-vs-nz-1st-odi-cricket-score-pakistan-vs-new-zealand-live-streaming-ball-commentary-sony-ptv-sports-pak-bat-vs-nz-babar-azam-mohammad-rizwan-naseem-shah-5845153/",
          "urlToImage": "https://static.india.com/wp-content/uploads/2023/01/Pakistan-vs-New-Zealand-1st-ODI.jpg",
          "publishedAt": "2023-01-09T18:07:30Z",
          "content": "Pakistan won the 1st ODI in Karachi as the Men in Green defeated the Kiwis by 6 wickets.\r\nAgha Salman\r\nMohammad Rizwan (W)\r\nLockie Ferguson\r\nTim Southee\r\nLive | Pak vs NZ 1st ODI, Score\r\nAS IT HAPPEN… [+3482 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "Moscow-Goa Chartered Flight Lands In Gujarat After Bomb Threat - NDTV",
          "description": "A chartered flight from Moscow to Goa with 244 people onboard was diverted to Gujarat's Jamnagar, a move which was triggered after Goa Air traffic controller received a bomb threat, officials said on Monday.",
          "url": "https://www.ndtv.com/india-news/moscow-goa-chartered-flight-lands-in-gujarat-after-bomb-threat-3677989",
          "urlToImage": "https://c.ndtvimg.com/2022-03/07go9fbg_airplane-generic_650x400_21_March_22.jpg",
          "publishedAt": "2023-01-09T17:20:12Z",
          "content": "All passengers have been deboarded.\r\nA chartered flight from Moscow to Goa with 244 people onboard was diverted to Gujarat's Jamnagar, a move which was triggered after Goa Air traffic controller rece… [+1089 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Space.com"
          },
          "author": "Brett Tingley",
          "title": "China's 1st Mars rover and Tianwen 1 orbiter may have gone silent: report - Space.com",
          "description": "China's space agency appears to have lost contact with the Tianwen 1 orbiter and Zhurong rover from the nation's 1st Mars mission.",
          "url": "https://www.space.com/china-mars-orbiter-rover-trouble-reports",
          "urlToImage": "https://cdn.mos.cms.futurecdn.net/ufyzBMmvB3FbQKZSZwLX5R-1200-80.jpg",
          "publishedAt": "2023-01-09T16:30:35Z",
          "content": "Something may have gone very wrong for China's first-ever Mars mission.\r\nChina launched Tianwen 1 in July 2020 and the mission's rover, named Zhurong, touched down on the Red Planet in May 2021. The … [+2387 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": "Rica Roy",
          "title": "Rohit Sharma, Virat Kohli Unlikely To Be Selected For T20Is; Hardik Pandya To Be Long-term Captain: .. - NDTV Sports",
          "description": "Virat Kohli and Rohit Sharma - two of the highest run-scorers in T20I cricket - may not be picked in the format going forward with the BCCI planning to induct young players under the leadership of Hardik Pandya, according to sources",
          "url": "https://sports.ndtv.com/cricket/rohit-sharma-virat-kohli-unlikely-to-be-selected-for-t20is-sources-3677659",
          "urlToImage": "https://c.ndtvimg.com/2023-01/lk62gjjo_virat-kohli-rohit-sharma-afp_625x300_09_January_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
          "publishedAt": "2023-01-09T16:19:00Z",
          "content": "Two of India's most celebrated cricketers - Rohit Sharma and Virat Kohli - are unlikely to be selected for T20Is going forward, sources have told NDTV. The veteran duo have been the pillars of Indian… [+2387 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "Actor Tunisha Sharma Spoke To Man On Dating App Before Death: Sheezan Khan - NDTV",
          "description": "Television actor Tunisha Sharma was in contact with a man named Ali on a dating app and was in his company between December 21 and 23, just before her death, lawyers of her co-star Sheezan Khan said.",
          "url": "https://www.ndtv.com/india-news/actor-tunisha-sharma-spoke-to-man-on-dating-app-before-death-sheezan-khan-3677738",
          "urlToImage": "https://c.ndtvimg.com/2022-12/bp742m8g_sheezan-khan-with-tunisha-sharma_625x300_26_December_22.jpg",
          "publishedAt": "2023-01-09T16:09:14Z",
          "content": "Tunisha Sharma was in contact with a man named Ali on a dating app: Sheezan Khan's lawyers\r\nPalghar: Television actor Tunisha Sharma was in contact with a man named Ali on a dating app and was in his… [+2047 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "GSMArena.com"
          },
          "author": "Peter",
          "title": "The Apple iPhone turns 16 today! - GSMArena.com news - GSMArena.com",
          "description": "MacWorld 2007, January 9, Steve Jobs took the stage to announce that Apple will revolutionize the mobile phone.",
          "url": "https://www.gsmarena.com/the_iphone_was_unveiled_16_years_ago_today-news-57127.php",
          "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/01/iphone-16th-birthday/-952x498w6/gsmarena_000.jpg",
          "publishedAt": "2023-01-09T16:09:01Z",
          "content": "Exactly 16 years ago Apple CEO Steve Jobs took the stage at MacWorld to introduce a brand new product as Jobs described it, it was a widescreen iPod with touch controls, a revolutionary mobile phone … [+1243 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "In \"Sinking\" Joshimath, 4,000 Evacuated After Survey Via Satellites - NDTV",
          "description": "Six hundred houses in the \"sinking\" town of Joshimath in Uttarakhand have been evacuated after a survey via satellites.",
          "url": "https://www.ndtv.com/india-news/in-sinking-joshimath-600-houses-evacuated-after-survey-via-satellites-3677238",
          "urlToImage": "https://c.ndtvimg.com/2023-01/fja4nh0o_joshimath_625x300_09_January_23.jpg",
          "publishedAt": "2023-01-09T14:46:00Z",
          "content": "More than 600 structures in Joshimath have either developed cracks or been partially destroyed\r\nNew Delhi: Six hundred houses in the \"sinking\" town of Joshimath in Uttarakhand have been evacuated aft… [+2005 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Tribune India"
          },
          "author": "The Tribune India",
          "title": "Amul managing director RS Sodhi ousted; Jayenbhai Mehta gets interim charge - The Tribune India",
          "description": "In a sudden development, the Gujarat Co-operative Milk Marketing Federation Ltd (GCMMF), which markets its products under the brand name 'Amul', on Monday ousted its long-serving Managing Director RS Sodhi but did not give any reason.",
          "url": "https://www.tribuneindia.com/news/business/rs-sodhi-steps-down-as-amul-md-was-on-extension-from-last-2-years-468887",
          "urlToImage": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/1/2023_1$largeimg_1335843547.jpg",
          "publishedAt": "2023-01-09T14:29:00Z",
          "content": "PTI\r\nAhmedabad/ New Delhi, January 9 \r\nIn a sudden development, the Gujarat Co-operative Milk Marketing Federation Ltd (GCMMF), which markets its products under the brand name 'Amul', on Monday ouste… [+2375 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Cricbuzz"
          },
          "author": null,
          "title": "BCCI, Star Sports differ over 2022 South Africa series rights value | Cricbuzz.com - Cricbuzz - Cricbuzz",
          "description": "The BCCI held an emergent Apex Council meeting, where Byju's request to wriggle out of the Indian team's jersey sponsorship and Star's letter for course correction on the rights value were discussed",
          "url": "https://www.cricbuzz.com/cricket-news/125130/bcci-star-sports-differ-over-2022-south-africa-series-rights-value",
          "urlToImage": "http://www.cricbuzz.com/a/img/v1/600x400/i1/c253077/in-another-related-development.jpg",
          "publishedAt": "2023-01-09T14:16:09Z",
          "content": "In another related development, Kewal Kiran Clothing Limited has replaced MPL as the kit sponsor of the Indian team © Getty\r\nThe Board of Control for Cricket in India (BCCI) held an emergent Apex Cou… [+2775 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Medical Dialogues"
          },
          "author": "Dr. Kamal Kant Kohli",
          "title": "Daily consumption of almonds alters metabolism for faster recovery after strenuous exercise - Medical Dialogues",
          "description": "Researchers have found in a new randomized controlled trial that daily consumption of almonds changes the metabolism to recover faster after strenuous exercise.The participants who daily ate 57g...",
          "url": "https://medicaldialogues.in/diet-nutrition/news/daily-consumption-of-almonds-alters-metabolism-for-faster-recovery-after-strenuous-exercise-105343",
          "urlToImage": "https://medicaldialogues.in/h-upload/2023/01/09/196977-untitled-design-2023-01-09t112008976.jpg",
          "publishedAt": "2023-01-09T14:15:15Z",
          "content": "Researchers have found in a new randomized controlled trial that daily consumption of almonds changes the metabolism to recover faster after strenuous exercise.\r\nThe participants who daily ate 57g al… [+4271 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Developer-tech.com"
          },
          "author": "Ryan Daws",
          "title": "Visual Studio Marketplace is the latest supply chain attack vector - Developer News",
          "description": "Aqua Security researchers have found that hackers are using Visual Studio Marketplace to conduct supply chain attacks.",
          "url": "https://www.developer-tech.com/news/2023/jan/09/visual-studio-marketplace-supply-chain-attack-vector/",
          "urlToImage": "https://www.developer-tech.com/wp-content/uploads/sites/3/2023/01/visual-studio-code-vscode-development-coding-aqua-security-hacking.jpeg",
          "publishedAt": "2023-01-09T14:14:15Z",
          "content": "Aqua Security researchers have found that hackers are using Visual Studio Marketplace to conduct supply chain attacks.\r\nIn a new report, the researchers uncovered that attackers could impersonate pop… [+2034 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "India.com"
          },
          "author": "https://www.india.com/author/sumaila-zaman/",
          "title": "Motorola edge 30 fusion Smartphone Launched in Viva Magenta Colour Option; Check Price, Features Here - India.com",
          "description": "The Motorola edge 30 fusion will be available at a limited period price of Rs 39,999.",
          "url": "https://www.india.com/technology/motorola-edge-30-fusion-smartphone-price-features-specifications-sale-dates-how-to-buy-at-flipkart-and-motorola-in-all-you-need-to-know-5845892/",
          "urlToImage": "https://static.india.com/wp-content/uploads/2023/01/motorola-2.jpg",
          "publishedAt": "2023-01-09T14:02:53Z",
          "content": "The Motorola edge 30 fusion will be available at a limited period price of Rs 39,999.\r\nMotorola launches new phone with 6.55-inch display.(Photo Credit: IANS)\r\nNew Delhi: Good news for tech lovers! G… [+1748 chars]"
        }
      ]
    }
    this.props.setProgress(90)
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  }
  async componentDidMount() {
    this.handlePage();
  }
  handlePrevPage = async () => {
      this.setState({
        page_no: this.state.page_no - 1,
      });
      this.handlePage();
  };

  handleNextPage = async () => {
      this.setState({
        page_no: this.state.page_no + 1,
      });
      this.handlePage();  
  };
  fetchMoreData = ()=>{
    this.setState({
      page_no: this.state.page_no + 1,
    });
    this.handlePage(); 
  }

  render() {
    let counter = 0;
    return(
      <div>
          <h1 className="text-center">News-Villa
            <span>
              <h4>Grab the daily dose of Top Headlines</h4>
            </span>{" "}</h1>
            <br />
            <div className="text-center">
              {this.state.loading && <Spinner className="text-center"/>}
            </div>
            {console.log(this.state.articles.length)}
            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles?.length !== this.state.totalResults}
              loader={<Spinner/>}
            >
              <div className="container">
                <div className="row">
                  {this.state.articles?.map((element) => {
                    return (
                      <div
                        className="col-md-4 col-sm-4 mx-6"
                        key={element.url ? element.url : counter}
                      >
                        <NewsItem
                          title={element.title ? element.title : ""}
                          description={element.description ? element.description : ""}
                          img={
                            element.urlToImage
                              ? element.urlToImage
                              : "https://images.mktw.net/im-492005/social"
                          }
                          url={element.url ? element.url : "https://www.google.com/"}
                          date = {element.publishedAt}
                          author = {element.author}
                          source = {element.source.name}
                          />
                      </div>
                    );
                  })}
                  </div>
              </div>
            </InfiniteScroll>
        </div>
    );
  }
}

export default NewsFeed;

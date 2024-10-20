import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {
    articles =[
        {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Yahoo Sports Staff",
            "title": "Yankees win ALCS Game 4 8–6, can eliminate Guardians with Game 5 victory - Yahoo Sports",
            "description": "The Guardians face a must-win on Saturday at home.",
            "url": "https://sports.yahoo.com/live/yankees-win-alcs-game-4-86-can-eliminate-guardians-with-game-5-victory-231005663.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/OjX1Ndpo4V4lX3boRdIf_Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-10/c3d14d70-8ce8-11ef-bff5-29dfb6c0dcf3",
            "publishedAt": "2024-10-19T04:19:00Z",
            "content": "Alex Verdugo drove in the go-ahead run with a weak grounder to shortstop that Cleveland Guardians shortstop Brayan Rocchio couldnt field cleanly as he charged in. Pinch-runner Jon Berti scored to giv… [+7265 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Eric Bradner, Kate Sullivan, Aaron Pellish",
            "title": "Harris and Trump converge on razor-tight Michigan in pursuit of a winning coalition - CNN",
            "description": "Vice President Kamala Harris and former President Donald Trump collided Friday in Michigan, both barnstorming the state as they wage a tight battle for its potentially decisive 15 Electoral College votes.",
            "url": "https://www.cnn.com/2024/10/19/politics/president-election-michigan-harris-trump/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2024-10-19t005505z-272042554-rc2cnaajy6he-rtrmadp-3-usa-election-trump-crop.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-10-19T04:00:00Z",
            "content": "Vice President Kamala Harris and former President Donald Trump collided Friday in Michigan, both barnstorming the state as they wage a tight battle for its potentially decisive 15 Electoral College v… [+6391 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "CBS Sports"
            },
            "author": "",
            "title": "Virginia's Tony Bennett digs deeper after retirement news conference: 'I felt I was the one holding them back' - CBS Sports",
            "description": "Bennett's retirement ceremony on Friday provided a surreal transitional moment for Virginia — and possibly college basketball",
            "url": "https://www.cbssports.com/college-basketball/news/virginias-tony-bennett-digs-deeper-after-retirement-news-conference-i-felt-i-was-the-one-holding-them-back/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/10/19/7910d426-8cd8-4874-bc9f-438e52415de7/thumbnail/1200x675/8615cec5928ed3d55821b955a9aebe6f/usatsi-24520642-1.jpg",
            "publishedAt": "2024-10-19T02:55:00Z",
            "content": "CHARLOTTESVILLE, Va. Tony Bennett does not handle attention all that comfortably. He's never one to seek a spotlight and, to my mind, has never called a member of the press in search of credit or to … [+17815 chars]"
          },
          {
            "source": {
              "id": "espn",
              "name": "ESPN"
            },
            "author": null,
            "title": "Lynx win with late FTs to force deciding Game 5 - ESPN",
            "description": "The Lynx beat the Liberty 82-80 on Friday night to force a decisive Game 5 of the WNBA Finals, the first since 2019.",
            "url": "https://www.espn.com/wnba/story/_/id/41875503/minnesota-lynx-hold-new-york-liberty-force-deciding-game-5-wnba-finals",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1019%2Fr1402468_1296x729_16%2D9.jpg",
            "publishedAt": "2024-10-19T02:19:00Z",
            "content": "Oct 18, 2024, 10:19 PM ET\r\nMINNEAPOLIS -- With their season on the line, the Minnesota Lynx did just enough to stave off elimination and force a decisive Game 5 of the WNBA Finals.\r\nBridget Carleton … [+4655 chars]"
          },
          {
            "source": {
              "id": "newsweek",
              "name": "Newsweek"
            },
            "author": "Kaitlin Lewis",
            "title": "US Lawmaker: North Korean Troops Fighting for Russia Would Cross 'Red Line' - Newsweek",
            "description": "Rep. Mike Turner is pressing the White House for information amid reports that North Korean troops have been dispatched to Ukraine.",
            "url": "https://www.newsweek.com/us-lawmaker-north-korean-troops-fighting-russia-would-cross-red-line-1971585",
            "urlToImage": "https://d.newsweek.com/en/full/2499349/north-korean-troops-russia-redline.jpg",
            "publishedAt": "2024-10-19T01:56:01Z",
            "content": "Ohio Congressman Mike Turner, chairman of the House Intelligence Committee, is pressing the White House for an \"immediate\" briefing amid reports that North Korea has sent its soldiers to fight in the… [+3651 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "",
            "title": "How Elon Musk became Trump’s biggest supporter - CNN",
            "description": "Tech billionaire Elon Musk hits the campaign trail for former President Donald Trump. CNN’s Danny Freeman takes a look at Musk’s decision to support and host events for the former president.",
            "url": "https://www.cnn.com/2024/10/18/politics/video/elon-musk-trump-campaign-danny-freeman-ebof-digvid",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/20240820-trumpmusksplit-20241018211548985.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-10-19T01:34:21Z",
            "content": "Tech billionaire Elon Musk hits the campaign trail for former President Donald Trump. CNNs Danny Freeman takes a look at Musk's decision to support and host events for the former president."
          },
          {
            "source": {
              "id": "cbs-news",
              "name": "CBS News"
            },
            "author": "Kathryn Watson, Melissa Quinn",
            "title": "Judge in Trump 2020 election case unseals more evidence from special counsel - CBS News",
            "description": "The judge overseeing President Donald Trump's 2020 election interference case released more evidence collected by special counsel Jack Smith on Friday.",
            "url": "https://www.cbsnews.com/news/trump-2020-election-case-evidence-unsealed-tanya-chutkan-jack-smith/",
            "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/01/05/b5cf9b44-5b7e-4a3c-9094-c216156ebde7/thumbnail/1200x630/d91e7f520f63a7cb66fb6ccc2d4ebe15/trump-jan-6-rally.jpg?v=edba3a63b5392b4c81ae19d894992d91",
            "publishedAt": "2024-10-19T01:31:09Z",
            "content": "The judge overseeing President Donald Trump's 2020 election interference case released more evidence collected by special counsel Jack Smith on Friday, unveiling an enormous batch of heavily redacted… [+3767 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Alli Rosenbloom, Dan Heching, Sandra Gonzalez",
            "title": "Questions remain as investigation into Liam Payne’s fatal fall continues - CNN",
            "description": "As the reality of Liam Payne’s death sets in, his family, friends and former One Direction bandmates are still trying to make sense of the devastating loss while authorities press forward in their investigation into the circumstances surrounding Payne’s final…",
            "url": "https://www.cnn.com/2024/10/18/entertainment/liam-payne-death-investigation/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2024-10-16t223319z-435261555-rc2loy8muxoo-rtrmadp-3-people-liam-payne.JPG?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-10-19T01:04:00Z",
            "content": "As the reality of Liam Paynes death sets in, his family, friends and former One Direction bandmates are still trying to make sense of the devastating loss while authorities press forward in their inv… [+7070 chars]"
          },
          {
            "source": {
              "id": "cbs-news",
              "name": "CBS News"
            },
            "author": "Steve Hartman",
            "title": "Missouri elementary school names building after beloved custodian - CBS News",
            "description": "Custodian Claudene Wilson is so dedicated to Swedeborg District lll Elementary School that, over the past 30 years, she has taken on many additional responsibilities.",
            "url": "https://www.cbsnews.com/news/missouri-swedeborg-elementary-school-names-building-after-custodian-claudene-wilson/",
            "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2024/10/19/3517fb08-1ed2-4468-9ac9-59f5f7334ae7/thumbnail/1200x630/6eff1bc3ece0ae4acc1444e0b8207e79/1729297352944.png?v=edba3a63b5392b4c81ae19d894992d91",
            "publishedAt": "2024-10-19T00:10:00Z",
            "content": "Swedeborg, Missouri — When residents in the small central Missouri community of Swedeborg decided earlier this year to name the primary campus building at Swedeborg District lll Elementary School, ev… [+2293 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Patrick Oppmann, Mia Alberti, Verónica Calderón, Gerardo Lemos",
            "title": "Island-wide blackout sweeps Cuba after power plant failure - CNN",
            "description": "Cuba’s electrical grid shut down on Friday, putting the country into a blackout after the failure of one of the island’s major power plants, according to its energy ministry.",
            "url": "https://www.cnn.com/2024/10/18/americas/cuba-blackout-power-plant-failure-intl-latam/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2024-10-17t204504z-143639246-rc2fmaatt0pl-rtrmadp-3-cuba-blackouts.JPG?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-10-18T23:34:00Z",
            "content": "Cubas electrical grid shut down on Friday, plunging the whole country into a blackout after one of the islands major power plants failed, according to its energy ministry.\r\nIn a statement on X, the m… [+3767 chars]"
          },
          {
            "source": {
              "id": "abc-news",
              "name": "ABC News"
            },
            "author": "The Associated Press",
            "title": "Big tobacco companies reach tentative multibillion-dollar settlement with Canada - ABC News",
            "description": "Three large tobacco companies would pay nearly $24 billion to settle a long-running legal battle in Canada",
            "url": "https://abcnews.go.com/Business/wireStory/big-tobacco-companies-reach-tentative-multibillion-dollar-settlement-114945279",
            "urlToImage": "https://i.abcnewsfe.com/a/35ca2490-d1e2-4efe-ac46-b81b19e0d95b/wirestory_88e5e11455b8b896720986d48e82201b_16x9.jpg?w=1600",
            "publishedAt": "2024-10-18T23:17:32Z",
            "content": "TORONTO -- Three large tobacco companies would pay nearly $24 billion to settle a long-running legal battle in Canada, according to a proposed deal.\r\nPhilip Morris International said Friday that a co… [+1147 chars]"
          },
          {
            "source": {
              "id": "abc-news",
              "name": "ABC News"
            },
            "author": "OLGA R. RODRIGUEZ Associated Press, STEFANIE DAZIO Associated Press",
            "title": "Hundreds ordered to evacuate from fast-moving Northern California fire, official says - ABC News",
            "description": "A fast-moving fire fed by strong winds damaged at least seven homes Friday in a hillside neighborhood in the city of Oakland where roughly 500 people were ordered to evacuate",
            "url": "https://abcnews.go.com/US/wireStory/pge-shuts-power-off-thousands-northern-california-amid-114929915",
            "urlToImage": "https://i.abcnewsfe.com/a/db2ff8ec-7f17-495a-8a69-5347776e8f4c/wirestory_0bb99ee4a062730bdbf9d50170a30053_16x9.jpg?w=1600",
            "publishedAt": "2024-10-18T23:15:00Z",
            "content": "SAN FRANCISCO -- A fast-moving fire fed by strong winds damaged at least seven homes Friday in a hillside neighborhood in the city of Oakland, where roughly 500 people were ordered to evacuate, offic… [+5099 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": "David French",
            "title": "Dow and S&P end at fresh record highs, lifted by Netflix earnings and tech stocks - Reuters",
            "description": "The Dow Jones Industrial Average and S&P 500 chalked up record closing highs on Friday, with the Nasdaq also in positive territory, as markets were boosted by an earnings-driven jump in Netflix shares and broader gains across technology stocks.",
            "url": "https://www.reuters.com/markets/us/wall-street-futures-rise-tech-stocks-gain-netflix-jumps-after-strong-earnings-2024-10-18/",
            "urlToImage": "https://www.reuters.com/resizer/v2/TTEZ6BJSARKLNL7NETZ4AE3QZM.jpg?auth=c6dfb4cf57b812b10a7c168150c63442514d534d2964217edf2dc22f8669c585&height=1005&width=1920&quality=80&smart=true",
            "publishedAt": "2024-10-18T22:55:47Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "Israelis and Palestinians react to Hamas leader Sinwar's death - BBC.com",
            "description": "Relatives of the Israeli hostages still held in Gaza say now is the time to negotiate their release.",
            "url": "https://www.bbc.com/news/articles/c3wpvd993zjo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9c42/live/f121a180-8d83-11ef-89ae-5575c76d98e6.jpg",
            "publishedAt": "2024-10-18T22:44:45Z",
            "content": "Reaction in Israel and Gaza to death of Yahya Sinwar\r\nMany Israelis cheered and danced on the streets at the news that Hamas leader Yahya Sinwar - chief architect of the 7 October 2023 attack on Isra… [+4823 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Florida Today"
            },
            "author": "Rick Neale",
            "title": "SpaceX launch: Live updates from Starlink Falcon 9 launch at Cape - Florida Today",
            "description": "Live updates from Friday night’s SpaceX Starlink 8-19 mission that launched a Falcon 9 rocket from Cape Canaveral Space Force Station in Florida.",
            "url": "https://www.floridatoday.com/story/tech/science/space/2024/10/18/spacex-launch-day-heres-information-on-todays-starlink-launch-from-cape-canaveral-florida/75721573007/",
            "urlToImage": "https://www.floridatoday.com/gcdn/authoring/authoring-images/2024/08/20/PBRE/74870425007-crb-082024-spacex-1.jpg?crop=4284,2411,x0,y448&width=3200&height=1801&format=pjpg&auto=webp",
            "publishedAt": "2024-10-18T22:41:17Z",
            "content": "Launch recap:Scroll down to review live updates from the Friday, Oct. 18, liftoff of a SpaceX Falcon 9 rocket from Cape Canaveral on the Starlink 8-19 mission.\r\nOriginal story: Gusty liftoff winds at… [+5715 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "nj.com"
            },
            "author": "Len Melisurgo | NJ Advance Media for NJ.com",
            "title": "Dazzling Orionid meteor shower to light up night sky with Halley’s Comet debris - NJ.com",
            "description": "The Orionid meteor shower usually generates 10 to 20 shooting stars per hour in dark locations. And sometimes bright fireballs.",
            "url": "https://www.nj.com/news/2024/10/dazzling-orionid-meteor-shower-to-light-up-night-sky-with-halleys-comet-debris.html",
            "urlToImage": "https://www.nj.com/resizer/v2/FVSHI7HQ3FFHDPSRVAH5LI63JI.jpg?auth=2f44db1097cafbef91c9d172713c6ee70275eb77609b1900bfef91393a0d114e&width=1280&quality=90",
            "publishedAt": "2024-10-18T22:41:00Z",
            "content": "As if we havent been dazzled enough by the Northern Lights and two newly discovered comets that are streaking across the night sky this month, theres an autumn meteor shower that will soon be peaking… [+2409 chars]"
          },
          {
            "source": {
              "id": "the-washington-post",
              "name": "The Washington Post"
            },
            "author": "Liz Goodwin",
            "title": "Montana ranger questions Senate hopeful Sheehy’s bullet wound - The Washington Post",
            "description": "Mont. Senatorial candidate Tim Sheehy says he was shot in Afghanistan; Ranger witness to gun incident questions that account",
            "url": "https://www.washingtonpost.com/politics/2024/10/18/sheehy-montana-senate-gunshot-glacier-park-ranger-peach/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/F55DARAGGYW6IWZ3HD5DBVHOMI_size-normalized.JPG&w=1440",
            "publishedAt": "2024-10-18T22:30:52Z",
            "content": "Over 35 seasons working as a ranger in Glacier National Park, Kim Peach, 67, recalls only two incidents in which he responded to a report of a gun being fired and both became his most memorable days … [+8221 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": null,
            "title": "Whooping cough cases have exploded since 2023, new CDC data shows - CNN",
            "description": "Whooping cough cases are continuing to rise in the United States, with new data from the US Centers for Disease Control and Prevention showing that there are five times as many cases this year than at this point in time last year.",
            "url": "https://www.cnn.com/2024/10/18/health/whooping-cough-cases-rising/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap24290617594784.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-10-18T21:57:00Z",
            "content": "Whooping cough cases are continuing to rise in the United States, with new data from the US Centers for Disease Control and Prevention showing that there are five times as many cases this year than a… [+2108 chars]"
          }
    ]
    constructor(){
        super();
        console.log("this is constructor");
        this.state = {
            articles : this.articles,
            loading : false
        }
    }
    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center mb-5'>Top HeadLines</h2>
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <NewsItem className="col-md-4" title={element.title.slice(0,20)} description={element.description.slice(0,50)} imageurl={element.urlToImage} newsUrl={element.url}/>
                </div>
                })}
                </div>
            </div>
        );
    }
}

export default News;
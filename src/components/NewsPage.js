import React from 'react'
import CardList from './CardList/card-list'

class NewsPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            articles:[],
            error:null
            
        }
    }
    componentDidMount(){
        const apikey='f80c12a5df93415397b30c170713d48e'
        const apiurl=`https://newsapi.org/v2/everything?q=covid&apiKey=${apikey}`;
        fetch(apiurl)
        .then(res=>res.json())
        .then((result)=>{
                this.setState({
                    articles:result.articles
                });
                console.log(this.state.news)
            },
        (error)=>{
            this.setState({error})
        }
        )

    }

    render(){
        return(
            <>
                  <center>
        <h1
          style={{
            fontFamily: "Times New Roman, Times, serif",
            color: "#063146",
            fontSize: 40,
            marginTop:'10px',
            
          }}
        >
          <e>COVID-19 Headlines</e>
        </h1>
      </center>
            
            <CardList articles={this.state.articles}/>
            </>
            
        );

    }
    
    
}
export default NewsPage;
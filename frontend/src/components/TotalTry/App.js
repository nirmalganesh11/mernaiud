import React from "react";
import { getArticles } from "./api";
import ArticleList from "./components/articlesList";
import SearchBar from "./components/searchBar";
import { Container, Header } from "semantic-ui-react";
import { size } from "lodash";
import Button from 'react-bootstrap/Button';
import GoodCard from '../GoodCard'


class App extends React.Component {
  state = {
    articles: [],
    searchTopic: "",
    totalResults: "",
    loading: false,
    apiError: ""
  };

  searchForTopic = async topic => {
    try {
      this.setState({ loading: true });
      const response = await getArticles(topic);
      this.setState({
        articles: response.articles,
        searchTopic: topic,
        totalResults: response.totalResults
      });
    } catch (error) {
      this.setState({ apiError: "Could not find any articles" });
    }
    this.setState({ loading: false });
  };

  render() {
    const {
      articles,
      apiError,
      loading,
      searchTopic,
      totalResults
    } = this.state;
    return (
      <Container>
      
        <Header as="h2" style={{ fontSize: 14,textAlign: "center", margin: 80}}><strong> Search for a topic</strong>
 
        </Header>
        <GoodCard/>
        <center><Button variant="primary" size="lg" href="https://8j2fr.csb.app/">
        Click For Daily News      </Button></center>
       
        {loading && (
          <p style={{ textAlign: "center" }}>Searching for articles...</p>
        )}
        {articles.length > 0 && (
          <Header as="h4" style={{ textAlign: "center", margin: 80 }}>
            Found {totalResults} articles on "{searchTopic}"
          </Header>
        )}
        
      
        {articles.length > 0 && <ArticleList articles={articles} />}
        {apiError && <p>Could not fetch any articles. Please try again.</p>}
      </Container>
      
    
    );
  }
}

export default App;

import React, { useEffect, useState } from "react";
import * as S from "../styles/Gnews.styles";
import Header from "../components/header/header.component";
import ArticlePreview from "../components/article-preview/article-preview.component";
import { PaginatedList } from "react-paginated-list";

export default function Gnews() {
  useEffect(() => {
    fetchGnews();
  }, []);

  const fetchGnews = () => {
    var apiKey = process.env.REACT_APP_GNEWS_API_KEY;
    fetch(
      `https://gnews.io/api/v4/search?q=Apple OR Microsoft OR Android OR Samsung OR Nokia OR PS5&token=${apiKey}&max=10&lang=en`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data.articles);
        if (articles.length === 0) {
          setArticles(data.articles);
        }
      });
  };

  const [articles, setArticles] = useState([]);

  return (
    <S.PageWrapper>
      <Header onLocalStorage={false} onGnews={true} />
      <S.ContentWrapper>
        <PaginatedList
          list={articles}
          itemsPerPage={3}
          renderList={(articles) => (
            <>
              {articles.map((article, key) => {
                return (
                  <ArticlePreview
                    title={article.title}
                    description={article.description}
                    publishedAt={article.publishedAt}
                    image={article.image}
                    name={article.source.name}
                    key={key}
                  />
                );
              })}
            </>
          )}
        />
        );
      </S.ContentWrapper>
    </S.PageWrapper>
  );
}

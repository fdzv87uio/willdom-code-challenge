import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import * as S from "./article-preview.styles";

export default function ArticlePreview({
  key,
  title,
  description,
  publishedAt,
  image,
  name,
  pretitle,
  deletePost,
  currentKey,
}) {
  return (
    <S.ArticleWrapper>
      <S.ContentWrapper>
        <Row>
          <Col md={4}>
            <S.TextWrapper>
              <div id="title-container">
                {pretitle ? <p id="first-title">{pretitle}</p> : null}
                &nbsp;&nbsp;
                <p id="second-title">{title}</p>
              </div>
              <p id="space">&nbsp;</p>
              <p>{description}</p>
              <span>
                <i>By </i>
                {name} . {publishedAt}
              </span>
              {deletePost ? (
                <Container>
                  <Row>
                    <Col md={5} />
                    <Col md={2}>
                      <Button
                        id="delete"
                        onClick={() => {
                          deletePost(currentKey);
                        }}
                        variant="secondary"
                      >
                        {" "}
                        Delete
                      </Button>
                    </Col>
                    <Col md={5} />
                  </Row>
                </Container>
              ) : null}
            </S.TextWrapper>
          </Col>
          <Col md={8}>
            <S.Image src={image} />
          </Col>
        </Row>
      </S.ContentWrapper>
    </S.ArticleWrapper>
  );
}

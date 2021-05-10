import React, { useState, useEffect } from "react";
import * as S from "../styles/Home.styles";
import Header from "../components/header/header.component";
import ArticlePreview from "../components/article-preview/article-preview.component";
import {
  Button,
  Modal,
  InputGroup,
  FormControl,
  Container,
  Row,
  Col,
  Alert,
} from "react-bootstrap";

const localData = [
  {
    key: 1,
    title:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    publishedAt: "20-05-89",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://source.unsplash.com/800x600/?yellow",
    name: "John Doe",
    pretitle: "Lorem ipsum",
  },
  {
    key: 2,
    title:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    publishedAt: "20-05-89",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://source.unsplash.com/800x600/?blue",
    name: "John Doe",
    pretitle: "Dolor sit amet",
  },
  {
    key: 3,
    title:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    description:
      "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    publishedAt: "20-05-89",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://source.unsplash.com/800x600/?red",
    name: "John Doe",
    pretitle: "Lorem ipsum",
  },
];
export default function Home() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState();
  const [pretitle, setPretitle] = useState();
  const [description, setDescription] = useState();
  const [author, setAuthor] = useState();
  const [date, setDate] = useState();
  const [image, setImage] = useState("");
  const [modalTitle, setModalTitle] = useState();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (CurrentData === null) {
      localStorage.setItem("articles", JSON.stringify(localData));
    } else {
      localStorage.setItem("articles", JSON.stringify(CurrentData));
    }
  }, []);

  const handleClose = () => setShow(false);

  var CurrentData = JSON.parse(localStorage.getItem("articles"));

  const addPost = () => {
    if (typeof title === "undefined") {
      setShowAlert(true);
      return;
    }
    if (typeof pretitle === "undefined") {
      setShowAlert(true);
      return;
    }
    if (typeof description === "undefined") {
      setShowAlert(true);
      return;
    }
    if (typeof author === "undefined") {
      setShowAlert(true);
      return;
    }
    if (typeof date === "undefined") {
      setShowAlert(true);
      return;
    }
    if (typeof image === "undefined") {
      setShowAlert(true);
      return;
    }
    var currentKey = CurrentData.lenght;
    var currentFormData = {
      key: currentKey + 1,
      title: title,
      description: description,
      publishedAt: date,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: image,
      name: author,
      pretitle: pretitle,
    };

    CurrentData.push(currentFormData);

    localStorage.setItem("articles", JSON.stringify(CurrentData));
  };

  const deletePost = (key) => {
    var newData = CurrentData.filter((item) => item.key !== key);
    localStorage.setItem("articles", JSON.stringify(newData));
    window.location.reload();
  };

  return (
    <S.PageWrapper>
      <Header onLocalStorage={true} onGnews={false} />
      <S.ContentWrapper>
        {showAlert === true ? (
          <Alert
            variant="danger"
            onClose={() => setShowAlert(false)}
            dismissible
          >
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>You must complete all the required fields in the form!</p>
          </Alert>
        ) : null}
        <Container>
          <Row>
            <Col md={5} />
            <Col md={2}>
              <Button
                onClick={() => {
                  setModalTitle("Add New Post");
                  setShow(true);
                }}
                variant="secondary"
              >
                +
              </Button>
            </Col>
            <Col md={5} />
          </Row>
        </Container>
        {CurrentData
          ? CurrentData.map((article, key) => {
              if (article !== null) {
                return (
                  <ArticlePreview
                    title={article.title}
                    description={article.description}
                    publishedAt={article.publishedAt}
                    image={article.image}
                    name={article.name}
                    key={key}
                    pretitle={article.pretitle}
                    deletePost={deletePost}
                    currentKey={article.key}
                  />
                );
              }
            })
          : null}
      </S.ContentWrapper>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <FormControl
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              placeholder="PreTitle"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              onChange={(event) => {
                setPretitle(event.target.value);
              }}
              placeholder="Title"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              onChange={(event) => {
                setDescription(event.target.value);
              }}
              as="textarea"
              placeholder="Description"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Author:</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              onChange={(event) => {
                setAuthor(event.target.value);
              }}
              placeholder="insert author's name"
              aria-label="Name"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Date:</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              onChange={(event) => {
                setDate(event.target.value);
              }}
              placeholder="yyyy-mm-dd"
              aria-label="Date"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Image:</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              onChange={(event) => {
                setImage(event.target.value);
              }}
              placeholder="insert image url "
              aria-label="Image"
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {modalTitle === "Add New Post" ? (
            <Button
              variant="primary"
              onClick={() => {
                addPost();
                handleClose();
              }}
            >
              Save Post
            </Button>
          ) : null}
        </Modal.Footer>
      </Modal>
    </S.PageWrapper>
  );
}

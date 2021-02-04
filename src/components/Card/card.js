import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import './card.styles.css'

export const NewsCard = props =>
  <div className='card-container'>
    {/* <Card>
              <CardImg top width="100%" src={props.article.urlToImage} alt="Covid-19 news" />
              <CardBody>
                <CardTitle style={{fontSize:'15px'}}>
                 {props.article.title}
                </CardTitle>
                <div className="dropdown-divider"></div>
                <CardText style={{fontSize:'10px'}}>
                  {props.article.description}
                </CardText>
                <Button
                  href={props.article.url}
                  target="blank"
                  style={{ backgroundColor: "#063146", border: 0 }}
                >
                  Read More
                </Button>
              </CardBody>
            </Card> */}
    <img  width="100%" style={{ padding: '0px', borderRadius: '5px' }} src={props.article.urlToImage} alt="Covid-19 news" />

    <div className='content' style={{ padding: '10px', height: '100%' }}>
      <p style={{ fontFamily: "Arial, Helvetica, sans-serif", align: 'center', fontSize: '15px' }}><e>{props.article.title}</e></p>
      <hr />
      <span style={{ fontSize: '10px', color: 'gray'}}>{props.article.publishedAt}</span>
      <p style={{ fontSize: '10px', color: 'gray' }}>{props.article.author}</p>

      <p style={{ fontSize: '10px' }}>{props.article.content}</p>
      <div className="btn" >
        <Button
          href={props.article.url}
          target="blank"
          style={{ backgroundColor: "#063146", marginLeft: '60px', flexGrow: '1' }}
        >
          Read More
                </Button>
      </div>
    </div>
  </div>


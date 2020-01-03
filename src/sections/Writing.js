import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text } from 'rebass';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const CoverImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;

const getMonthName = i =>
  [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ][i];

const getMinSec = time => {
  const min = Math.floor(time);
  const sec = Math.ceil((time - min) * 60);
  return sec < 30 ? `About ${min} min` : `Nearly ${min + 1} min`;
};

const Post = ({ title, text, image, url, date, time }) => (
  <Card onClick={() => window.open(url, '_blank')} pb={4}>
    <EllipsisHeading m={3} p={1}>
      {title}
    </EllipsisHeading>
    {image && <CoverImage src={image} height="200px" alt={title} />}
    <Text m={3}>{text}</Text>
    <ImageSubtitle bg="primaryLight" color="white" x="right" y="bottom" round>
      {`${getMonthName(new Date(date).getMonth())} ${new Date(
        date,
      ).getFullYear()} - ${getMinSec(time)}`}
    </ImageSubtitle>
  </Card>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
};

const Writing = () => {
  const CDN = 'https://cdn-images-1.medium.com/max/400/';
  const URL = 'https://medium.com/maacpiash';
  const posts = [
    {
      id: '380a9adbfa55',
      title: 'শার্প সমাচার (২): ডেলিগেট মেথড',
      text:
        'ডেলিগেট মেথড সি-শার্প ল্যাংগুয়েজের এক অসাধারণ ফিচার। এই ফিচার ব্যবহার করে সহজেই একটা মেথডকে একটা অবজেক্টের মত করে ব্যবহার করা যায়।…',
      time: 4.510377358490566,
      date: 1578088490327,
      image: `${CDN}/1*UnZWxducUb1_c4SB5VmzBg.jpeg`,
      url: `${URL}/শার্প-সমাচার-২-ডেলিগেট-মেথড-380a9adbfa55`,
    },
    {
      id: '1be2df4701f1',
      title: 'The Myth of Digital Ecosystem',
      time: 7.558490566037736,
      date: 1539612875583,
      text:
        'How well does the idea of an ecosystem of devices and services hold up in 2018?',
      image: `${CDN}/1*VrQC868zdZ6jcFjG-VWMNg.jpeg`,
      url: `${URL}/the-myth-of-digital-ecosystem-1be2df4701f1`,
    },
    {
      id: '31dd2e1dc4eb',
      title: 'শার্প সমাচার (১) : লিংক নিয়ে প্রাথমিক আলোচনা',
      time: 4.185849056603773,
      date: 1536245626106,
      text: 'না, এই লিংক মানে সেই বিখ্যাত (!) link না।',
      image: `${CDN}/1*zjFSNUBQRQRv5ErPd2Hh9Q.jpeg`,
      url: `${URL}/শার্প-সমাচার-১-লিংক-নিয়ে-প্রাথমিক-আলোচনা-31dd2e1dc4eb`,
    },
  ];
  return (
    <Section.Container id="writing" Background={Background}>
      <Section.Header name="Writing" icon="✍️" label="writing" />
      <CardContainer minWidth="300px">
        {posts.map(p => (
          <Fade bottom>
            <Post key={p.id} {...p} />
          </Fade>
        ))}
      </CardContainer>
    </Section.Container>
  );
};

export default Writing;

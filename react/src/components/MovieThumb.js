import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.li`
  width: 700px;
  height: 300px;
  padding: 20px;

  a {
    display: flex;
    height: 100%;
  }

  img {
    object-fit: scale-down;
  }

  .info-box {
    margin-left: 20px;
    text-align: left;
    vertical-align: top;
  }

  .title {
    color: black;
  }
`;

MovieThumb.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  posterImg: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function MovieThumb({ id, posterImg, title, release, summary, genres }) {
  const imgSrc = `https://image.tmdb.org/t/p/w1280${posterImg}`;
  return (
    <Wrapper>
      <Link to={`/detail/${id}`}>
        <img src={imgSrc} alt={title} />
        <div className="info-box">
          <h2 className="title">{title}</h2>
          <h4 className="title">{release}</h4>
        </div>
      </Link>
    </Wrapper>
  );
}

export default MovieThumb;

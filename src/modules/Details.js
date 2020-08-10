import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

import api from '../config';
import ErrorBoundary from './ErrorBoundary';

class Details extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loading: true
  //   };
  // }
  state = { loading: true };

  componentDidMount() {
    const getApiData = async () => {
      const apiData = await axios.get(api().details + this.props.id);
      this.setState({
        cocktail: apiData.data.drinks[0],
        loading: false
      });
    };
    getApiData();
  }

  render() {
    if (this.state.loading)
      return (
        <div className="loading">
          <span aria-label="loader icon"></span>
        </div>
      );

    const {
      strDrink,
      strInstructions,
      strDrinkThumb,
      strAlcoholic,
      strCategory,
      strGlass
    } = this.state.cocktail;

    const ingredients = [];

    for (let i = 0; i <= 15; i++) {
      if (this.state.cocktail[`strIngredient${i}`]) {
        let item = {};
        item.ingredient = this.state.cocktail[`strIngredient${i}`];
        item.measure = this.state.cocktail[`strMeasure${i}`] || 'not specified';
        item.key = `ingredient-${i}`;
        ingredients.push(item);
      }
    }

    return (
      <>
        <Link to="/" className="back-btn">
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDM0MS40MzUgMzQxLjQzNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzQxLjQzNSAzNDEuNDM1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiBjbGFzcz0iIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0xNzEuMjI0LDUyLjQ2M0wxNDIuMjEsMjEuMTgxTDEzLjI4NCwxNDAuNzU5Yy0xNy43NjQsMTYuNDc2LTE3LjcwMiw0My44MTMsMC4xMjksNjAuMzMxbDEyOC42MzgsMTE5LjE2NGwyOC45OTUtMzEuMyAgICBMNDMuNTY4LDE3MC44NjRMMTcxLjIyNCw1Mi40NjN6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxyZWN0IHg9IjQyLjc2OCIgeT0iMTQ5LjM1IiB3aWR0aD0iMjk4LjY2NyIgaGVpZ2h0PSI0Mi42NjciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+Cg=="
            alt="back to homepage"
          />
        </Link>
        <div className="single-area">
          <div className="content-box">
            <div className="cocktail-box--single">
              <img
                src={strDrinkThumb}
                className="cocktail-box__img"
                alt={strDrink}
              />
              <div className="cocktail-box__caption">
                <h3 className="cocktail-box__title">
                  <span role="img" aria-label="drinkName">
                    🍸
                  </span>
                  &nbsp; {strDrink}
                </h3>
                <a href="#share" className="share-btn">
                  <img
                    src=" data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQwNiwzMzJjLTI5LjY0MSwwLTU1Ljc2MSwxNC41ODEtNzIuMTY3LDM2Ljc1NUwxOTEuOTksMjk2LjEyNGMyLjM1NS04LjAyNyw0LjAxLTE2LjM0Niw0LjAxLTI1LjEyNCAgICBjMC0xMS45MDYtMi40NDEtMjMuMjI1LTYuNjU4LTMzLjYzNmwxNDguNDQ1LTg5LjMyOEMzNTQuMzA3LDE2Ny40MjQsMzc4LjU4OSwxODAsNDA2LDE4MGM0OS42MjksMCw5MC00MC4zNzEsOTAtOTAgICAgYzAtNDkuNjI5LTQwLjM3MS05MC05MC05MGMtNDkuNjI5LDAtOTAsNDAuMzcxLTkwLDkwYzAsMTEuNDM3LDIuMzU1LDIyLjI4Niw2LjI2MiwzMi4zNThsLTE0OC44ODcsODkuNTkgICAgQzE1Ni44NjksMTkzLjEzNiwxMzIuOTM3LDE4MSwxMDYsMTgxYy00OS42MjksMC05MCw0MC4zNzEtOTAsOTBjMCw0OS42MjksNDAuMzcxLDkwLDkwLDkwYzMwLjEzLDAsNTYuNjkxLTE1LjAwOSw3My4wMzUtMzcuODA2ICAgIGwxNDEuMzc2LDcyLjM5NUMzMTcuODA3LDQwMy45OTUsMzE2LDQxMi43NSwzMTYsNDIyYzAsNDkuNjI5LDQwLjM3MSw5MCw5MCw5MGM0OS42MjksMCw5MC00MC4zNzEsOTAtOTAgICAgQzQ5NiwzNzIuMzcxLDQ1NS42MjksMzMyLDQwNiwzMzJ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPgo="
                    alt="share"
                  />
                </a>
              </div>
            </div>
            <div className="cocktail-instructions">
              <h3 className="cocktail-instructions__title">
                <div className="logo">
                  Mix<span>!</span>tUp Instructions
                </div>
              </h3>
              <p className="cocktail-instructions__details">
                {strInstructions}
              </p>

              <h3 className="cocktail-instructions__title">Ingredients</h3>

              <ul className="cocktail__ingredients">
                {ingredients.map(item => (
                  <li key={item.key}>
                    <span>{item.ingredient}</span> - {item.measure}
                  </li>
                ))}
              </ul>

              <div className="cocktail__info">
                <p className="cocktail-box__meta">
                  <span>
                    <span role="img" aria-label="category">
                      🥂
                    </span>
                    &nbsp; Category:
                  </span>
                  &nbsp;{strCategory}
                </p>
                <p className="cocktail-box__meta">
                  <span>
                    <span role="img" aria-label="types">
                      🍹
                    </span>
                    &nbsp; Types:
                  </span>
                  &nbsp;{strAlcoholic}
                </p>
                <p className="cocktail-box__meta">
                  <span>
                    <span role="img" aria-label="glass">
                      🥃
                    </span>
                    &nbsp; Glass:
                  </span>
                  &nbsp;{strGlass}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
